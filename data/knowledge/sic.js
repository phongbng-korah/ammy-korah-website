// ============================================================
// KORAH — Kho tri thức chuyên môn: Silicon Carbide (SiC)
// ============================================================
// Nguồn: bộ tài liệu SiC_TECHNOLOGY_MASTER_GUIDE +
// SiC_MANUFACTURERS_DATABASE (onsemi, Infineon, Wolfspeed, ROHM,
// STMicroelectronics, Microchip, Mitsubishi Electric, Fuji Electric,
// GeneSiC, Semikron Danfoss).
// Là 1 module trong kho tri thức data/knowledge/ — xem
// data/knowledge/manifest.js để biết cách đăng ký module mới.
// Chỉ dùng cho chatbot "Hỏi nhanh KORAH" — KHÔNG render thành
// accordion trên support.html (khác với data/faq.js).
// Lưu ý biên tập: đây là kiến thức NGÀNH SiC nói chung (đa hãng).
// KORAH trên thực tế chỉ dùng SiC MOSFET EliteSiC™ của Onsemi (Hoa Kỳ)
// cho K19PRO, K20S, K20PLUS — mọi câu trả lời liên quan hãng khác
// (Infineon, Wolfspeed...) phải ghi rõ đó KHÔNG phải linh kiện KORAH
// đang dùng, tránh gây hiểu lầm cho khách.
// ============================================================

(window.KB_TOPICS = window.KB_TOPICS || []).push(
  {
    category: "SiC — Kiến thức nền tảng",
    items: [
      {
        q: "Silicon Carbide (SiC) là gì?",
        a: "SiC viết tắt của Silicon Carbide là hợp chất bán dẫn giữa Silicon (Si) và Carbon (C), thuộc nhóm Wide Bandgap Semiconductor (bán dẫn dải cấm rộng). So với Silicon truyền thống, SiC chịu được điện áp, nhiệt độ và tần số chuyển mạch cao hơn. KORAH sử dụng SiC MOSFET EliteSiC™ của Onsemi (Hoa Kỳ) trên K19PRO, K20S, K20PLUS."
      },
      {
        q: "SiC khác Silicon (Si) truyền thống thế nào?",
        a: "So với Silicon: Bandgap của SiC ~3.26 eV (Si ~1.12 eV); điện trường đánh thủng ~3 MV/cm (Si ~0.3 MV/cm — cao hơn khoảng 10 lần); nhiệt độ hoạt động 200–250°C (Si ~150°C); độ dẫn nhiệt ~490 W/m·K (Si ~150 W/m·K — cao hơn khoảng 3 lần). Nhờ đó SiC chịu nhiệt tốt hơn, chịu điện áp cao hơn và tổn hao chuyển mạch thấp hơn."
      },
      {
        q: "Wide Bandgap Semiconductor là gì?",
        a: "Là nhóm vật liệu bán dẫn có \"dải cấm\" (bandgap) rộng hơn Silicon truyền thống — gồm SiC, GaN... Nhờ dải cấm rộng, linh kiện chịu được điện áp cao, nhiệt độ cao, tần số chuyển mạch cao và đạt hiệu suất cao hơn Silicon thường."
      },
      {
        q: "So sánh Silicon, SiC và GaN?",
        a: "Silicon: chi phí thấp, phù hợp ứng dụng phổ thông. SiC: tối ưu cho công suất lớn, điện áp cao — phù hợp amplifier công suất lớn. GaN: tối ưu cho tần số chuyển mạch rất cao. KORAH chọn SiC cho các model cao cấp vì phù hợp nhất với yêu cầu độ bền và hiệu suất ở công suất lớn."
      },
      {
        q: "SiC MOSFET có ưu điểm gì?",
        a: "RDS(on) thấp (tổn hao dẫn thấp), tốc độ chuyển mạch nhanh, tổn hao chuyển mạch thấp — phù hợp cho mạch PFC (Power Factor Correction), LLC Resonant và tầng khuếch đại Class D."
      },
      {
        q: "SiC Schottky Diode có gì đặc biệt?",
        a: "Reverse recovery (thời gian phục hồi ngược) rất thấp, giúp giảm nhiễu điện từ (EMI) và tăng hiệu suất so với diode Silicon thông thường."
      },
      {
        q: "SiC có ưu điểm gì so với công nghệ cũ?",
        a: "Hiệu suất cao hơn, ít phát nhiệt hơn, mật độ công suất lớn hơn (linh kiện nhỏ mà công suất cao), độ tin cậy cao hơn khi vận hành liên tục ở công suất lớn."
      },
      {
        q: "SiC có nhược điểm gì không?",
        a: "Có — giá thành linh kiện SiC cao hơn Silicon, và yêu cầu thiết kế mạch in (PCB) cùng driver phức tạp, chuẩn xác hơn. Đây là lý do SiC thường chỉ trang bị trên các dòng cao cấp thay vì toàn bộ sản phẩm."
      },
      {
        q: "SiC được ứng dụng ở đâu?",
        a: "Nguồn xung SMPS, mạch PFC chủ động (Active PFC), inverter, xe điện (EV) và amplifier Class D công suất lớn — đúng như KORAH đang ứng dụng trên K19PRO, K20S, K20PLUS."
      },
      {
        q: "Vì sao SiC quan trọng với amplifier công suất lớn?",
        a: "Trong tầng nguồn SMPS và Active PFC, MOSFET SiC giúp nâng cao hiệu suất, giảm tổn hao, giảm phát nhiệt và cải thiện khả năng vận hành liên tục ở công suất lớn — quan trọng với cục đẩy chạy nhiều giờ liên tục trong sự kiện, sân khấu."
      },
      {
        q: "Xu hướng công nghệ SiC hiện nay là gì?",
        a: "Ngành SiC đang chuyển sang wafer 8 inch (giảm chi phí sản xuất), tối ưu RDS(on) thấp hơn, mở rộng ứng dụng sang xe điện 800V, AI Data Center và thiết bị âm thanh công suất lớn."
      }
    ]
  },
  {
    category: "SiC — Nhà sản xuất & so sánh (kiến thức ngành)",
    items: [
      {
        q: "KORAH dùng SiC của hãng nào?",
        a: "KORAH sử dụng SiC MOSFET dòng EliteSiC™ của Onsemi (Hoa Kỳ) — một trong những nhà sản xuất bán dẫn SiC hàng đầu thế giới — trang bị trên 3 model cao cấp: K19PRO, K20S, K20PLUS."
      },
      {
        q: "Onsemi EliteSiC là gì?",
        a: "EliteSiC™ là dòng SiC MOSFET, Schottky Diode và Power Module của Onsemi (trụ sở Arizona, Hoa Kỳ), hỗ trợ điện áp 650V–1700V, dùng trong SMPS, Active PFC, UPS, xe điện và amplifier công suất lớn. Đây chính là dòng SiC KORAH đang sử dụng."
      },
      {
        q: "Infineon CoolSiC là gì? KORAH có dùng không?",
        a: "CoolSiC™ là dòng SiC MOSFET của Infineon (Đức), hỗ trợ điện áp 650V–2000V, cùng phân khúc ứng dụng với EliteSiC™ (EV, công nghiệp, SMPS). Lưu ý: đây là thông tin kiến thức ngành — KORAH hiện dùng SiC EliteSiC™ của Onsemi, KHÔNG dùng CoolSiC™ của Infineon."
      },
      {
        q: "Ngoài Onsemi và Infineon, còn hãng SiC lớn nào khác?",
        a: "Wolfspeed (Hoa Kỳ, dòng C2M/C3M — tiên phong wafer SiC, ứng dụng EV/Solar), ROHM (Nhật Bản, Gen4 SiC, ô tô/công nghiệp), STMicroelectronics (Châu Âu, STPOWER SiC, EV), Microchip (Hoa Kỳ, công nghiệp), Mitsubishi Electric (Nhật Bản, Full-SiC, đường sắt/inverter), Fuji Electric (Nhật Bản, All-SiC, biến tần), GeneSiC (Hoa Kỳ, 650V–3300V, hàng không/quốc phòng), Semikron Danfoss (Đức, module công suất). Đây là thông tin kiến thức ngành chung; KORAH chọn Onsemi EliteSiC™ cho các model cao cấp của mình."
      },
      {
        q: "Onsemi EliteSiC và Infineon CoolSiC hỗ trợ dải điện áp bao nhiêu?",
        a: "EliteSiC™ (Onsemi): 650V/750V/1200V/1700V. CoolSiC™ (Infineon): 650V/750V/1200V/2000V. Cả 2 dòng đều có MOSFET, Schottky Diode và Power Module, ứng dụng chính trong EV, SMPS, UPS và Audio. KORAH sử dụng SiC MOSFET EliteSiC™ của Onsemi."
      },
      {
        q: "SiC nằm ở vị trí nào trong mạch nguồn của amplifier?",
        a: "Chuỗi mạch nguồn SMPS công suất lớn thường theo thứ tự: nguồn AC vào → lọc EMI → cầu chỉnh lưu (Bridge Rectifier) → tầng Active PFC (SiC MOSFET hoạt động ở đây) → biến đổi LLC Resonant → bus DC điện áp cao → tầng khuếch đại công suất (Class D). SiC MOSFET được dùng chủ yếu ở tầng PFC và có thể ở tầng chuyển đổi công suất, giúp giảm tổn hao và tăng hiệu suất toàn hệ thống."
      },
      {
        q: "SiC được phát triển và thương mại hóa từ khi nào?",
        a: "SiC nhân tạo được tổng hợp lần đầu năm 1891. Diode SiC được thương mại hóa từ năm 2001. Từ khoảng 2015 đến nay, SiC ngày càng phổ biến trong xe điện (EV) và điện tử công suất nhờ chi phí sản xuất giảm và nhu cầu hiệu suất cao tăng mạnh."
      }
    ]
  }
);
