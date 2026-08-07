// ============================================================
// KORAH — Kho tri thức chuyên môn: Active PFC (Power Factor Correction)
// ============================================================
// Nguồn: tài liệu "Active PFC trong ứng dụng Power Amplifier" — tổng
// hợp từ tài liệu ngành (bài báo kỹ thuật, patent, tiêu chuẩn IEC, tài
// liệu ứng dụng của hãng bán dẫn/linh kiện: Monolithic Power Systems,
// EDN, EE Power, Infineon, Ametherm, TDK...) và bài viết kỹ thuật ngành
// pro-audio (LEA Professional, Carvin Audio, NuPrime Audio).
// Là 1 module trong kho tri thức data/knowledge/ — xem
// data/knowledge/manifest.js để biết cách đăng ký module mới.
// Chỉ dùng cho chatbot "Hỏi nhanh KORAH" — KHÔNG render thành
// accordion trên support.html (khác với data/faq.js).
//
// Lưu ý biên tập quan trọng: đây là kiến thức NGÀNH nói chung (áp dụng
// cho mọi power supply có PFC), KHÔNG phải thông số nội bộ mạch PFC của
// KORAH. KHÔNG suy diễn topology cụ thể (Boost cổ điển/Interleaved/
// Totem-pole) hay chế độ dẫn dòng (CCM/DCM/CrCM) mà KORAH đang dùng —
// data/products.js chỉ công bố: KORAH trang bị PFC/Active PFC/PFC
// Autovolt trên toàn bộ K-Series, K16PRO & K19PRO có dải điện áp hiệu
// quả 140V–270V, K19S có dải hoạt động AC 140V–240V. Không khẳng định
// thêm thông số (tần số chuyển mạch, loại IC điều khiển...) ngoài đây.
// ============================================================

(window.KB_TOPICS = window.KB_TOPICS || []).push(
  {
    category: "PFC — Kiến thức nền tảng",
    items: [
      {
        q: "Power Factor (hệ số công suất) là gì?",
        a: "Power Factor (PF) là tỷ số giữa công suất thực (Watt — điện năng thực sự sinh công) và công suất biểu kiến (Volt-Ampe — tổng điện áp × dòng điện lưới phải cấp). PF lý tưởng bằng 1: dòng điện và điện áp đồng pha, lưới điện cấp năng lượng hiệu quả nhất. Bộ nguồn không có PFC thường chỉ đạt PF khoảng 0.5–0.6."
      },
      {
        q: "Vì sao amplifier không có PFC là tải \"xấu\" với lưới điện?",
        a: "Bộ nguồn không PFC dùng cầu diode nạp thẳng vào tụ lọc lớn, chỉ hút dòng điện trong khoảng thời gian rất ngắn quanh đỉnh sóng sin — tạo dòng điện dạng xung nhọn thay vì hình sin mượt. Đây là tải phi tuyến, sinh ra hài bậc cao (harmonics) lan vào lưới điện, gây tổn hao thêm trên đường dây và làm méo dạng sóng điện áp cho thiết bị khác dùng chung lưới."
      },
      {
        q: "Passive PFC và Active PFC khác nhau thế nào?",
        a: "Passive PFC dùng cuộn cảm lớn mắc nối tiếp ở ngõ vào để làm mượt dòng điện — cải thiện PF lên khoảng 0.7–0.8, chi phí thấp nhưng cồng kềnh, chỉ hiệu quả ở công suất thấp-trung bình. Active PFC dùng mạch chuyển mạch tần số cao (thường là Boost Converter) với vòng điều khiển buộc dòng điện bám theo điện áp vào — đạt PF 0.95–0.99, đáp ứng tiêu chuẩn hài dòng nghiêm ngặt và cho phép thiết kế dải điện áp vào rộng (universal input/autovolt). KORAH trang bị Active PFC / PFC Autovolt trên toàn bộ model K-Series."
      },
      {
        q: "Active PFC hoạt động theo nguyên lý nào?",
        a: "Topology phổ biến nhất là Boost PFC: sau cầu chỉnh lưu, một cuộn cảm nối tiếp với MOSFET và diode tạo thành mạch tăng áp. Mạch điều khiển đo dòng điện và điện áp ngõ vào theo thời gian thực, điều chỉnh chu kỳ đóng/mở của MOSFET để dòng điện trung bình luôn bám theo dạng sóng điện áp vào — kỹ thuật này gọi là Average Current Mode Control."
      },
      {
        q: "Các chế độ dẫn dòng CCM, DCM, BCM trong PFC là gì?",
        a: "CCM (Continuous Conduction Mode): dòng điện không về 0 giữa các chu kỳ chuyển mạch — gợn dòng và méo hài dòng điện thấp, phù hợp công suất lớn. DCM (Discontinuous Conduction Mode): dòng điện về 0 hoàn toàn giữa các chu kỳ — đơn giản hơn nhưng dòng đỉnh cao hơn, thường dùng ở công suất thấp. BCM/CrCM (Boundary/Critical Conduction Mode): biên giới giữa CCM và DCM. Ở công suất lớn (pro-audio), CCM thường được ưu tiên."
      },
      {
        q: "Có những topology Active PFC phổ biến nào?",
        a: "Boost PFC cổ điển (1 pha, 1 công tắc): đơn giản, chi phí thấp, phù hợp công suất thấp-trung bình. Interleaved Boost PFC: 2 hoặc nhiều mạch boost chạy song song lệch pha, chia sẻ dòng điện và giảm gợn dòng — phù hợp công suất trung-cao. Totem-pole Bridgeless PFC: loại bỏ cầu diode chỉnh lưu đầu vào, cần MOSFET tốc độ cao (SiC/GaN) — phù hợp công suất cao, hiệu suất cực đại."
      },
      {
        q: "Tiêu chuẩn IEC 61000-3-2 là gì?",
        a: "Là tiêu chuẩn quốc tế giới hạn hài dòng điện (harmonic current) mà thiết bị điện/điện tử được phép phát ngược vào lưới điện công cộng, áp dụng cho thiết bị có dòng vào đến 16A/pha. Nếu không có PFC (hoặc chỉ Passive PFC), dòng điện méo dạng của bộ nguồn dễ vượt giới hạn hài cho phép — đặc biệt quan trọng với thiết bị công suất lớn như power amplifier chuyên nghiệp khi xuất khẩu sang thị trường kiểm soát tiêu chuẩn này."
      },
      {
        q: "Dòng khởi động (Inrush Current) là gì, kiểm soát thế nào?",
        a: "Khi bật nguồn, tụ tích năng chưa nạp điện hoạt động gần như đoản mạch trong khoảnh khắc đầu tiên, gây dòng điện khởi động lớn hơn nhiều lần dòng hoạt động bình thường — có thể làm hỏng diode chỉnh lưu hoặc rút ngắn tuổi thọ tụ điện. Giải pháp phổ biến là dùng nhiệt điện trở NTC (Negative Temperature Coefficient) mắc nối tiếp ở ngõ vào: khi nguội có điện trở cao để giới hạn dòng nạp tụ, khi nóng lên điện trở giảm nhanh, không gây tổn hao đáng kể khi máy chạy bình thường."
      },
      {
        q: "Bulk Capacitor và Hold-up Time là gì?",
        a: "Bulk capacitor là tụ điện lớn sau tầng chỉnh lưu/PFC, dự trữ năng lượng cấp cho tầng khuếch đại công suất giữa các chu kỳ sóng sin điện lưới. Hold-up Time là thời gian bộ nguồn còn duy trì điện áp ra ổn định sau khi mất nguồn điện lưới đột ngột — hold-up time càng dài, thiết bị càng chịu đựng tốt các sự cố điện lưới ngắn hạn mà không bị sụt áp/tắt máy đột ngột."
      }
    ]
  },
  {
    category: "PFC — Vì sao quan trọng với power amplifier công suất lớn",
    items: [
      {
        q: "Vì sao Active PFC đặc biệt quan trọng với amplifier Class D công suất lớn?",
        a: "Power amplifier Class D công suất lớn có công suất tiêu thụ tức thời dao động rất mạnh theo tín hiệu âm nhạc — từ gần như không tải đến đỉnh công suất cực đại (tiếng bass/kick drum) chỉ trong mili-giây. Đây là tải xung ở quy mô lớn hơn nhiều so với PSU máy tính hay đèn LED. Vì vậy tầng PFC cho amplifier cần: đáp ứng động nhanh để bắt kịp thay đổi tải đột ngột, bulk capacitor đủ lớn để bù đắp khoảng trễ, và linh kiện chuyển mạch tổn hao thấp/chịu nhiệt tốt (SiC MOSFET) vì amplifier sự kiện thường chạy công suất cao liên tục nhiều giờ."
      },
      {
        q: "PFC liên quan gì đến hiện tượng bass transient (tiếng bass đánh mạnh)?",
        a: "Khi có một cú đánh bass mạnh, dòng điện amplifier rút từ bulk capacitor tăng vọt trong thời gian rất ngắn. Nếu PFC không đủ nhanh bù lại năng lượng đã rút ra, điện áp bus DC có thể sụt tạm thời — biểu hiện thành hiện tượng nén động (dynamic compression) ở các nốt bass liên tiếp dồn dập, hoặc trong trường hợp cực đoan là kích hoạt bảo vệ quá dòng/quá áp không cần thiết. Thiết kế PFC tốt cho pro-audio cần cân bằng giữa đáp ứng nhanh và dung lượng bulk capacitor đủ lớn để \"đệm\" cho các transient cực ngắn."
      },
      {
        q: "Autovolt / Universal Input là gì, vì sao có lợi cho thị trường Việt Nam?",
        a: "Vì mạch Boost PFC hoạt động dựa trên điện áp đã chỉnh lưu (không phụ thuộc cứng vào 1 mức điện áp AC cố định như biến áp tuyến tính), thiết kế Active PFC cho phép mở rộng dải điện áp đầu vào chấp nhận được (autovolt/universal input) mà không cần mạch chuyển tap điện áp thủ công. Đây là lợi ích lớn cho thị trường điện lưới không ổn định như nhiều khu vực tại Việt Nam — đặc biệt vùng xa hoặc dùng máy phát điện cho sự kiện lưu động: amplifier tự thích nghi với dải điện áp rộng, giảm nhu cầu ổn áp ngoài rời, giảm rủi ro hư hỏng khi điện áp lưới dao động."
      },
      {
        q: "Active PFC có nhược điểm gì không?",
        a: "Có 3 đánh đổi chính: (1) Chi phí linh kiện và độ phức tạp mạch cao hơn Passive PFC hoặc không có PFC. (2) Nhiễu điện từ (EMI) do tần số chuyển mạch cao, cần mạch lọc EMI đầu vào thiết kế cẩn thận. (3) Bản thân mạch PFC cũng tiêu thụ điện năng (tổn hao chuyển mạch, tổn hao dẫn) nên hiệu suất không đạt 100% — dù tổng thể vẫn hiệu quả hơn đáng kể so với thiết kế không PFC ở công suất lớn."
      }
    ]
  },
  {
    category: "PFC — Áp dụng vào KORAH",
    items: [
      {
        q: "KORAH dùng loại PFC nào?",
        a: "Toàn bộ model K-Series (K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS) đều trang bị PFC (Power Factor Correction) — K16PRO và K19PRO dùng Active PFC / PFC Autovolt với dải điện áp hiệu quả 140V–270V, K19S hoạt động ổn định ở dải AC 140V–240V. Đây chính là ứng dụng thực tế của Autovolt/Universal Input giúp máy hoạt động ổn định trên dải điện áp rộng."
      },
      {
        q: "PFC giúp gì cho khách hàng khi vận hành thực tế?",
        a: "PFC giúp máy hoạt động ổn định trên dải điện áp rộng, giảm nguy cơ nhảy CB (circuit breaker) khi bật nhiều máy cùng lúc trong dàn âm thanh sự kiện, và giữ công suất ổn định ngay cả khi điện lưới dao động — đặc biệt hữu ích ở khu vực điện lưới không ổn định hoặc khi dùng máy phát điện."
      },
      {
        q: "PFC và SiC MOSFET trên KORAH có liên quan gì nhau không?",
        a: "Có — SiC MOSFET (dùng trên K19PRO, K20S, K20PLUS) mang lại tổn hao chuyển mạch thấp và chịu nhiệt tốt, phù hợp cho tầng PFC hoạt động ở công suất lớn, liên tục nhiều giờ. Đây là lý do các model cao cấp KORAH kết hợp cả 2 công nghệ PFC và SiC để tối ưu độ bền và hiệu suất khi chạy sự kiện dài giờ."
      }
    ]
  }
);
