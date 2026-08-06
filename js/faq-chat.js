// ============================================================
// Hỏi đáp nhanh — support.html
// Trả lời tự động CHỈ dựa trên dữ liệu có sẵn:
//   1) data/products.js (PRODUCTS) — thông số, giá, bảo hành từng model
//   2) Nội dung FAQ (accordion) đã có sẵn trong trang
// Không gọi API ngoài, không tự suy đoán/bịa số liệu ngoài dữ liệu này.
// ============================================================

(function () {
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
      answer: function (p) {
        if (!p.price) return null;
        return 'Giá niêm yết: ' + p.price;
      }
    },
    {
      test: function (q) { return /bao\s?hanh|warranty/.test(q); },
      answer: function (p) {
        if (!p.warranty) return null;
        return p.warranty;
      }
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

  function productSummary(product) {
    var lines = [product.name];
    if (product.tagline) lines.push(product.tagline);
    if (product.price) lines.push('Giá niêm yết: ' + product.price);
    if (product.warranty) lines.push(product.warranty);
    return lines.join('\n');
  }

  // ── 3) Fallback: tìm trong FAQ (accordion) đã có sẵn trên trang ──
  var STOPWORDS = ['la','gi','cho','va','hay','o','cua','voi','the','nao','sao','khi',
    'nhu','de','duoc','co','khong','mot','nhung','bao','nhieu','toi','ban','minh','tai','sao'];

  function tokenize(str) {
    return norm(str).split(/[^a-z0-9Ω]+/).filter(function (t) {
      return t.length > 1 && STOPWORDS.indexOf(t) === -1;
    });
  }

  // Dò mờ trong toàn bộ specs của 1 model khi không luật thuộc tính nào khớp —
  // vẫn ưu tiên lấy thẳng dữ liệu có sẵn thay vì chỉ đưa link.
  function fuzzySpecSearch(product, query) {
    if (!product.specs) return null;
    var qTokens = tokenize(query);
    if (!qTokens.length) return null;

    var best = null, bestScore = 0;
    Object.keys(product.specs).forEach(function (key) {
      var keyTokens = tokenize(key);
      var score = 0;
      qTokens.forEach(function (t) {
        if (keyTokens.indexOf(t) !== -1) score++;
      });
      if (score > bestScore) {
        bestScore = score;
        best = { key: key, value: product.specs[key] };
      }
    });
    // Cần khớp ít nhất 2 từ để tránh nhận nhầm do trùng 1 từ chung chung
    // (VD: "công nghệ" và "công suất" cùng có từ "công").
    return bestScore >= 2 ? best : null;
  }

  function searchFaq(query) {
    var items = document.querySelectorAll('.accordion__item');
    var qTokens = tokenize(query);
    if (!qTokens.length || !items.length) return null;

    var best = null, bestScore = 0;
    items.forEach(function (item) {
      var headerEl = item.querySelector('.accordion__header');
      var contentEl = item.querySelector('.accordion__content');
      if (!headerEl || !contentEl) return;
      var headerText = headerEl.textContent.trim();
      var bodyTokens = tokenize(headerText + ' ' + contentEl.textContent);
      var score = 0;
      qTokens.forEach(function (t) {
        if (bodyTokens.indexOf(t) !== -1) score++;
      });
      // ưu tiên khớp trong câu hỏi (header) hơn
      var headerTokens = tokenize(headerText);
      qTokens.forEach(function (t) {
        if (headerTokens.indexOf(t) !== -1) score += 2;
      });
      if (score > bestScore) {
        bestScore = score;
        best = { question: headerText, answer: contentEl.textContent.trim() };
      }
    });

    if (best && bestScore >= 2) return best;
    return null;
  }

  // ── 4) Xử lý 1 câu hỏi, trả về { text, html } ──
  function getAnswer(query) {
    var product = findProduct(query);

    if (product) {
      var specAnswer = answerFromProduct(product, query);
      if (specAnswer) {
        return {
          text: product.name + ' — ' + specAnswer,
          linkId: product.id
        };
      }
      // Không luật nào khớp -> dò mờ toàn bộ specs của model trước khi đưa link
      var fuzzy = fuzzySpecSearch(product, query);
      if (fuzzy) {
        return {
          text: product.name + ' — ' + fuzzy.key + ': ' + fuzzy.value,
          linkId: product.id
        };
      }
      // Có nhắc model nhưng không tìm được thông số liên quan -> đưa tóm tắt
      return {
        text: productSummary(product) + '\n\nBạn muốn hỏi cụ thể thông số nào (công suất, giá, bảo hành, trọng lượng...)?',
        linkId: product.id
      };
    }

    var faqHit = searchFaq(query);
    if (faqHit) {
      return { text: faqHit.answer };
    }

    return {
      text: 'Mình chưa tìm thấy câu trả lời phù hợp trong dữ liệu hiện có. Vui lòng thử hỏi rõ tên model (VD: K19PRO) kèm thông số cần tra (công suất, giá, bảo hành...), hoặc liên hệ hotline kỹ thuật 0903 851 252.'
    };
  }

  // ── 5) Giao diện chat ──
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function initChat() {
    var log = document.getElementById('faqChatLog');
    var form = document.getElementById('faqChatForm');
    var input = document.getElementById('faqChatInput');
    if (!log || !form || !input) return;

    function appendMessage(role, text, linkId) {
      var wrap = document.createElement('div');
      wrap.className = 'faq-chat__msg faq-chat__msg--' + role;
      var bubble = document.createElement('div');
      bubble.className = 'faq-chat__bubble';
      bubble.innerHTML = escapeHtml(text).replace(/\n/g, '<br>');
      if (linkId) {
        var a = document.createElement('a');
        a.href = 'product-detail.html?id=' + encodeURIComponent(linkId);
        a.className = 'faq-chat__link';
        a.textContent = 'Xem đầy đủ thông số →';
        bubble.appendChild(document.createElement('br'));
        bubble.appendChild(a);
      }
      wrap.appendChild(bubble);
      log.appendChild(wrap);
      log.scrollTop = log.scrollHeight;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      appendMessage('user', q);
      input.value = '';
      var res = getAnswer(q);
      setTimeout(function () {
        appendMessage('bot', res.text, res.linkId);
      }, 250);
    });

    document.querySelectorAll('.faq-chat__suggestion').forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.textContent.trim();
        form.dispatchEvent(new Event('submit', { cancelable: true }));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
  } else {
    initChat();
  }
})();
