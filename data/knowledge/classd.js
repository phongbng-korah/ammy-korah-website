// ============================================================
// KORAH — Kho tri thức chuyên môn: Class D Amplifier
// ============================================================
// Nguồn: bộ tài liệu CLASS_D_Overview, Working_Principle,
// Hardware_Design, Performance, Applications, Leading_Manufacturers,
// References — tổng hợp từ tài liệu ngành (Texas Instruments, Analog
// Devices, Infineon, AES Papers/Patents, phân tích thị trường ngành
// pro-audio).
// Là 1 module trong kho tri thức data/knowledge/ — xem
// data/knowledge/manifest.js để biết cách đăng ký module mới.
// Chỉ dùng cho chatbot "Hỏi nhanh KORAH" — KHÔNG render thành
// accordion trên support.html (khác với data/faq.js).
//
// Lưu ý biên tập: đây là kiến thức NGÀNH Class D nói chung (đa hãng,
// đa tầng cung ứng công nghệ). KORAH xác nhận dùng công nghệ khuếch
// đại Class D trên toàn bộ K-Series (K16S, K16PRO, K19S, K19PRO, K20S,
// K20PLUS — xem data/products.js, "Class": "D") và SiC MOSFET EliteSiC™
// của Onsemi trên K19PRO/K20S/K20PLUS. KHÔNG suy diễn topology mạch cụ
// thể (loại vòng điều khiển, tần số chuyển mạch, IC/module hãng nào)
// mà KORAH đang dùng nếu tài liệu chính thức chưa công bố — KORAH tự
// thiết kế mạch khuếch đại hoàn chỉnh (không phải module OEM mua sẵn
// từ hãng khác).
// ============================================================

(window.KB_TOPICS = window.KB_TOPICS || []).push(
  {
    category: "Class D — Kiến thức nền tảng",
    items: [
      {
        q: "Class D Amplifier là gì?",
        a: "Class D là kiến trúc khuếch đại công suất hoạt động theo nguyên lý đóng cắt (switching), dùng MOSFET và điều chế độ rộng xung PWM thay vì khuếch đại tuyến tính liên tục như Class AB/Class H. Nhờ MOSFET chỉ hoạt động ở 2 trạng thái ON/OFF, tổn hao công suất giảm đáng kể — hiệu suất thường đạt trên 90%, tỏa nhiệt thấp, kích thước nhỏ mà vẫn đạt công suất lớn. KORAH dùng công nghệ Class D trên toàn bộ dòng K-Series."
      },
      {
        q: "Class D hoạt động theo nguyên lý nào?",
        a: "Luồng tín hiệu: Audio Input → PWM Modulator (tạo chuỗi xung có độ rộng thay đổi theo biên độ tín hiệu) → Gate Driver (điều khiển MOSFET đóng/ngắt tốc độ cao) → MOSFET Output Stage (tạo tín hiệu công suất dạng PWM) → LC Output Filter (loại bỏ thành phần chuyển mạch tần số cao, khôi phục tín hiệu âm thanh analog) → Loa."
      },
      {
        q: "PWM trong Class D là gì?",
        a: "PWM (Pulse Width Modulation — điều chế độ rộng xung) thay đổi độ rộng xung theo biên độ tín hiệu âm thanh: biên độ lớn → xung rộng, biên độ nhỏ → xung hẹp. Đây là cách Class D mã hóa thông tin tín hiệu âm thanh thành dạng sóng đóng/cắt trước khi khuếch đại công suất."
      },
      {
        q: "Vì sao MOSFET switching giúp Class D hiệu suất cao?",
        a: "MOSFET trong Class D chỉ làm việc ở 2 trạng thái: ON (dẫn hoàn toàn) hoặc OFF (ngắt hoàn toàn) — không có trạng thái khuếch đại tuyến tính ở giữa như Class AB. Điều này giảm đồng thời tổn hao dẫn (conduction loss) và tổn hao chuyển mạch (switching loss), mang lại hiệu suất rất cao, thường trên 90%."
      },
      {
        q: "LC Output Filter trong Class D có vai trò gì?",
        a: "Bộ lọc LC (cuộn cảm + tụ điện) ở ngõ ra loại bỏ thành phần chuyển mạch tần số cao (thường 250kHz–1.5MHz) và khôi phục tín hiệu âm thanh dạng analog mượt trước khi đưa vào loa — đồng thời giúp giảm nhiễu điện từ (EMI) phát xạ ra ngoài."
      },
      {
        q: "Class D có ưu điểm gì so với Class AB, Class H?",
        a: "Hiệu suất cao hơn hẳn (thường >90% so với Class AB/H thấp hơn nhiều), tỏa nhiệt thấp hơn nên tản nhiệt/quạt gọn hơn, kích thước và trọng lượng máy nhẹ hơn đáng kể mà vẫn đạt công suất lớn — đây là lý do Class D là công nghệ chủ đạo trong pro-audio hiện đại, và cũng là công nghệ KORAH lựa chọn cho toàn bộ K-Series."
      }
    ]
  },
  {
    category: "Class D — Thiết kế phần cứng & hiệu năng",
    items: [
      {
        q: "Thiết kế phần cứng Class D gồm những khối chính nào?",
        a: "4 khối chính: (1) PWM Controller — tạo tín hiệu PWM từ tín hiệu âm thanh, đồng bộ tần số chuyển mạch; (2) Gate Driver — khuếch đại tín hiệu điều khiển, đóng/ngắt MOSFET nhanh, tạo Dead Time để tránh bắn chéo (Shoot-through); (3) MOSFET Output Stage — cấu hình Half Bridge hoặc Full Bridge, chịu trách nhiệm khuếch đại công suất; (4) LC Output Filter — loại bỏ PWM tần số cao, khôi phục tín hiệu analog, giảm EMI."
      },
      {
        q: "Dead Time trong mạch Class D là gì, vì sao quan trọng?",
        a: "Dead Time là khoảng thời gian ngắn Gate Driver đảm bảo cả 2 MOSFET trong cấu hình Half/Full Bridge không cùng dẫn điện một lúc, tránh hiện tượng Shoot-through (bắn chéo, gây đoản mạch tức thời). Dead Time quá lớn làm tăng méo tiếng (THD), Dead Time quá nhỏ có thể gây Shoot-through hỏng MOSFET — đây là 1 trong các thông số cần cân chỉnh chính xác khi thiết kế mạch Class D."
      },
      {
        q: "Thiết kế PCB cho Class D cần lưu ý gì?",
        a: "Đường mạch công suất cần ngắn và rộng; tách riêng Mass công suất và Mass tín hiệu; đặt tụ decoupling sát MOSFET; giảm diện tích vòng dòng chuyển mạch; tối ưu khoảng cách để giảm nhiễu điện từ (EMI). Thiết kế PCB tốt ảnh hưởng trực tiếp đến hiệu suất, độ méo, độ ổn định và khả năng chống nhiễu của amplifier."
      },
      {
        q: "Các chỉ tiêu đánh giá hiệu năng Class D là gì?",
        a: "5 chỉ tiêu chính: Efficiency (hiệu suất chuyển đổi công suất, thường >90%), THD — Total Harmonic Distortion (tổng méo hài, phụ thuộc PWM/Dead Time/MOSFET/LC Filter/Feedback), SNR — Signal to Noise Ratio (tỷ số tín hiệu/nhiễu, phụ thuộc thiết kế PCB và nguồn), Damping Factor (khả năng kiểm soát loa, phụ thuộc trở kháng đầu ra/feedback/thiết kế nguồn), và EMI (nhiễu điện từ, sinh ra từ MOSFET switching)."
      },
      {
        q: "Damping Factor là gì, vì sao quan trọng?",
        a: "Damping Factor thể hiện khả năng amplifier kiểm soát chuyển động của màng loa (đặc biệt loa bass) — giá trị càng cao, bass càng chặt và ít bị rền. Bị ảnh hưởng bởi trở kháng đầu ra của amplifier, mạch feedback và thiết kế nguồn. Đây là lý do các model công suất lớn của KORAH công bố rõ chỉ số Damping Factor trong thông số kỹ thuật (VD: K19S, K20S đạt Damping Factor >2000 @8Ω)."
      },
      {
        q: "EMI trong Class D phát sinh từ đâu, kiểm soát thế nào?",
        a: "Nguồn phát sinh EMI: MOSFET switching tốc độ cao, dv/dt cao (điện áp thay đổi nhanh), diện tích vòng dòng chuyển mạch lớn. Giải pháp kiểm soát: layout PCB tối ưu, LC Filter ngõ ra, EMI Filter ngõ vào, chọn Gate Driver phù hợp — đều là các yếu tố thiết kế phần cứng chuẩn ngành để giảm nhiễu lan ra ngoài và ảnh hưởng thiết bị khác."
      }
    ]
  },
  {
    category: "Class D — Ứng dụng pro-audio & xu hướng",
    items: [
      {
        q: "Class D được ứng dụng ở đâu trong pro-audio?",
        a: "Amplifier biểu diễn chuyên nghiệp, loa Active, hệ thống Line Array, Subwoofer công suất lớn, DSP Amplifier, thiết bị Touring Audio và Fixed Installation (lắp đặt cố định) — đúng nhóm ứng dụng KORAH K-Series đang phục vụ (sân khấu, sự kiện, hội trường tại Việt Nam)."
      },
      {
        q: "Kiến trúc hệ thống SMPS kết hợp Class D hoạt động thế nào?",
        a: "Chuỗi mạch: AC Input → EMI Filter → Bridge Rectifier → Active PFC → LLC/SMPS → ±DC Rail → Class D Output Stage → Loa (kèm mạch bảo vệ loa - Speaker Protection). Kết hợp này mang lại hiệu suất toàn hệ thống cao, trọng lượng nhẹ, công suất lớn, giảm phát nhiệt và dễ tích hợp DSP — đúng với thiết kế PFC + Class D trên K-Series KORAH."
      },
      {
        q: "Yêu cầu thiết kế chung cho amplifier Class D pro-audio là gì?",
        a: "Nguồn SMPS ổn định, MOSFET chất lượng cao, layout PCB tối ưu, EMI thấp, có đầy đủ bảo vệ quá dòng/quá áp/quá nhiệt, và quản lý nhiệt hiệu quả — đây cũng là các tiêu chí thiết kế mà KORAH áp dụng trên toàn bộ K-Series (PFC ổn định nguồn, SiC MOSFET trên model cao cấp, cơ chế Protect/Limit, tản nhiệt front-to-back nhiều quạt DC)."
      },
      {
        q: "Xu hướng công nghệ Class D hiện nay là gì?",
        a: "SiC MOSFET trong tầng SMPS/PFC (đúng như KORAH đang áp dụng trên K19PRO/K20S/K20PLUS), GaN cho tầng nguồn, DSP tích hợp, điều khiển số, và mật độ công suất ngày càng cao (công suất lớn hơn trong kích thước nhỏ hơn) — xu hướng chung của ngành amplifier Class D công suất lớn toàn cầu."
      }
    ]
  },
  {
    category: "Class D — Nhà sản xuất & vị trí KORAH trong ngành (kiến thức ngành)",
    items: [
      {
        q: "Ngành công nghiệp Class D vận hành theo mấy tầng cung ứng công nghệ?",
        a: "3 tầng: Tầng 1 — nhà sản xuất module/IC khuếch đại Class D hoàn chỉnh bán cho hãng khác tích hợp (OEM, VD: ICEpower, Hypex, Pascal Audio, Purifi Audio — chủ yếu phân khúc Hi-Fi). Tầng 2 — nhà sản xuất chip bán dẫn nền tảng: driver IC, MOSFET, GaN (VD: Infineon MERUS™, Texas Instruments, Analog Devices, onsemi). Tầng 3 — thương hiệu amplifier PA/pro-audio hoàn chỉnh, tự thiết kế mạch dùng linh kiện từ Tầng 2 (VD: Powersoft, Lab.gruppen, Crown, QSC, và KORAH)."
      },
      {
        q: "KORAH thuộc tầng nào trong ngành Class D?",
        a: "KORAH thuộc Tầng 3 — tự thiết kế amplifier hoàn chỉnh cho ứng dụng loa sự kiện/karaoke/hội nghị tại thị trường Việt Nam, không phải nhà bán module OEM. Linh kiện công suất dùng SiC MOSFET Onsemi (Tầng 2) trên các model cao cấp K19PRO/K20S/K20PLUS. Hiện chưa có dữ liệu xác nhận KORAH dùng module/IC điều khiển Class D cụ thể nào khác từ Tầng 1 hoặc Tầng 2 ngoài SiC MOSFET Onsemi."
      },
      {
        q: "Các thương hiệu pro-audio lớn nào cùng tầng với KORAH (Tầng 3)?",
        a: "Powersoft (Ý — tiên phong PWM Class D độ tin cậy cao trong pro-audio), Lab.gruppen (Thụy Điển — mạnh DSP tích hợp), Crown thuộc Harman/Samsung (Mỹ), QSC (Mỹ), d&b audiotechnik (Đức — tích hợp ampli trong loa), Linea Research (Anh), Dynacord (Đức). Đây là kiến thức ngành tham chiếu để hiểu bối cảnh cạnh tranh — không phải xác nhận KORAH dùng công nghệ giống các hãng này."
      },
      {
        q: "KORAH định vị ở phân khúc nào so với các thương hiệu quốc tế?",
        a: "Theo phân tích thị trường ngành: Crown/QSC/Powersoft dẫn đầu phân khúc touring và lắp đặt cao cấp; Behringer/Yamaha chiếm phần lớn phân khúc phổ thông/tầm trung; các thương hiệu châu Á mới nổi (bao gồm nhóm sản xuất tại Việt Nam như KORAH) cạnh tranh ở phân khúc giá trị-hiệu năng (cost-effective, reliable) cho thị trường lắp đặt vừa và tour diễn tầm trung — đúng định vị hiện tại của KORAH trên thị trường Việt Nam."
      }
    ]
  }
);
