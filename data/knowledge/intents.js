// ============================================================
// KORAH — Bộ nhận diện ý định (Intent) cho chatbot "Hỏi nhanh KORAH"
// ============================================================
// KHÁC với data/knowledge/*.js thông thường (không push vào KB_TOPICS).
// Đây là lớp ĐỊNH TUYẾN chạy TRƯỚC bước so khớp từ khóa mờ (searchFaq)
// trong js/site-chat.js — chỉ áp dụng cho câu hỏi NGẮN/CHUNG CHUNG
// (tối đa 6 token sau khi bỏ từ dừng) để tránh đụng vào các câu hỏi kỹ
// thuật dài đã khớp đúng từ trước qua searchFaq().
//
// Vì sao cần lớp này: searchFaq() đếm điểm trùng từ khóa, nên câu hỏi
// ngắn (VD: "Bảo hành", "Mua ở đâu") dễ bị khớp NHẦM sang 1 câu hỏi dài
// hơn có trùng vài từ ngẫu nhiên (VD: "đâu" trùng "đầu" sau khi bỏ dấu).
//
// QUY TẮC VIẾT RULE — RẤT QUAN TRỌNG (lỗi hay gặp nhất khi thêm rule
// mới): mỗi "nhóm" (1 mảng con trong `all`) là quan hệ HOẶC giữa các
// token trong đó; nhưng GIỮA CÁC NHÓM là quan hệ VÀ. Một từ tiếng Việt
// ghép 2 âm tiết (VD "trở kháng" = "tro" + "khang") PHẢI tách thành 2
// NHÓM RIÊNG — [["tro"],["khang"]] — để bắt buộc cả 2 âm tiết cùng xuất
// hiện. Nếu viết gộp 1 nhóm — [["tro","khang"]] — nghĩa là CHỈ CẦN 1
// trong 2 từ xuất hiện là khớp, dễ gây khớp nhầm tràn lan (VD chỉ cần
// từ "khang" xuất hiện ở bất kỳ đâu cũng khớp, dù câu hỏi không liên
// quan trở kháng). CHỈ gộp chung 1 nhóm khi các token đó là biến thể
// chính tả của CÙNG 1 từ (VD "ohm"/"om" đều là "ôm/ohm").
//
// tokenize() (trong js/site-chat.js) TỰ ĐỘNG LOẠI BỎ token có độ dài
// <= 1 ký tự — vì vậy KHÔNG dùng chữ cái đơn (VD "d" trong "Class D")
// làm token phân biệt, chúng sẽ không bao giờ khớp.
//
// Cấu trúc mỗi rule:
//   id             : tên định danh (chỉ để debug, không hiển thị)
//   all            : mảng các "nhóm" (xem quy tắc ở trên)
//   none           : (tuỳ chọn) nếu câu hỏi chứa bất kỳ token nào trong
//                    đây thì rule KHÔNG áp dụng
//   sourceQuestion : lấy nguyên văn câu trả lời từ đúng {q,a} đã có sẵn
//                    trong data/faq.js hoặc data/knowledge/*.js (so
//                    khớp CHÍNH XÁC chuỗi q) — không viết lại nội dung.
//   answer         : (chỉ dùng khi KHÔNG có sourceQuestion phù hợp) nội
//                    dung trả lời trực tiếp — dùng cho các trường hợp
//                    trung thực báo "chưa có dữ liệu" thay vì đoán bừa.
// ============================================================

window.KB_INTENTS = [
  // ── Bảo hành: rule cụ thể trước, rule chung "bảo hành" chung chung xếp cuối ──
  {
    id: "bao_hanh_dien_tu",
    all: [["bao"], ["hanh"], ["dien"], ["tu"]],
    sourceQuestion: "Có chính sách bảo hành điện tử không?"
  },
  {
    id: "bao_hanh_loai_tru",
    all: [["bao"], ["hanh"], ["truong"], ["hop"]],
    sourceQuestion: "Những trường hợp nào không được bảo hành?"
  },
  {
    id: "bao_hanh_dieu_kien",
    all: [["bao"], ["hanh"], ["dieu"], ["kien"]],
    sourceQuestion: "Điều kiện bảo hành"
  },
  {
    id: "bao_hanh_quy_trinh",
    all: [["bao"], ["hanh"], ["quy"], ["trinh"]],
    sourceQuestion: "Quy trình bảo hành"
  },
  {
    id: "bao_hanh_phieu_gui",
    all: [["phieu"], ["gui"]],
    sourceQuestion: "Mẫu phiếu gửi hàng bảo hành ở đâu, tải như thế nào?"
  },
  {
    id: "bao_hanh_dia_chi_gui",
    all: [["gui"], ["hang"]],
    sourceQuestion: "Gửi máy bảo hành về địa chỉ nào, liên hệ ai để nhận hàng?"
  },
  {
    id: "bao_hanh_thoi_gian",
    all: [["bao"], ["hanh"], ["bao"], ["lau"]],
    sourceQuestion: "Amplifier KORAH được bảo hành bao lâu?"
  },
  {
    id: "bao_hanh_chung",
    all: [["bao"], ["hanh"]],
    sourceQuestion: "Chính sách bảo hành sản phẩm KORAH như thế nào?"
  },
  {
    id: "sua_chua_dau_hieu",
    all: [["sua"], ["chua"]],
    none: ["bao"],
    sourceQuestion: "Dấu hiệu nào cho thấy máy cần được kiểm tra, sửa chữa?"
  },

  // ── Mua hàng, đại lý, giao hàng, liên hệ ──
  {
    id: "mua_hang",
    all: [["mua"]],
    none: ["sau", "truoc", "khi"],
    sourceQuestion: "Mua sản phẩm KORAH chính hãng ở đâu?"
  },
  {
    id: "dai_ly",
    all: [["dai"], ["ly"]],
    sourceQuestion: "KORAH có đại lý tại tỉnh của tôi không?"
  },
  {
    id: "giao_hang",
    all: [["giao"], ["hang"]],
    sourceQuestion: "Có hỗ trợ giao hàng toàn quốc không?"
  },
  {
    id: "van_chuyen",
    all: [["van"], ["chuyen"]],
    sourceQuestion: "Có hỗ trợ giao hàng toàn quốc không?"
  },
  {
    id: "gia_ca_chung",
    all: [["gia"]],
    none: ["tri"],
    answer: "Giá niêm yết từng model có tại trang Sản phẩm — hoặc hỏi trực tiếp kèm tên model (VD: \"K19PRO giá bao nhiêu\") để chatbot tra ngay. Giá có thể thay đổi theo thời điểm và chính sách đại lý, liên hệ hotline kinh doanh 0932 779 386 để xác nhận chính xác."
  },
  {
    id: "tra_gop",
    all: [["tra"], ["gop"]],
    answer: "Website hiện chưa công bố chính sách trả góp/hình thức thanh toán trả chậm. Vui lòng liên hệ hotline kinh doanh 0932 779 386 hoặc đại lý nơi mua để hỏi trực tiếp về các hình thức thanh toán hỗ trợ."
  },
  {
    id: "khuyen_mai",
    all: [["khuyen"], ["mai"]],
    answer: "Website hiện chưa công bố chương trình khuyến mãi nào. Vui lòng liên hệ hotline kinh doanh 0932 779 386 hoặc đại lý nơi mua để cập nhật ưu đãi hiện hành (nếu có)."
  },
  {
    id: "thanh_toan",
    all: [["thanh"], ["toan"]],
    answer: "Website hiện chưa công bố chi tiết các hình thức thanh toán được hỗ trợ. Vui lòng liên hệ hotline kinh doanh 0932 779 386 hoặc đại lý nơi mua để biết cụ thể."
  },
  {
    id: "lien_he",
    all: [["lien"], ["he"]],
    none: ["bao"],
    sourceQuestion: "Cách liên hệ đội ngũ hỗ trợ kỹ thuật?"
  },
  {
    id: "hotline_dt_email",
    all: [["hotline", "email"]],
    none: ["bao"],
    sourceQuestion: "Cách liên hệ đội ngũ hỗ trợ kỹ thuật?"
  },
  {
    id: "dien_thoai",
    all: [["dien"], ["thoai"]],
    none: ["bao", "ap", "gioi", "han"],
    sourceQuestion: "Cách liên hệ đội ngũ hỗ trợ kỹ thuật?"
  },
  {
    id: "dia_chi_chung",
    all: [["dia"], ["chi"]],
    sourceQuestion: "Gửi máy bảo hành về địa chỉ nào, liên hệ ai để nhận hàng?"
  },
  {
    id: "ho_tro_ky_thuat",
    all: [["ho"], ["tro"], ["ky"], ["thuat"]],
    sourceQuestion: "Có hỗ trợ kỹ thuật sau khi mua không?"
  },
  {
    id: "linh_kien",
    all: [["linh"], ["kien"]],
    sourceQuestion: "Có linh kiện thay thế chính hãng không?"
  },
  {
    id: "model_ban_chay",
    all: [["ban"], ["chay"]],
    sourceQuestion: "Model nào bán chạy nhất của KORAH?"
  },

  // ── Thương hiệu / chất lượng / tiêu chuẩn ──
  {
    id: "xuat_xu",
    all: [["xuat"], ["xu"]],
    sourceQuestion: "KORAH có xuất xứ từ đâu?"
  },
  {
    id: "chat_luong",
    all: [["chat"], ["luong"]],
    none: ["am"],
    sourceQuestion: "Chất lượng KORAH có đảm bảo không?"
  },
  {
    id: "tieu_chuan",
    all: [["tieu"], ["chuan"]],
    none: ["iec"],
    sourceQuestion: "KORAH được sản xuất theo tiêu chuẩn nào?"
  },
  {
    id: "iso",
    all: [["iso"]],
    sourceQuestion: "KORAH được sản xuất theo tiêu chuẩn nào?"
  },

  // ── Ghép loa / trở kháng / công suất ──
  {
    id: "headroom",
    all: [["headroom"]],
    sourceQuestion: "Headroom là gì trong ghép loa với amplifier?"
  },
  {
    id: "bridge_parallel",
    all: [["bridge", "parallel"]],
    sourceQuestion: "Khi nào nên dùng chế độ Bridge, khi nào dùng chế độ Parallel (song song)?"
  },
  {
    id: "tai_2ohm",
    all: [["2"], ["ohm", "om"]],
    sourceQuestion: "Có nên chạy tải 2Ω với amplifier KORAH không?"
  },
  {
    id: "tro_khang_toi_uu",
    all: [["tro"], ["khang"], ["bao", "toi", "uu"]],
    sourceQuestion: "Trở kháng loa bao nhiêu là tối ưu cho KORAH?"
  },
  {
    id: "tro_khang",
    all: [["tro"], ["khang"]],
    sourceQuestion: "Trở kháng là gì?"
  },
  {
    id: "gain_structure",
    all: [["gain"]],
    sourceQuestion: "Gain Structure là gì, vì sao ảnh hưởng đến âm thanh?"
  },
  {
    id: "crest_factor",
    all: [["crest"]],
    sourceQuestion: "Crest Factor là gì?"
  },
  {
    id: "power_compression",
    all: [["compression"]],
    sourceQuestion: "Power Compression ở loa là gì?"
  },
  {
    id: "damping_factor",
    all: [["damping"]],
    sourceQuestion: "Damping Factor bao nhiêu là đủ, cao hơn có tốt hơn không?"
  },

  // ── Công nghệ: PFC / SiC / Class D ──
  // Lưu ý: KHÔNG có rule chung "pfc"/"sic" đơn từ ở đây — vì kho tri
  // thức PFC/SiC có rất nhiều câu hỏi chuyên sâu khác nhau (Passive vs
  // Active, CCM/DCM, IEC 61000-3-2, SiC MOSFET/Schottky Diode...), một
  // rule "chỉ cần chứa từ PFC/SiC" sẽ nuốt mất toàn bộ các câu hỏi đó.
  // Câu hỏi bare "PFC"/"SiC"/"PFC là gì" đã được searchFaq() (so khớp
  // từ khóa mờ) xử lý đúng từ trước — đã kiểm chứng qua test, không
  // cần rule riêng ở lớp intent.
  {
    id: "so_sanh_sic_igbt",
    all: [["sic"], ["igbt"]],
    sourceQuestion: "Silicon Carbide có gì nổi bật hơn IGBT?"
  },
  {
    id: "hieu_suat",
    all: [["hieu"], ["suat"]],
    sourceQuestion: "Hiệu suất của amplifier Class D là bao nhiêu?"
  },
  {
    id: "tiet_kiem_dien",
    all: [["tiet"], ["kiem"]],
    sourceQuestion: "KORAH có tiết kiệm điện hơn không?"
  },
  {
    id: "vpl",
    all: [["vpl"]],
    sourceQuestion: "VPL trên K16PRO hoạt động như thế nào?"
  },

  // ── Vận hành / độ bền / bảo trì / lắp đặt / an toàn ──
  {
    id: "bao_tri_ve_sinh",
    all: [["ve"], ["sinh"]],
    sourceQuestion: "Bảo trì định kỳ"
  },
  {
    id: "bao_tri",
    all: [["bao"], ["tri"]],
    none: ["hanh"],
    sourceQuestion: "Bảo trì định kỳ"
  },
  {
    id: "lap_dat",
    all: [["lap"], ["dat"]],
    none: ["khoang", "cach"],
    sourceQuestion: "Có hướng dẫn lắp đặt và cài đặt không?"
  },
  {
    id: "an_toan",
    all: [["an"], ["toan"]],
    sourceQuestion: "Những lưu ý an toàn"
  },
  {
    id: "ngan_mach",
    all: [["ngan"], ["mach"]],
    sourceQuestion: "Có bảo vệ ngắn mạch không?"
  },
  {
    id: "quat_lam_mat",
    all: [["quat"]],
    sourceQuestion: "Quạt làm mát hoạt động như thế nào?"
  },
  {
    id: "do_ben_tuoi_tho",
    all: [["tuoi"], ["tho"]],
    sourceQuestion: "Những yếu tố nào ảnh hưởng nhiều nhất đến tuổi thọ của amplifier KORAH?"
  },
  {
    id: "tai_lieu_datasheet",
    all: [["tai"], ["lieu"]],
    sourceQuestion: "Làm thế nào để tải tài liệu hướng dẫn vận hành?"
  },
  {
    id: "datasheet",
    all: [["datasheet"]],
    sourceQuestion: "Làm thế nào để tải tài liệu hướng dẫn vận hành?"
  },
  {
    id: "karaoke",
    all: [["karaoke"]],
    sourceQuestion: "KORAH có phù hợp với karaoke kinh doanh không?"
  }
];
