// ============================================================
// Chatbot nổi — dùng chung toàn bộ site (giống nút Zalo/điện thoại)
// Trả lời tự động CHỈ dựa trên dữ liệu có sẵn:
//   1) data/products.js (PRODUCTS) — thông số, giá, bảo hành từng model
//   2) data/faq.js (FAQ_DATA) — câu hỏi thường gặp
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
    if (typeof FAQ_DATA === 'undefined') return null;
    var qTokens = tokenize(query);
    if (!qTokens.length) return null;

    var best = null, bestScore = 0;
    FAQ_DATA.forEach(function (group) {
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

    return (best && bestScore >= 2) ? best : null;
  }

  // ── 4) Xử lý 1 câu hỏi, trả về { html, linkId } ──
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getAnswer(query) {
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

    var faqHit = searchFaq(query);
    if (faqHit) {
      return { html: faqHit.answer };
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
