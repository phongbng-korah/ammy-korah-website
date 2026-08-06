// ============================================================
// AMMY / KORAH — Dữ liệu Hỏi đáp kỹ thuật (FAQ)
// ============================================================
// Nguồn duy nhất cho:
//   - Accordion "Hỏi đáp kỹ thuật" trên support.html (tự render từ đây)
//   - Chatbot nổi (js/site-chat.js) dùng chung trên toàn bộ site
// Sửa nội dung ở đây là đủ, không cần sửa thêm nơi nào khác.
// ============================================================

const FAQ_DATA = [
  {
    category: "Vận hành & An toàn",
    items: [
      {
        q: "KORAH sử dụng công nghệ gì?",
        a: "KORAH sử dụng công nghệ khuếch đại Class D với hiệu suất cao, sinh nhiệt thấp hơn Class AB và Class H, giúp amplifier nhẹ hơn nhưng vẫn đạt công suất lớn. Các model có PFC (Power Factor Correction) giúp khai thác nguồn điện ổn định hơn và giảm dòng khởi động (Inrush Current). Ba model cao cấp K19PRO, K20S, K20PLUS được trang bị Silicon Carbide (SiC) của Onsemi (Hoa Kỳ) cho khả năng chịu nhiệt và độ bền cao hơn silicon truyền thống."
      },
      {
        q: "Máy không lên nguồn phải kiểm tra gì?",
        a: "Kiểm tra theo thứ tự: 1) Dây nguồn AC cắm chắc. 2) Ổ điện có nguồn. 3) Cầu chì/Fuse phía sau máy. 4) Điện áp nguồn khoảng 220V ổn định. 5) Khe tản nhiệt không bị che. 6) Không đặt máy nơi ẩm, nóng hoặc nhiều bụi. Nếu vẫn không hoạt động, liên hệ kỹ thuật KORAH."
      },
      {
        q: "Vì sao máy tự Protect hoặc Limit?",
        a: "Đây là cơ chế bảo vệ, không phải lỗi. Nguyên nhân thường gặp: quá tải trở kháng, quá nhiệt, gain quá lớn, clip liên tục, chập dây loa (S.C). Cách xử lý: giảm gain, kiểm tra tải loa, kiểm tra trở kháng, đảm bảo thông gió, khởi động lại máy."
      },
      {
        q: "Những lưu ý an toàn",
        a: "Không chạm đầu Speakon khi máy đang bật. Thứ tự bật: 1) Nguồn tín hiệu 2) Mixer 3) Amplifier — thứ tự tắt ngược lại. Luôn nối đất bằng ổ cắm 3 chân. Không để nước vào máy. Không tự mở nắp máy. Không sử dụng nơi ẩm, bụi hoặc nhiệt độ quá cao."
      }
    ]
  },
  {
    category: "Phối ghép loa theo trở kháng",
    items: [
      {
        q: "Trở kháng là gì?",
        a: "Trở kháng (Ω) là mức cản dòng điện của loa. Trở kháng càng thấp, amplifier phải cấp dòng càng lớn và dễ quá tải nếu dưới mức cho phép."
      },
      {
        q: "Đấu nối tiếp và song song",
        a: "Nối tiếp: Z tổng = Z1 + Z2 + ... — ví dụ 2 loa 8Ω → 16Ω. Song song: 1/Z tổng = 1/Z1 + 1/Z2 + ... — ví dụ 2 loa 8Ω → 4Ω; 3 loa 8Ω → ≈2.7Ω (không khuyến nghị); 4 loa 8Ω → 2Ω."
      },
      {
        q: "Có nên đấu 3 loa 8Ω song song?",
        a: "Không nên. Tổng trở khoảng 2.7Ω, rất dễ gây quá tải amplifier."
      },
      {
        q: "Các model hỗ trợ tải nào?",
        a: "Toàn bộ K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS đều có công suất công bố ở 8Ω và 4Ω."
      }
    ]
  },
  {
    category: "Tính công suất & điện năng",
    items: [
      {
        q: "Có nên chọn amplifier đúng bằng RMS loa?",
        a: "Không nên. Nên chọn amplifier lớn hơn khoảng 20–50% RMS để có Headroom. Điều này giúp ít méo tiếng, giảm clipping, an toàn cho loa."
      },
      {
        q: "Muốn tăng SPL thêm 6dB cần bao nhiêu công suất?",
        a: "Cần tăng khoảng 4 lần công suất. Đây là quy luật nghịch đảo bình phương khoảng cách trong âm học."
      },
      {
        q: "Cách tính dòng điện",
        a: "Dòng điện (A) = Công suất (W) ÷ Điện áp (V). Ví dụ: 3000W / 220V ≈ 13.6A. Nên chọn CB ≥ Dòng điện × 1.25. Ví dụ: 13.6 × 1.25 ≈ 17A → Chọn CB 20A."
      },
      {
        q: "PFC giúp gì?",
        a: "PFC giúp giảm dòng khởi động, giảm nguy cơ nhảy CB, nguồn điện ổn định hơn. Tuy nhiên vẫn nên bật amplifier từng chiếc."
      },
      {
        q: "Tính tổng dòng điện cả hệ thống",
        a: "Tổng dòng (A) = Tổng công suất (W) ÷ 220V. Khi dùng máy phát điện nên tính dư công suất để tránh quá tải."
      }
    ]
  },
  {
    category: "Đo trở kháng loa",
    items: [
      {
        q: "Cách đo",
        a: "1) Ngắt loa khỏi amplifier. 2) Chọn chế độ Ω. 3) Chọn thang đo thấp. 4) Đặt hai que đo vào hai cực loa. 5) Đọc giá trị DCR."
      },
      {
        q: "Giá trị bình thường",
        a: "Loa 8Ω: khoảng 5–7.7Ω. Loa 4Ω: khoảng 2.4–3.7Ω. Đây là điện trở DC nên luôn thấp hơn trở kháng danh định."
      },
      {
        q: "Khi nào loa bị lỗi?",
        a: "Gần 0Ω: khả năng chập cuộn loa. Hiển thị OL hoặc 1: khả năng đứt cuộn loa hoặc đứt dây. Cần kiểm tra trước khi đấu vào amplifier."
      }
    ]
  },
  {
    category: "Lắp tủ rack & bảo trì",
    items: [
      {
        q: "Khoảng cách lắp đặt",
        a: "KORAH dùng luồng gió hút trước – thổi sau. Khuyến nghị: chừa tối thiểu 1U giữa các amplifier công suất lớn, chừa khoảng 2U với mixer hoặc DSP."
      },
      {
        q: "Bảo trì định kỳ",
        a: "Lưới lọc bụi: 3–6 tháng/lần. Lau vỏ ngoài: hàng tháng hoặc sau mỗi sự kiện. Kiểm tra dây nguồn, dây loa, Speakon trước mỗi lần sử dụng. Khi vệ sinh: ngắt nguồn, dùng khăn mềm, dùng khí nén, không xịt chất lỏng trực tiếp."
      },
      {
        q: "Dấu hiệu nào cho thấy máy cần được bảo hành, sửa chữa?",
        a: "Quạt không quay hoặc quá ồn. Đèn S.C hoặc D.T sáng liên tục. Có mùi khét. Có tiếng nổ lách tách. Mất kênh hoặc méo tiếng sau khi đã kiểm tra tín hiệu."
      }
    ]
  },
  {
    category: "Bảo hành & liên hệ",
    items: [
      {
        q: "Quy trình bảo hành",
        a: "Bước 1: Liên hệ hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a> hoặc đại lý nơi mua, mô tả tình trạng máy để được hướng dẫn trước. Bước 2: Đóng gói máy nằm ngang, chèn xốp chống sốc, gửi về Xưởng AMMY: 300/34/64 Nguyễn Văn Linh, P. Bình Thuận, Q.7, TP.HCM — liên hệ nhận hàng: Nguyễn Phan Vinh, <a href=\"tel:0932648669\" style=\"color:var(--gold)\">0932 648 669</a> / <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Bước 3: Kỹ thuật AMMY tiếp nhận, chẩn đoán, chạy thử tải, hoàn trả. Trong thời hạn bảo hành, lỗi kỹ thuật được sửa chữa miễn phí. Xem chi tiết tại trang <a href=\"after-sales.html\" style=\"color:var(--gold)\">Bảo hành &amp; Hậu mãi</a>."
      },
      {
        q: "Làm thế nào để tải tài liệu hướng dẫn vận hành?",
        a: "Datasheet và hướng dẫn vận hành từng model có tại trang <a href=\"products.html\" style=\"color:var(--gold)\">Sản phẩm</a>, hoặc liên hệ trực tiếp đội ngũ kỹ thuật KORAH."
      },
      {
        q: "Cách liên hệ đội ngũ hỗ trợ kỹ thuật?",
        a: "Bảo hành / Kỹ thuật: <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Kinh doanh: <a href=\"tel:0932779386\" style=\"color:var(--gold)\">0932 779 386</a>. Email: <a href=\"mailto:info@ammy.com.vn\" style=\"color:var(--gold)\">info@ammy.com.vn</a>. Giờ làm việc: Thứ 2 – Thứ 7, 08:00 – 17:00. Ngoài giờ hoặc Chủ nhật: để lại lời nhắn qua Website hoặc Zalo, đội ngũ sẽ phản hồi trong giờ làm việc kế tiếp. Xem thêm tại trang <a href=\"contact.html\" style=\"color:var(--gold)\">Liên hệ</a>."
      },
      {
        q: "Số điện thoại kinh doanh và bảo hành, email công ty là gì?",
        a: "Kinh doanh: <a href=\"tel:0932779386\" style=\"color:var(--gold)\">0932 779 386</a>. Bảo hành / Kỹ thuật: <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Email: <a href=\"mailto:info@ammy.com.vn\" style=\"color:var(--gold)\">info@ammy.com.vn</a>."
      },
      {
        q: "Gửi máy bảo hành về địa chỉ nào, liên hệ ai để nhận hàng?",
        a: "Gửi máy về Xưởng AMMY: 300/34/64 Nguyễn Văn Linh, P. Bình Thuận, Q.7, TP.HCM. Người nhận: Nguyễn Phan Vinh — điện thoại nhận hàng <a href=\"tel:0932648669\" style=\"color:var(--gold)\">0932 648 669</a> hoặc hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Nên đóng gói chắc chắn, chống va đập và ẩm ướt, ghi rõ thông tin phiếu gửi hàng bên trong kiện hàng, báo người nhận khi hàng đến bến."
      }
    ]
  }
];
