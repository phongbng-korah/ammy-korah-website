// ============================================================
// KORAH — Kho tri thức chuyên môn: Bộ 60 Câu Hỏi Thường Gặp (FAQ)
// ============================================================
// Nguồn: "KORAH AI Knowledge Base — Bộ 60 Câu Hỏi Thường Gặp (FAQ)"
// v1.0 (07/08/2026) — bộ câu hỏi do KORAH cung cấp, câu trả lời được
// biên soạn dựa trên dữ liệu đã xác minh: data/products.js (thông số
// chính thức), about.html (thông tin công ty/thương hiệu), dealers.html,
// contact.html, after-sales.html, và các module kho tri thức đã có
// (data/knowledge/pfc.js, sic.js, classd.js, phoi-ghep-loa.js).
// Là 1 module trong kho tri thức data/knowledge/ — xem
// data/knowledge/manifest.js để biết cách đăng ký module mới.
// Chỉ dùng cho chatbot "Hỏi nhanh KORAH" — KHÔNG render thành
// accordion trên support.html (khác với data/faq.js).
//
// Nguyên tắc biên tập: KHÔNG suy diễn số liệu/tính năng chưa được
// data/products.js hoặc trang chính thức công bố (VD: chưa có DSP nội
// bộ, chưa có chế độ "Parallel" riêng, chưa công bố thống kê bán chạy,
// chưa có hệ thống bảo hành điện tử). Với câu hỏi cần dữ liệu loa cụ
// thể (RMS/Ω) mà khách chưa cung cấp, trả lời hướng dẫn thay vì đoán
// số liệu — khớp với nguyên tắc "phân tích trực tiếp" đã áp dụng trong
// js/site-chat.js.
// ============================================================

(window.KB_TOPICS = window.KB_TOPICS || []).push(
  {
    category: "FAQ 60 câu — 1. Câu hỏi cơ bản",
    items: [
      {
        q: "KORAH là thương hiệu của nước nào?",
        a: "KORAH là thương hiệu Việt Nam, thuộc Công ty TNHH SX & TM Điện Tử AMMY (AMMY Electronics Co., Ltd), thành lập năm 2006. Toàn bộ khâu nghiên cứu, thiết kế mạch và sản xuất được thực hiện tại nhà máy AMMY ở TP. Hồ Chí Minh — không phải hàng nhập khẩu nguyên chiếc rồi dán nhãn."
      },
      {
        q: "Amplifier KORAH được bảo hành bao lâu?",
        a: "Tùy model: K16S, K16PRO, K19S đều Bảo hành 2 năm + Bảo trì 3 năm. K19PRO Bảo hành 2 năm. K20S, K20PLUS Bảo hành 3 năm + Bảo trì 3 năm. Xem chi tiết chính sách tại trang Bảo hành & Hậu mãi hoặc liên hệ hotline bảo hành 0903 851 252. Khi cần gửi máy bảo hành, kèm theo Phiếu gửi hàng Bảo hành - Bảo trì KORAH bên dưới.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      },
      {
        q: "KORAH sử dụng công nghệ khuếch đại gì?",
        a: "Công nghệ Class D trên toàn bộ K-Series (K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS) — hiệu suất thường trên 90%, sinh nhiệt thấp hơn Class AB/Class H, giúp amplifier nhẹ hơn mà vẫn đạt công suất lớn."
      },
      {
        q: "Vì sao KORAH sử dụng công nghệ Silicon Carbide (SiC)?",
        a: "3 model cao cấp K19PRO, K20S, K20PLUS trang bị SiC MOSFET EliteSiC™ của Onsemi (Hoa Kỳ) vì SiC chịu nhiệt tốt hơn Silicon truyền thống (200–250°C so với Si ~150°C) và tổn hao chuyển mạch thấp hơn — phù hợp amplifier vận hành công suất lớn liên tục nhiều giờ trong sự kiện, sân khấu."
      },
      {
        q: "Silicon Carbide có ưu điểm gì so với MOSFET thông thường?",
        a: "SiC có bandgap rộng hơn Silicon khoảng 3 lần (~3.26 eV so với ~1.12 eV), điện trường đánh thủng cao hơn khoảng 10 lần, chịu nhiệt 200–250°C (Si khoảng 150°C), độ dẫn nhiệt cao hơn khoảng 3 lần. Nhờ đó SiC MOSFET có RDS(on) thấp hơn (tổn hao dẫn thấp), chuyển mạch nhanh và tổn hao chuyển mạch thấp hơn MOSFET Silicon thông thường."
      },
      {
        q: "KORAH có sử dụng nguồn PFC không?",
        a: "Có — toàn bộ 6 model K-Series đều trang bị PFC (Power Factor Correction). K16PRO và K19PRO dùng Active PFC / PFC Autovolt với dải điện áp hiệu quả 140V–270V; K19S hoạt động ổn định ở dải AC 140V–240V."
      },
      {
        q: "PFC giúp ích gì khi biểu diễn ngoài trời?",
        a: "PFC giúp máy ổn định trên dải điện áp rộng (giảm phụ thuộc vào ổn áp ngoài rời), giảm dòng khởi động (Inrush Current) và giảm nguy cơ nhảy CB khi bật nhiều amplifier cùng lúc, giữ công suất ổn định ngay cả khi điện lưới hoặc máy phát điện dao động — rất hữu ích cho sự kiện ngoài trời, lưu động dùng máy phát điện."
      },
      {
        q: "KORAH có phù hợp cho dàn âm thanh sân khấu không?",
        a: "Có — đây là ứng dụng chính của K-Series. K16PRO/K19PRO (4 kênh, VPL Technology) phù hợp Full-range và Line Array sân khấu; K16S/K19S/K20S (2 kênh) phù hợp cụm sub; K20PLUS (4 kênh cao cấp nhất) đảm nhiệm cả Full-range lẫn Subwoofer trong hệ thống all-in-one."
      },
      {
        q: "KORAH có phù hợp với karaoke kinh doanh không?",
        a: "Có — K16S và K19S (2 kênh) thường được dùng làm sub bass cho phòng karaoke kinh doanh, bar không gian vừa; các model 4 kênh phù hợp khi hệ thống karaoke cần thêm loa full-range công suất lớn."
      },
      {
        q: "KORAH được sản xuất theo tiêu chuẩn nào?",
        a: "Sản phẩm được thiết kế và sản xuất tại nhà máy AMMY ở TP. Hồ Chí Minh, trên dây chuyền đạt chuẩn ISO 9001:2008 — kiểm soát chất lượng ở từng công đoạn thay vì phụ thuộc bên thứ ba."
      },
      {
        q: "KORAH có xuất xứ từ đâu?",
        a: "KORAH có xuất xứ Việt Nam — thương hiệu của Công ty TNHH SX & TM Điện Tử AMMY (AMMY Electronics Co., Ltd), thành lập năm 2006. Toàn bộ khâu nghiên cứu, thiết kế mạch và sản xuất thực hiện tại nhà máy AMMY ở TP. Hồ Chí Minh — không phải hàng nhập khẩu nguyên chiếc dán nhãn."
      },
      {
        q: "Chất lượng KORAH có đảm bảo không?",
        a: "Có — AMMY tự chủ toàn bộ khâu nghiên cứu, thiết kế và sản xuất KORAH tại nhà máy riêng ở TP. Hồ Chí Minh, trên dây chuyền đạt chuẩn ISO 9001:2008, kiểm soát chất lượng từng công đoạn thay vì phụ thuộc bên thứ ba — không phải hàng nhập khẩu nguyên chiếc dán nhãn."
      }
    ]
  },
  {
    category: "FAQ 60 câu — 2. Câu hỏi về phối ghép",
    items: [
      {
        q: "Model K16PRO kéo được những loại loa nào?",
        a: "K16PRO là ampli 4 kênh, ưu tiên ghép loa FULL-RANGE (và Line Array nhờ VPL Technology, khả năng tải tốt ở điện áp cao). Theo nguyên tắc headroom +50%: ở 8Ω nên chọn loa RMS tối đa khoảng 833W/loa, ở 4Ω khoảng 1333W/loa. Không dùng tải 2Ω."
      },
      {
        q: "K19PRO phù hợp với loa bass 40 hay bass 50?",
        a: "Cách gọi \"loa bass 40/50\" theo đường kính (cm) là cách gọi phổ biến ngoài thị trường, không phải thông số kỹ thuật chuẩn để tính ghép ampli — 2 loa cùng đường kính vẫn có thể khác nhau về công suất RMS thực tế. K19PRO là ampli 4 kênh, ưu tiên loa FULL-RANGE, công suất 8Ω: 1650W x4 / 4Ω: 2450W x4. Vui lòng cho biết công suất RMS và trở kháng (Ω) cụ thể của loa (VD: \"loa 800W 8ohm\") để được tư vấn chính xác."
      },
      {
        q: "K20S có thể đánh 2 loa sub 50 từ 220 được không?",
        a: "K20S là ampli 2 kênh công suất cao nhất dòng, ưu tiên ghép loa SUB (8Ω: 3000W x2 / 4Ω: 4800W x2). Nếu đấu 2 loa sub 8Ω song song trên 1 kênh, tổng trở giảm còn 4Ω — vẫn trong mức khuyến nghị (không dùng 2Ω), nhưng cần biết công suất RMS thực tế của từng loa sub để tính chính xác headroom +50%. \"Loa sub 50 từ 220\" chưa đủ thông tin công suất RMS — vui lòng cho biết số W RMS cụ thể để tư vấn đúng."
      },
      {
        q: "Nên chọn amplifier 2 kênh hay 4 kênh?",
        a: "Theo quy ước KORAH: model mã \"S\" (K16S, K19S, K20S) là ampli 2 kênh, ưu tiên ghép loa SUB. Model mã \"PRO\"/\"PLUS\" (K16PRO, K19PRO, K20PLUS) là ampli 4 kênh, ưu tiên ghép loa FULL-RANGE. Chọn theo loại loa cần ghép: dàn Full-range/Line Array thường dùng nhóm PRO/PLUS; cụm sub thường dùng nhóm S."
      },
      {
        q: "KORAH có đánh được loa 16Ω không?",
        a: "KORAH công bố công suất chính thức ở 8Ω và 4Ω. Với loa 16Ω, amplifier vẫn vận hành an toàn (trở kháng cao hơn mức khuyến nghị, không gây quá tải), nhưng công suất thực tế đưa ra loa sẽ thấp hơn nhiều so với công suất công bố ở 8Ω — đây không phải mức tải mà thiết kế KORAH tối ưu hóa."
      },
      {
        q: "Có nên chạy tải 2Ω với amplifier KORAH không?",
        a: "Không nên. KORAH không khuyến cáo đấu tải xuống 2Ω, kể cả khi đấu song song nhiều loa 8Ω/4Ω — tải 2Ω làm dòng điện tăng rất cao, dễ kích hoạt bảo vệ Protect/Limit liên tục và ảnh hưởng tuổi thọ linh kiện về lâu dài."
      },
      {
        q: "Trở kháng loa bao nhiêu là tối ưu cho KORAH?",
        a: "8Ω hoặc 4Ω — đây là 2 mức tải mà toàn bộ K-Series đều công bố công suất chính thức và vận hành ổn định lâu dài."
      },
      {
        q: "Một amplifier K20PLUS có thể kéo bao nhiêu loa?",
        a: "Không có con số cố định \"bao nhiêu loa\" — phụ thuộc công suất RMS mỗi loa và cách đấu (mỗi kênh 1 loa, hay đấu song song nhiều loa/kênh). K20PLUS là ampli 4 kênh; theo headroom +50%, ở 8Ω nên chọn loa RMS tối đa khoảng 1267W/loa mỗi kênh (không giới hạn trần dưới). Cho biết công suất RMS, trở kháng và cách đấu dự kiến để tính chính xác."
      },
      {
        q: "Có thể chạy Bridge với KORAH không?",
        a: "Có — toàn bộ model K-Series đều hỗ trợ chế độ Bridge Mono, công suất Bridge được công bố rõ trong thông số kỹ thuật từng model (VD: K16S Bridge Mono 8Ω đạt Hi 5600W, K20S đạt Hi 9600W)."
      },
      {
        q: "Khi nào nên sử dụng chế độ Parallel?",
        a: "KORAH không công bố chế độ \"Parallel\" (song song đầu vào) riêng trên bảng thông số kỹ thuật — nút chọn trên panel chỉ có Stereo/Bridge. Nếu ý bạn là đấu SONG SONG NHIỀU LOA vào 1 kênh: đấu song song làm giảm trở kháng tổng (VD 2 loa 8Ω song song → 4Ω) — cần tính đúng công thức song song và không để tổng trở xuống dưới mức khuyến nghị (không dùng 2Ω)."
      }
    ]
  },
  {
    category: "FAQ 60 câu — 3. Câu hỏi kỹ thuật",
    items: [
      {
        q: "Công suất RMS của K19PRO là bao nhiêu?",
        a: "8Ω Stereo RMS: Hi 1650W x4 / Lo 1400W x4. 4Ω Stereo RMS: Hi 2450W x4 / Lo 2100W x4. Bridge Mono 8Ω: Hi 4900W x2 / Lo 4200W x2."
      },
      {
        q: "Công suất Peak có ý nghĩa gì?",
        a: "Công suất Peak là mức công suất đỉnh tức thời loa/ampli chịu được trong khoảnh khắc rất ngắn — cao hơn nhiều so với công suất RMS (nhạc thực tế thường có Crest Factor 12–20dB giữa đỉnh và trung bình). Trên thông số kỹ thuật KORAH, \"Điện áp ra Peak\" (VD K19PRO 163V) là điện áp đỉnh tối đa ngõ ra, không phải công suất liên tục — khi chọn ghép loa, luôn dùng công suất RMS làm cơ sở tính toán, không dùng số Peak."
      },
      {
        q: "KORAH có mạch bảo vệ quá nhiệt không?",
        a: "Có — cơ chế Protect/Limit tự động kích hoạt khi quá nhiệt (đèn báo D.T sáng), kết hợp hệ thống quạt DC tản nhiệt Front-to-back (2–5 quạt tùy model) để duy trì nhiệt độ an toàn khi vận hành công suất lớn."
      },
      {
        q: "Có bảo vệ ngắn mạch không?",
        a: "Có — đèn báo S.C (Short Circuit) sáng khi phát hiện chạm/ngắn mạch tải loa, kích hoạt cơ chế bảo vệ tự động để tránh hư hỏng tầng công suất."
      },
      {
        q: "Khi điện yếu amplifier có hoạt động ổn định không?",
        a: "Có, nhờ PFC — K16PRO/K19PRO có dải điện áp hiệu quả 140V–270V, K19S hoạt động ổn định ở dải AC 140V–240V — tự thích nghi dải điện áp rộng mà không cần ổn áp ngoài, phù hợp khu vực điện lưới yếu."
      },
      {
        q: "Quạt làm mát hoạt động như thế nào?",
        a: "Tản nhiệt theo nguyên lý Front-to-back (hút gió mặt trước, thổi ra mặt sau). Số quạt DC tùy model: K16S và K20S có 2 quạt, K16PRO và K19S có 3 quạt, K19PRO có 5 quạt."
      },
      {
        q: "KORAH dùng nguồn Switching hay nguồn xuyến?",
        a: "Nguồn Switching (SMPS — Switching Mode Power Supply) kết hợp PFC, không dùng biến áp xuyến (lõi tuyến tính truyền thống). Đây là thiết kế chuẩn ngành cho amplifier Class D hiện đại, giúp máy nhẹ hơn và hiệu suất cao hơn."
      },
      {
        q: "Hiệu suất của amplifier Class D là bao nhiêu?",
        a: "Thường đạt trên 90% — cao hơn đáng kể so với Class AB/Class H — vì MOSFET trong Class D chỉ hoạt động ở 2 trạng thái ON/OFF, không có trạng thái khuếch đại tuyến tính tiêu hao năng lượng ở giữa."
      },
      {
        q: "VPL trên K16PRO hoạt động như thế nào?",
        a: "VPL (Voltage Peak Limit) là thiết lập điện áp đỉnh ngõ ra có thể chọn giữa 2 mức (Hi/Lo) — trên K16PRO là 141V/130V. Đây là một phần của \"VPL Technology\", giúp máy linh hoạt tải ở điện áp cao, phù hợp kéo dàn Line Array dài mà không cần đổi sang model khác."
      },
      {
        q: "KORAH có giới hạn điện áp đầu ra không?",
        a: "Có — mỗi model công bố \"Điện áp ra Peak\" tối đa cụ thể (VD K19PRO: 163V, K20S: 219V) với 2 mức chọn VPL Hi/Lo — đây chính là giới hạn điện áp đỉnh ngõ ra được kiểm soát để bảo vệ loa và mạch khuếch đại."
      }
    ]
  },
  {
    category: "FAQ 60 câu — 4. Câu hỏi về độ bền",
    items: [
      {
        q: "KORAH có hoạt động liên tục 8–12 giờ được không?",
        a: "Có — thiết kế PFC + Class D (và SiC MOSFET trên model cao cấp K19PRO/K20S/K20PLUS) hướng tới vận hành liên tục nhiều giờ cho sự kiện, sân khấu, kết hợp tản nhiệt Front-to-back nhiều quạt DC. Cần đảm bảo thông gió tốt, không che khe tản nhiệt, và tránh chạy sát giới hạn công suất hoặc tải 2Ω trong thời gian dài."
      },
      {
        q: "Dùng ngoài trời trời nóng có ảnh hưởng không?",
        a: "Có ảnh hưởng — nhiệt độ môi trường cao làm giảm hiệu quả tản nhiệt, dễ kích hoạt bảo vệ quá nhiệt (Protect) hơn. Nên đặt máy nơi thoáng khí, tránh ánh nắng chiếu trực tiếp vào khe tản nhiệt, và lưu ý hiện tượng Power Compression ở chính loa khi chạy công suất lớn liên tục trong thời tiết nóng (không phải lỗi amplifier)."
      },
      {
        q: "Amplifier có tự ngắt khi quá nhiệt không?",
        a: "Có — cơ chế Protect/Limit tự động kích hoạt khi quá nhiệt (đèn D.T sáng), đây là bảo vệ chủ động chứ không phải lỗi máy. Máy tự phục hồi hoạt động bình thường khi nhiệt độ giảm về mức an toàn."
      },
      {
        q: "Sau bao lâu nên vệ sinh amplifier?",
        a: "Lưới lọc bụi: 3–6 tháng/lần. Lau vỏ ngoài: hàng tháng hoặc sau mỗi sự kiện. Khi vệ sinh: ngắt nguồn, dùng khăn mềm và khí nén, không xịt chất lỏng trực tiếp vào máy."
      },
      {
        q: "Có cần bảo dưỡng định kỳ không?",
        a: "Có. Ngoài vệ sinh lưới lọc bụi và vỏ ngoài định kỳ, cần kiểm tra dây nguồn, dây loa, đầu Speakon trước mỗi lần sử dụng để đảm bảo an toàn và duy trì hiệu năng ổn định."
      }
    ]
  },
  {
    category: "FAQ 60 câu — 5. Câu hỏi so sánh",
    items: [
      {
        q: "KORAH khác gì so với amplifier Class H?",
        a: "KORAH hiện dùng công nghệ Class D (không phải Class H) trên toàn bộ K-Series đang phân phối. So với Class H (khuếch đại tuyến tính có bù điện áp nguồn động), Class D dùng nguyên lý đóng cắt PWM — hiệu suất cao hơn nhiều (thường >90% so với Class H thấp hơn đáng kể), sinh nhiệt thấp hơn, máy nhẹ và gọn hơn ở cùng mức công suất. (Lưu ý: dòng K18 cũ dùng Class TD, đã ngưng sản xuất — khác cả Class D lẫn Class H.)"
      },
      {
        q: "Vì sao nên chọn KORAH thay vì amplifier thông thường?",
        a: "KORAH là thương hiệu Việt Nam tự chủ thiết kế và sản xuất (không nhập nguyên chiếc dán nhãn), dùng công nghệ Class D hiệu suất cao, PFC ổn định trước điện lưới yếu/máy phát điện, SiC MOSFET Onsemi trên model cao cấp cho độ bền vận hành dài giờ, cùng chính sách bảo hành 2–3 năm + bảo trì 3 năm và hỗ trợ kỹ thuật/linh kiện chính hãng lâu dài nhờ tự chủ công nghệ."
      },
      {
        q: "Silicon Carbide có gì nổi bật hơn IGBT?",
        a: "Đây là kiến thức ngành chung: IGBT (Insulated Gate Bipolar Transistor) là linh kiện Silicon truyền thống, tốc độ chuyển mạch chậm hơn và tổn hao chuyển mạch cao hơn SiC MOSFET. SiC chịu nhiệt cao hơn (200–250°C, IGBT thường dưới 150°C), tần số chuyển mạch cao hơn, hiệu suất tốt hơn — phù hợp mạch PFC/Class D công suất lớn hiện đại. Lưu ý: KORAH dùng SiC MOSFET EliteSiC™ của Onsemi, không công bố sử dụng IGBT ở bất kỳ khâu nào."
      },
      {
        q: "KORAH có tiết kiệm điện hơn không?",
        a: "Có, so với công nghệ khuếch đại tuyến tính (Class AB/Class H) — nhờ Class D đạt hiệu suất trên 90%, ít năng lượng biến thành nhiệt hao phí hơn. PFC cũng giúp hệ số công suất gần bằng 1, khai thác điện lưới hiệu quả hơn so với thiết bị không có PFC."
      },
      {
        q: "KORAH phù hợp với hệ thống line array không?",
        a: "Có — K16PRO và K19PRO (4 kênh, VPL Technology) được thiết kế phù hợp Line Array, với khả năng tải vượt trội ở điện áp cao giúp kéo dàn line array dài."
      }
    ]
  },
  {
    category: "FAQ 60 câu — 6. Câu hỏi mua hàng",
    items: [
      {
        q: "Mua sản phẩm KORAH chính hãng ở đâu?",
        a: "KORAH được phân phối qua hệ thống đại lý ủy quyền trên toàn quốc — chưa có kênh đặt hàng trực tuyến (online) trên website. Vui lòng liên hệ hotline kinh doanh 0932 779 386 để được hướng dẫn điểm mua hàng chính hãng gần nhất, hoặc xem thêm tại trang Hệ thống đại lý."
      },
      {
        q: "Giá model K16PRO hiện nay là bao nhiêu?",
        a: "Giá niêm yết 18.000.000đ. Giá có thể thay đổi theo thời điểm và chính sách đại lý — liên hệ hotline kinh doanh 0932 779 386 để xác nhận giá chính xác hiện hành."
      },
      {
        q: "Model nào bán chạy nhất của KORAH?",
        a: "Website hiện không công bố dữ liệu thống kê doanh số theo model — liên hệ hotline kinh doanh 0932 779 386 để được tư vấn model phù hợp nhu cầu cụ thể của bạn."
      },
      {
        q: "Tôi nên chọn K19S hay K19PRO?",
        a: "Hai model khác nhóm mục đích: K19S (2 kênh, 20 triệu) ưu tiên ghép loa SUB, Bridge Mono 8Ω đạt 6800W, Damping Factor cao cho bass chặt. K19PRO (4 kênh, 23 triệu) ưu tiên loa FULL-RANGE/Line Array, trang bị SiC MOSFET + PFC Autovolt cho độ bền vận hành dài giờ. Nên chọn theo loại loa cần ghép (sub hay full-range) làm tiêu chí chính, không chỉ dựa vào giá."
      },
      {
        q: "Model nào phù hợp cho dàn 2 sub + 2 full?",
        a: "Cấu hình phổ biến: 1 máy 2 kênh nhóm S (K16S/K19S/K20S) cho 2 loa sub + 1 máy 4 kênh nhóm PRO/PLUS (K16PRO/K19PRO/K20PLUS) cho 2 loa full-range. Cần biết công suất RMS cụ thể của loa sub và loa full để chọn đúng model — cho biết số W/Ω của từng loa để được tư vấn chính xác."
      },
      {
        q: "KORAH có đại lý tại tỉnh của tôi không?",
        a: "Danh sách đại lý ủy quyền theo từng tỉnh hiện đang được cập nhật trên trang Hệ thống đại lý — vui lòng liên hệ hotline kinh doanh 0932 779 386 để được hướng dẫn điểm mua hàng chính hãng gần nhất."
      },
      {
        q: "Có hỗ trợ kỹ thuật sau khi mua không?",
        a: "Có — hotline Bảo hành/Kỹ thuật 0903 851 252, giờ làm việc Thứ 2 – Thứ 7, 08:00–17:00. Ngoài giờ hoặc Chủ nhật, để lại lời nhắn qua Website hoặc Zalo, đội ngũ sẽ phản hồi trong giờ làm việc kế tiếp."
      },
      {
        q: "Có linh kiện thay thế chính hãng không?",
        a: "Có — vì AMMY tự chủ thiết kế và sản xuất KORAH nên luôn sẵn linh kiện và hiểu rõ từng chi tiết sản phẩm, đảm bảo công tác bảo hành, bảo trì và sửa chữa xuyên suốt vòng đời sản phẩm, kể cả nhiều năm sau khi mua."
      },
      {
        q: "Có hỗ trợ giao hàng toàn quốc không?",
        a: "KORAH được phân phối qua hệ thống đại lý ủy quyền trên toàn quốc — liên hệ hotline kinh doanh 0932 779 386 để được hướng dẫn điểm mua/giao hàng gần nhất."
      },
      {
        q: "Có hướng dẫn lắp đặt và cài đặt không?",
        a: "Có — Datasheet và hướng dẫn vận hành từng model có tại trang Sản phẩm, hoặc liên hệ trực tiếp đội ngũ kỹ thuật KORAH qua hotline 0903 851 252."
      },
      {
        q: "Có chính sách bảo hành điện tử không?",
        a: "Hiện KORAH chưa công bố hệ thống bảo hành điện tử (e-warranty) riêng trên website. Quy trình bảo hành hiện tại: liên hệ hotline 0903 851 252 để được hướng dẫn, sau đó gửi máy kèm Phiếu gửi hàng bảo hành về xưởng AMMY (mẫu phiếu bên dưới). Xem chi tiết tại trang Bảo hành & Hậu mãi.<br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg\" alt=\"Mẫu Phiếu gửi hàng Bảo hành - Bảo trì KORAH\" loading=\"lazy\"></a><br><a href=\"assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf\" style=\"color:var(--gold)\" target=\"_blank\" rel=\"noopener\">Tải file PDF để in</a>"
      }
    ]
  },
  {
    category: "FAQ 60 câu — 7. Câu hỏi chuyên sâu",
    items: [
      {
        q: "Vì sao KORAH chọn công nghệ Silicon Carbide (SiC) của onsemi USA?",
        a: "EliteSiC™ của Onsemi (Hoa Kỳ) hỗ trợ điện áp 650V–1700V, là một trong những nhà sản xuất bán dẫn SiC hàng đầu thế giới, phù hợp cho SMPS, Active PFC và amplifier công suất lớn. KORAH trang bị SiC MOSFET EliteSiC™ trên 3 model cao cấp: K19PRO, K20S, K20PLUS, nhằm nâng cao hiệu suất và độ bền khi vận hành công suất lớn liên tục nhiều giờ."
      },
      {
        q: "PFC ảnh hưởng như thế nào đến hệ số công suất?",
        a: "Active PFC nâng Power Factor (hệ số công suất) từ mức thấp khoảng 0.5–0.6 (không có PFC) lên 0.95–0.99 — giúp khai thác điện lưới hiệu quả hơn và giảm hài dòng điện (harmonics) lan vào lưới điện, đặc biệt quan trọng với thiết bị công suất lớn như power amplifier chuyên nghiệp."
      },
      {
        q: "Tại sao amplifier Class D hiện đại có thể đạt hiệu suất trên 90%?",
        a: "Vì MOSFET trong Class D chỉ hoạt động ở 2 trạng thái ON (dẫn hoàn toàn) hoặc OFF (ngắt hoàn toàn) — không có trạng thái khuếch đại tuyến tính ở giữa như Class AB/Class H. Điều này giảm đồng thời tổn hao dẫn (conduction loss) và tổn hao chuyển mạch (switching loss), mang lại hiệu suất chuyển đổi công suất rất cao."
      },
      {
        q: "Vì sao không nên vận hành amplifier ở tải 2Ω trong thời gian dài?",
        a: "Tải càng thấp, amplifier càng phải cấp dòng điện càng lớn để giữ công suất. Ở 2Ω, dòng điện gần gấp đôi so với 4Ω, khiến tầng công suất và bộ nguồn hoạt động ở giới hạn cao trong thời gian dài — dễ kích hoạt bảo vệ quá nhiệt/quá dòng, rút ngắn tuổi thọ linh kiện dù amplifier có mạch bảo vệ. KORAH chỉ công bố thông số ở 8Ω và 4Ω vì đây là vùng vận hành an toàn, bền bỉ."
      },
      {
        q: "Làm thế nào để phối ghép amplifier và loa đạt hiệu suất tối ưu?",
        a: "4 nguyên tắc chính: (1) Chọn amplifier lớn hơn tối thiểu 50% công suất RMS loa (headroom, không giới hạn trần). (2) Đúng nhóm kênh — model mã S ưu tiên loa sub, mã PRO/PLUS ưu tiên loa full-range. (3) Dùng tải 8Ω hoặc 4Ω, không dùng 2Ω. (4) Dùng dây loa tiết diện đủ lớn (AWG nhỏ, hạn chế chiều dài) để giữ Damping Factor thực tế tại loa, và cân chỉnh Gain Structure đúng qua toàn bộ chuỗi tín hiệu."
      },
      {
        q: "KORAH sử dụng cơ chế bảo vệ nào để tránh clipping?",
        a: "KORAH có cơ chế Protect/Limit tổng quát (bảo vệ quá tải, quá nhiệt, ngắn mạch — thể hiện qua đèn báo CLP/S.C/D.T trên panel). Để chủ động tránh clipping do dải động lớn của nhạc thực tế, nguyên tắc khuyến nghị là chọn công suất amplifier dư headroom tối thiểu +50% so với RMS loa, thay vì chỉ dựa vào cơ chế limiter tự động — đây là 2 lớp bảo vệ bổ trợ nhau."
      },
      {
        q: "Công suất amplifier nên lớn hơn công suất RMS của loa bao nhiêu phần trăm?",
        a: "Tối thiểu 50% (headroom +50%), không giới hạn trần — dư headroom càng nhiều càng an toàn khi chạy liên tục nhiều giờ. Ví dụ loa full-range RMS 1000W @8Ω cần amplifier từ 1500W/kênh trở lên. Không nên chọn amplifier đúng bằng RMS loa vì dễ chạm giới hạn công suất (clipping) khi chơi nhạc có dải động lớn, gây méo tiếng và tăng nguy cơ hỏng loa."
      },
      {
        q: "Khi nào nên dùng limiter trên DSP?",
        a: "Nên dùng limiter trên DSP/bộ xử lý tín hiệu (đặt trước amplifier trong chuỗi tín hiệu) để giới hạn đỉnh tín hiệu, bảo vệ loa khỏi vượt quá biên độ dịch chuyển tuyến tính (Xmax) — đặc biệt quan trọng khi chơi nhạc có Crest Factor lớn, âm lượng cao, hoặc dùng loa không có bộ lọc high-pass bảo vệ tần số thấp. Đây là lớp bảo vệ độc lập, bổ trợ cho cơ chế Protect/Limit nội bộ của amplifier KORAH."
      },
      {
        q: "KORAH có đáp ứng tốt các loa có độ nhạy thấp không?",
        a: "Có. Loa độ nhạy thấp cần công suất điện lớn hơn để đạt cùng mức SPL so với loa độ nhạy cao (mỗi 3dB chênh lệch độ nhạy tương đương gấp đôi công suất cần thiết). KORAH có nhiều model công suất lớn (đến K20S: 3000W/kênh @8Ω, Bridge Mono 9600W) phù hợp loa độ nhạy thấp, miễn vẫn tuân thủ nguyên tắc headroom +50% theo RMS thực tế của loa."
      },
      {
        q: "Những yếu tố nào ảnh hưởng nhiều nhất đến tuổi thọ của amplifier KORAH?",
        a: "5 yếu tố chính: (1) Vận hành đúng tải khuyến nghị 8Ω/4Ω, không dùng 2Ω. (2) Đủ headroom công suất (+50% so RMS loa) để tránh clip liên tục. (3) Thông gió/tản nhiệt tốt, không che khe gió, tránh môi trường quá nóng/ẩm/bụi. (4) Điện áp nguồn ổn định (PFC hỗ trợ dải rộng nhưng vẫn nên bật/tắt đúng thứ tự: nguồn tín hiệu → mixer → amplifier). (5) Vệ sinh và bảo trì định kỳ (lưới lọc bụi 3–6 tháng/lần, kiểm tra dây nguồn/dây loa/Speakon trước mỗi lần dùng)."
      }
    ]
  }
);
