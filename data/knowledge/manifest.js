// ============================================================
// KORAH — Danh mục kho tri thức chuyên môn cho chatbot
// ============================================================
// Mỗi tài liệu chuyên môn mới (PFC, Class D, bảo vệ mạch, driver...)
// là 1 file riêng trong thư mục data/knowledge/, tự đăng ký nội dung
// vào window.KB_TOPICS (xem mẫu trong data/knowledge/sic.js).
//
// CÁCH THÊM TÀI LIỆU MỚI (không cần sửa bất kỳ trang HTML nào):
//   1. Tạo file mới trong data/knowledge/, ví dụ data/knowledge/pfc.js
//      theo đúng khuôn mẫu của sic.js (dùng
//      (window.KB_TOPICS = window.KB_TOPICS || []).push(...)).
//   2. Thêm tên file vào mảng KB_MANIFEST bên dưới.
//   data/knowledge/loader.js sẽ tự nạp file đó trên toàn bộ site.
// ============================================================

var KB_MANIFEST = [
  'sic.js',
  'classd.js',
  'phoi-ghep-loa.js',
  'pfc.js',
  'faq-60.js'
];
