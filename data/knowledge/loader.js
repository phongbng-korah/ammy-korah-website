// ============================================================
// KORAH — Bộ nạp kho tri thức chuyên môn cho chatbot
// ============================================================
// Đọc data/knowledge/manifest.js (biến KB_MANIFEST) và tự chèn thẻ
// <script> cho từng file tri thức. Nhờ vậy, thêm tài liệu chuyên môn
// mới chỉ cần sửa manifest.js — không phải sửa lại từng trang HTML.
// Phải đặt loader.js ngay sau manifest.js trong <script> của trang.
// ============================================================

(function () {
  var base = 'data/knowledge/';
  if (typeof KB_MANIFEST === 'undefined' || !KB_MANIFEST.length) return;
  KB_MANIFEST.forEach(function (file) {
    document.write('<script src="' + base + file + '"><' + '/script>');
  });
})();
