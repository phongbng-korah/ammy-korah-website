// ============================================================
// Chatbot nổi — dùng chung toàn bộ site (giống nút Zalo/điện thoại)
// Trả lời tự động CHỈ dựa trên dữ liệu có sẵn:
//   1) data/products.js (PRODUCTS) — thông số, giá, bảo hành từng model
//   2) data/faq.js (FAQ_DATA) — câu hỏi thường gặp
// Không gọi API ngoài, không tự suy đoán/bịa số liệu ngoài dữ liệu này.
// ============================================================

(function () {
  // ── 0) Giao tiếp mở đầu (chào hỏi) — vai trò chuyên viên tư vấn kỹ
  // thuật kiêm quan hệ công chúng (PR): giọng văn thân thiện, chuyên
  // nghiệp, tự nhiên nhắc tên thương hiệu/ngành hàng (KORAH, power
  // amplifier, K-Series...) để nội dung thân thiện SEO khi được crawl
  // lại từ trang. Chỉ kích hoạt khi câu nhắn LÀ lời chào thuần (không
  // kèm câu hỏi khác) — nếu khách chào kèm hỏi luôn (VD: "chào shop,
  // K19PRO giá bao nhiêu") thì để luồng tra cứu bên dưới xử lý, không
  // để lời chào che mất câu hỏi thật.
  var GREETING_RESPONSES = [
    'Xin chào! Mình là trợ lý tư vấn kỹ thuật của KORAH — thương hiệu power amplifier (cục đẩy công suất) chuyên nghiệp cho sân khấu, sự kiện và hệ thống âm thanh kinh doanh tại Việt Nam. Bạn cần tra cứu thông số, giá, bảo hành model K-Series, hay muốn mình gợi ý amplifier phù hợp với loa đang có? Cứ nhắn cho mình nhé!',
    'Chào bạn, rất vui được hỗ trợ! KORAH hiện có 6 model power amplifier K-Series dùng cho sân khấu, sự kiện lớn nhỏ — K-Series hiện là dòng sản phẩm amplifier cao cấp nhất của KORAH (K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS) dùng công nghệ Class D, PFC và Silicon Carbide. Bạn muốn tìm hiểu model nào, hay cho mình biết công suất và trở kháng loa để mình gợi ý amplifier phù hợp?',
    'Xin chào, cảm ơn bạn đã quan tâm đến KORAH! Mình có thể tra cứu nhanh thông số kỹ thuật, giá, chính sách bảo hành từng model, hoặc tính toán ghép ampli phù hợp với loa của bạn (chỉ cần cho biết công suất RMS và trở kháng, VD: "loa 1000W 8ohm"). Bạn cần hỗ trợ vấn đề gì trước tiên?'
  ];

  function isGreeting(rawQuery) {
    var q = String(rawQuery || '').trim();
    if (!q) return false;
    var n = norm(q);
    if (!/^(xin\s+)?chao\b|^hi\b|^hii+\b|^hello\b|^hey\b|^alo\b/.test(n)) return false;
    // Chỉ coi là lời chào thuần khi câu ngắn (không kèm câu hỏi khác)
    return n.split(/\s+/).length <= 4;
  }

  function answerGreeting() {
    var idx = Math.floor(Math.random() * GREETING_RESPONSES.length);
    return { html: escapeHtml(GREETING_RESPONSES[idx]) };
  }

  function stripDiacritics(str) {
    return str
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  function norm(str) {
    return stripDiacritics(String(str || '')).toLowerCase();
  }

  function normNoSpace(str) {
    return norm(str).replace(/[\s\-_.]/g, '');
  }

  // ── 1) Xác định model được nhắc tới trong câu hỏi ──
  function getModelToken(product) {
    var id = product.id || '';
    id = id.replace(/^korah-|^roy-|^usammy-|^oem-/, '');
    return normNoSpace(id);
  }

  function findProduct(query) {
    if (typeof PRODUCTS === 'undefined') return null;
    var q = normNoSpace(query);
    var candidates = PRODUCTS.filter(function (p) { return p.visible !== false; })
      .map(function (p) { return { product: p, token: getModelToken(p) }; })
      .filter(function (c) { return c.token.length >= 2; })
      .sort(function (a, b) { return b.token.length - a.token.length; });
    for (var i = 0; i < candidates.length; i++) {
      if (q.indexOf(candidates[i].token) !== -1) return candidates[i].product;
    }
    return null;
  }

  // ── 2) Xác định thuộc tính được hỏi + tra trong specs ──
  function findSpecEntry(specs, mustInclude, mustExclude) {
    if (!specs) return null;
    var keys = Object.keys(specs);
    for (var i = 0; i < keys.length; i++) {
      var nk = norm(keys[i]);
      var ok = mustInclude.every(function (frag) { return nk.indexOf(norm(frag)) !== -1; });
      var bad = (mustExclude || []).some(function (frag) { return nk.indexOf(norm(frag)) !== -1; });
      if (ok && !bad) return { key: keys[i], value: specs[keys[i]] };
    }
    return null;
  }

  var ATTRIBUTE_RULES = [
    {
      test: function (q) { return /\b(gia|price)\b/.test(q); },
      answer: function (p) { return p.price ? ('Giá niêm yết: ' + p.price) : null; }
    },
    {
      test: function (q) { return /bao\s?hanh|warranty/.test(q); },
      answer: function (p) { return p.warranty || null; }
    },
    {
      test: function (q) { return /bridge|cau\b|mono/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['bridge']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /8\s?(ohm|Ω|Ω|o)\b|8Ω/.test(norm(q)) && /(cong suat|power|watt|\bw\b)/.test(norm(q)); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['8', 'cong suat'], ['bridge']) || findSpecEntry(p.specs, ['8Ω'], ['bridge']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /4\s?(ohm|Ω|Ω|o)\b|4Ω/.test(norm(q)) && /(cong suat|power|watt|\bw\b)/.test(norm(q)); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['4', 'cong suat'], ['bridge']) || findSpecEntry(p.specs, ['4Ω'], ['bridge']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /damping/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['damping']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /dien ap dinh|vpl|peak|dien ap ra/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['peak']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /trong luong|can nang|\bkg\b|weight/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['trong luong']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /kich thuoc|size|dimension/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['kich thuoc']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /tan nhiet|quat|fan/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['tan nhiet']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /so kenh|\bkenh\b|channel/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['so kenh']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /\bclass\b|lop khuech dai/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['class']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /\bsic\b|silicon carbide|ban dan/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['ban dan']);
        if (e) return e.key + ': ' + e.value;
        return (p.tech && p.tech.indexOf('sic') !== -1)
          ? 'Model này có dùng công nghệ Silicon Carbide (SiC).'
          : 'Model này không dùng công nghệ Silicon Carbide (SiC).';
      }
    },
    {
      test: function (q) { return /\bpfc\b|nguon dien|power supply/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['nguon']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /dai tan|tan so|frequency/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['dai tan']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /cong ra|speakon|output/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['cong ra']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /cong vao|input connector/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['cong vao']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    },
    {
      test: function (q) { return /tro khang vao|input impedance/.test(q); },
      answer: function (p) {
        var e = findSpecEntry(p.specs, ['tro khang vao']);
        return e ? (e.key + ': ' + e.value) : null;
      }
    }
  ];

  function answerFromProduct(product, rawQuery) {
    var q = norm(rawQuery);
    for (var i = 0; i < ATTRIBUTE_RULES.length; i++) {
      if (ATTRIBUTE_RULES[i].test(q)) {
        var ans = ATTRIBUTE_RULES[i].answer(product);
        if (ans) return ans;
      }
    }
    return null;
  }

  // Dò mờ toàn bộ specs khi không luật nào khớp — ưu tiên trả dữ liệu
  // trực tiếp thay vì chỉ đưa link. Yêu cầu >=2 từ trùng để tránh nhận
  // nhầm do trùng 1 từ chung chung.
  function fuzzySpecSearch(product, query) {
    if (!product.specs) return null;
    var qTokens = tokenize(query);
    if (!qTokens.length) return null;
    var best = null, bestScore = 0;
    Object.keys(product.specs).forEach(function (key) {
      var keyTokens = tokenize(key);
      var score = 0;
      qTokens.forEach(function (t) { if (keyTokens.indexOf(t) !== -1) score++; });
      if (score > bestScore) { bestScore = score; best = { key: key, value: product.specs[key] }; }
    });
    return bestScore >= 2 ? best : null;
  }

  function productSummary(product) {
    var lines = [product.name];
    if (product.tagline) lines.push(product.tagline);
    if (product.price) lines.push('Giá niêm yết: ' + product.price);
    if (product.warranty) lines.push(product.warranty);
    return lines.join('\n');
  }

  // ── 2.5) Phân tích thông số loa khách nhập (RMS + Ω) và gợi ý model ──
  // Bắt các dạng: "loa 500w 8ohm", "công suất 800W trở kháng 4 ôm",
  // "loa 1000w 8Ω", "500 watt 4 ohm"... Chấp nhận câu chỉ có 1 trong 2
  // giá trị (W hoặc Ω) và nối tiếp với ngữ cảnh lượt hỏi trước — xem
  // pendingSpeakerContext bên dưới.
  function extractWattOnly(rawQuery) {
    var m = norm(rawQuery).match(/(\d{2,5})\s*(?:w|watt|watts)\b/);
    return m ? parseInt(m[1], 10) : null;
  }

  // "ohm" (EN), "om" (VN "ôm"/"ohm" sau khi bỏ dấu), "Ω/ω" (ký hiệu, giữ
  // nguyên qua bước lowercase), hoặc chữ "o" đứng lẻ ngay sau số. Lưu ý:
  // Ω/ω không phải word-char nên \b sau nó không khớp — chỉ đặt \b cho
  // các nhánh chữ (ohm, om, o), không đặt cho [ωΩ].
  function extractWattOnly(rawQuery) {
    var m = norm(rawQuery).match(/(\d{2,5})\s*(?:w|watt|watts)\b/);
    return m ? parseInt(m[1], 10) : null;
  }

  function extractOhmOnly(rawQuery) {
    var m = norm(rawQuery).match(/(\d{1,2})\s*(?:ohm\b|om\b|[ωΩ]|o\b)/);
    return m ? parseInt(m[1], 10) : null;
  }

  // Trích công suất theo Ω từ chuỗi spec dạng "Hi 1600W x2 / Lo 1300W x2"
  function extractHiWattPerChannel(specValue) {
    if (!specValue) return null;
    var m = specValue.match(/Hi\s*(\d+)\s*W/i);
    return m ? parseInt(m[1], 10) : null;
  }

  // Lưu ngữ cảnh loa đang hỏi dở (RMS/Ω/loại loa — từng phần có thể null)
  // để nối tiếp câu trả lời tiếp theo của khách khi trước đó chatbot đã
  // hỏi lại xin phần thông tin còn thiếu (Ω, RMS, hoặc loại loa). Chỉ
  // tồn tại trong phiên chat hiện tại (mất khi tải lại trang).
  var pendingSpeakerContext = null;

  function detectSpeakerType(rawQuery) {
    var q = norm(rawQuery);
    if (/\bsub\b|\bbass\b|subwoofer/.test(q)) return 'sub';
    if (/full-?range|\bfull\b/.test(q)) return 'full';
    return null;
  }

  // Danh sách model theo đúng nhóm kênh của loại loa (không cần biết RMS
  // cụ thể) — dùng khi khách hỏi chung chung kiểu "loa full nên chọn
  // model nào" để vẫn đưa được câu trả lời hữu ích ngay, thay vì chỉ hỏi
  // lại. Quy ước: mã "S" = 2 kênh (sub), mã "PRO"/"PLUS" = 4 kênh (full).
  function genericModelsForType(type) {
    if (typeof PRODUCTS === 'undefined') return [];
    var wantChannels = type === 'full' ? '4 kênh' : '2 kênh';
    return PRODUCTS.filter(function (p) {
      return p.visible !== false && p.status === 'active' && p.series === 'K Series' && p.specs && p.specs['Số kênh'] === wantChannels;
    }).map(function (p) { return p.name; });
  }

  // Quy tắc ghép loa theo thực tế thị trường Việt Nam: amplifier cần đạt
  // TỐI THIỂU +50% công suất so với loa (ampW >= 1.5 × RMS loa), không
  // giới hạn trần — loa càng "dư" công suất ampli càng an toàn khi chạy
  // liên tục nhiều giờ, phù hợp điều kiện lưới điện VN. Liệt kê TẤT CẢ
  // model đạt chuẩn (không chỉ 1 model khớp gần nhất) để khách chọn theo
  // tài chính — đúng theo yêu cầu thực tế: loa full-range 500–1000W @8Ω
  // thường ghép nhóm 4 kênh (K16PRO/K19PRO/K20PLUS tuỳ mức W cụ thể);
  // loa sub từ 1000W @8Ω trở lên ghép nhóm 2 kênh (K16S/K19S/K20S tuỳ
  // mức W cụ thể). Nếu đã biết loại loa (full/sub), chỉ xét đúng nhóm số
  // kênh tương ứng cho khớp thực tế lắp đặt.
  //
  // Quy ước đặt tên K-Series: model mã "S" (K16S/K19S/K20S) luôn là 2
  // kênh — ưu tiên cho loa SUB; model mã "PRO" hoặc "PLUS" (K16PRO/
  // K19PRO/K20PLUS) luôn là 4 kênh — ưu tiên cho loa FULL-RANGE. Việc
  // lọc theo spec "Số kênh" bên dưới chính là áp dụng đúng quy ước này.
  function suggestModelsForSpeaker(rms, ohm, type) {
    if (typeof PRODUCTS === 'undefined') return [];
    if (ohm !== 8 && ohm !== 4) return 'unsupported-ohm';

    var specKey = ohm === 8 ? 'Công suất 8Ω Stereo RMS' : 'Công suất 4Ω Stereo RMS';
    var wantChannels = type === 'full' ? '4 kênh' : (type === 'sub' ? '2 kênh' : null);
    var matches = [];
    PRODUCTS.filter(function (p) {
      if (p.visible === false || p.status !== 'active' || p.series !== 'K Series' || !p.specs) return false;
      if (wantChannels && p.specs['Số kênh'] !== wantChannels) return false;
      return true;
    }).forEach(function (p) {
      var ampW = extractHiWattPerChannel(p.specs[specKey]);
      if (!ampW) return;
      if (ampW >= rms * 1.5) {
        matches.push({ name: p.name, id: p.id, ampW: ampW, ohm: ohm });
      }
    });
    matches.sort(function (a, b) { return a.ampW - b.ampW; });
    return matches;
  }

  // Khi không có model nào đạt chuẩn +50% headroom (RMS loa vượt quá khả
  // năng cả dòng KORAH trong nhóm kênh phù hợp) — KHÔNG bao giờ trả lời
  // "chưa có dữ liệu, liên hệ hotline" mà luôn đưa ra model công suất
  // lớn nhất sẵn có trong nhóm làm gợi ý gần nhất, kèm cảnh báo headroom
  // thấp hơn khuyến nghị.
  function closestFallbackModel(rms, ohm, type) {
    if (typeof PRODUCTS === 'undefined') return null;
    var specKey = ohm === 8 ? 'Công suất 8Ω Stereo RMS' : 'Công suất 4Ω Stereo RMS';
    var wantChannels = type === 'full' ? '4 kênh' : (type === 'sub' ? '2 kênh' : null);
    var best = null;
    PRODUCTS.filter(function (p) {
      if (p.visible === false || p.status !== 'active' || p.series !== 'K Series' || !p.specs) return false;
      if (wantChannels && p.specs['Số kênh'] !== wantChannels) return false;
      return true;
    }).forEach(function (p) {
      var ampW = extractHiWattPerChannel(p.specs[specKey]);
      if (!ampW) return;
      if (!best || ampW > best.ampW) best = { name: p.name, id: p.id, ampW: ampW, ohm: ohm };
    });
    return best;
  }

  function formatHeadroomPct(pct) {
    return (pct >= 0 ? '+' : '') + pct + '%';
  }

  function buildSpeakerAnswer(rms, ohm, type) {
    if (ohm === 2) {
      return {
        html: escapeHtml('Loa ' + rms + 'W ở 2Ω: KORAH không khuyến cáo vận hành tải 2Ω trên bất kỳ model nào — dòng điện quá cao dễ gây quá nhiệt và kích hoạt bảo vệ liên tục. Vui lòng cho biết công suất loa ở mức 8Ω hoặc 4Ω (theo nhãn loa) để mình gợi ý amplifier phù hợp.')
      };
    }

    var matches = suggestModelsForSpeaker(rms, ohm, type);
    if (matches === 'unsupported-ohm') {
      return {
        html: escapeHtml('Mình chỉ tra cứu được ở mức 8Ω hoặc 4Ω (2 mức KORAH khuyến cáo). Vui lòng cho biết công suất loa ở 8Ω hoặc 4Ω.')
      };
    }

    var typeLabel = type === 'full' ? 'full-range ' : (type === 'sub' ? 'sub ' : '');

    if (matches.length) {
      var lines = matches.map(function (m) {
        var headroomPct = Math.round((m.ampW / rms - 1) * 100);
        return m.name + ' (' + m.ampW + 'W/kênh @' + m.ohm + 'Ω, headroom ' + formatHeadroomPct(headroomPct) + ')';
      });
      return {
        html: escapeHtml('Loa ' + typeLabel + rms + 'W – ' + ohm + 'Ω phù hợp với: ' + lines.join('; ') + ' — chọn model cụ thể tuỳ theo tài chính của bạn. Không khuyến cáo dùng tải 2Ω.').replace(/\n/g, '<br>')
      };
    }

    // Không model nào đạt đủ +50% headroom — vẫn đưa gợi ý gần nhất thay
    // vì từ chối trả lời.
    var fallback = closestFallbackModel(rms, ohm, type);
    if (fallback) {
      var fallbackPct = Math.round((fallback.ampW / rms - 1) * 100);
      return {
        html: escapeHtml('Loa ' + typeLabel + rms + 'W – ' + ohm + 'Ω vượt mức khuyến nghị headroom chuẩn (+50%) của các model KORAH hiện có. Gợi ý gần nhất: ' + fallback.name + ' (' + fallback.ampW + 'W/kênh @' + fallback.ohm + 'Ω, headroom ' + formatHeadroomPct(fallbackPct) + '). Vui lòng liên hệ hotline kỹ thuật 0903 851 252 để được tư vấn cấu hình ghép nhiều amplifier nếu cần công suất lớn hơn.')
      };
    }

    return {
      html: escapeHtml('Với loa ' + typeLabel + rms + 'W – ' + ohm + 'Ω: hiện chưa có model KORAH nào phù hợp. Vui lòng liên hệ hotline kỹ thuật 0903 851 252 để được tư vấn cấu hình cụ thể.')
    };
  }

  // Gộp tín hiệu từ câu hỏi hiện tại với ngữ cảnh còn thiếu từ lượt hỏi
  // trước (pendingSpeakerContext), rồi quyết định: đã đủ dữ liệu để trả
  // lời hay còn thiếu gì thì hỏi tiếp đúng phần đó — không hỏi lại từ
  // đầu và không làm mất dữ liệu khách đã cung cấp ở lượt trước (lỗi đã
  // xác nhận: hỏi "loa sub 1000w..." → bot hỏi xin Ω → khách chỉ đáp
  // "8ohm" → bot quên mất 1000W và loại "sub", hỏi lại từ đầu).
  function answerSpeakerSpec(rawQuery) {
    if (findProduct(rawQuery)) return null;

    var wattNow = extractWattOnly(rawQuery);
    var ohmNow = extractOhmOnly(rawQuery);
    var typeNow = detectSpeakerType(rawQuery);
    var mentionsLoa = /\bloa\b/.test(norm(rawQuery));

    // Chỉ tham gia xử lý khi câu có nhắc "loa", có từ khoá loại loa
    // (full/sub/bass), hoặc đang có ngữ cảnh dở dang từ lượt hỏi trước —
    // tránh nhận nhầm số W/Ω xuất hiện ngẫu nhiên trong câu hỏi khác
    // (VD: câu hỏi tính dòng điện, không liên quan ghép loa).
    if (!mentionsLoa && !typeNow && !pendingSpeakerContext) return null;

    var ctx = pendingSpeakerContext || {};
    var rms = wattNow || ctx.rms || null;
    var ohm = ohmNow || ctx.ohm || null;
    var type = typeNow || ctx.type || null;

    // Không có W lẫn Ω (mới hoặc đang chờ) → không phải câu hỏi cụ thể
    // về công suất/trở kháng loa — để guard "loại loa chung chung" khác
    // trong getAnswer xử lý (trả lời ngay bằng danh sách chung).
    if (!rms && !ohm) return null;

    if (ohm === 2 && rms) {
      pendingSpeakerContext = null;
      return buildSpeakerAnswer(rms, 2, type);
    }

    if (rms && ohm && type) {
      pendingSpeakerContext = null;
      return buildSpeakerAnswer(rms, ohm, type);
    }

    if (rms && ohm && !type) {
      pendingSpeakerContext = { rms: rms, ohm: ohm, type: null };
      return {
        html: escapeHtml('Loa của bạn là loa sub (bass) hay loa full-range? Cho mình biết để gợi ý đúng model KORAH phù hợp.')
      };
    }

    if (rms && !ohm) {
      pendingSpeakerContext = { rms: rms, ohm: null, type: type };
      return {
        html: escapeHtml('Mình cần biết thêm trở kháng (Ω) của loa để tính chính xác. Vui lòng cho biết trở kháng (VD: 8ohm hoặc 4ohm).')
      };
    }

    if (ohm && !rms) {
      pendingSpeakerContext = { rms: null, ohm: ohm, type: type };
      return {
        html: escapeHtml('Mình cần biết thêm công suất RMS của loa để tính chính xác. Vui lòng cho biết công suất (VD: 800W).')
      };
    }

    return null;
  }

  // ── 3) Fallback: tìm trong FAQ_DATA (data/faq.js) ──
  var STOPWORDS = ['la','gi','cho','va','hay','o','cua','voi','the','nao','sao','khi',
    'nhu','de','duoc','co','khong','mot','nhung','nhieu','toi','ban','minh','tai'];

  function tokenize(str) {
    return norm(str).split(/[^a-z0-9Ω]+/).filter(function (t) {
      return t.length > 1 && STOPWORDS.indexOf(t) === -1;
    });
  }

  function stripHtml(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || '';
  }

  function searchFaq(query) {
    var qTokens = tokenize(query);
    if (!qTokens.length) return null;

    var sources = [];
    if (typeof FAQ_DATA !== 'undefined') sources.push(FAQ_DATA);
    if (typeof window !== 'undefined' && window.KB_TOPICS) sources.push(window.KB_TOPICS);
    if (!sources.length) return null;

    var best = null, bestScore = 0;
    sources.forEach(function (data) {
      data.forEach(function (group) {
        group.items.forEach(function (item) {
          var plainAnswer = stripHtml(item.a);
          var bodyTokens = tokenize(item.q + ' ' + plainAnswer);
          var score = 0;
          qTokens.forEach(function (t) { if (bodyTokens.indexOf(t) !== -1) score++; });
          var headerTokens = tokenize(item.q);
          qTokens.forEach(function (t) { if (headerTokens.indexOf(t) !== -1) score += 2; });
          if (score > bestScore) {
            bestScore = score;
            best = { question: item.q, answer: item.a };
          }
        });
      });
    });

    return (best && bestScore >= 2) ? best : null;
  }

  // ── 3b) Nhận diện ý định cho câu hỏi ngắn/chung chung ──
  // Xem data/knowledge/intents.js để biết vì sao lớp này tồn tại và
  // cấu trúc từng rule. Chỉ áp dụng cho câu hỏi NGẮN (tối đa 6 token
  // sau khi bỏ từ dừng) — câu hỏi dài/cụ thể vẫn do searchFaq() xử lý
  // như trước (đã kiểm chứng khớp đúng qua test tự động).
  function findAnswerByQuestion(qText) {
    var sources = [];
    if (typeof FAQ_DATA !== 'undefined') sources.push(FAQ_DATA);
    if (typeof window !== 'undefined' && window.KB_TOPICS) sources.push(window.KB_TOPICS);
    for (var s = 0; s < sources.length; s++) {
      for (var g = 0; g < sources[s].length; g++) {
        var items = sources[s][g].items;
        for (var it = 0; it < items.length; it++) {
          if (items[it].q === qText) return items[it].a;
        }
      }
    }
    return null;
  }

  function matchIntent(rawQuery) {
    if (typeof window === 'undefined' || !window.KB_INTENTS) return null;
    var qTokens = tokenize(rawQuery);
    var normQuery = norm(rawQuery);
    // "all" (token, dùng cho đa số rule) chỉ áp dụng cho câu hỏi NGẮN
    // (tối đa 6 token) — xem giải thích ở đầu data/knowledge/intents.js.
    // "raw" (regex trên chuỗi thô, dùng cho ký hiệu viết tắt như S.C/D.T
    // mà tokenize() loại bỏ vì chỉ còn 1 ký tự sau khi tách dấu chấm)
    // không bị giới hạn độ dài này.
    var tokensUsable = qTokens.length > 0 && qTokens.length <= 6;

    for (var i = 0; i < window.KB_INTENTS.length; i++) {
      var rule = window.KB_INTENTS[i];
      var matched = true;

      if (rule.all) {
        matched = tokensUsable && rule.all.every(function (group) {
          return group.some(function (tok) { return qTokens.indexOf(tok) !== -1; });
        });
      }
      if (matched && rule.raw) {
        matched = rule.raw.every(function (re) { return re.test(normQuery); });
      }
      if (!matched) continue;
      if (tokensUsable && rule.none && rule.none.some(function (tok) { return qTokens.indexOf(tok) !== -1; })) continue;

      if (rule.answer) return rule.answer;
      if (rule.sourceQuestion) {
        var found = findAnswerByQuestion(rule.sourceQuestion);
        if (found) return found;
      }
    }
    return null;
  }

  // ── 4) Xử lý 1 câu hỏi, trả về { html, linkId } ──
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getAnswer(query) {
    if (isGreeting(query)) return answerGreeting();

    var product = findProduct(query);

    if (product) {
      var specAnswer = answerFromProduct(product, query);
      if (specAnswer) {
        return { html: escapeHtml(product.name + ' — ' + specAnswer), linkId: product.id };
      }
      var fuzzy = fuzzySpecSearch(product, query);
      if (fuzzy) {
        return { html: escapeHtml(product.name + ' — ' + fuzzy.key + ': ' + fuzzy.value), linkId: product.id };
      }
      return {
        html: escapeHtml(productSummary(product) + '\n\nBạn muốn hỏi cụ thể thông số nào (công suất, giá, bảo hành, trọng lượng...)?').replace(/\n/g, '<br>'),
        linkId: product.id
      };
    }

    var speakerAnswer = answerSpeakerSpec(query);
    if (speakerAnswer) return speakerAnswer;

    // Câu hỏi có nhắc "loa" + số W cụ thể nhưng thiếu Ω → hỏi lại ngay,
    // KHÔNG cho rơi xuống searchFaq bên dưới — nếu không, tìm kiếm mờ theo
    // từ khóa chung ("loa", "công suất", "bao nhiêu"...) rất dễ khớp nhầm
    // vào 1 câu hỏi mẫu ngẫu nhiên trong data/knowledge/phoi-ghep-loa.js
    // (ví dụ luôn trả lời theo K16S bất kể khách hỏi loa bao nhiêu W).
    if (/\bloa\b/.test(norm(query)) && /(\d{2,5})\s*(?:w|watt|watts)\b/.test(norm(query)) && !findProduct(query)) {
      return {
        html: escapeHtml('Mình cần biết thêm trở kháng (Ω) của loa để tính chính xác. Vui lòng cho biết cả công suất RMS và trở kháng (VD: "loa 500W 8ohm") — mình sẽ tính và gợi ý amplifier KORAH phù hợp.')
      };
    }

    // Câu hỏi có nhắc "loa" + loại loa (full/sub) nhưng CHƯA có số W cụ
    // thể (VD: "loa full thì nên chọn model nào") → trả lời ngay bằng
    // danh sách model đúng nhóm kênh (full→4 kênh, sub→2 kênh), kèm mời
    // cho biết công suất cụ thể để chọn chính xác hơn. KHÔNG cho rơi
    // xuống searchFaq bên dưới — rất dễ khớp nhầm vào FAQ chung không
    // liên quan (VD: "Có nên chọn amplifier đúng bằng RMS loa?").
    if (/\bloa\b/.test(norm(query)) && detectSpeakerType(query) && !/(\d{2,5})\s*(?:w|watt|watts)\b/.test(norm(query)) && !findProduct(query)) {
      var genericType = detectSpeakerType(query);
      var genericNames = genericModelsForType(genericType);
      var genericTypeLabel = genericType === 'full' ? 'full-range' : 'sub';
      var genericChannelLabel = genericType === 'full' ? '4 kênh' : '2 kênh';
      return {
        html: escapeHtml('Loa ' + genericTypeLabel + ' thường phù hợp với dòng ' + genericChannelLabel + ' của KORAH: ' + genericNames.join(', ') + ' — tuỳ công suất loa cụ thể và tài chính của bạn. Cho mình biết công suất RMS và trở kháng (VD: "loa ' + genericTypeLabel + ' 800W 8ohm") để mình gợi ý chính xác model phù hợp nhất nhé.')
      };
    }

    var intentAnswer = matchIntent(query);
    if (intentAnswer) {
      return { html: intentAnswer };
    }

    var faqHit = searchFaq(query);
    if (faqHit) {
      return { html: faqHit.answer };
    }

    // Câu hỏi có nhắc "loa" nhưng không có số W/Ω cụ thể → hỏi lại đúng định dạng
    if (/\bloa\b/.test(norm(query)) && /(cong suat|watt|\bw\b|phu hop|ghep|ohm|Ω)/.test(norm(query))) {
      return {
        html: escapeHtml('Mình chưa có dữ liệu riêng cho loa này. Vui lòng cho biết công suất RMS và trở kháng của loa (VD: "loa 500W 8ohm") — mình sẽ tính và gợi ý amplifier KORAH phù hợp.')
      };
    }

    return {
      html: escapeHtml('Mình chưa tìm thấy câu trả lời phù hợp trong dữ liệu hiện có. Vui lòng thử hỏi rõ tên model (VD: K19PRO) kèm thông số cần tra (công suất, giá, bảo hành...), hoặc liên hệ hotline kỹ thuật 0903 851 252.')
    };
  }

  // ── 5) Giao diện: icon nổi + panel chat ──
  function buildPanel() {
    var panel = document.createElement('div');
    panel.className = 'site-chat__panel';
    panel.innerHTML = ''
      + '<div class="site-chat__header">'
      + '  <div>'
      + '    <div class="site-chat__title">Hỏi nhanh KORAH</div>'
      + '    <div class="site-chat__subtitle">Tra cứu tự động từ dữ liệu sản phẩm &amp; FAQ — không phải AI</div>'
      + '  </div>'
      + '  <button type="button" class="site-chat__close" aria-label="Đóng">&times;</button>'
      + '</div>'
      + '<div class="site-chat__log" id="siteChatLog">'
      + '  <div class="site-chat__msg site-chat__msg--bot"><div class="site-chat__bubble">Xin chào! Bạn có thể hỏi ví dụ: "K19PRO công suất 8Ω là bao nhiêu?" hoặc "K16PRO giá bao nhiêu?"</div></div>'
      + '</div>'
      + '<div class="site-chat__suggestions">'
      + '  <button type="button" class="site-chat__suggestion">K19PRO công suất 8Ω là bao nhiêu?</button>'
      + '  <button type="button" class="site-chat__suggestion">K16PRO giá bao nhiêu?</button>'
      + '  <button type="button" class="site-chat__suggestion">Trở kháng loa là gì?</button>'
      + '</div>'
      + '<form class="site-chat__form" id="siteChatForm">'
      + '  <input class="form-control" id="siteChatInput" type="text" placeholder="Nhập câu hỏi..." autocomplete="off">'
      + '  <button type="submit" class="btn btn--gold btn--sm">Gửi</button>'
      + '</form>';
    return panel;
  }

  function initSiteChat() {
    var floatWrap = document.querySelector('.float-contact');
    if (!floatWrap) return;
    if (floatWrap.querySelector('.site-chat__toggle')) return; // đã init

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'float-contact__btn site-chat__toggle';
    toggle.setAttribute('aria-label', 'Hỏi nhanh KORAH');
    toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    floatWrap.insertBefore(toggle, floatWrap.firstChild);

    var panel = buildPanel();
    document.body.appendChild(panel);

    var log = panel.querySelector('#siteChatLog');
    var form = panel.querySelector('#siteChatForm');
    var input = panel.querySelector('#siteChatInput');
    var closeBtn = panel.querySelector('.site-chat__close');

    function openPanel() {
      panel.classList.add('open');
      toggle.classList.add('active');
      setTimeout(function () { input.focus(); }, 150);
    }
    function closePanel() {
      panel.classList.remove('open');
      toggle.classList.remove('active');
    }

    toggle.addEventListener('click', function () {
      panel.classList.contains('open') ? closePanel() : openPanel();
    });
    closeBtn.addEventListener('click', closePanel);

    function appendMessage(role, html, linkId) {
      var wrap = document.createElement('div');
      wrap.className = 'site-chat__msg site-chat__msg--' + role;
      var bubble = document.createElement('div');
      bubble.className = 'site-chat__bubble';
      bubble.innerHTML = html;
      if (linkId) {
        var a = document.createElement('a');
        a.href = 'product-detail.html?id=' + encodeURIComponent(linkId);
        a.className = 'site-chat__link';
        a.textContent = 'Xem đầy đủ thông số →';
        bubble.appendChild(document.createElement('br'));
        bubble.appendChild(a);
      }
      wrap.appendChild(bubble);
      log.appendChild(wrap);
      log.scrollTop = log.scrollHeight;
    }

    function ask(q) {
      q = q.trim();
      if (!q) return;
      appendMessage('user', escapeHtml(q));
      var res = getAnswer(q);
      setTimeout(function () { appendMessage('bot', res.html, res.linkId); }, 250);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value;
      input.value = '';
      ask(q);
    });

    panel.querySelectorAll('.site-chat__suggestion').forEach(function (btn) {
      btn.addEventListener('click', function () { ask(btn.textContent.trim()); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteChat);
  } else {
    initSiteChat();
  }
})();
