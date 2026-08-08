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
        a: "KORAH Kseri sử dụng công nghệ khuếch đại Class D với hiệu suất cao, sinh nhiệt thấp hơn Class AB và Class H, giúp amplifier nhẹ hơn nhưng vẫn đạt công suất lớn. Các model có PFC (Power Factor Correction) giúp khai thác nguồn điện ổn định hơn và giảm dòng khởi động (Inrush Current). Ba model cao cấp K19PRO, K20S, K20PLUS được trang bị Silicon Carbide (SiC) của Onsemi (Hoa Kỳ) cho khả năng chịu nhiệt và độ bền cao hơn silicon truyền thống."
      },
      {
        q: "Máy không lên nguồn phải kiểm tra gì?",
        a: "Kiểm tra theo thứ tự: 1) Dây nguồn AC cắm chắc. 2) Ổ điện có nguồn. 3) Cầu chì/Fuse phía sau máy. 4) Điện áp nguồn khoảng 220V ổn định. 5) Khe tản nhiệt không bị che. 6) Không đặt máy nơi ẩm, nóng hoặc nhiều bụi. Nếu vẫn không hoạt động, liên hệ bộ phận bảo hành KORAH 0903851252."
      },
      {
        q: "Vì sao máy tự Protect hoặc Limit?",
        a: "Đây là cơ chế bảo vệ, không phải lỗi. Nguyên nhân thường gặp: quá tải trở kháng, quá nhiệt, gain quá lớn, clip liên tục, chập dây loa (S.C). Cách xử lý: giảm gain, kiểm tra tải loa, kiểm tra trở kháng, đảm bảo thông gió, khởi động lại máy."
      },
      {
        q: "Đèn CLIP sáng phải làm gì?",
        a: "Đèn CLIP (CLP) sáng báo hiệu tín hiệu vào amplifier đã vượt quá giới hạn tuyến tính, gây méo tiếng dạng sóng vuông — nguy hiểm cho loa (đặc biệt tweeter) hơn cả khi chạy công suất lớn bình thường. Cách xử lý: giảm gain/mức tín hiệu vào (trên mixer hoặc trên amplifier) đến khi đèn CLIP tắt hẳn hoặc chỉ chớp thoáng qua ở đỉnh nhạc — không để sáng liên tục. Nếu đã giảm gain trên amplifier mà đèn vẫn sáng liên tục, kiểm tra lại mức tín hiệu từ mixer/nguồn phát phía trước, vì tín hiệu có thể đã bị méo trước khi tới amplifier."
      },
      {
        q: "Những lưu ý an toàn",
        a: "Không chạm đầu Speakon khi máy đang bật. Thứ tự bật: 1) Nguồn tín hiệu 2) Mixer 3) Amplifier — thứ tự tắt ngược lại. Không để nước vào máy. Không tự mở nắp máy khi máy đang hoạt động."
      },
      {
        q: "Loa không lên tiếng, không kêu phải kiểm tra gì?",
        a: "Kiểm tra theo thứ tự: 1) Dây loa/đầu Speakon cắm chắc, đúng cực (+/-). 2) Kênh amplifier tương ứng có đang ở chế độ Mute/Bridge sai hay không. 3) Đèn Protect/Limit có đang sáng không (xem mục \"Vì sao máy tự Protect hoặc Limit?\"). 4) Nguồn tín hiệu vào (mixer/DSP) có tín hiệu ra hay không, gain có bị vặn về 0. 5) Đo nhanh trở kháng loa bằng đồng hồ Ω — nếu đứt/hở mạch (hiển thị OL) khả năng loa hỏng, không phải lỗi amplifier. Nếu đã kiểm tra hết vẫn không lên tiếng, liên hệ hotline kỹ thuật 0903 851 252."
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
        q: "Phân biệt trở kháng vào và trở kháng tải (trở kháng loa)?",
        a: "Đây là 2 thông số khác nhau, dễ nhầm vì cùng gọi là 'trở kháng'. (1) Trở kháng VÀO (Input Impedance): đo bằng kΩ, ở ngõ vào tín hiệu XLR — cố định 20kΩ balanced / 10kΩ unbalanced trên mọi model KORAH, không liên quan đến loa. (2) Trở kháng TẢI hay trở kháng LOA (Output Load Impedance): đo bằng Ω, là tải mà amplifier đẩy ra loa — đây mới là thông số cần quan tâm khi chọn loa để ghép với amplifier."
      },
      {
        q: "KORAH khuyến cáo dùng loa trở kháng bao nhiêu?",
        a: "KORAH công bố nên dùng loa trở kháng 8Ω hoặc 4Ω để đạt hiệu suất tối đa của thiết bị. Không khuyến cáo dùng 2Ω."
      },
      {
        q: "Vì sao không nên đấu loa xuống tải 2Ω?",
        a: "Tải càng thấp, amplifier càng phải cấp dòng điện càng lớn để giữ công suất. Ở 2Ω, dòng điện gần gấp đôi so với 4Ω, khiến tầng công suất và bộ nguồn hoạt động ở giới hạn cao trong thời gian dài — dễ kích hoạt cơ chế bảo vệ quá nhiệt/quá dòng, rút ngắn tuổi thọ linh kiện dù amplifier có mạch bảo vệ. KORAH thiết kế và công bố thông số ở 8Ω và 4Ω vì đây là vùng vận hành an toàn, bền bỉ — không công bố công suất ở 2Ω."
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
        a: "Không nên.<br>Với loa RMS 1.000W/8Ω, nên chọn amplifier từ khoảng 1.500W/8Ω là phối ghép hợp lý;<br>2.000W/8Ω cần limiter chuẩn."
      },
      {
        q: "Cách tính dòng điện",
        a: "Dòng điện (A) = Công suất (W) ÷ Điện áp (V). Ví dụ: 3000W / 220V ≈ 13.6A. Nên chọn CB ≥ Dòng điện × 1.25. Ví dụ: 13.6 × 1.25 ≈ 17A → Chọn CB 20A."
      },
      {
        q: "PFC giúp gì?",
        a: "PFC (Power Factor Correction) giúp: (1) ổn định điện áp và mở rộng dải điện áp hoạt động (Autovolt), giảm nguy cơ nhảy CB khi bật nhiều amplifier cùng lúc; (2) giảm dòng khởi động (Inrush Current) khi cấp điện; (3) giữ công suất ổn định ngay cả khi điện lưới dao động. Dù vậy vẫn nên bật lần lượt từng amplifier theo đúng thứ tự (nguồn tín hiệu → mixer → amplifier) để tránh dòng khởi động cộng dồn."
      },
      {
        q: "Tính tổng dòng điện cả hệ thống",
        a: "Tổng dòng (A) = Tổng công suất (W) ÷ 220V. Khi dùng máy phát điện nên tính dư công suất để tránh quá tải."
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
        a: "Lưới lọc bụi: 3–6 tháng/lần. Lau vỏ ngoài: hàng tháng hoặc sau mỗi sự kiện. Kiểm tra dây nguồn, dây loa, Speakon trước mỗi lần sử dụng. Khi vệ sinh: rút jack nguồn khỏi nguồn điện, dùng khăn mềm, dùng khí nén, không xịt chất lỏng trực tiếp. Nếu cần gửi máy bảo trì tại xưởng, in sẵn Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới để đi kèm máy.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Dấu hiệu nào cho thấy máy cần được kiểm tra, sửa chữa?",
        a: "Quạt không quay hoặc quá ồn. Đèn S.C hoặc D.T sáng liên tục. Có mùi khét. Có tiếng nổ lách tách. Mất kênh hoặc méo tiếng sau khi đã kiểm tra tín hiệu. Nếu cần gửi máy bảo hành/sửa chữa, in sẵn Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới để đi kèm máy.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      }
    ]
  },
  {
    category: "Bảo hành & liên hệ",
    items: [
      {
        q: "Chính sách bảo hành sản phẩm KORAH như thế nào?",
        a: "Bảo hành chính hãng 2 năm (K16S, K16PRO, K19S, K19PRO) hoặc 3 năm (K20S, K20PLUS), kèm bảo trì thêm 3 năm cho mọi model. Muốn bảo hành/sửa chữa: gọi hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a> mô tả tình trạng máy trước, sau đó gửi máy về Xưởng AMMY kèm Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới. Xem đầy đủ điều kiện, quy trình gửi hàng tại trang <a href=\"after-sales.html\" style=\"color:var(--gold)\">Bảo hành &amp; Hậu mãi</a>.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Điều kiện bảo hành",
        a: "Sản phẩm KORAH chính hãng được bảo hành theo thời hạn công bố theo từng model: K16S, K16PRO, K19S, K19PRO — 2 năm; K20S, K20PLUS — 3 năm (kèm bảo trì thêm 3 năm cho mọi model). Trong thời hạn bảo hành, mọi sự cố phát sinh do lỗi kỹ thuật/sản xuất trong quá trình sử dụng bình thường được xử lý hoàn toàn miễn phí. Sau khi hết hạn bảo hành, sản phẩm tiếp tục được hỗ trợ kiểm tra, vệ sinh, thay thế linh kiện với chi phí ưu đãi trong thời hạn bảo trì. Xem chi tiết tại trang <a href=\"after-sales.html\" style=\"color:var(--gold)\">Bảo hành &amp; Hậu mãi</a> hoặc liên hệ hotline <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Khi gửi máy, kèm theo Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Những trường hợp nào không được bảo hành?",
        a: "Website chính thức của KORAH hiện chưa công bố danh sách chi tiết từng trường hợp bị từ chối bảo hành. Theo chính sách đã công bố, bảo hành chỉ áp dụng cho lỗi kỹ thuật/sản xuất phát sinh trong quá trình sử dụng bình thường — không áp dụng cho mọi loại hư hỏng. Để biết chính xác một trường hợp cụ thể có thuộc diện bảo hành hay không (VD: hư hỏng do rơi vỡ, vào nước, tự ý can thiệp sửa chữa, hoặc vận hành sai khuyến cáo kỹ thuật), vui lòng liên hệ hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a> để được xác nhận trực tiếp. Nếu gửi máy kiểm tra, kèm theo Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Quy trình bảo hành",
        a: "Bước 1: Liên hệ hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a> hoặc đại lý nơi mua, mô tả tình trạng máy để được hướng dẫn trước. Bước 2: Đóng gói máy nằm ngang, chèn xốp chống sốc, in Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới để bên trong kiện hàng, gửi về Xưởng AMMY: 300/34/64 Nguyễn Văn Linh, P. Bình Thuận, Q.7, TP.HCM — liên hệ nhận hàng: Nguyễn Phan Vinh, <a href=\"tel:0932648669\" style=\"color:var(--gold)\">0932 648 669</a> / <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Bước 3: Kỹ thuật AMMY tiếp nhận, chẩn đoán, chạy thử tải, hoàn trả. Trong thời hạn bảo hành, lỗi kỹ thuật được sửa chữa miễn phí. Xem chi tiết tại trang <a href=\"after-sales.html\" style=\"color:var(--gold)\">Bảo hành &amp; Hậu mãi</a>.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
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
        a: "Gửi máy về Xưởng AMMY: 300/34/64 Nguyễn Văn Linh, P. Bình Thuận, Q.7, TP.HCM. Người nhận: Nguyễn Phan Vinh — điện thoại nhận hàng <a href=\"tel:0932648669\" style=\"color:var(--gold)\">0932 648 669</a> hoặc hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>. Nên đóng gói chắc chắn, chống va đập và ẩm ướt, ghi rõ thông tin phiếu gửi hàng bên trong kiện hàng (mẫu phiếu bên dưới), báo người nhận khi hàng đến bến.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Mẫu phiếu gửi hàng bảo hành ở đâu, tải như thế nào?",
        a: "In Phiếu gửi hàng Bảo hành - Bảo trì KORAH, điền đầy đủ thông tin khách hàng/thiết bị rồi để bên trong kiện hàng khi gửi về xưởng. Người nhận: Nguyễn Phan Vinh, điện thoại nhận hàng <a href=\"tel:0932648669\" style=\"color:var(--gold)\">0932 648 669</a>, hotline bảo hành <a href=\"tel:0903851252\" style=\"color:var(--gold)\">0903 851 252</a>, địa chỉ 300/34/64 Nguyễn Văn Linh, P. Bình Thuận, Q.7, TP.HCM.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "Chi phí và thời gian sửa chữa ngoài bảo hành là bao nhiêu?",
        a: "Website chưa công bố bảng giá/thời gian sửa chữa cố định vì tùy thuộc tình trạng máy và linh kiện cần thay thế. Sau khi liên hệ hotline bảo hành 0903 851 252 mô tả tình trạng máy, kỹ thuật AMMY tiếp nhận, chẩn đoán rồi báo chi phí và thời gian xử lý dự kiến trước khi sửa. Xem quy trình đầy đủ tại trang <a href=\"after-sales.html\" style=\"color:var(--gold)\">Bảo hành &amp; Hậu mãi</a>."
      },
      {
        q: "Nên chọn model KORAH nào?",
        a: "Tuỳ nhu cầu: loa SUB (bass) → chọn nhóm mã \"S\" (K16S/K19S/K20S, 2 kênh); loa FULL-RANGE/Line Array → chọn nhóm mã \"PRO\"/\"PLUS\" (K16PRO/K19PRO/K20PLUS, 4 kênh). Trong mỗi nhóm, chọn model theo công suất RMS loa cụ thể (headroom tối thiểu +50%) và ngân sách. Cho biết công suất loa và ngân sách dự kiến, hoặc liên hệ hotline kinh doanh <a href=\"tel:0932779386\" style=\"color:var(--gold)\">0932 779 386</a> để được tư vấn chính xác model phù hợp."
      }
    ]
  }
];
