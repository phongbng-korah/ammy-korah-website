// ============================================================
// KORAH — Kho tri thức chuyên môn: Ghép loa theo trở kháng & công suất
// ============================================================
// Là 1 module trong kho tri thức data/knowledge/ — xem
// data/knowledge/manifest.js để biết cách đăng ký module mới.
// Chỉ dùng cho chatbot "Hỏi nhanh KORAH" — KHÔNG render thành
// accordion trên support.html (khác với data/faq.js).
//
// Nguồn số liệu vùng "Công suất RMS loa khuyến nghị": TÍNH TOÁN
// từ công thức Headroom chuẩn ngành (ampli lớn hơn loa 20–50% RMS)
// áp vào công suất 8Ω/4Ω thật của từng model KORAH — không phải số
// liệu của một loa cụ thể nào.
//
// Phần ghép theo hãng loa cụ thể (KLINE, 3S, RCF, JBL...) CHƯA có
// dữ liệu vì chưa có datasheet gốc đã xác minh — xử lý bằng tính
// năng "phân tích trực tiếp" trong js/site-chat.js (parse số W/Ω
// khách nhập) thay vì bảng tra cứng theo hãng.
// ============================================================

(window.KB_TOPICS = window.KB_TOPICS || []).push(
  {
    category: "Ghép loa — Nguyên tắc & công thức",
    items: [
      {
        q: "KORAH khuyến cáo dùng loa trở kháng bao nhiêu?",
        a: "8Ω hoặc 4Ω. KHÔNG khuyến cáo đấu tải xuống 2Ω, kể cả khi đấu song song nhiều loa 8Ω/4Ω — tải 2Ω làm dòng điện tăng rất cao, dễ kích hoạt bảo vệ Protect/Limit liên tục và ảnh hưởng tuổi thọ linh kiện về lâu dài."
      },
      {
        q: "Công thức chọn công suất loa phù hợp với amplifier KORAH?",
        a: "Dùng quy tắc Headroom: công suất amplifier nên LỚN HƠN công suất RMS loa khoảng 20–50%. Công thức ngược: Công suất RMS loa nên chọn = Công suất amplifier ÷ 1.2 đến ÷ 1.5. Ví dụ amplifier 1600W/kênh ở 8Ω → nên chọn loa RMS trong khoảng 1067W–1333W/loa."
      },
      {
        q: "Vì sao không chọn loa RMS bằng đúng công suất amplifier?",
        a: "Nếu chọn bằng nhau, amplifier dễ chạm giới hạn công suất (clipping) khi chơi nhạc có dải động lớn, gây méo tiếng và tăng nguy cơ hỏng loa (tweeter) do sóng vuông từ tín hiệu bị clip — nguy hiểm cho loa hơn là bản thân công suất lớn. Để dư 20–50% headroom giúp âm thanh sạch và an toàn hơn."
      }
    ]
  },
  {
    category: "Ghép loa — Vùng công suất loa khuyến nghị theo từng model KORAH",
    items: [
      {
        q: "K16S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 1067W–1333W/loa (amplifier 1600W/kênh). Ở 4Ω: nên chọn loa RMS 1867W–2333W/loa (amplifier 2800W/kênh). Không dùng tải 2Ω."
      },
      {
        q: "K16PRO nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 833W–1042W/loa (amplifier 1250W/kênh). Ở 4Ω: nên chọn loa RMS 1333W–1667W/loa (amplifier 2000W/kênh). Không dùng tải 2Ω."
      },
      {
        q: "K19S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 1467W–1833W/loa (amplifier 2200W/kênh). Ở 4Ω: nên chọn loa RMS 2267W–2833W/loa (amplifier 3400W/kênh). Không dùng tải 2Ω."
      },
      {
        q: "K19PRO nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 1100W–1375W/loa (amplifier 1650W/kênh). Ở 4Ω: nên chọn loa RMS 1633W–2042W/loa (amplifier 2450W/kênh). Không dùng tải 2Ω."
      },
      {
        q: "K20S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 2000W–2500W/loa (amplifier 3000W/kênh). Ở 4Ω: nên chọn loa RMS 3200W–4000W/loa (amplifier 4800W/kênh). Đây là model công suất cao nhất dòng 2 kênh, phù hợp cụm sub lớn. Không dùng tải 2Ω."
      },
      {
        q: "K20PLUS nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS 1267W–1583W/loa (amplifier 1900W/kênh). Ở 4Ω: nên chọn loa RMS 2000W–2500W/loa (amplifier 3000W/kênh). Không dùng tải 2Ω."
      }
    ]
  }
);
