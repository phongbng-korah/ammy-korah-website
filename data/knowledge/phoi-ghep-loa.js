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
//
// GIỚI HẠN ĐÃ BIẾT: answerSpeakerSpec() trong js/site-chat.js chạy
// TRƯỚC searchFaq() — nếu khách hỏi có nhắc "loa" + 1 số kèm đơn vị
// Ω nhưng KHÔNG kèm số W, câu hỏi sẽ bị chặn lại thành lời nhắc
// nhập công suất RMS thay vì rơi xuống các câu hỏi/trả lời bên dưới
// (VD: câu hỏi "trở kháng danh định vs thực tế"). Đây là đánh đổi
// có chủ đích để giữ luồng máy tính ghép loa đơn giản — chưa sửa.
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
        a: "Dùng quy tắc Headroom theo thực tế thị trường Việt Nam: công suất amplifier nên LỚN HƠN công suất RMS loa TỐI THIỂU 50% (không giới hạn trần — dư càng nhiều càng an toàn khi chạy liên tục nhiều giờ, phù hợp điều kiện lưới điện VN). Ví dụ loa full-range RMS 1000W @8Ω cần amplifier từ 1500W/kênh trở lên → phù hợp K19PRO (1650W/kênh) hoặc K20PLUS (1900W/kênh)."
      },
      {
        q: "Vì sao không chọn loa RMS bằng đúng công suất amplifier?",
        a: "Nếu chọn bằng nhau, amplifier dễ chạm giới hạn công suất (clipping) khi chơi nhạc có dải động lớn, gây méo tiếng và tăng nguy cơ hỏng loa (tweeter) do sóng vuông từ tín hiệu bị clip — nguy hiểm cho loa hơn là bản thân công suất lớn. Cần dư tối thiểu 50% headroom để âm thanh sạch và an toàn hơn."
      },
      {
        q: "Model có mã S và mã PRO/PLUS khác nhau thế nào, dùng cho loại loa nào?",
        a: "KORAH có 2 nhóm model K-Series phân biệt theo hậu tố tên: (1) Nhóm mã 'S' — K16S, K19S, K20S: đều là ampli 2 kênh (Stereo), ưu tiên ghép cho loa SUB (loa bass). (2) Nhóm mã 'PRO' hoặc 'PLUS' — K16PRO, K19PRO, K20PLUS: đều là ampli 4 kênh, ưu tiên ghép cho loa FULL-RANGE. Đây là quy tắc chọn model đúng theo thực tế lắp đặt tại thị trường Việt Nam — khách chọn model cụ thể trong đúng nhóm tuỳ theo tài chính và mức công suất loa."
      },
      {
        q: "RMS là gì?",
        a: "RMS (Root Mean Square) là giá trị công suất/điện áp trung bình hiệu dụng theo thời gian — cách đo công suất chuẩn để biết amplifier hoặc loa chịu được bao nhiêu công suất một cách LIÊN TỤC, ổn định, khác với công suất đỉnh tức thời (Peak, cao hơn RMS nhiều lần nhưng chỉ tồn tại trong khoảnh khắc rất ngắn). Khi chọn ghép loa với amplifier, luôn dùng công suất RMS của loa làm cơ sở tính toán headroom (KHÔNG dùng số Peak/Max dễ gây nhầm lẫn) — nguyên tắc KORAH: amplifier nên lớn hơn RMS loa tối thiểu 50%."
      },
      {
        q: "Headroom là gì trong ghép loa với amplifier?",
        a: "Headroom là phần công suất dư của amplifier so với công suất RMS của loa — khoảng đệm để amplifier tái tạo đúng các đỉnh nhạc (kick drum, snare...) cao hơn nhiều so với mức trung bình mà không bị clip (chạm giới hạn công suất, gây méo tiếng dạng sóng vuông, nguy hiểm cho loa hơn cả công suất lớn). KORAH áp dụng nguyên tắc headroom tối thiểu +50% so với RMS loa, không giới hạn trần — dư càng nhiều càng an toàn khi chạy liên tục nhiều giờ."
      },
      {
        q: "Khi nào nên dùng chế độ Bridge, khi nào dùng chế độ Parallel (song song)?",
        a: "Chế độ Bridge (có trên mọi model K-Series): dùng khi cần dồn công suất cả 2 kênh (hoặc 2 cặp kênh) thành 1 kênh Mono công suất rất lớn cho 1 loa/cụm loa duy nhất — phổ biến nhất khi kéo sub đơn lớn hoặc cụm sub đôi (VD: K16S Bridge Mono 8Ω đạt 5600W, K20S đạt 9600W). Lưu ý ở chế độ Bridge, tải tối thiểu khuyến nghị thường cao hơn bình thường (dòng điện tăng gấp đôi so với chạy Stereo) — không đấu tải quá thấp trở kháng khi dùng Bridge. \"Parallel\" (song song đầu vào) KHÔNG phải chế độ vận hành amplifier mà KORAH công bố — panel chỉ có lựa chọn Stereo/Bridge. Nếu ý bạn là đấu SONG SONG NHIỀU LOA vào 1 kênh (không phải chế độ của ampli): dùng khi muốn ghép nhiều loa cùng 1 kênh, nhưng làm giảm trở kháng tổng (VD 2 loa 8Ω song song → 4Ω) — cần tính đúng công thức song song, không để tổng trở xuống dưới mức khuyến nghị (không dùng 2Ω)."
      }
    ]
  },
  {
    category: "Ghép loa — Vùng công suất loa khuyến nghị theo từng model KORAH",
    items: [
      {
        q: "K16S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 1067W/loa (amplifier 1600W/kênh, headroom tối thiểu +50%, không giới hạn trần dưới — loa công suất thấp hơn vẫn an toàn, dư headroom càng nhiều càng tốt). Ở 4Ω: tối đa khoảng 1867W/loa (amplifier 2800W/kênh). Không dùng tải 2Ω."
      },
      {
        q: "K16PRO nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 833W/loa (amplifier 1250W/kênh, headroom tối thiểu +50%). Ở 4Ω: tối đa khoảng 1333W/loa (amplifier 2000W/kênh). Loa công suất thấp hơn vẫn an toàn. Không dùng tải 2Ω."
      },
      {
        q: "K19S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 1467W/loa (amplifier 2200W/kênh, headroom tối thiểu +50%). Ở 4Ω: tối đa khoảng 2267W/loa (amplifier 3400W/kênh). Loa công suất thấp hơn vẫn an toàn. Không dùng tải 2Ω."
      },
      {
        q: "K19PRO nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 1100W/loa (amplifier 1650W/kênh, headroom tối thiểu +50%). Ở 4Ω: tối đa khoảng 1633W/loa (amplifier 2450W/kênh). Loa công suất thấp hơn vẫn an toàn. Không dùng tải 2Ω."
      },
      {
        q: "K20S nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 2000W/loa (amplifier 3000W/kênh, headroom tối thiểu +50%). Ở 4Ω: tối đa khoảng 3200W/loa (amplifier 4800W/kênh). Đây là model công suất cao nhất dòng 2 kênh, phù hợp cụm sub lớn. Loa công suất thấp hơn vẫn an toàn. Không dùng tải 2Ω."
      },
      {
        q: "K20PLUS nên ghép loa công suất bao nhiêu?",
        a: "Ở 8Ω: nên chọn loa RMS tối đa khoảng 1267W/loa (amplifier 1900W/kênh, headroom tối thiểu +50%). Ở 4Ω: tối đa khoảng 2000W/loa (amplifier 3000W/kênh). Loa công suất thấp hơn vẫn an toàn. Không dùng tải 2Ω."
      }
    ]
  },
  {
    category: "Ghép loa — Gain Structure, Crest Factor & Công suất thực tế",
    items: [
      {
        q: "Gain Structure là gì, vì sao ảnh hưởng đến âm thanh?",
        a: "Gain Structure là cách cân chỉnh mức tín hiệu (gain) qua từng tầng thiết bị trong dàn âm thanh (mixer, xử lý tín hiệu, amplifier) sao cho mỗi tầng hoạt động ở vùng tối ưu — không quá thấp (dễ lẫn nhiễu nền) và không quá cao (dễ clip méo tiếng). Gain Structure sai là nguyên nhân phổ biến gây méo tiếng hoặc ồn dù amplifier hoàn toàn bình thường — cần kiểm tra toàn bộ chuỗi tín hiệu, không chỉ riêng amplifier."
      },
      {
        q: "Crest Factor là gì?",
        a: "Crest Factor là tỷ lệ (tính bằng dB) giữa công suất đỉnh tức thời (Peak) và công suất trung bình liên tục (RMS) của tín hiệu âm nhạc. Nhạc thực tế thường có Crest Factor khoảng 12-20dB — nghĩa là đỉnh nhạc (VD: tiếng kick drum, snare) có thể cao hơn mức trung bình rất nhiều lần trong khoảnh khắc ngắn. Đây là lý do amplifier cần dư headroom công suất so với RMS loa danh nghĩa, để tái tạo đúng các đỉnh nhạc mà không bị clip."
      },
      {
        q: "3 loại công suất loa RMS, Program, Peak khác nhau thế nào?",
        a: "RMS (Continuous Power): công suất trung bình liên tục loa chịu được lâu dài theo test tiêu chuẩn — đây là con số dùng để tính headroom ghép ampli. Program Power: ước tính công suất trung bình thực tế khi phát nhạc thực (không phải tín hiệu test đều), thường cao hơn RMS khoảng 3dB (~gấp đôi). Peak Power: mức công suất đỉnh tức thời loa chịu được trong khoảnh khắc rất ngắn, thường cao hơn RMS 4 lần trở lên tùy chuẩn đo (AES2). Khi chọn ampli, luôn dùng số RMS — không dùng nhầm Peak vì sẽ chọn ampli quá nhỏ so với nhu cầu thực tế."
      },
      {
        q: "Nhà sản xuất loa ghi công suất mập mờ (Music Power, Max Power) thì tính sao?",
        a: "Không phải mọi nhà sản xuất loa đều công bố công suất theo đúng chuẩn AES2 — nhiều loa dùng thuật ngữ mập mờ như 'Music Power', 'Max Power' không rõ định nghĩa, đôi khi vì mục đích marketing. Nguyên tắc an toàn: nếu không chắc con số công bố là RMS thật, nên coi đó là mức Peak/Max và áp dụng thêm hệ số an toàn khi tính headroom ghép ampli, thay vì tin tưởng tuyệt đối vào con số ghi trên loa."
      },
      {
        q: "Power Compression ở loa là gì?",
        a: "Power Compression là hiện tượng SPL (độ lớn âm thanh) thực tế giảm dần khi loa chạy công suất lớn liên tục trong thời gian dài, dù công suất điện cấp vào không đổi. Nguyên nhân: điện trở cuộn dây loa (Re) tăng theo nhiệt độ khi loa nóng lên (có thể tăng 20-50% hoặc hơn), khiến dòng điện thực tế và hiệu suất chuyển đổi điện-âm giảm. Đây là hiện tượng vật lý bình thường của mọi loa dynamic, không phải lỗi amplifier — nhưng ampli có headroom dư dả (đúng nguyên tắc +50%) giúp giảm cảm nhận sụt giảm này."
      },
      {
        q: "Công thức tính SPL thực tế của loa theo công suất và khoảng cách?",
        a: "SPL = Độ nhạy loa (dB/W/m) + 10×log10(Công suất, W) − 20×log10(Khoảng cách, m). Ví dụ loa độ nhạy 90dB/W/m, cấp 100W, đo ở 1m → SPL = 90 + 20 − 0 = 110dB. Ở khoảng cách 4m, SPL giảm còn khoảng 98dB (mỗi lần tăng gấp đôi khoảng cách, SPL giảm khoảng 6dB theo định luật nghịch đảo bình phương khoảng cách)."
      },
      {
        q: "Damping Factor bao nhiêu là đủ, cao hơn có tốt hơn không?",
        a: "Damping Factor (DF) là tỷ số giữa trở kháng loa và trở kháng ngõ ra amplifier — DF càng cao, amplifier càng kiểm soát tốt chuyển động màng loa (bass chặt hơn). Tuy nhiên trong thực tế, DF trên khoảng 50 hầu như không còn cải thiện đáng kể chất lượng âm thanh nghe được — vì ở mức này, điện trở dây loa và các mối nối đã trở thành yếu tố giới hạn chính, không phải trở kháng ngõ ra ampli nữa. Ampli công bố DF hàng trăm hay hàng nghìn chủ yếu có ý nghĩa marketing hơn là khác biệt thực nghe."
      },
      {
        q: "Dây loa ảnh hưởng thế nào đến Damping Factor thực tế?",
        a: "Damping Factor công bố trên datasheet ampli chỉ đúng tại cực đấu dây của amplifier — Damping Factor THỰC TẾ tại loa còn phụ thuộc điện trở dây loa (phụ thuộc tiết diện dây AWG và chiều dài dây). Dây loa càng nhỏ (số AWG lớn) hoặc càng dài, điện trở dây càng cao, làm giảm Damping Factor thực tế tại loa — dù ampli có DF datasheet rất cao. Khuyến nghị: dùng dây loa tiết diện đủ lớn (AWG nhỏ) và hạn chế chiều dài dây không cần thiết, đặc biệt với hệ thống công suất lớn hoặc khoảng cách xa."
      },
      {
        q: "Trở kháng loa ghi 8Ω/4Ω có đúng ở mọi tần số không?",
        a: "Không. Con số '8Ω' hay '4Ω' ghi trên loa là trở kháng danh định — một giá trị quy ước trung bình/tối thiểu để phân loại loa, không phải trở kháng đo được tại mọi tần số. Trở kháng thực tế của loa dao động theo tần số: tăng vọt (có thể gấp 3-6 lần trở kháng danh định) tại tần số cộng hưởng của loa, và có điểm trở kháng thấp nhất (Zmin) ở một tần số khác — Zmin mới là giá trị amplifier phải 'chịu' thực tế, không phải trở kháng danh định. Đây là lý do cần chọn ampli có biên độ an toàn, không chạy sát giới hạn công suất ở đúng trở kháng danh định."
      },
      {
        q: "Vì sao 2 loa cùng công suất RMS và cùng trở kháng nhưng nghe khác nhau khi dùng chung 1 ampli KORAH?",
        a: "Nguyên nhân thường không nằm ở amplifier mà ở đặc tính khác nhau của driver loa bên trong: độ nhạy thực tế khác nhau (2 loa cùng RMS vẫn có thể khác độ nhạy dB/W/m, dẫn đến độ lớn âm thanh khác nhau ở cùng công suất), động cơ nam châm (lực đẩy) và khối lượng màng loa khác nhau ảnh hưởng đến độ 'chặt' của bass, và thiết kế thùng loa có phù hợp với driver bên trong hay không. Amplifier hoàn toàn giống nhau vẫn cho kết quả khác nhau vì bản thân 2 loa khác nhau — không phải do amplifier không ổn định."
      }
    ]
  },
  {
    category: "Ghép loa — Chẩn đoán sự cố: do Amplifier hay do Loa?",
    items: [
      {
        q: "Loa bị rè/méo dù amplifier chưa hết công suất thì do đâu?",
        a: "Khả năng cao là driver loa đã vượt quá giới hạn dịch chuyển tuyến tính (Xmax) của màng loa ở tần số thấp, trước khi amplifier chạm công suất định mức — đặc biệt phổ biến khi chơi bass sâu ở âm lượng lớn mà loa không có bộ lọc high-pass bảo vệ. Đây là giới hạn vật lý của driver loa, không phải lỗi amplifier — dù ampli còn nhiều headroom công suất, loa vẫn có thể méo tiếng nếu vượt quá khả năng dịch chuyển tuyến tính của chính nó."
      },
      {
        q: "Bass nghe ù, thiếu chi tiết, thiếu kiểm soát dù dùng ampli Damping Factor cao thì tại sao?",
        a: "Cần kiểm tra 2 khả năng: (1) Thùng loa không phù hợp với đặc tính giảm chấn của driver loa bên trong — đây là vấn đề thiết kế loa, amplifier không thể khắc phục; (2) Dây loa quá nhỏ (AWG lớn) hoặc quá dài làm giảm Damping Factor thực tế tại loa dù ampli có DF datasheet cao — vấn đề lắp đặt, có thể khắc phục bằng cách nâng cấp dây loa tiết diện lớn hơn và rút ngắn chiều dài dây nếu có thể."
      },
      {
        q: "Loa không xuống âm trầm sâu dù ampli đủ công suất, có phải do ampli không?",
        a: "Thường không phải do ampli. Nguyên nhân phổ biến là thùng loa không phù hợp với thiết kế của driver bên trong (thùng quá nhỏ hoặc quá lớn so với thiết kế gốc của loa), hoặc bản thân driver loa không được thiết kế để chơi tần số rất thấp. Đây là giới hạn ở khâu thiết kế loa/lắp đặt thùng, không phải do công suất hay chất lượng amplifier — cần giải thích rõ với khách hàng để tránh hiểu nhầm."
      },
      {
        q: "Âm lượng giảm dần sau khi chạy hệ thống liên tục nhiều giờ ở công suất lớn, có phải ampli yếu dần không?",
        a: "Không phải lỗi ampli — đây là hiện tượng Power Compression, xảy ra ở bản thân loa: cuộn dây loa nóng lên khi chạy công suất lớn liên tục khiến điện trở cuộn dây tăng, làm hiệu suất chuyển đổi điện-âm giảm dần, SPL thực tế giảm so với lúc mới bật. Đây là hiện tượng vật lý bình thường của mọi loa dynamic (không riêng loa nào), không liên quan đến amplifier — chọn ampli có headroom dư dả (đúng nguyên tắc +50% RMS) giúp giảm thiểu cảm nhận sụt giảm này khi vận hành dài giờ."
      }
    ]
  },
  {
    category: "Ghép loa — Độ nhạy loa & chuẩn đo công suất AES2",
    items: [
      {
        q: "Độ nhạy loa (Sensitivity) là gì, sao lại quan trọng khi chọn ampli?",
        a: "Độ nhạy (Sensitivity, đơn vị dB/W/m) là mức âm lượng loa tạo ra khi cấp 1W công suất điện, đo ở khoảng cách 1m. Đây là thông số quan trọng không kém công suất RMS: quy tắc kinh nghiệm là mỗi 3dB chênh lệch độ nhạy tương đương gấp đôi (hoặc giảm một nửa) công suất ampli cần để đạt cùng độ lớn âm thanh. Ví dụ loa 91dB/W/m chỉ cần 1/4 công suất so với loa 85dB/W/m để đạt cùng độ lớn — vì vậy 2 loa cùng công suất RMS nhưng khác độ nhạy sẽ cho trải nghiệm âm lượng khác nhau rõ rệt với cùng 1 ampli."
      },
      {
        q: "Chuẩn AES2 dùng để đo công suất loa như thế nào?",
        a: "AES2 (Audio Engineering Society) là chuẩn đo công suất chịu tải phổ biến nhất cho loa chuyên nghiệp, dựa trên trở kháng thấp nhất thực tế của loa (Zmin) chứ không phải trở kháng danh định, để đảm bảo an toàn ở điều kiện tải nặng nhất. Chuẩn cũ AES2-1984 dùng tín hiệu test có Crest Factor 6dB; chuẩn mới AES2-2012 dùng Crest Factor 12dB, được cho là phản ánh sát hơn đặc tính nhạc hiện đại (nhạc thực tế thường có Crest Factor 12-20dB)."
      }
    ]
  }
);
