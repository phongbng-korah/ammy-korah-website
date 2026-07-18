# ammy-korah-website
Website AMMY / KORAH Việt Nam - Power Amplifier chuyên nghiệp

## Phiên bản: v4.9

Thay đổi chính so với v4.8.1 (Audit nâng cấp giao diện — không đổi layout/concept/màu/font/logo/ảnh sản phẩm):
- Header: logo AMMY và tên công ty phóng to, dễ đọc hơn, khoảng cách logo-menu hợp lý hơn
- Hero: hiệu ứng ánh sáng chuyển động rất chậm, thêm chiều sâu (vignette), không đổi ảnh/bố cục
- Ảnh sản phẩm: thêm đổ bóng mềm + phản chiếu nhẹ, cảm giác "nổi" hơn (không render lại ảnh)
- Nút bấm: bo góc mềm hơn, hover mượt hơn (0.2s), đổ bóng nhẹ theo màu
- Khoảng trắng: tăng giãn cách giữa Header/Hero/Section/Footer cho thoáng hơn
- Typography: tối ưu line-height, letter-spacing, khoảng cách tiêu đề/đoạn văn
- Mobile/Responsive: tăng vùng chạm nút hamburger, chống tràn ngang, tối ưu nút nổi Zalo/gọi trên màn nhỏ
- Accessibility: thêm focus outline cho bàn phím, tăng tương phản chữ xám, hỗ trợ mở menu dropdown bằng bàn phím

## Phiên bản: v4.8.1

Thay đổi chính so với v4.8:
- Sửa lỗi logo thương hiệu bị phóng to che ảnh/tiêu đề trên thẻ sản phẩm (danh sách sản phẩm)

## Phiên bản: v4.8

Thay đổi chính so với v4.7:
- Trang Giới thiệu: tách slogan 2 dòng với hiệu ứng chữ vàng radiant; "Phương châm hoạt động của AMMY từ 2006" chuyển lên trên làm tiêu đề chính; thẻ logo đổi thành tên công ty 2 màu
- Tăng cỡ chữ tiêu đề mục (section-label, page-hero__label) trên toàn site cho rõ hơn
- Thay nhãn chữ thương hiệu bằng logo ảnh thật (KORAH, ROY, USAMMY) ở thẻ sản phẩm và trang chi tiết

## Phiên bản: v4.7

Thay đổi chính so với v4.6:
- Header: tên công ty cạnh logo tách 2 dòng, căn giữa, cỡ chữ vừa khung (dòng 1 vàng champagne, dòng 2 đỏ theo yêu cầu riêng)
- Sửa lỗi chính tả: "AMMY ELECTRONIC CO., LTD" -> "AMMY ELECTRONICS CO., LTD" (header, footer 14 trang, about.html, JSON-LD)

## Phiên bản: v4.6

Thay đổi chính so với v4.5.1:
- Cập nhật tên pháp lý đầy đủ công ty trên toàn bộ 14 trang: "CÔNG TY TNHH SX & TM ĐIỆN TỬ AMMY (AMMY ELECTRONIC CO., LTD)"
- Cập nhật footer, trang Giới thiệu, và dữ liệu SEO (JSON-LD schema.org)

## Phiên bản: v4.5.1

Thay đổi chính so với v4.5:
- Xóa ảnh chụp màn hình đặt sai vị trí trong mục "Thời hạn bảo hành theo model" (after-sales.html)

## Phiên bản: v4.5

Thay đổi chính so với v4.4:
- Thêm K18PLUS và K18S (Class TD, đã ngưng sản xuất) vào danh mục Ngưng sản xuất
- Thêm mục "Bảo hành 5 sao KORAH" trên trang after-sales.html: 3 ảnh + 1 video (chuyển từ HEVC sang H.264 MP4 để chạy mọi trình duyệt)
- Thêm folder "Phiếu bảo hành": PDF phiếu gửi hàng bảo hành + ảnh render từ PDF
- Thêm hotline bảo hành 0903 851 252

## Phiên bản: v4.4

Thay đổi chính so với v4.3.3:
- Thêm thư mục ảnh sự kiện "KORAH và NPSE Hà Nam" trên trang Sự kiện (44 ảnh, assets/events/npse-ha-nam/)
- Ảnh sự kiện đã tối ưu cho web (xoay đúng chiều, nén, xóa metadata), nhấn vào ảnh để phóng to bằng lightbox có sẵn

## Phiên bản: v4.3.3

Thay đổi chính so với v4.3.2:
- Tìm thấy ảnh góc 45° gốc (.jpg) của K19PRO và K20S sẵn có trong repo từ bản v4.2, chưa từng dùng, chất lượng tốt — đưa vào gallery thay cho ảnh bị lỗi

## Phiên bản: v4.3.2

Thay đổi chính so với v4.3.1:
- Xóa ảnh góc 45° của K19PRO và K20S (chất lượng tách nền chưa đạt) — chờ ảnh thay thế
- Sửa lỗi đóng gói: các bản zip trước thiếu assets/datasheets/ khiến ảnh datasheet trong gallery bị vỡ khi kiểm tra offline

## Phiên bản: v4.3.1

Thay đổi chính so với v4.3:
- Xóa ảnh mặt sau 4 kênh (rear-panel.png) khỏi gallery các model 2 kênh (K16S, K19S, K20S) — trước đó dùng nhầm chung với model 4 kênh
- Xóa 3 ảnh sản phẩm bị lỗi render (K19PRO góc 45°, K20S góc 45°, K20PLUS front)
- Thay bằng 3 ảnh sản phẩm mới, đã tách nền (không dùng AI render lại, giữ nguyên pixel gốc)

## Phiên bản: v4.3

Thay đổi chính so với v4.2:
- Sửa lỗi thông số kỹ thuật trên 2 ảnh datasheet (K16S, K19PRO)
- Chuẩn hóa chính sách Bảo hành / Bảo trì: K20S & K20PLUS = Bảo hành 3 năm + Bảo trì 3 năm; K16S, K16PRO, K19S, K19PRO = Bảo hành 2 năm + Bảo trì 3 năm
- Cập nhật bộ 12 ảnh datasheet (assets/datasheets/) theo đúng chính sách trên
- Hiển thị ảnh datasheet trong gallery trang chi tiết sản phẩm (js/main.js)
- Giữ nguyên bộ 12 PDF tài liệu kỹ thuật gốc trong assets/manuals/ (mục Tải tài liệu)
