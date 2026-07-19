# KNOWLEDGE BASE INVENTORY — KORAH Digital Brain

## 1. Thông tin kiểm kê

- **Ngày kiểm kê:** 2026-07-19
- **Nhánh làm việc:** `claude/phase-1-knowledge-base`
- **Phạm vi kiểm kê:** Toàn bộ tài sản hiện có trong `assets/` và `data/` tại thời điểm kiểm kê. Không bao gồm mã nguồn website (`*.html`, `css/`, `js/`) và không bao gồm `00_MASTER_PLAN/`.
- **Trạng thái tài liệu:** Draft.

Tài liệu này là bản kiểm kê tạm thời phục vụ Giai đoạn 1 – Chuẩn hóa Knowledge Base (09_TECHNICAL_ROADMAP.md mục 11). Đây **không phải** một trong 10 nhóm thư viện chính thức và không thay thế cấu trúc Knowledge Base sẽ được thiết lập sau khi con người xác minh và phê duyệt nội dung của bản kiểm kê này.

---

## 2. Tổng quan

- **Tổng số file:** 129 (125 tài sản nội dung + 4 file `.gitkeep` giữ thư mục Git, không phải tài sản nội dung).
- **Tổng số thư mục:** 13 (`assets/`, `data/` và 11 thư mục con).

### Phân loại theo định dạng file (125 tài sản nội dung, không tính `.gitkeep`)

| Định dạng | Số lượng |
|---|---|
| JPG | 79 |
| PNG | 30 |
| PDF | 13 |
| JS | 2 |
| MP4 | 1 |

### Phân loại theo thư mục nguồn

| Thư mục | Số file nội dung |
|---|---|
| `assets/` (gốc) | 1 |
| `assets/banners/` | 6 |
| `assets/datasheets/` | 12 |
| `assets/events/npse-ha-nam/` | 44 |
| `assets/logo/` | 8 |
| `assets/manuals/` | 12 |
| `assets/products/` | 29 |
| `assets/tech/` | 5 |
| `assets/warranty/media/` | 4 |
| `assets/warranty/phieu-bao-hanh/` | 2 |
| `data/` | 2 |

---

## 3. Bảng kiểm kê chi tiết

Ghi chú cột "Trạng thái xác minh": toàn bộ tài sản trong bản kiểm kê này đều ở trạng thái **Draft** — chưa có tài sản nào được con người xác minh hoặc phê duyệt (theo 08_KNOWLEDGE_BASE.md mục 19, chỉ tài liệu Approved mới được dùng làm dữ liệu chính thức).

| STT | Đường dẫn | Tên file | Định dạng | Dung lượng | Model/Chủ đề | Nhóm thư viện đề xuất | Trạng thái xác minh | Ghi chú rủi ro |
|---|---|---|---|---|---|---|---|---|
| 1 | `assets/banners/.gitkeep` | .gitkeep | — | 0 B | — | Không áp dụng | N/A — không phân loại | File placeholder giữ thư mục Git, không phải tài sản nội dung. |
| 2 | `assets/banners/hero-k16pro.jpg` | hero-k16pro.jpg | JPG | 222.9 KB | Banner sản phẩm K16PRO | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/stack-k16.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 3 | `assets/banners/hero-k19pro.jpg` | hero-k19pro.jpg | JPG | 222.5 KB | Banner sản phẩm K19PRO | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/stack-k19.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 4 | `assets/banners/hero-k20plus.jpg` | hero-k20plus.jpg | JPG | 227.0 KB | Banner sản phẩm K20PLUS | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/stack-k20.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 5 | `assets/banners/stack-k16.jpg` | stack-k16.jpg | JPG | 222.9 KB | Banner (chủ đề chưa xác định) | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/hero-k16pro.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 6 | `assets/banners/stack-k19.jpg` | stack-k19.jpg | JPG | 222.5 KB | Banner (chủ đề chưa xác định) | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/hero-k19pro.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 7 | `assets/banners/stack-k20.jpg` | stack-k20.jpg | JPG | 227.0 KB | Banner (chủ đề chưa xác định) | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/banners/hero-k20plus.jpg.; Ảnh banner/hero website — chưa rõ là ảnh sản phẩm gốc (Image Master Library) hay ảnh đã dựng cho marketing (không thuộc rõ 1 trong 10 nhóm); cần người xác minh nguồn gốc. |
| 8 | `assets/datasheets/k16pro-16x9.png` | k16pro-16x9.png | PNG | 1.2 MB | Datasheet dạng ảnh — K16PRO | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 9 | `assets/datasheets/k16pro-9x16.png` | k16pro-9x16.png | PNG | 1.0 MB | Datasheet dạng ảnh — K16PRO | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 10 | `assets/datasheets/k16s-16x9.png` | k16s-16x9.png | PNG | 1.1 MB | Datasheet dạng ảnh — K16S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 11 | `assets/datasheets/k16s-9x16.png` | k16s-9x16.png | PNG | 985.9 KB | Datasheet dạng ảnh — K16S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 12 | `assets/datasheets/k19pro-16x9.png` | k19pro-16x9.png | PNG | 1.2 MB | Datasheet dạng ảnh — K19PRO | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 13 | `assets/datasheets/k19pro-9x16.png` | k19pro-9x16.png | PNG | 1.0 MB | Datasheet dạng ảnh — K19PRO | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 14 | `assets/datasheets/k19s-16x9.png` | k19s-16x9.png | PNG | 1.1 MB | Datasheet dạng ảnh — K19S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 15 | `assets/datasheets/k19s-9x16.png` | k19s-9x16.png | PNG | 1.1 MB | Datasheet dạng ảnh — K19S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 16 | `assets/datasheets/k20plus-16x9.png` | k20plus-16x9.png | PNG | 1.2 MB | Datasheet dạng ảnh — K20PLUS | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 17 | `assets/datasheets/k20plus-9x16.png` | k20plus-9x16.png | PNG | 1.1 MB | Datasheet dạng ảnh — K20PLUS | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 18 | `assets/datasheets/k20s-16x9.png` | k20s-16x9.png | PNG | 1.2 MB | Datasheet dạng ảnh — K20S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 19 | `assets/datasheets/k20s-9x16.png` | k20s-9x16.png | PNG | 1.0 MB | Datasheet dạng ảnh — K20S | Chưa xác định | Draft | Tên gọi 'datasheet' nhưng định dạng ảnh tỷ lệ mạng xã hội (16x9/9x16) — mơ hồ giữa Technical Library và Marketing Library. |
| 20 | `assets/events/npse-ha-nam/npse-ha-nam-01.jpg` | npse-ha-nam-01.jpg | JPG | 388.1 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 21 | `assets/events/npse-ha-nam/npse-ha-nam-02.jpg` | npse-ha-nam-02.jpg | JPG | 222.8 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 22 | `assets/events/npse-ha-nam/npse-ha-nam-03.jpg` | npse-ha-nam-03.jpg | JPG | 328.5 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 23 | `assets/events/npse-ha-nam/npse-ha-nam-04.jpg` | npse-ha-nam-04.jpg | JPG | 272.3 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 24 | `assets/events/npse-ha-nam/npse-ha-nam-05.jpg` | npse-ha-nam-05.jpg | JPG | 132.6 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 25 | `assets/events/npse-ha-nam/npse-ha-nam-06.jpg` | npse-ha-nam-06.jpg | JPG | 371.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 26 | `assets/events/npse-ha-nam/npse-ha-nam-07.jpg` | npse-ha-nam-07.jpg | JPG | 108.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/events/npse-ha-nam/npse-ha-nam-08.jpg.; Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 27 | `assets/events/npse-ha-nam/npse-ha-nam-08.jpg` | npse-ha-nam-08.jpg | JPG | 108.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | TRÙNG LẶP NỘI DUNG (byte-identical) với: assets/events/npse-ha-nam/npse-ha-nam-07.jpg.; Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 28 | `assets/events/npse-ha-nam/npse-ha-nam-09.jpg` | npse-ha-nam-09.jpg | JPG | 123.5 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 29 | `assets/events/npse-ha-nam/npse-ha-nam-10.jpg` | npse-ha-nam-10.jpg | JPG | 190.9 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 30 | `assets/events/npse-ha-nam/npse-ha-nam-11.jpg` | npse-ha-nam-11.jpg | JPG | 395.1 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 31 | `assets/events/npse-ha-nam/npse-ha-nam-12.jpg` | npse-ha-nam-12.jpg | JPG | 113.6 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 32 | `assets/events/npse-ha-nam/npse-ha-nam-13.jpg` | npse-ha-nam-13.jpg | JPG | 235.9 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 33 | `assets/events/npse-ha-nam/npse-ha-nam-14.jpg` | npse-ha-nam-14.jpg | JPG | 224.9 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 34 | `assets/events/npse-ha-nam/npse-ha-nam-15.jpg` | npse-ha-nam-15.jpg | JPG | 197.1 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 35 | `assets/events/npse-ha-nam/npse-ha-nam-16.jpg` | npse-ha-nam-16.jpg | JPG | 236.4 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 36 | `assets/events/npse-ha-nam/npse-ha-nam-17.jpg` | npse-ha-nam-17.jpg | JPG | 245.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 37 | `assets/events/npse-ha-nam/npse-ha-nam-18.jpg` | npse-ha-nam-18.jpg | JPG | 229.7 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 38 | `assets/events/npse-ha-nam/npse-ha-nam-19.jpg` | npse-ha-nam-19.jpg | JPG | 241.9 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 39 | `assets/events/npse-ha-nam/npse-ha-nam-20.jpg` | npse-ha-nam-20.jpg | JPG | 245.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 40 | `assets/events/npse-ha-nam/npse-ha-nam-21.jpg` | npse-ha-nam-21.jpg | JPG | 255.1 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 41 | `assets/events/npse-ha-nam/npse-ha-nam-22.jpg` | npse-ha-nam-22.jpg | JPG | 199.4 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 42 | `assets/events/npse-ha-nam/npse-ha-nam-23.jpg` | npse-ha-nam-23.jpg | JPG | 356.7 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 43 | `assets/events/npse-ha-nam/npse-ha-nam-24.jpg` | npse-ha-nam-24.jpg | JPG | 410.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 44 | `assets/events/npse-ha-nam/npse-ha-nam-25.jpg` | npse-ha-nam-25.jpg | JPG | 297.7 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 45 | `assets/events/npse-ha-nam/npse-ha-nam-26.jpg` | npse-ha-nam-26.jpg | JPG | 308.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 46 | `assets/events/npse-ha-nam/npse-ha-nam-27.jpg` | npse-ha-nam-27.jpg | JPG | 264.8 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 47 | `assets/events/npse-ha-nam/npse-ha-nam-28.jpg` | npse-ha-nam-28.jpg | JPG | 284.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 48 | `assets/events/npse-ha-nam/npse-ha-nam-29.jpg` | npse-ha-nam-29.jpg | JPG | 336.3 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 49 | `assets/events/npse-ha-nam/npse-ha-nam-30.jpg` | npse-ha-nam-30.jpg | JPG | 261.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 50 | `assets/events/npse-ha-nam/npse-ha-nam-31.jpg` | npse-ha-nam-31.jpg | JPG | 243.7 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 51 | `assets/events/npse-ha-nam/npse-ha-nam-32.jpg` | npse-ha-nam-32.jpg | JPG | 321.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 52 | `assets/events/npse-ha-nam/npse-ha-nam-33.jpg` | npse-ha-nam-33.jpg | JPG | 468.8 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 53 | `assets/events/npse-ha-nam/npse-ha-nam-34.jpg` | npse-ha-nam-34.jpg | JPG | 371.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 54 | `assets/events/npse-ha-nam/npse-ha-nam-35.jpg` | npse-ha-nam-35.jpg | JPG | 292.1 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 55 | `assets/events/npse-ha-nam/npse-ha-nam-36.jpg` | npse-ha-nam-36.jpg | JPG | 331.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 56 | `assets/events/npse-ha-nam/npse-ha-nam-37.jpg` | npse-ha-nam-37.jpg | JPG | 396.3 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 57 | `assets/events/npse-ha-nam/npse-ha-nam-38.jpg` | npse-ha-nam-38.jpg | JPG | 374.6 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 58 | `assets/events/npse-ha-nam/npse-ha-nam-39.jpg` | npse-ha-nam-39.jpg | JPG | 372.5 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 59 | `assets/events/npse-ha-nam/npse-ha-nam-40.jpg` | npse-ha-nam-40.jpg | JPG | 590.0 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 60 | `assets/events/npse-ha-nam/npse-ha-nam-41.jpg` | npse-ha-nam-41.jpg | JPG | 226.3 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 61 | `assets/events/npse-ha-nam/npse-ha-nam-42.jpg` | npse-ha-nam-42.jpg | JPG | 568.6 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 62 | `assets/events/npse-ha-nam/npse-ha-nam-43.jpg` | npse-ha-nam-43.jpg | JPG | 238.2 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 63 | `assets/events/npse-ha-nam/npse-ha-nam-44.jpg` | npse-ha-nam-44.jpg | JPG | 280.8 KB | Sự kiện NPSE Hà Nam | Chưa xác định | Draft | Ảnh tư liệu sự kiện — mơ hồ giữa Image Master Library (ảnh ứng dụng) và Marketing Library (tư liệu truyền thông sự kiện); nhóm hiện chưa có vị trí rõ cho ảnh sự kiện. |
| 64 | `assets/logo/.gitkeep` | .gitkeep | — | 0 B | — | Không áp dụng | N/A — không phân loại | File placeholder giữ thư mục Git, không phải tài sản nội dung. |
| 65 | `assets/logo/ammy-full.png` | ammy-full.png | PNG | 127.5 KB | Logo thương hiệu (AMMY-FULL) | Brand Guideline | Draft | — |
| 66 | `assets/logo/ammy-iso.png` | ammy-iso.png | PNG | 86.6 KB | Logo thương hiệu (AMMY-ISO) | Brand Guideline | Draft | — |
| 67 | `assets/logo/ammy.png` | ammy.png | PNG | 85.2 KB | Logo thương hiệu (AMMY) | Brand Guideline | Draft | — |
| 68 | `assets/logo/apple-touch-icon.png` | apple-touch-icon.png | PNG | 29.6 KB | Logo thương hiệu (APPLE-TOUCH-ICON) | Chưa xác định | Draft | Biểu tượng kỹ thuật website (favicon/touch-icon) suy ra từ logo, không phải file logo gốc — cần xác minh có thuộc Brand Guideline hay là tài sản kỹ thuật website. |
| 69 | `assets/logo/favicon.png` | favicon.png | PNG | 6.6 KB | Logo thương hiệu (FAVICON) | Chưa xác định | Draft | Biểu tượng kỹ thuật website (favicon/touch-icon) suy ra từ logo, không phải file logo gốc — cần xác minh có thuộc Brand Guideline hay là tài sản kỹ thuật website. |
| 70 | `assets/logo/korah.png` | korah.png | PNG | 106.0 KB | Logo thương hiệu (KORAH) | Brand Guideline | Draft | — |
| 71 | `assets/logo/roy.png` | roy.png | PNG | 42.2 KB | Logo thương hiệu (ROY) | Brand Guideline | Draft | — |
| 72 | `assets/logo/usammy.png` | usammy.png | PNG | 42.4 KB | Logo thương hiệu (USAMMY) | Brand Guideline | Draft | — |
| 73 | `assets/manuals/.gitkeep` | .gitkeep | — | 0 B | — | Không áp dụng | N/A — không phân loại | File placeholder giữ thư mục Git, không phải tài sản nội dung. |
| 74 | `assets/manuals/datasheet-k16pro-16x9.pdf` | datasheet-k16pro-16x9.pdf | PDF | 241.7 KB | Datasheet PDF — K16PRO | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 75 | `assets/manuals/datasheet-k16pro-9x16.pdf` | datasheet-k16pro-9x16.pdf | PDF | 241.1 KB | Datasheet PDF — K16PRO | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 76 | `assets/manuals/datasheet-k16s-16x9.pdf` | datasheet-k16s-16x9.pdf | PDF | 241.1 KB | Datasheet PDF — K16S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 77 | `assets/manuals/datasheet-k16s-9x16.pdf` | datasheet-k16s-9x16.pdf | PDF | 240.6 KB | Datasheet PDF — K16S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 78 | `assets/manuals/datasheet-k19pro-16x9.pdf` | datasheet-k19pro-16x9.pdf | PDF | 241.9 KB | Datasheet PDF — K19PRO | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 79 | `assets/manuals/datasheet-k19pro-9x16.pdf` | datasheet-k19pro-9x16.pdf | PDF | 240.8 KB | Datasheet PDF — K19PRO | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 80 | `assets/manuals/datasheet-k19s-16x9.pdf` | datasheet-k19s-16x9.pdf | PDF | 241.2 KB | Datasheet PDF — K19S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 81 | `assets/manuals/datasheet-k19s-9x16.pdf` | datasheet-k19s-9x16.pdf | PDF | 240.6 KB | Datasheet PDF — K19S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 82 | `assets/manuals/datasheet-k20plus-16x9.pdf` | datasheet-k20plus-16x9.pdf | PDF | 628.0 KB | Datasheet PDF — K20PLUS | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 83 | `assets/manuals/datasheet-k20plus-9x16.pdf` | datasheet-k20plus-9x16.pdf | PDF | 626.8 KB | Datasheet PDF — K20PLUS | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 84 | `assets/manuals/datasheet-k20s-16x9.pdf` | datasheet-k20s-16x9.pdf | PDF | 241.8 KB | Datasheet PDF — K20S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 85 | `assets/manuals/datasheet-k20s-9x16.pdf` | datasheet-k20s-9x16.pdf | PDF | 240.9 KB | Datasheet PDF — K20S | Technical Library | Draft | Tên 'datasheet' nhưng hậu tố 16x9/9x16 bất thường với tài liệu PDF kỹ thuật — cần xác minh đây có phải Datasheet chính thức hay bản xuất từ nội dung marketing. |
| 86 | `assets/og-image.jpg` | og-image.jpg | JPG | 169.2 KB | Ảnh chia sẻ mạng xã hội (Open Graph) | Chưa xác định | Draft | Ảnh Open Graph (SEO/chia sẻ mạng xã hội) — tài sản kỹ thuật website, không khớp rõ 1 trong 10 nhóm. |
| 87 | `assets/products/.gitkeep` | .gitkeep | — | 0 B | — | Không áp dụng | N/A — không phân loại | File placeholder giữ thư mục Git, không phải tài sản nội dung. |
| 88 | `assets/products/cautao-k16pro.jpg` | cautao-k16pro.jpg | JPG | 294.6 KB | Ảnh cấu tạo — K16PRO | Image Master Library | Draft | — |
| 89 | `assets/products/cautao-k19pro.jpg` | cautao-k19pro.jpg | JPG | 329.4 KB | Ảnh cấu tạo — K19PRO | Image Master Library | Draft | — |
| 90 | `assets/products/dip-switch-guide.jpg` | dip-switch-guide.jpg | JPG | 392.3 KB | Hướng dẫn DIP switch | Technical Library | Draft | Nội dung theo tên là hướng dẫn DIP switch (08_KNOWLEDGE_BASE mục 13) nhưng đang lưu trong assets/products/ thay vì vị trí Technical Library — vị trí thư mục không khớp nhóm đề xuất. |
| 91 | `assets/products/k16pro-front.jpg` | k16pro-front.jpg | JPG | 152.5 KB | Ảnh sản phẩm — K16PRO | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k16pro-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 92 | `assets/products/k16pro-front.png` | k16pro-front.png | PNG | 1.3 MB | Ảnh sản phẩm — K16PRO | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k16pro-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 93 | `assets/products/k16s-front.jpg` | k16s-front.jpg | JPG | 144.8 KB | Ảnh sản phẩm — K16S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k16s-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 94 | `assets/products/k16s-front.png` | k16s-front.png | PNG | 1.5 MB | Ảnh sản phẩm — K16S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k16s-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 95 | `assets/products/k18-series-brochure.jpg` | k18-series-brochure.jpg | JPG | 330.5 KB | Model K18 (ngoài danh mục đã duyệt) | Chưa xác định | Draft | Model K18 KHÔNG có trong danh mục sản phẩm đã duyệt (04_PRODUCT_KNOWLEDGE mục 4 và mục 10 chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người xác minh đây là sản phẩm ngừng kinh doanh, đặt tên sai, hay dữ liệu ngoài phạm vi. |
| 96 | `assets/products/k18plus-datasheet.jpg` | k18plus-datasheet.jpg | JPG | 368.9 KB | Model K18 (ngoài danh mục đã duyệt) | Chưa xác định | Draft | Model K18 KHÔNG có trong danh mục sản phẩm đã duyệt (04_PRODUCT_KNOWLEDGE mục 4 và mục 10 chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người xác minh đây là sản phẩm ngừng kinh doanh, đặt tên sai, hay dữ liệu ngoài phạm vi. |
| 97 | `assets/products/k18plus-interior-1.jpg` | k18plus-interior-1.jpg | JPG | 108.6 KB | Model K18 (ngoài danh mục đã duyệt) | Chưa xác định | Draft | Model K18 KHÔNG có trong danh mục sản phẩm đã duyệt (04_PRODUCT_KNOWLEDGE mục 4 và mục 10 chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người xác minh đây là sản phẩm ngừng kinh doanh, đặt tên sai, hay dữ liệu ngoài phạm vi. |
| 98 | `assets/products/k18plus-interior-2.jpg` | k18plus-interior-2.jpg | JPG | 145.2 KB | Model K18 (ngoài danh mục đã duyệt) | Chưa xác định | Draft | Model K18 KHÔNG có trong danh mục sản phẩm đã duyệt (04_PRODUCT_KNOWLEDGE mục 4 và mục 10 chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người xác minh đây là sản phẩm ngừng kinh doanh, đặt tên sai, hay dữ liệu ngoài phạm vi. |
| 99 | `assets/products/k18s-datasheet.jpg` | k18s-datasheet.jpg | JPG | 484.2 KB | Model K18 (ngoài danh mục đã duyệt) | Chưa xác định | Draft | Model K18 KHÔNG có trong danh mục sản phẩm đã duyệt (04_PRODUCT_KNOWLEDGE mục 4 và mục 10 chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người xác minh đây là sản phẩm ngừng kinh doanh, đặt tên sai, hay dữ liệu ngoài phạm vi. |
| 100 | `assets/products/k19pro-angle.jpg` | k19pro-angle.jpg | JPG | 154.7 KB | Ảnh sản phẩm — K19PRO | Image Master Library | Draft | — |
| 101 | `assets/products/k19pro-front.jpg` | k19pro-front.jpg | JPG | 151.6 KB | Ảnh sản phẩm — K19PRO | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k19pro-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 102 | `assets/products/k19pro-front.png` | k19pro-front.png | PNG | 1.6 MB | Ảnh sản phẩm — K19PRO | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k19pro-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 103 | `assets/products/k19s-front.jpg` | k19s-front.jpg | JPG | 143.9 KB | Ảnh sản phẩm — K19S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k19s-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 104 | `assets/products/k19s-front.png` | k19s-front.png | PNG | 1.5 MB | Ảnh sản phẩm — K19S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k19s-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 105 | `assets/products/k20plus-front.jpg` | k20plus-front.jpg | JPG | 152.1 KB | Ảnh sản phẩm — K20PLUS | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k20plus-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 106 | `assets/products/k20plus-front.png` | k20plus-front.png | PNG | 954.9 KB | Ảnh sản phẩm — K20PLUS | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k20plus-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 107 | `assets/products/k20s-angle.jpg` | k20s-angle.jpg | JPG | 156.9 KB | Ảnh sản phẩm — K20S | Image Master Library | Draft | — |
| 108 | `assets/products/k20s-front.jpg` | k20s-front.jpg | JPG | 137.1 KB | Ảnh sản phẩm — K20S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k20s-front.png — có thể là 2 phiên bản xuất của cùng ảnh. |
| 109 | `assets/products/k20s-front.png` | k20s-front.png | PNG | 1.2 MB | Ảnh sản phẩm — K20S | Image Master Library | Draft | Cùng tên gốc khác định dạng với: assets/products/k20s-front.jpg — có thể là 2 phiên bản xuất của cùng ảnh. |
| 110 | `assets/products/prod-k16pro.png` | prod-k16pro.png | PNG | 814.2 KB | Ảnh sản phẩm — K16PRO | Image Master Library | Draft | — |
| 111 | `assets/products/prod-k19pro.png` | prod-k19pro.png | PNG | 796.5 KB | Ảnh sản phẩm — K19PRO | Image Master Library | Draft | — |
| 112 | `assets/products/prod-k20plus.png` | prod-k20plus.png | PNG | 814.8 KB | Ảnh sản phẩm — K20PLUS | Image Master Library | Draft | — |
| 113 | `assets/products/rear-panel.png` | rear-panel.png | PNG | 724.0 KB | Ảnh mặt sau sản phẩm (model chưa xác định) | Image Master Library | Draft | Không xác định được model cụ thể từ tên file. |
| 114 | `assets/products/stack-k16.jpg` | stack-k16.jpg | JPG | 337.7 KB | Chưa xác định | Image Master Library | Draft | Trùng TÊN FILE với file khác thư mục: assets/banners/stack-k16.jpg — nội dung khác nhau, cần xác minh. |
| 115 | `assets/products/stack-k19.jpg` | stack-k19.jpg | JPG | 336.6 KB | Chưa xác định | Image Master Library | Draft | Trùng TÊN FILE với file khác thư mục: assets/banners/stack-k19.jpg — nội dung khác nhau, cần xác minh. |
| 116 | `assets/products/stack-k20.jpg` | stack-k20.jpg | JPG | 341.6 KB | Chưa xác định | Image Master Library | Draft | Trùng TÊN FILE với file khác thư mục: assets/banners/stack-k20.jpg — nội dung khác nhau, cần xác minh. |
| 117 | `assets/tech/haumai-baohiem.jpg` | haumai-baohiem.jpg | JPG | 72.0 KB | Hậu mãi / quy trình bảo hiểm | Chưa xác định | Draft | Chủ đề hậu mãi/bảo hiểm/quy trình — không khớp rõ 1 trong 10 nhóm (có thể Sales Library hoặc Technical Library - Warranty Guide). |
| 118 | `assets/tech/haumai-quytrinh.jpg` | haumai-quytrinh.jpg | JPG | 276.6 KB | Hậu mãi / quy trình bảo hiểm | Chưa xác định | Draft | Chủ đề hậu mãi/bảo hiểm/quy trình — không khớp rõ 1 trong 10 nhóm (có thể Sales Library hoặc Technical Library - Warranty Guide). |
| 119 | `assets/tech/poster-classd.jpg` | poster-classd.jpg | JPG | 172.4 KB | Công nghệ CLASSD | Chưa xác định | Draft | Poster công nghệ — mơ hồ giữa Technology Library (nội dung công nghệ) và Marketing Library (định dạng poster truyền thông). |
| 120 | `assets/tech/poster-pfc.jpg` | poster-pfc.jpg | JPG | 296.0 KB | Công nghệ PFC | Chưa xác định | Draft | Poster công nghệ — mơ hồ giữa Technology Library (nội dung công nghệ) và Marketing Library (định dạng poster truyền thông). |
| 121 | `assets/tech/poster-sic.jpg` | poster-sic.jpg | JPG | 279.8 KB | Công nghệ SIC | Chưa xác định | Draft | Poster công nghệ — mơ hồ giữa Technology Library (nội dung công nghệ) và Marketing Library (định dạng poster truyền thông). |
| 122 | `assets/warranty/media/bao-hanh-5-sao-01.jpg` | bao-hanh-5-sao-01.jpg | JPG | 320.9 KB | Chương trình bảo hành 5 sao | Chưa xác định | Draft | Ảnh minh họa chương trình bảo hành 5 sao — mơ hồ giữa Marketing Library và Technical Library (Warranty Guide). |
| 123 | `assets/warranty/media/bao-hanh-5-sao-02.jpg` | bao-hanh-5-sao-02.jpg | JPG | 276.8 KB | Chương trình bảo hành 5 sao | Chưa xác định | Draft | Ảnh minh họa chương trình bảo hành 5 sao — mơ hồ giữa Marketing Library và Technical Library (Warranty Guide). |
| 124 | `assets/warranty/media/bao-hanh-5-sao-03.jpg` | bao-hanh-5-sao-03.jpg | JPG | 316.3 KB | Chương trình bảo hành 5 sao | Chưa xác định | Draft | Ảnh minh họa chương trình bảo hành 5 sao — mơ hồ giữa Marketing Library và Technical Library (Warranty Guide). |
| 125 | `assets/warranty/media/korah-bao-hanh-5-sao.mp4` | korah-bao-hanh-5-sao.mp4 | MP4 | 2.7 MB | Chương trình bảo hành 5 sao | Video Library | Draft | Cần xác minh đã qua phê duyệt nội dung trước khi công nhận chính thức thuộc Video Library (08 mục 12 chỉ công nhận video đã phê duyệt). |
| 126 | `assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg` | phieu-gui-hang-bao-hanh-korah.jpg | JPG | 327.7 KB | Phiếu gửi hàng bảo hành | Chưa xác định | Draft | Cùng tên gốc khác định dạng với: assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf — có thể là 2 phiên bản xuất của cùng ảnh.; Phiếu gửi hàng bảo hành — tài liệu hành chính hỗ trợ bán hàng/bảo hành, không khớp rõ 1 trong 10 nhóm (có thể Sales Library hoặc Technical Library). |
| 127 | `assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.pdf` | phieu-gui-hang-bao-hanh-korah.pdf | PDF | 813.1 KB | Phiếu gửi hàng bảo hành | Chưa xác định | Draft | Cùng tên gốc khác định dạng với: assets/warranty/phieu-bao-hanh/phieu-gui-hang-bao-hanh-korah.jpg — có thể là 2 phiên bản xuất của cùng ảnh.; Phiếu gửi hàng bảo hành — tài liệu hành chính hỗ trợ bán hàng/bảo hành, không khớp rõ 1 trong 10 nhóm (có thể Sales Library hoặc Technical Library). |
| 128 | `data/categories.js` | categories.js | JS | 729 B | Danh mục sản phẩm website | Chưa xác định | Draft | Cấu trúc phân loại danh mục hiển thị trên website — mơ hồ giữa Product Database và cấu hình kỹ thuật website thuần túy. |
| 129 | `data/products.js` | products.js | JS | 24.6 KB | Dữ liệu sản phẩm website (cấu trúc) | Product Database | Draft | Cần đối chiếu với Approved Product Data tại 04_PRODUCT_KNOWLEDGE.md mục 7 trước khi công nhận chính thức là Product Database; có thể chứa model ngoài danh mục đã duyệt (ví dụ K18) — cần người kiểm tra trực tiếp, không tự suy diễn nội dung. |

---

## 4. Mười nhóm thư viện đã chốt (căn cứ ánh xạ, 08_KNOWLEDGE_BASE.md mục 6)

1. Brand Guideline
2. Product Database
3. Technology Library
4. Image Master Library
5. Marketing Library
6. Video Library
7. Technical Library
8. AI Instructions
9. Sales Library
10. Dealer Library

Không có tài sản nào trong bản kiểm kê được gán vào nhóm thứ 11.

---

## 5. Quy tắc phân loại đã áp dụng

- Chỉ phân loại dựa trên tên file, đường dẫn và loại file; không mở hoặc đọc nội dung kỹ thuật bên trong ảnh/PDF, không tự suy diễn thông số kỹ thuật, giá, bảo hành hoặc công nghệ.
- Khi chưa đủ căn cứ để xác định đúng một trong 10 nhóm, cột "Nhóm thư viện đề xuất" ghi **"Chưa xác định"**.
- Không có tài sản nào được tự đánh dấu Approved; toàn bộ ở trạng thái Draft.
- File có tên mơ hồ, khó xác định model, hoặc sai quy ước đặt tên (04_PRODUCT_KNOWLEDGE.md mục 10) được ghi chú rõ trong cột "Ghi chú rủi ro" — bao gồm các file gắn model **K18** (không có trong danh mục đã duyệt).
- File có khả năng trùng lặp được ghi chú rõ theo ba loại, không tự xóa hoặc gộp bất kỳ file nào:
  - **Trùng lặp nội dung (byte-identical, xác minh bằng checksum MD5):** không suy diễn nội dung kỹ thuật, chỉ đối chiếu khách quan dữ liệu nhị phân của file.
  - **Trùng tên file giữa hai thư mục khác nhau, nội dung khác nhau.**
  - **Trùng tên gốc, khác định dạng file** (ví dụ `.jpg` và `.png` của cùng một tên).
- Product Database trong bản kiểm kê chỉ ghi nhận `data/products.js` như một ứng viên chứa dữ liệu có cấu trúc — chưa được đối chiếu hay xác nhận khớp với Approved Product Data tại 04_PRODUCT_KNOWLEDGE.md mục 7.
- Image Master Library chỉ áp dụng cho ảnh có tên/đường dẫn cho thấy đây là ảnh sản phẩm gốc (mặt trước, góc nghiêng, cấu tạo, chi tiết); ảnh chưa rõ nguồn gốc (banner, ảnh sự kiện, ảnh brochure/marketing) được để "Chưa xác định".
- Technical Library chỉ áp dụng cho tài liệu có tên/đường dẫn cho thấy đây là tài liệu kỹ thuật hoàn chỉnh (Datasheet PDF, hướng dẫn DIP switch); không áp dụng cho ảnh datasheet dạng đồ họa mạng xã hội (tỷ lệ 16x9/9x16), các file này được để "Chưa xác định" do mơ hồ giữa Technical Library và Marketing Library.

---

## 6. Tổng hợp

### 6.1 Tài sản có thể phân loại rõ (44 file, không tính `.gitkeep`)

| Nhóm thư viện | Số file |
|---|---|
| Image Master Library | 23 |
| Technical Library | 13 |
| Brand Guideline | 6 |
| Video Library | 1 |
| Product Database | 1 |

### 6.2 Tài sản chưa thể phân loại

- **81 file** được ghi "Chưa xác định", chiếm phần lớn tổng số tài sản (65% trong 125 tài sản nội dung). Nhóm lớn nhất là 44 ảnh sự kiện NPSE Hà Nam (`assets/events/npse-ha-nam/`), không có vị trí rõ ràng trong 10 nhóm hiện tại.
- Các nhóm mơ hồ điển hình khác: banner/hero website (6 file), datasheet dạng ảnh 16x9/9x16 (12 file), poster công nghệ (3 file), media bảo hành 5 sao dạng ảnh (3 file), phiếu gửi hàng bảo hành (2 file), ảnh hậu mãi/bảo hiểm (2 file), biểu tượng web favicon/apple-touch-icon (2 file), ảnh Open Graph (1 file), 5 file model K18, `data/categories.js` (1 file).

### 6.3 Tài sản có khả năng trùng lặp

- **Trùng lặp nội dung (byte-identical):** 4 cặp / 8 file —
  - `assets/banners/hero-k16pro.jpg` ≡ `assets/banners/stack-k16.jpg`
  - `assets/banners/hero-k19pro.jpg` ≡ `assets/banners/stack-k19.jpg`
  - `assets/banners/hero-k20plus.jpg` ≡ `assets/banners/stack-k20.jpg`
  - `assets/events/npse-ha-nam/npse-ha-nam-07.jpg` ≡ `assets/events/npse-ha-nam/npse-ha-nam-08.jpg`
- **Trùng tên file khác thư mục, nội dung khác nhau:** 3 file — `assets/products/stack-k16.jpg`, `stack-k19.jpg`, `stack-k20.jpg` trùng tên với các file tương ứng trong `assets/banners/` nhưng dung lượng và nội dung khác nhau.
- **Trùng tên gốc, khác định dạng:** 7 cặp / 14 file — 6 cặp ảnh sản phẩm `*-front.jpg`/`*-front.png` (K16PRO, K16S, K19PRO, K19S, K20PLUS, K20S) và 1 cặp `phieu-gui-hang-bao-hanh-korah.jpg`/`.pdf`.
- Không có file nào bị xóa, gộp hay đổi tên trong quá trình kiểm kê.

### 6.4 Tài sản cần con người xác minh (ưu tiên cao)

- **5 file gắn model "K18"** (`k18-series-brochure.jpg`, `k18plus-datasheet.jpg`, `k18plus-interior-1.jpg`, `k18plus-interior-2.jpg`, `k18s-datasheet.jpg`) — model K18 không có trong danh mục sản phẩm đã duyệt tại 04_PRODUCT_KNOWLEDGE.md mục 4 và mục 10 (chỉ công nhận K16S/K16PRO/K19S/K19PRO/K20S/K20PLUS). Cần người quản trị xác nhận đây là sản phẩm ngừng kinh doanh, tài sản lưu trữ ngoài phạm vi, hay dữ liệu cần loại khỏi hệ thống.
- `data/products.js` — cần đối chiếu trực tiếp với Approved Product Data (04 mục 7) trước khi công nhận là Product Database chính thức; có khả năng chứa dữ liệu model ngoài danh mục đã duyệt.
- 12 file trong `assets/datasheets/` và 3 poster trong `assets/tech/` — cần xác định đây thuộc Technical/Technology Library hay Marketing Library trước khi lưu trữ chính thức.
- 12 file cặp `*-front.jpg`/`*-front.png` — cần xác định phiên bản nào là ảnh gốc chính thức thuộc Image Master Library, tránh lưu song song hai bản không rõ nguồn.
- 8 file trùng lặp nội dung byte-identical — cần người quyết định giữ bản nào làm bản chính thức.

### 6.5 Các nhóm thư viện hiện chưa có tài liệu

Trong 10 nhóm đã chốt, các nhóm sau **chưa có tài sản nào** được ánh xạ (kể cả tạm thời) từ `assets/` và `data/`:

- Technology Library
- Marketing Library
- Sales Library
- Dealer Library
- AI Instructions

(Một số tài sản trong nhóm "Chưa xác định" — poster công nghệ, ảnh hậu mãi/bảo hiểm, phiếu gửi hàng bảo hành — có khả năng thuộc về các nhóm này, nhưng chưa đủ căn cứ để xác nhận.)

### 6.6 Đề xuất đúng một hành động tiếp theo

Người quản trị Knowledge Base tổ chức một vòng **xác minh thủ công (Under Review)** cho danh sách ưu tiên tại mục 6.4 — bắt đầu từ 5 file model K18 và 8 file trùng lặp nội dung byte-identical — để quyết định: giữ/loại bỏ, gán đúng nhóm thư viện, và chuyển trạng thái sang Approved hoặc Archived theo đúng quy trình tại 08_KNOWLEDGE_BASE.md mục 20–22, trước khi tiến hành bất kỳ bước tổ chức thư mục Knowledge Base chính thức nào.

---

*Hết tài liệu kiểm kê.*
