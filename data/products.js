// ============================================================
// AMMY / KORAH — Dữ liệu sản phẩm
// ============================================================
// Hướng dẫn quản lý:
//   visible: false  → ẩn sản phẩm khỏi website (không xóa data)
//   visible: true   → hiện sản phẩm
//   status: "active"       → Đang phân phối
//   status: "coming-soon"  → Sắp ra mắt
//   status: "discontinued" → Ngưng sản xuất
// Sau khi chỉnh file này, upload lên hosting là xong.
// ============================================================

const PRODUCTS = [

  // ─── KORAH K Series ─────────────────────────────────────
  {
    id: "korah-k16s",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K16S",
    tagline: "Ampli 2 kênh 1600W x2 (8Ω Hi) — Bridge 5700W, gọn nhẹ cho sub và sự kiện lưu động",
    status: "active",
    visible: true,
    price: "16.000.000đ",
    warranty: "Bảo hành 2 năm + Bảo trì 3 năm",
    image: "assets/products/k16s-front.png",
    gallery: ["assets/products/stack-k16.jpg"],
    tech: ["classD", "pfc"],
    specs: {
      "Số kênh": "2 kênh",
      "Bộ nguồn": "PFC (Power Factor Correction) — ổn định điện áp đầu vào",
      "Công suất 8Ω Stereo RMS": "Hi 1600W x2 / Lo 1300W x2",
      "Công suất 4Ω Stereo RMS": "Hi 2800W x2 / Lo 2250W x2",
      "Bridge Mono 8Ω": "Hi 5700W / Lo 4500W",
      "Điện áp ra Peak": "162V (VPL 162V / 145V)",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Tản nhiệt": "Front-to-back, 2 quạt DC",
      "Trọng lượng": "8.5 kg (net) / 9.5 kg (gross)"
    },
    description: "Model 2 kênh gọn nhẹ nhất dòng K-Series, tối ưu cho subwoofer. Nguồn PFC ổn định điện áp, bảo vệ thông minh chống chạm tải, quá nhiệt — điểm khởi đầu tin cậy cho hệ thống âm thanh chuyên nghiệp.",
    features: [
      "Bridge Mono 8Ω đạt 5700W — kéo sub đơn lớn hoặc cụm sub đôi",
      "Gọn nhẹ nhất dòng 2 kênh (8.5kg) — dễ vận chuyển cho đơn vị cho thuê",
      "Nguồn PFC ổn định trước điện lưới không ổn định"
    ],
    manuals: [{ title: "Datasheet K16S — Bản ngang (PDF)", file: "assets/manuals/datasheet-k16s-16x9.pdf" }, { title: "Datasheet K16S — Bản dọc (PDF)", file: "assets/manuals/datasheet-k16s-9x16.pdf" }],
    datasheetImages: { "16x9": "assets/datasheets/k16s-16x9.png", "9x16": "assets/datasheets/k16s-9x16.png" },
    applications: ["Sub bass phòng karaoke kinh doanh, bar không gian vừa", "Sự kiện lưu động quy mô nhỏ-vừa"]
  },

  {
    id: "korah-k16pro",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K16PRO",
    tagline: "Ampli 4 kênh 1250W x4 (8Ω Hi) — VPL Technology, linh hoạt Full-range + Line Array",
    status: "active",
    visible: true,
    price: "18.000.000đ",
    warranty: "Bảo hành 2 năm + Bảo trì 3 năm",
    image: "assets/products/k16pro-front.png",
    gallery: ["assets/products/rear-panel.png", "assets/products/cautao-k16pro.jpg", "assets/products/stack-k16.jpg"],
    tech: ["classD", "pfc"],
    specs: {
      "Số kênh": "4 kênh",
      "Bộ nguồn": "Active PFC — dải điện áp hiệu quả 140V–270V",
      "Công suất 8Ω Stereo RMS": "Hi 1250W x4 / Lo 1050W x4",
      "Công suất 4Ω Stereo RMS": "Hi 2000W x4 / Lo 1850W x4",
      "Bridge Mono 8Ω": "Hi 4000W x2 / Lo 3700W x2",
      "Điện áp ra Peak": "141V (VPL 141V / 130V)",
      "Damping Factor": ">450 @8Ω, 20Hz–200Hz",
      "Dải điện áp PFC": "140V – 270V",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Tản nhiệt": "Front-to-back, 3 quạt DC",
      "Trọng lượng": "9.6 kg (net) / 10.8 kg (gross)"
    },
    description: "Model 4 kênh với Active PFC và VPL Technology — một thân máy đảm nhiệm cả Full-range lẫn Line Array, giảm số lượng thiết bị cho đơn vị touring và rental chuyên nghiệp.",
    features: [
      "4 kênh độc lập — phối ghép Full-range + Line Array không cần 2 máy riêng",
      "VPL Technology — khả năng tải vượt trội ở điện áp cao, kéo dàn line array dài",
      "Active PFC dải rộng 140V–270V — ổn định cả khi dùng máy phát điện"
    ],
    manuals: [{ title: "Datasheet K16PRO — Bản ngang (PDF)", file: "assets/manuals/datasheet-k16pro-16x9.pdf" }, { title: "Datasheet K16PRO — Bản dọc (PDF)", file: "assets/manuals/datasheet-k16pro-9x16.pdf" }, { title: "Cấu tạo bên trong K16PRO", file: "assets/products/cautao-k16pro.jpg" }],
    datasheetImages: { "16x9": "assets/datasheets/k16pro-16x9.png", "9x16": "assets/datasheets/k16pro-9x16.png" },
    applications: ["Dàn line array sân khấu sự kiện, hội nghị vừa-lớn", "Hệ thống cố định hội trường, sân khấu biểu diễn", "Đơn vị touring & rental cần thiết bị 4 kênh gọn"]
  },

  {
    id: "korah-k19s",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K19S",
    tagline: "Ampli 2 kênh 2200W x2 (8Ω Hi) — Bridge 6800W, Damping Factor >2000, dải điện áp rộng",
    status: "active",
    visible: true,
    price: "20.000.000đ",
    warranty: "Bảo hành 2 năm + Bảo trì 3 năm",
    image: "assets/products/k19s-front.png",
    gallery: ["assets/products/stack-k19.jpg"],
    tech: ["classD", "pfc"],
    specs: {
      "Số kênh": "2 kênh",
      "Bộ nguồn": "PFC — hoạt động ổn định AC 140V–240V",
      "Công suất 8Ω Stereo RMS": "Hi 2200W x2 / Lo 1500W x2",
      "Công suất 4Ω Stereo RMS": "Hi 3400W x2 / Lo 2600W x2",
      "Bridge Mono 8Ω": "Hi 6800W / Lo 5200W",
      "Điện áp ra Peak": "188V (VPL 188V / 156V)",
      "Damping Factor": ">2000 @8Ω, 20Hz–200Hz",
      "Dải điện áp hoạt động": "AC 140V – 240V",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Tản nhiệt": "Front-to-back, 3 quạt DC",
      "Trọng lượng": "9 kg (net) / 10.2 kg (gross)"
    },
    description: "Model 2 kênh công suất cao nằm giữa K16S và K20S — lựa chọn sub tầm trung với Damping Factor >2000 cho tiếng bass chặt, hoạt động ổn định ở dải điện áp rộng 140V–240V phù hợp khu vực điện lưới yếu.",
    features: [
      "Bridge Mono 8Ω đạt 6800W — công suất lớn cho cụm sub chuyên nghiệp",
      "Damping Factor >2000 — kiểm soát loa tốt, bass chặt không rền",
      "Dải điện áp AC 140V–240V — vận hành ổn định nơi điện lưới yếu"
    ],
    manuals: [{ title: "Datasheet K19S — Bản ngang (PDF)", file: "assets/manuals/datasheet-k19s-16x9.pdf" }, { title: "Datasheet K19S — Bản dọc (PDF)", file: "assets/manuals/datasheet-k19s-9x16.pdf" }],
    datasheetImages: { "16x9": "assets/datasheets/k19s-16x9.png", "9x16": "assets/datasheets/k19s-9x16.png" },
    applications: ["Sub bass công suất lớn cho karaoke kinh doanh, bar", "Hệ thống sự kiện cần công suất cao hơn K16S"]
  },

  {
    id: "korah-k19pro",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K19PRO",
    tagline: "Ampli 4 kênh 1650W x4 (8Ω Hi) — Silicon Carbide SiC + PFC Autovolt, bền bỉ vận hành dài giờ",
    status: "active",
    visible: true,
    price: "23.000.000đ",
    warranty: "Bảo hành 2 năm",
    image: "assets/products/k19pro-front.png",
    gallery: ["assets/products/rear-panel.png", "assets/products/cautao-k19pro.jpg", "assets/products/stack-k19.jpg"],
    tech: ["classD", "sic", "pfc"],
    specs: {
      "Số kênh": "4 kênh",
      "Bộ nguồn": "PFC Autovolt — dải điện áp hiệu quả 140V–270V",
      "Công suất 8Ω Stereo RMS": "Hi 1650W x4 / Lo 1400W x4",
      "Công suất 4Ω Stereo RMS": "Hi 2450W x4 / Lo 2100W x4",
      "Bridge Mono 8Ω": "Hi 4900W x2 / Lo 4200W x2",
      "Điện áp ra Peak": "163V (VPL 163V / 153V)",
      "Damping Factor": ">500 @8Ω, 20Hz–200Hz",
      "Dải điện áp PFC": "140V – 270V",
      "Công nghệ bán dẫn": "Silicon Carbide (SiC) — Onsemi USA",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Tản nhiệt": "Front-to-back, 5 quạt DC",
      "Trọng lượng": "10 kg (net) / 11 kg (gross)"
    },
    description: "Model 4 kênh cao cấp với chip Silicon Carbide từ Onsemi USA và nguồn PFC thiết kế nội bộ — nâng cấp toàn diện về hiệu suất và độ bền cho Full-range/Line Array vận hành nhiều giờ liên tục.",
    features: [
      "Silicon Carbide SiC (Onsemi USA) — hiệu suất chuyển mạch cao, mát và bền hơn",
      "PFC dải rộng 140V–270V — ổn định trước mọi điều kiện lưới điện",
      "5 quạt DC front-to-back — tản nhiệt mạnh cho sự kiện dài giờ"
    ],
    manuals: [{ title: "Datasheet K19PRO — Bản ngang (PDF)", file: "assets/manuals/datasheet-k19pro-16x9.pdf" }, { title: "Datasheet K19PRO — Bản dọc (PDF)", file: "assets/manuals/datasheet-k19pro-9x16.pdf" }, { title: "Cấu tạo bên trong K19PRO", file: "assets/products/cautao-k19pro.jpg" }],
    datasheetImages: { "16x9": "assets/datasheets/k19pro-16x9.png", "9x16": "assets/datasheets/k19pro-9x16.png" },
    applications: ["Full-range / Line Array cho sự kiện nhiều giờ liên tục", "Sân khấu cố định công suất lớn cần độ bền cao"]
  },

  {
    id: "korah-k20s",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K20S",
    tagline: "Ampli 2 kênh 3000W x2 (8Ω Hi) — Bridge 9600W, SiC Inside, công suất cao nhất dòng 2 kênh",
    status: "active",
    visible: true,
    price: "24.000.000đ",
    warranty: "Bảo hành 3 năm + Bảo trì 3 năm",
    image: "assets/products/k20s-front.png",
    gallery: ["assets/products/stack-k20.jpg"],
    tech: ["classD", "sic", "pfc"],
    specs: {
      "Số kênh": "2 kênh",
      "Bộ nguồn": "PFC (Power Factor Correction) — ổn định điện áp, tối ưu hiệu suất",
      "Công suất 8Ω Stereo RMS": "Hi 3000W x2 / Lo 2250W x2",
      "Công suất 4Ω Stereo RMS": "Hi 4800W x2 / Lo 4100W x2",
      "Bridge Mono 8Ω": "Hi 9600W / Lo 8200W",
      "Điện áp ra Peak": "219V (VPL 219V / 190V)",
      "Damping Factor": ">2000 @8Ω, 20Hz–200Hz",
      "Công nghệ bán dẫn": "Silicon Carbide (SiC) — Onsemi USA",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Tản nhiệt": "Front-to-back, 2 quạt DC",
      "Trọng lượng": "9.5 kg (net) / 10.8 kg (gross)"
    },
    description: "Quái vật công suất của dòng 2 kênh — Bridge Mono 9600W với chip SiC Onsemi USA, kéo cụm sub lớn cho sự kiện ngoài trời, bền bỉ khi chạy công suất lớn liên tục nhiều ngày.",
    features: [
      "Bridge Mono 8Ω đạt 9600W — nhóm công suất cao nhất K-Series",
      "Damping Factor >2000 — bass chặt, kiểm soát loa cực tốt",
      "SiC + PFC — chạy công suất lớn liên tục nhiều giờ vẫn bền bỉ"
    ],
    manuals: [{ title: "Datasheet K20S — Bản ngang (PDF)", file: "assets/manuals/datasheet-k20s-16x9.pdf" }, { title: "Datasheet K20S — Bản dọc (PDF)", file: "assets/manuals/datasheet-k20s-9x16.pdf" }],
    datasheetImages: { "16x9": "assets/datasheets/k20s-16x9.png", "9x16": "assets/datasheets/k20s-9x16.png" },
    applications: ["Sub bass hội chợ, lễ hội, sự kiện ngoài trời quy mô lớn", "Phối ghép cùng K16PRO/K19PRO trong hệ thống line array + sub"]
  },

  {
    id: "korah-k20plus",
    brand: "KORAH",
    series: "K Series",
    name: "KORAH K20PLUS",
    tagline: "Ampli 4 kênh 1900W x4 (8Ω Hi) — đầu bảng K-Series, SiC Inside, all-in-one Full-range + Sub",
    status: "active",
    visible: true,
    price: "26.000.000đ",
    warranty: "Bảo hành 3 năm + Bảo trì 3 năm",
    image: "assets/products/k20plus-front.png",
    gallery: ["assets/products/rear-panel.png", "assets/products/stack-k20.jpg"],
    tech: ["classD", "sic", "pfc"],
    specs: {
      "Số kênh": "4 kênh",
      "Bộ nguồn": "PFC (Power Factor Correction) — ổn định điện áp, tối ưu hiệu suất",
      "Công suất 8Ω Stereo RMS": "Hi 1900W x4 / Lo 1600W x4",
      "Công suất 4Ω Stereo RMS": "Hi 3000W x4 / Lo 2450W x4",
      "Bridge Mono 8Ω": "Hi 6000W x2 / Lo 4900W x2",
      "Điện áp ra Peak": "175V (VPL 175V / 161V)",
      "Damping Factor": ">800 @8Ω, 20Hz–200Hz",
      "Công nghệ bán dẫn": "Silicon Carbide (SiC) — Onsemi USA",
      "Dải tần số": "20Hz – 22kHz",
      "Trở kháng vào": "20kΩ balanced / 10kΩ unbalanced",
      "Cổng vào": "Female XLR & Male XLR",
      "Cổng ra": "Speakon",
      "Class": "D",
      "Kích thước": "483 x 98 x 350 mm",
      "Trọng lượng": "10 kg (net) / 11.2 kg (gross)"
    },
    description: "Model cao cấp nhất dòng 4 kênh — kết hợp vai trò Full-range/Line Array lẫn Subwoofer nhờ Bridge Mono 6000W mỗi cặp kênh. Một máy thay thế cấu hình hai máy trong nhiều hệ thống vừa.",
    features: [
      "Đầu bảng dòng 4 kênh — linh hoạt nhất hệ thống K-Series",
      "Bridge Mono 6000W x2 — đảm nhiệm cả line array lẫn sub",
      "SiC + PFC cao cấp — cùng nhóm công nghệ với K19PRO, K20S"
    ],
    manuals: [{ title: "Datasheet K20PLUS — Bản ngang (PDF)", file: "assets/manuals/datasheet-k20plus-16x9.pdf" }, { title: "Datasheet K20PLUS — Bản dọc (PDF)", file: "assets/manuals/datasheet-k20plus-9x16.pdf" }],
    datasheetImages: { "16x9": "assets/datasheets/k20plus-16x9.png", "9x16": "assets/datasheets/k20plus-9x16.png" },
    applications: ["Hệ thống all-in-one cho đơn vị touring vừa-lớn", "Sân khấu sự kiện cao cấp cần cả chi tiết và lực bass"]
  },

  // ─── ROY — Amply karaoke & hội nghị ─────────────────────
  // Nguồn: web ammy.com.vn (dữ liệu 2018) — GIÁ THAM KHẢO, cần xác nhận giá hiện hành
  {
    id: "roy-v4",
    brand: "ROY",
    series: "Amply",
    name: "ROY Amply V4",
    tagline: "Amply karaoke 165W x2 (8Ω) — cho phòng karaoke gia đình và kinh doanh",
    status: "active",
    visible: true,
    price: "6.250.000đ (giá tham khảo)",
    warranty: "Bảo hành 12 tháng",
    image: "",
    gallery: [],
    tech: [],
    specs: {
      "Điện áp": "AC 220V / 50Hz–60Hz",
      "Công suất 8Ω": "165W x2",
      "Công suất 4Ω": "250W x2",
      "Dải tần số": "20Hz – 20kHz",
      "Tỉ lệ tín hiệu/tạp âm": "91dB",
      "Kích thước": "470 x 180 x 390 mm",
      "Trọng lượng": "17 kg"
    },
    description: "Amply ROY V4 — dòng amply karaoke truyền thống của AMMY, phù hợp phòng karaoke gia đình và kinh doanh quy mô vừa. Lưu ý: thông tin và giá lấy từ website ammy.com.vn, vui lòng liên hệ để xác nhận giá và tình trạng hàng hiện tại.",
    features: [],
    manuals: [],
    applications: ["Phòng karaoke gia đình và kinh doanh", "Hệ thống âm thanh giải trí"]
  },

  {
    id: "roy-v5s",
    brand: "ROY",
    series: "Amply",
    name: "ROY Amply V5s",
    tagline: "Amply 4 đường micro 250W (8Ω) — chuyên cho hội trường và phòng họp",
    status: "active",
    visible: true,
    price: "6.930.000đ (giá tham khảo)",
    warranty: "Bảo hành 12 tháng",
    image: "",
    gallery: [],
    tech: [],
    specs: {
      "Điện áp": "AC 220V / 50Hz–60Hz",
      "Công suất 8Ω": "250W",
      "Đường micro": "4 đường"
    },
    description: "Amply V5s — dòng amply 4 đường micro chuyên dùng cho công trình hội trường, phòng họp. Công suất đủ lớn để phối ghép với các dòng loa 10 inch, 12 inch. Lưu ý: thông tin và giá lấy từ website ammy.com.vn, vui lòng liên hệ để xác nhận giá và tình trạng hàng hiện tại.",
    features: [],
    manuals: [],
    applications: ["Hội trường, phòng họp, hội nghị", "Phối ghép loa 10–12 inch"]
  },

  // ─── USAMMY — Amplifier karaoke & hội nghị (cùng phân khúc ROY) ───
  // Khung sẵn — cập nhật model & thông số amplifier USAMMY sau
  {
    id: "usammy-amplifier-01",
    brand: "USAMMY",
    series: "Amplifier",
    name: "USAMMY — Dòng Amplifier",
    tagline: "Amplifier chuyên cho karaoke và phòng họp hội nghị — thông tin model đang cập nhật",
    status: "active",
    visible: true,
    image: "",
    gallery: [],
    tech: [],
    specs: { "Phân khúc": "Amplifier karaoke & hội nghị", "Thông số kỹ thuật": "Đang cập nhật — liên hệ AMMY" },
    description: "USAMMY là dòng amplifier của AMMY dành cho phòng karaoke chuyên nghiệp, phòng họp và hội trường — cùng phân khúc ứng dụng với thương hiệu ROY. Danh mục model và thông số chi tiết đang được cập nhật. Vui lòng liên hệ AMMY để biết thêm thông tin.",
    features: [],
    manuals: [],
    applications: ["Phòng karaoke chuyên nghiệp", "Phòng họp, hội nghị, hội trường"]
  },

  // ─── OEM — Gia công sản xuất theo yêu cầu ───────────────
  // Khung sẵn — cập nhật sản phẩm OEM sau
  {
    id: "oem-service",
    brand: "OEM",
    series: "OEM / ODM",
    name: "Dịch vụ OEM — Gia công theo yêu cầu",
    tagline: "Sản xuất thiết bị âm thanh theo thương hiệu riêng của đối tác — nhà máy đạt ISO 9001:2008",
    status: "active",
    visible: true,
    image: "",
    gallery: [],
    tech: ["classD"],
    specs: {
      "Năng lực": "Nghiên cứu, thiết kế, sản xuất thiết bị âm thanh chuyên nghiệp",
      "Tiêu chuẩn": "ISO 9001:2008",
      "Nhà máy": "300/34/64 Nguyễn Văn Linh, Q.7, TP.HCM",
      "Danh mục sản phẩm OEM": "Đang cập nhật"
    },
    description: "AMMY nhận gia công OEM/ODM thiết bị âm thanh chuyên nghiệp theo thương hiệu riêng của đối tác — từ nghiên cứu, thiết kế đến sản xuất hoàn thiện trên dây chuyền đạt chuẩn ISO 9001:2008. Danh mục sản phẩm OEM sẽ được cập nhật. Liên hệ 0932 779 386 để trao đổi nhu cầu hợp tác.",
    features: [],
    manuals: [],
    applications: ["Đối tác cần sản xuất thiết bị âm thanh thương hiệu riêng"]
  },

  // ─── Ngưng sản xuất ─────────────────────────────────────
  {
    id: "discontinued-sample-01",
    brand: "KORAH",
    series: "Đang cập nhật",
    name: "Model đã ngưng sản xuất — mẫu",
    tagline: "Sản phẩm này đã ngưng sản xuất. Tài liệu kỹ thuật vẫn được lưu trữ để hỗ trợ.",
    status: "discontinued",
    visible: false,
    image: "",
    tech: [],
    specs: {
      "Thông số kỹ thuật": "Tài liệu kỹ thuật sẽ được cập nhật sau"
    },
    description: "Sản phẩm đã ngưng sản xuất. Tài liệu hướng dẫn vận hành vẫn còn hiệu lực cho các đơn vị đang sử dụng.",
    features: [],
    manuals: [],
    applications: []
  }

];
