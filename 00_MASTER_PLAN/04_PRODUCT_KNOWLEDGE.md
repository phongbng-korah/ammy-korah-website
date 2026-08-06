# KORAH PRODUCT KNOWLEDGE ARCHITECTURE

## 1. Purpose

Tài liệu này xác định cách tổ chức, kiểm soát và sử dụng toàn bộ dữ liệu sản phẩm KORAH.

Mục tiêu là tạo một nguồn thông tin chuẩn để website, tài liệu kỹ thuật, marketing, CRM, NotebookLM và các hệ thống AI sử dụng cùng một dữ liệu nhất quán.

---

## 2. Core Principle

Mỗi thông tin sản phẩm chỉ được quản lý tại một nguồn dữ liệu chuẩn.

Các hệ thống khác chỉ sử dụng hoặc tham chiếu dữ liệu đã được phê duyệt.

Không tự ý tạo lại thông số ở nhiều nơi.

Không sử dụng dữ liệu chưa kiểm tra.

Không để nhiều phiên bản thông số cùng tồn tại mà không ghi rõ trạng thái.

---

## 3. Current Product Portfolio

Danh mục sản phẩm hiện tại gồm:

- K16S
- K16PRO
- K19S
- K19PRO
- K20S
- K20PLUS

Danh sách này là danh mục sử dụng chính thức hiện tại.

Không tự ý thêm model cũ, model thử nghiệm hoặc model chưa được phê duyệt.

---

## 4. Product Classification

### 4.1 K16 Series

Phân khúc:

- Tầm trung.
- Phù hợp hệ thống âm thanh chuyên nghiệp cần hiệu suất tốt và chi phí hợp lý.

Model:

- K16S
- K16PRO

### 4.2 K19 Series

Phân khúc:

- Chuyên nghiệp.
- Phù hợp hệ thống sự kiện, sân khấu và đơn vị cho thuê âm thanh.

Model:

- K19S
- K19PRO

### 4.3 K20 Series

Phân khúc:

- Cao cấp.
- Phù hợp hệ thống yêu cầu công suất lớn, hiệu suất cao và vận hành chuyên nghiệp.

Model:

- K20S
- K20PLUS

---

## 5. Technology Mapping

### K16S

- 2 kênh.
- Class D.
- PFC.
- Không có Silicon Carbide.

### K16PRO

- 4 kênh.
- Class D.
- PFC.
- Không có Silicon Carbide.

### K19S

- 2 kênh.
- Class D.
- PFC.
- Không có Silicon Carbide.

### K19PRO

- 4 kênh.
- Class D.
- PFC.
- Silicon Carbide.

### K20S

- 2 kênh.
- Class D.
- PFC.
- Silicon Carbide.

### K20PLUS

- 4 kênh.
- Class D.
- PFC.
- Silicon Carbide.

Không được gán Silicon Carbide cho model không có công nghệ này.

---

## 6. Standard Product Data Fields

Mỗi model phải có đầy đủ các nhóm dữ liệu sau:

### 6.1 Identification

- Brand.
- Product name.
- Model.
- Product category.
- Series.
- Channel count.
- Product status.
- Version.

### 6.2 Commercial Information

- Giá niêm yết.
- Chính sách bán hàng.
- Chính sách đại lý.
- Chính sách chiết khấu.
- Thời hạn bảo hành.
- Thời hạn bảo trì.
- Trạng thái kinh doanh.

### 6.3 Technical Information

- Power supply.
- AC input range.
- Frequency.
- Stereo RMS power at 8 ohms.
- Stereo RMS power at 4 ohms.
- Bridged mono power.
- Peak output voltage.
- VPL settings.
- Frequency response.
- Input impedance.
- Amplifier class.
- Damping factor.
- Input sensitivity.
- Input connectors.
- Output connectors.
- Controls.
- LED indicators.
- Cooling system.
- Protection system.
- Dimensions.
- Weight.

### 6.4 Technology Information

- PFC.
- Silicon Carbide.
- Class D.
- Power supply protection.
- Thermal protection.
- Output protection.
- Voltage management.
- Cooling behavior.

### 6.5 Usage Information

- Ứng dụng phù hợp.
- Loại hệ thống đề xuất.
- Cấu hình vận hành.
- Bridge.
- Stereo.
- Parallel.
- DIP switch.
- Lưu ý an toàn.
- Xử lý lỗi cơ bản.

### 6.6 Media

- Ảnh mặt trước.
- Ảnh mặt sau.
- Ảnh góc nghiêng.
- Ảnh ứng dụng.
- Ảnh chi tiết.
- Logo chuẩn.
- Icon công nghệ.
- Video sản phẩm.

### 6.7 Documentation

- Datasheet.
- User manual.
- Technical handbook.
- Warranty guide.
- FAQ.
- Configuration guide.
- DIP switch guide.
- Marketing brief.

---

## 7. Approved Product Data

### 7.1 K16S

- Channels: 2
- Class: D
- PFC: Có
- Silicon Carbide: Không
- 8 ohms stereo:
  - Hi: 1600W x 2
  - Lo: 1300W x 2
- 4 ohms stereo:
  - Hi: 2800W x 2
  - Lo: 2200W x 2
- 8 ohms bridged mono:
  - Hi: 5600W
  - Lo: 4400W
- Peak output voltage: 162Vpeak
- VPL: 162V / 145V
- Frequency response: 20Hz–22kHz
- Input impedance:
  - Balanced: 20k ohms
  - Unbalanced: 10k ohms
- Cooling: 2 fans
- Dimensions: 483 x 98 x 350 mm
- Weight: 8.5 kg
- Listed price: 16,000,000 VND

### 7.2 K16PRO

- Channels: 4
- Class: D
- PFC: Có
- Silicon Carbide: Không
- 8 ohms stereo:
  - Hi: 1250W x 4
  - Lo: 1050W x 4
- 4 ohms stereo:
  - Hi: 2000W x 4
  - Lo: 1850W x 4
- 8 ohms bridged mono:
  - Hi: 4000W x 2
  - Lo: 3700W x 2
- Peak output voltage: 141Vpeak
- VPL: 141V / 130V
- Damping factor: Greater than 450
- Weight: 9.6 kg
- Listed price: 18,000,000 VND

### 7.3 K19S

- Channels: 2
- Class: D
- PFC: Có
- Silicon Carbide: Không
- AC input range: 140V–240V
- 8 ohms stereo:
  - Hi: 2200W x 2
  - Lo: 1500W x 2
- 4 ohms stereo:
  - Hi: 3400W x 2
  - Lo: 2600W x 2
- 8 ohms bridged mono:
  - Hi: 6800W
  - Lo: 5200W
- VPL: 188V / 156V
- Damping factor: Greater than 2000
- Weight: 9 kg
- Listed price: 20,000,000 VND

### 7.4 K19PRO

- Channels: 4
- Class: D
- PFC: Có
- Silicon Carbide: Có
- 8 ohms stereo:
  - Hi: 1650W x 4
  - Lo: 1400W x 4
- 4 ohms stereo:
  - Hi: 2450W x 4
  - Lo: 2100W x 4
- 8 ohms bridged mono:
  - Hi: 4900W x 2
  - Lo: 4200W x 2
- Peak output voltage: 163Vpeak
- VPL: 163V / 153V
- Damping factor: Greater than 500
- Weight: 10 kg
- Listed price: 23,000,000 VND

### 7.5 K20S

- Channels: 2
- Class: D
- PFC: Có
- Silicon Carbide: Có
- 8 ohms stereo:
  - Hi: 3000W x 2
  - Lo: 2250W x 2
- 4 ohms stereo:
  - Hi: 4800W x 2
  - Lo: 4100W x 2
- 8 ohms bridged mono:
  - Hi: 9600W
  - Lo: 8200W
- Peak output voltage: 219Vpeak
- VPL: 219V / 190V
- Damping factor: Greater than 2000
- Listed price: 24,000,000 VND

### 7.6 K20PLUS

- Channels: 4
- Class: D
- PFC: Có
- Silicon Carbide: Có
- 8 ohms stereo:
  - Hi: 1900W x 4
  - Lo: 1600W x 4
- 4 ohms stereo:
  - Hi: 3000W x 4
  - Lo: 2450W x 4
- 8 ohms bridged mono:
  - Hi: 6000W x 2
  - Lo: 4900W x 2
- Peak output voltage: 175Vpeak
- VPL: 175V / 161V
- Damping factor: Greater than 800
- Listed price: 26,000,000 VND

---

## 8. DIP Switch Knowledge

Hệ thống DIP switch sử dụng dãy S1 và S2 cho từng cặp kênh.

Chức năng chuẩn:

- Switch 1 và 2: Công suất Lo hoặc Hi.
- Switch 3 và 4: Độ nhạy 0.77V hoặc 1.0V.
- Switch 5: Ground Lift.
- Switch 6: Bridge.
- Switch 7: Parallel.
- Switch 8: Stereo.

Quy tắc vận hành:

- Chỉ một trong ba chế độ Bridge, Parallel hoặc Stereo được bật.
- Tắt nguồn trước khi thay đổi DIP switch.
- Sau khi thay đổi, bật hệ thống ở mức âm lượng thấp để kiểm tra.
- ON phải được thể hiện bằng màu xanh.
- OFF phải được thể hiện bằng màu đỏ.

---

## 9. Product Image Rules

Bắt buộc sử dụng ảnh sản phẩm gốc.

Không được:

- Render lại sản phẩm.
- Vẽ lại sản phẩm.
- Thay logo KORAH.
- Thay font logo.
- Thay đổi chữ trên mặt máy.
- Thêm hoặc bớt núm.
- Thêm hoặc bớt LED.
- Thay đổi lưới tản nhiệt.
- Thay đổi tay cầm.
- Thay đổi nút nguồn.
- Thay đổi tỷ lệ sản phẩm.
- Gán sai model.

Chỉ được phép:

- Cắt ảnh.
- Thay nền.
- Điều chỉnh ánh sáng.
- Điều chỉnh độ tương phản.
- Thêm chữ bên ngoài sản phẩm.
- Thêm icon công nghệ đã được phê duyệt.

---

## 10. Naming Rules

Tên model phải viết đúng:

- K16S
- K16PRO
- K19S
- K19PRO
- K20S
- K20PLUS

Không tự ý dùng:

- K16 Pro
- K19 Pro
- K20 Plus
- K19PLUS
- K20+
- Các biến thể tên không được phê duyệt.

Tên file đề xuất:

- k16s
- k16pro
- k19s
- k19pro
- k20s
- k20plus

Ví dụ:

- k19pro-product.md
- k19pro-datasheet.pdf
- k19pro-manual.pdf
- k19pro-front.png

---

## 11. Data Status

Mỗi dữ liệu phải có một trạng thái:

- Draft
- Under Review
- Approved
- Deprecated
- Archived

Chỉ dữ liệu Approved mới được sử dụng cho:

- Website.
- Catalog.
- Datasheet.
- Manual.
- Marketing.
- CRM.
- AI Assistant.
- Nội dung công khai.

---

## 12. Change Control

Mọi thay đổi đối với:

- Công suất.
- Giá.
- Công nghệ.
- Trọng lượng.
- Kích thước.
- Bảo hành.
- Tên model.
- Hình ảnh.
- Chính sách.

phải được kiểm tra và phê duyệt trước khi cập nhật.

Mỗi thay đổi cần ghi rõ:

- Nội dung cũ.
- Nội dung mới.
- Lý do thay đổi.
- Ngày thay đổi.
- Người phê duyệt.
- Hệ thống bị ảnh hưởng.

---

## 13. AI Usage Rules

AI được phép:

- Tìm kiếm dữ liệu.
- Tóm tắt.
- Chuyển đổi định dạng.
- Soạn nội dung dựa trên dữ liệu chuẩn.
- Kiểm tra tính nhất quán.
- Phát hiện dữ liệu thiếu.

AI không được phép:

- Tự tạo thông số.
- Tự thay đổi giá.
- Tự thay đổi bảo hành.
- Tự gán công nghệ.
- Tự xuất bản.
- Tự thay ảnh sản phẩm.
- Dùng dữ liệu Draft như dữ liệu chính thức.

---

## 14. Current Priority

Thứ tự ưu tiên:

1. Xác nhận toàn bộ thông số của 6 model.
2. Xác nhận chính sách bảo hành.
3. Chuẩn hóa ảnh sản phẩm.
4. Chuẩn hóa datasheet.
5. Chuẩn hóa manual.
6. Chuẩn hóa FAQ.
7. Chuẩn hóa dữ liệu website.
8. Chuẩn bị dữ liệu cho AI Technical Expert.

---

End of document.
