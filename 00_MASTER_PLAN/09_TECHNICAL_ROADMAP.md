# KORAH TECHNICAL ROADMAP

## 1. Mục đích của Technical Roadmap

Tài liệu này chuyển toàn bộ kiến trúc đã chốt tại 01_PROJECT_CHARTER.md đến 08_KNOWLEDGE_BASE.md thành một lộ trình triển khai kỹ thuật theo từng giai đoạn.

Technical Roadmap chỉ xác định thứ tự, phạm vi, điều kiện bắt đầu và tiêu chí hoàn thành của từng giai đoạn. Tài liệu này không viết mã, không trực tiếp triển khai website, CRM, AI hoặc Knowledge Base, và không thay đổi bất kỳ quyết định kiến trúc nào đã có tại 01–08.

---

## 2. Phạm vi lộ trình

Lộ trình bao phủ việc triển khai kỹ thuật cho:

- Knowledge Base theo 08_KNOWLEDGE_BASE.md.
- Product Database theo 04_PRODUCT_KNOWLEDGE.md.
- Website theo 03_WEBSITE_ARCHITECTURE.md.
- CRM theo 07_CRM_ARCHITECTURE.md.
- Marketing System theo 05_MARKETING_SYSTEM.md.
- AI theo 06_AI_ARCHITECTURE.md.

Lộ trình không bao gồm ERP, kế toán, sản xuất hoặc quản lý kho, theo đúng phạm vi "Out of Scope" tại 01_PROJECT_CHARTER.md mục 9.

---

## 3. Nguyên tắc triển khai

- Phải hoàn thành và khóa Master Plan trước khi triển khai.
- Knowledge Base phải được chuẩn hóa trước khi AI sử dụng.
- Product Database phải được xác minh trước khi website, CRM và marketing sử dụng.
- Không kết nối tự động khi dữ liệu nguồn chưa được phê duyệt.
- Website, CRM, Marketing System và AI chỉ dùng dữ liệu chính thức.
- Mỗi giai đoạn phải được kiểm tra và phê duyệt trước khi chuyển sang giai đoạn tiếp theo.
- AI được triển khai sau khi dữ liệu và quy trình kiểm soát con người đã sẵn sàng.
- Không tự động xuất bản nội dung.
- Không tự động thay đổi dữ liệu kinh doanh, sản phẩm, khách hàng, giá bán, bảo hành hoặc đại lý.
- Ưu tiên thứ tự triển khai an toàn, có thể kiểm tra và có thể quay lại trạng thái trước.

---

## 4. Trạng thái kỹ thuật hiện tại

Repository hiện tại là một website tĩnh (static HTML) đã được triển khai, đi kèm bộ tài liệu kiến trúc Master Plan (01–08) trong thư mục 00_MASTER_PLAN. Chưa tồn tại hệ thống CRM, Knowledge Base kỹ thuật, hoặc AI Instructions vận hành thực tế trong repository. Website được triển khai qua Vercel theo quy trình tại 03_WEBSITE_ARCHITECTURE.md mục 14.

---

## 5. Các thành phần đã có trong repository

- Website tĩnh gồm các trang: index.html, about.html, products.html, product-detail.html, technology.html, applications.html, operation.html, events.html, download.html, support.html, after-sales.html, dealers.html, contact.html, vision.html.
- Thư mục css/, js/, assets/.
- Thư mục data/ chứa categories.js và products.js.
- robots.txt và sitemap.xml.
- README.md ghi lịch sử phiên bản website.
- Thư mục 00_MASTER_PLAN/ chứa 8 file kiến trúc: 01_PROJECT_CHARTER.md, 02_BUSINESS_ARCHITECTURE.md, 03_WEBSITE_ARCHITECTURE.md, 04_PRODUCT_KNOWLEDGE.md, 05_MARKETING_SYSTEM.md, 06_AI_ARCHITECTURE.md, 07_CRM_ARCHITECTURE.md, 08_KNOWLEDGE_BASE.md.

---

## 6. Các thành phần đã có kiến trúc nhưng chưa triển khai

- CRM: kiến trúc đầy đủ tại 07_CRM_ARCHITECTURE.md, chưa có hệ thống kỹ thuật thực tế trong repository.
- Knowledge Base: cấu trúc 10 nhóm thư viện đã chốt tại 08_KNOWLEDGE_BASE.md, chưa có tổ chức dữ liệu thực tế theo cấu trúc này.
- AI Instructions: vai trò và giới hạn của từng công cụ AI đã chốt tại 06_AI_ARCHITECTURE.md, chưa có quy trình vận hành thực tế được thiết lập.
- Marketing System: quy trình nội dung và Content Database đã chốt tại 05_MARKETING_SYSTEM.md, chưa có công cụ hoặc quy trình vận hành thực tế.
- Dealer Portal: được liệt kê trong phạm vi dự án tại 01_PROJECT_CHARTER.md mục 8, nhưng chưa có tài liệu kiến trúc riêng trong 01–08. Dữ liệu hiện tại chưa đủ để kết luận về phạm vi kỹ thuật của Dealer Portal.

---

## 7. Các dữ liệu hoặc quyết định còn thiếu

Các điểm sau đã được ghi nhận là "Dữ liệu hiện tại chưa đủ để kết luận" trong các file kiến trúc trước đó và vẫn còn thiếu tại thời điểm lập roadmap:

- Thời hạn bảo hành cụ thể theo từng model (liên quan 04_PRODUCT_KNOWLEDGE.md mục 7, 07_CRM_ARCHITECTURE.md mục 8 và mục 16).
- Cơ chế đồng bộ kỹ thuật giữa CRM và website (07_CRM_ARCHITECTURE.md mục 7 và mục 15).
- Cơ chế đồng bộ kỹ thuật giữa Knowledge Base và website (08_KNOWLEDGE_BASE.md mục 28).
- Cơ chế phân quyền kỹ thuật và mã hóa dữ liệu khách hàng (07_CRM_ARCHITECTURE.md mục 19).
- Tần suất sao lưu và vị trí lưu trữ bản sao lưu (07_CRM_ARCHITECTURE.md mục 20, 08_KNOWLEDGE_BASE.md mục 32).
- Tần suất kiểm tra định kỳ Knowledge Base (08_KNOWLEDGE_BASE.md mục 33).
- Phạm vi kỹ thuật chi tiết của Dealer Portal (chưa có tài liệu kiến trúc riêng).

Các điểm này phải được xác nhận trước khi giai đoạn liên quan trong roadmap này bắt đầu hoặc kết thúc, theo nguyên tắc không tự suy diễn.

---

## 8. Quan hệ phụ thuộc giữa các hệ thống

- Knowledge Base là lớp dữ liệu nền, theo 08_KNOWLEDGE_BASE.md mục 2.
- Product Database (thuộc Knowledge Base) phải được xác minh trước khi Website, CRM và Marketing System sử dụng, theo 08 mục 8, 28, 29, 30 và 07 mục 16.
- Website phụ thuộc Product Database, Brand Guideline, Technology Library, Technical Library và Image Master Library, theo 08 mục 28.
- CRM phụ thuộc Product Database để xác thực model và Dealer Library để xác thực đại lý, theo 07 mục 16 và 08 mục 30.
- Marketing System phụ thuộc toàn bộ các nhóm thư viện liên quan trong Knowledge Base, theo 05 mục 15 và 08 mục 29.
- AI phụ thuộc vào Knowledge Base đã chuẩn hóa và quy trình kiểm soát con người đã sẵn sàng ở các hệ thống khác, theo 06_AI_ARCHITECTURE.md và nguyên tắc tại mục 3 của tài liệu này.

---

## 9. Thứ tự ưu tiên tổng thể

Thứ tự tổng thể của roadmap là: Giai đoạn 0 (khóa Master Plan) → Giai đoạn 1 (Knowledge Base) → Giai đoạn 2 (Product Database) → Giai đoạn 3 (Website) → Giai đoạn 4 (CRM) → Giai đoạn 5 (Marketing System) → Giai đoạn 6 (AI) → Giai đoạn 7 (kiểm tra tích hợp) → Giai đoạn 8 (vận hành thử) → Giai đoạn 9 (đánh giá trước khi vận hành chính thức).

Thứ tự này bám sát Business Priorities tại 02_BUSINESS_ARCHITECTURE.md mục 9, Current Priority tại 03_WEBSITE_ARCHITECTURE.md mục 16 và 06_AI_ARCHITECTURE.md mục 20, và Các giai đoạn triển khai đã có tại 07_CRM_ARCHITECTURE.md mục 21 và 08_KNOWLEDGE_BASE.md mục 34. Roadmap không tạo thứ tự ưu tiên mới ngoài những gì đã thống nhất ở các file này.

---

## 10. Giai đoạn 0 – Kiểm tra và khóa Master Plan

**Mục tiêu:** Xác nhận toàn bộ 8 file kiến trúc (01–08) không còn mâu thuẫn hoặc điểm mơ hồ nghiêm trọng, và khóa làm nền tảng chính thức.

**Phạm vi:** Toàn bộ nội dung 01_PROJECT_CHARTER.md đến 08_KNOWLEDGE_BASE.md.

**Điều kiện bắt đầu:** 8 file kiến trúc đã tồn tại và đã qua ít nhất một vòng kiểm tra đối chiếu.

**Công việc chính:** Rà soát chéo giữa các file; xác nhận các điểm từng ở trạng thái "Hoàn thành có điều kiện" đã được xử lý; xác nhận không còn mâu thuẫn chưa giải quyết.

**Kết quả đầu ra:** 8 file kiến trúc được xác nhận là nền tảng chính thức cho triển khai.

**Tiêu chí nghiệm thu:** Không còn mâu thuẫn chưa xử lý giữa các file; không còn điểm "cần chỉnh sửa trước khi khóa" còn tồn đọng theo các báo cáo kiểm tra trước đó.

**Người kiểm tra hoặc phê duyệt:** Người quản trị Master Plan.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Master Plan được xác nhận khóa chính thức bởi người phê duyệt.

**Không được thực hiện:** Không triển khai bất kỳ hệ thống kỹ thuật nào; không chỉnh sửa website; không xây dựng CRM, Knowledge Base kỹ thuật hoặc AI trong giai đoạn này.

---

## 11. Giai đoạn 1 – Chuẩn hóa Knowledge Base

**Mục tiêu:** Tổ chức dữ liệu thực tế vào đúng cấu trúc 10 nhóm thư viện tại 08_KNOWLEDGE_BASE.md mục 6.

**Phạm vi:** Brand Guideline, Product Database (cấu trúc), Technology Library, Image Master Library, Marketing Library, Video Library, Technical Library, AI Instructions, Sales Library, Dealer Library.

**Điều kiện bắt đầu:** Giai đoạn 0 đã hoàn tất; Master Plan đã khóa.

**Công việc chính:** Thu thập, phân loại, đặt tên và gắn trạng thái xác minh (08 mục 19) cho tài liệu hiện có theo đúng 10 nhóm; thiết lập quan hệ sở hữu và tham chiếu giữa Product Database, Image Master Library và Technical Library theo 08 mục 8, 10 và 13.

**Kết quả đầu ra:** Knowledge Base có cấu trúc tổ chức thực tế, tài liệu được phân loại đúng nhóm và gắn trạng thái xác minh.

**Tiêu chí nghiệm thu:** Mỗi tài liệu thuộc đúng một trong 10 nhóm; không phát sinh nhóm thứ 11; tài liệu quan trọng đạt trạng thái Approved theo quy trình tại 08 mục 20–22.

**Người kiểm tra hoặc phê duyệt:** Người quản trị Knowledge Base theo 08 mục 31.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Product Database và Image Master Library có đủ dữ liệu tối thiểu để phục vụ Giai đoạn 2.

**Không được thực hiện:** Không kết nối Knowledge Base với website, CRM hoặc AI khi dữ liệu chưa đạt trạng thái Approved; không để AI tự động phân loại hoặc tự phê duyệt tài liệu.

---

## 12. Giai đoạn 2 – Chuẩn hóa Product Database

**Mục tiêu:** Xác minh và khóa toàn bộ dữ liệu sản phẩm chính thức theo 04_PRODUCT_KNOWLEDGE.md.

**Phạm vi:** Thông số kỹ thuật, giá niêm yết, công nghệ, trạng thái sản phẩm cho 6 model: K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS, cùng liên kết tham chiếu tới Image Master Library và Technical Library theo 08 mục 8.

**Điều kiện bắt đầu:** Giai đoạn 1 đã hoàn tất; Image Master Library và Technical Library có dữ liệu tối thiểu để liên kết tham chiếu.

**Công việc chính:** Đối chiếu dữ liệu đã có tại 04 mục 7 với thực tế; xác nhận trạng thái Approved cho từng model theo 04 mục 11; xác định các dữ liệu còn thiếu (ví dụ thời hạn bảo hành theo model) và ghi nhận theo mục 7 của tài liệu này nếu chưa xác nhận được.

**Kết quả đầu ra:** Product Database ở trạng thái Approved, sẵn sàng làm nguồn tham chiếu duy nhất cho website, CRM và marketing.

**Tiêu chí nghiệm thu:** Không còn thông số dự kiến công khai nào ở trạng thái Draft hoặc Under Review; không có mâu thuẫn dữ liệu giữa các nguồn.

**Người kiểm tra hoặc phê duyệt:** Người phê duyệt dữ liệu sản phẩm theo Change Control tại 04 mục 12 và quy trình phê duyệt tại 08 mục 21.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Product Database đạt Approved cho toàn bộ 6 model.

**Không được thực hiện:** Không công bố dữ liệu sản phẩm chưa Approved lên website; không để marketing hoặc CRM sử dụng dữ liệu ở trạng thái Draft.

---

## 13. Giai đoạn 3 – Hoàn thiện nền tảng website

**Mục tiêu:** Đưa website hiện có trong repository vào trạng thái sử dụng đúng dữ liệu từ Product Database và Knowledge Base đã Approved, theo 03_WEBSITE_ARCHITECTURE.md.

**Phạm vi:** Nội dung sản phẩm, công nghệ, tài liệu, bảo hành, đại lý hiển thị công khai; SEO kỹ thuật, performance và accessibility theo 03 mục 10–12.

**Điều kiện bắt đầu:** Giai đoạn 2 đã hoàn tất; Product Database đạt Approved.

**Công việc chính:** Đối chiếu nội dung website hiện có với Product Database và Brand Guideline đã chuẩn hóa; cập nhật nội dung sai lệch theo quy trình publishing tại 03 mục 14.

**Kết quả đầu ra:** Website hiển thị đúng và nhất quán với Product Database và Brand Guideline.

**Tiêu chí nghiệm thu:** Không có sai lệch dữ liệu giữa website và Product Database; đạt các tiêu chuẩn SEO, performance và accessibility đã xác định tại 03.

**Người kiểm tra hoặc phê duyệt:** Người phụ trách website, theo quy trình publishing tại 03 mục 14, bao gồm bước phê duyệt trước khi merge.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Website được xác nhận nhất quán với Knowledge Base đã Approved.

**Không được thực hiện:** Không tự động đồng bộ dữ liệu chưa Approved lên website; không thay đổi kiến trúc website ngoài phạm vi đã chốt tại 03.

---

## 14. Giai đoạn 4 – Xây dựng CRM

**Mục tiêu:** Triển khai CRM theo đúng kiến trúc tại 07_CRM_ARCHITECTURE.md.

**Phạm vi:** Khách hàng, sản phẩm khách hàng đã mua, đại lý bán hàng, phiếu bảo hành, bảo trì và chăm sóc sau bán hàng, báo cáo theo tháng và theo đại lý, sao lưu dữ liệu.

**Điều kiện bắt đầu:** Giai đoạn 2 đã hoàn tất (Product Database Approved); Giai đoạn 1 đã cung cấp Dealer Library với dữ liệu tối thiểu.

**Công việc chính:** Xây dựng cấu trúc dữ liệu CRM theo 07 mục 4–11; thiết lập tham chiếu tới Product Database và Dealer Library theo 07 mục 16 và 08 mục 30; thiết lập trạng thái xử lý dữ liệu CRM theo 07 mục 11.

**Kết quả đầu ra:** Hệ thống CRM vận hành với cấu trúc dữ liệu đã chốt: tách Khách hàng – Sản phẩm – Phiếu bảo hành; đại lý chọn từ danh sách hoặc "Nhập thủ công"; giá bán nhập thủ công; chiết khấu 10%, 20% hoặc "Khác"; trạng thái sản phẩm "Mới" hoặc "Cũ".

**Tiêu chí nghiệm thu:** CRM không cho phép ghi nhận giao dịch với model ngoài danh mục Approved; đại lý nhập thủ công không tự động trở thành hồ sơ chính thức; có chức năng sao lưu dữ liệu; giao diện sử dụng được thuận tiện trên điện thoại.

**Người kiểm tra hoặc phê duyệt:** Người phê duyệt dữ liệu CRM theo 07 mục 12.

**Điều kiện chuyển sang giai đoạn tiếp theo:** CRM hoạt động ổn định với dữ liệu tham chiếu chính xác tới Product Database và Dealer Library.

**Không được thực hiện:** Không để AI tự thay đổi dữ liệu khách hàng, giá bán, bảo hành hoặc quyết định kinh doanh, theo 07 mục 18; không tự động tạo hồ sơ đại lý chính thức từ dữ liệu nhập thủ công.

---

## 15. Giai đoạn 5 – Kết nối Marketing System

**Mục tiêu:** Vận hành quy trình nội dung marketing theo 05_MARKETING_SYSTEM.md, sử dụng dữ liệu từ Knowledge Base đã Approved.

**Phạm vi:** Content pillars, các kênh Facebook, TikTok, YouTube, website, catalog, quy trình duyệt nội dung, Content Database.

**Điều kiện bắt đầu:** Giai đoạn 2 và Giai đoạn 3 đã hoàn tất.

**Công việc chính:** Thiết lập quy trình nội dung theo 05 mục 8; kết nối nguồn dữ liệu marketing với Product Database, Technology Library, Brand Guideline và Image Master Library theo 05 mục 15 và 08 mục 29.

**Kết quả đầu ra:** Quy trình tạo, kiểm tra và phê duyệt nội dung marketing vận hành được, có Content Database ghi nhận trạng thái nội dung.

**Tiêu chí nghiệm thu:** Không có nội dung marketing công khai nào bỏ qua bước kiểm duyệt; nội dung dùng đúng dữ liệu sản phẩm và hình ảnh đã Approved.

**Người kiểm tra hoặc phê duyệt:** Người phụ trách phê duyệt nội dung, vai trò Approval theo 05 mục 10.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Quy trình marketing vận hành ổn định, không phát sinh nội dung sai lệch dữ liệu sản phẩm hoặc thương hiệu.

**Không được thực hiện:** Không tự động đăng bài; không dùng hình ảnh chưa qua Image Master Library; không dùng thông số sản phẩm chưa Approved.

---

## 16. Giai đoạn 6 – Triển khai AI theo phạm vi đã chốt

**Mục tiêu:** Đưa các công cụ AI đã xác định tại 06_AI_ARCHITECTURE.md vào sử dụng đúng vai trò và giới hạn đã chốt.

**Phạm vi:** ChatGPT, Claude Code, Codex, Gemini, NotebookLM, Google Drive, Canva, CapCut, đúng vai trò tại 06 mục 5–12. Không thêm công cụ mới.

**Điều kiện bắt đầu:** Giai đoạn 1 đến Giai đoạn 5 đã hoàn tất; Knowledge Base, Product Database, website, CRM và Marketing System vận hành ổn định với dữ liệu Approved.

**Công việc chính:** Thiết lập AI Workflow và Data Flow theo 06 mục 13–14; xác nhận AI Safety Rules tại 06 mục 16 và Quy tắc sử dụng Knowledge Base của AI tại 08 mục 27 được tuân thủ trong thực tế.

**Kết quả đầu ra:** AI được sử dụng đúng vai trò hỗ trợ (soạn bản nháp, kiểm tra, tổng hợp báo cáo) trong các quy trình đã có, không tự động thay đổi dữ liệu chính thức.

**Tiêu chí nghiệm thu:** Không ghi nhận trường hợp AI tự thay đổi Product Database, giá bán, bảo hành, dữ liệu khách hàng hoặc chính sách đại lý; mọi đầu ra AI đều qua bước Audit và Human Approval theo 06 mục 14.

**Người kiểm tra hoặc phê duyệt:** Human Approver theo 06 mục 15 và người phê duyệt dữ liệu CRM theo 07 mục 12.

**Điều kiện chuyển sang giai đoạn tiếp theo:** AI vận hành ổn định trong phạm vi đã chốt qua một chu kỳ sử dụng thực tế.

**Không được thực hiện:** Không mở rộng vai trò AI ngoài phạm vi 06; không để AI tự phê duyệt hoặc tự xuất bản nội dung.

---

## 17. Giai đoạn 7 – Kiểm tra tích hợp toàn hệ thống

**Mục tiêu:** Xác nhận Website, CRM, Marketing System, Knowledge Base và AI hoạt động nhất quán với nhau, đúng theo các liên kết đã xác định tại 07 mục 14–17 và 08 mục 28–30.

**Phạm vi:** Toàn bộ luồng dữ liệu giữa các hệ thống đã triển khai ở Giai đoạn 1 đến Giai đoạn 6.

**Điều kiện bắt đầu:** Giai đoạn 1 đến Giai đoạn 6 đã hoàn tất.

**Công việc chính:** Thực hiện kiểm thử tích hợp theo mục 26–32 của tài liệu này; xác nhận không có dữ liệu trùng lặp hoặc mâu thuẫn giữa các hệ thống.

**Kết quả đầu ra:** Báo cáo kiểm tra tích hợp xác nhận các hệ thống dùng chung đúng nguồn dữ liệu chính thức.

**Tiêu chí nghiệm thu:** Không phát hiện mâu thuẫn dữ liệu giữa các hệ thống trong quá trình kiểm thử; các quy tắc bảo vệ hình ảnh, bảo mật và quyền truy cập được xác nhận tuân thủ.

**Người kiểm tra hoặc phê duyệt:** Nhóm phê duyệt liên hệ thống, do người quản trị Master Plan chỉ định.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Báo cáo kiểm tra tích hợp được phê duyệt, không còn lỗi nghiêm trọng chưa xử lý.

**Không được thực hiện:** Không đưa hệ thống vào sử dụng chính thức khi kiểm tra tích hợp chưa hoàn tất.

---

## 18. Giai đoạn 8 – Vận hành thử có kiểm soát

**Mục tiêu:** Vận hành thử toàn bộ hệ thống trong phạm vi giới hạn, có kiểm soát, trước khi mở rộng sử dụng chính thức.

**Phạm vi:** Một tập hợp giới hạn người dùng nội bộ và dữ liệu thử nghiệm được kiểm soát.

**Điều kiện bắt đầu:** Giai đoạn 7 đã hoàn tất và được phê duyệt.

**Công việc chính:** Vận hành thử theo quy trình thực tế (bán hàng, chăm sóc khách hàng, tạo nội dung, cập nhật website) trong phạm vi kiểm soát; ghi nhận sự cố, sai lệch dữ liệu hoặc vi phạm quy tắc.

**Kết quả đầu ra:** Báo cáo vận hành thử và danh sách sự cố hoặc sai lệch đã ghi nhận.

**Tiêu chí nghiệm thu:** Không phát sinh sự cố nghiêm trọng ảnh hưởng đến dữ liệu chính thức; các quy tắc kiểm soát con người được tuân thủ trong toàn bộ quá trình vận hành thử.

**Người kiểm tra hoặc phê duyệt:** Người quản trị Master Plan cùng người phụ trách từng hệ thống liên quan.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Vận hành thử hoàn tất, không còn sự cố nghiêm trọng chưa xử lý.

**Không được thực hiện:** Không mở rộng vận hành thử ra toàn bộ người dùng hoặc dữ liệu thật khi chưa được phê duyệt; không bỏ qua bước ghi nhận sự cố.

---

## 19. Giai đoạn 9 – Đánh giá trước khi đưa vào sử dụng chính thức

**Mục tiêu:** Đánh giá toàn diện kết quả vận hành thử và xác nhận hệ thống đủ điều kiện chuyển sang sử dụng chính thức.

**Phạm vi:** Toàn bộ hệ thống đã triển khai qua Giai đoạn 1 đến Giai đoạn 8.

**Điều kiện bắt đầu:** Giai đoạn 8 đã hoàn tất và có báo cáo vận hành thử.

**Công việc chính:** Rà soát báo cáo vận hành thử; xác nhận các tiêu chí nghiệm thu của toàn bộ giai đoạn trước đã đạt; xác nhận các rủi ro đã nhận diện tại mục 34 đã được kiểm soát theo mục 35.

**Kết quả đầu ra:** Quyết định chính thức về việc đưa hệ thống vào sử dụng chính thức, hoặc yêu cầu bổ sung trước khi triển khai tiếp.

**Tiêu chí nghiệm thu:** Đạt tiêu chí chuyển sang vận hành chính thức tại mục 36 của tài liệu này.

**Người kiểm tra hoặc phê duyệt:** Người quản trị Master Plan hoặc chủ dự án.

**Điều kiện chuyển sang giai đoạn tiếp theo:** Đây là giai đoạn cuối trong phạm vi roadmap này; kết quả là quyết định chuyển sang vận hành chính thức, do con người phê duyệt.

**Không được thực hiện:** Không tự động chuyển sang vận hành chính thức nếu chưa có quyết định phê duyệt rõ ràng từ con người.

---

## 20. Điều kiện bắt đầu của từng giai đoạn

Tổng hợp điều kiện bắt đầu, đã mô tả chi tiết tại mục 10–19:

- Giai đoạn 0: 8 file kiến trúc đã tồn tại và đã qua ít nhất một vòng kiểm tra.
- Giai đoạn 1: Giai đoạn 0 hoàn tất, Master Plan đã khóa.
- Giai đoạn 2: Giai đoạn 1 hoàn tất, có dữ liệu tối thiểu tại Image Master Library và Technical Library.
- Giai đoạn 3: Giai đoạn 2 hoàn tất, Product Database đạt Approved.
- Giai đoạn 4: Giai đoạn 2 hoàn tất và Dealer Library có dữ liệu tối thiểu từ Giai đoạn 1.
- Giai đoạn 5: Giai đoạn 2 và Giai đoạn 3 hoàn tất.
- Giai đoạn 6: Giai đoạn 1 đến Giai đoạn 5 hoàn tất.
- Giai đoạn 7: Giai đoạn 1 đến Giai đoạn 6 hoàn tất.
- Giai đoạn 8: Giai đoạn 7 hoàn tất và được phê duyệt.
- Giai đoạn 9: Giai đoạn 8 hoàn tất, có báo cáo vận hành thử.

---

## 21. Kết quả đầu ra của từng giai đoạn

Tổng hợp kết quả đầu ra, đã mô tả chi tiết tại mục 10–19:

- Giai đoạn 0: Master Plan được khóa chính thức.
- Giai đoạn 1: Knowledge Base có cấu trúc tổ chức thực tế theo 10 nhóm.
- Giai đoạn 2: Product Database đạt Approved cho 6 model.
- Giai đoạn 3: Website nhất quán với Product Database và Brand Guideline.
- Giai đoạn 4: CRM vận hành với cấu trúc dữ liệu đã chốt.
- Giai đoạn 5: Quy trình marketing vận hành với Content Database.
- Giai đoạn 6: AI vận hành đúng vai trò và giới hạn đã chốt.
- Giai đoạn 7: Báo cáo kiểm tra tích hợp được phê duyệt.
- Giai đoạn 8: Báo cáo vận hành thử và danh sách sự cố.
- Giai đoạn 9: Quyết định chính thức về việc chuyển sang vận hành chính thức.

---

## 22. Tiêu chí nghiệm thu của từng giai đoạn

Tổng hợp tiêu chí nghiệm thu, đã mô tả chi tiết tại mục 10–19. Mỗi giai đoạn chỉ được xem là hoàn tất khi tiêu chí nghiệm thu tương ứng tại mục của giai đoạn đó được xác nhận bởi người kiểm tra hoặc phê duyệt được chỉ định cho giai đoạn đó.

---

## 23. Các điểm bắt buộc con người phê duyệt

- Khóa Master Plan (Giai đoạn 0).
- Chuyển dữ liệu Knowledge Base sang trạng thái Approved (Giai đoạn 1).
- Chuyển Product Database sang trạng thái Approved (Giai đoạn 2).
- Xuất bản thay đổi lên website (Giai đoạn 3).
- Mọi thay đổi giá bán, chiết khấu, bảo hành, dữ liệu khách hàng hoặc đại lý trong CRM (Giai đoạn 4).
- Phê duyệt nội dung marketing trước khi xuất bản (Giai đoạn 5).
- Xác nhận đầu ra AI trước khi trở thành dữ liệu hoặc nội dung chính thức (Giai đoạn 6).
- Phê duyệt báo cáo kiểm tra tích hợp (Giai đoạn 7).
- Phê duyệt mở rộng vận hành thử (Giai đoạn 8).
- Quyết định chuyển sang vận hành chính thức (Giai đoạn 9).

---

## 24. Quản lý dữ liệu trong quá trình triển khai

Trong suốt quá trình triển khai, dữ liệu chỉ được chuyển sang trạng thái chính thức thông qua đúng quy trình đã xác định tại từng file: Data Status tại 04 mục 11, Content Status tại 05 mục 9, Approval States tại 06 mục 19, trạng thái dữ liệu CRM tại 07 mục 11, và trạng thái xác minh Knowledge Base tại 08 mục 19.

Không tạo kho dữ liệu song song ngoài Knowledge Base cho các dữ liệu đã thuộc phạm vi Knowledge Base theo 08 mục 3.

---

## 25. Quản lý phiên bản và thay đổi

Mọi thay đổi đối với dữ liệu đã Approved trong quá trình triển khai phải tuân theo nguyên tắc Change Control tại 04 mục 12 và quy trình sửa đổi/cập nhật phiên bản tại 08 mục 22: ghi rõ nội dung cũ, nội dung mới, lý do thay đổi, ngày thay đổi, người phê duyệt và hệ thống bị ảnh hưởng. Phiên bản cũ chuyển sang Archived thay vì bị xóa.

---

## 26. Kiểm thử website

Kiểm thử website trong quá trình triển khai bao gồm:

- Tính nhất quán giữa nội dung website và Product Database.
- Responsive trên desktop và mobile theo 03 mục 8.
- SEO kỹ thuật theo 03 mục 10.
- Performance theo 03 mục 11.
- Accessibility theo 03 mục 12.
- Không có hình ảnh, logo hoặc thông số sai lệch so với Knowledge Base đã Approved.

---

## 27. Kiểm thử CRM

Kiểm thử CRM trong quá trình triển khai bao gồm:

- Cấu trúc Khách hàng, Sản phẩm khách hàng đã mua và Phiếu bảo hành được tách biệt đúng theo 07 mục 6.
- Đại lý bán được chọn từ danh sách hoặc "Nhập thủ công" đúng quy tắc tại 07 mục 5 và mục 7.
- Giá bán nhập thủ công, chiết khấu đúng 10%, 20% hoặc "Khác" theo 07 mục 10.
- Trạng thái sản phẩm đúng "Mới" hoặc "Cũ".
- Báo cáo theo tháng và theo đại lý hoạt động đúng.
- Chức năng sao lưu hoạt động theo 07 mục 20.
- Giao diện sử dụng thuận tiện trên điện thoại.

---

## 28. Kiểm thử Knowledge Base

Kiểm thử Knowledge Base trong quá trình triển khai bao gồm:

- Mỗi tài liệu thuộc đúng một trong 10 nhóm thư viện đã chốt tại 08 mục 6.
- Trạng thái xác minh vận hành đúng quy trình thêm, kiểm tra, phê duyệt và sửa đổi tại 08 mục 20–22.
- Quan hệ sở hữu và tham chiếu giữa Product Database, Image Master Library và Technical Library được tuân thủ theo 08 mục 8, 10 và 13.
- Quy trình xử lý dữ liệu mâu thuẫn và dữ liệu thiếu được tuân thủ theo 08 mục 23 và 24.

---

## 29. Kiểm thử Marketing System

Kiểm thử Marketing System trong quá trình triển khai bao gồm:

- Quy trình duyệt nội dung tại 05 mục 8 không bị bỏ qua ở bất kỳ bước nào.
- Nội dung sử dụng đúng nguồn dữ liệu tại 05 mục 15 và 08 mục 29.
- Content Database ghi nhận đúng trạng thái nội dung theo 05 mục 9 và mục 16.
- Không có nội dung nào được xuất bản khi chưa đạt trạng thái Approved.

---

## 30. Kiểm thử AI

Kiểm thử AI trong quá trình triển khai bao gồm:

- AI chỉ sử dụng dữ liệu ở trạng thái Approved, theo 08 mục 27.
- AI không tự thay đổi Product Database, giá bán, bảo hành, dữ liệu khách hàng hoặc chính sách đại lý, theo 06 mục 16 và 07 mục 18.
- Mọi đầu ra AI đều qua bước Audit và Human Approval theo 06 mục 14.
- NotebookLM và Google Drive được sử dụng đúng vai trò tại 06 mục 9 và mục 10, không phát sinh nền tảng mới.

---

## 31. Kiểm thử bảo vệ hình ảnh và thương hiệu

Kiểm thử bảo vệ hình ảnh và thương hiệu trong quá trình triển khai bao gồm việc xác nhận:

- Không render hoặc vẽ lại sản phẩm KORAH.
- Không thay đổi logo hoặc font chữ thương hiệu.
- Không thay đổi cấu trúc, tỷ lệ, màu sắc hoặc nhận diện model.
- Không thêm, bớt hoặc di chuyển các chi tiết trên mặt máy.
- Chỉ sử dụng tài sản đã được phê duyệt từ Image Master Library.
- Mọi hình ảnh và video phải được con người kiểm tra trước khi sử dụng.

Việc kiểm thử này áp dụng cho website, CRM, Marketing System và mọi công cụ AI xử lý hình ảnh hoặc video, theo 08 mục 26.

---

## 32. Kiểm thử bảo mật và quyền truy cập

Kiểm thử bảo mật và quyền truy cập trong quá trình triển khai bao gồm:

- Chỉ người dùng được cấp quyền mới truy cập được dữ liệu khách hàng trong CRM, theo 07 mục 19.
- Phân quyền và trách nhiệm cập nhật dữ liệu đúng theo vai trò tại 07 mục 12 và 08 mục 31.
- Không đưa dữ liệu khách hàng thật vào tài liệu kiến trúc, tài liệu đào tạo hoặc nội dung công khai.

Cơ chế kỹ thuật cụ thể cho phân quyền và mã hóa: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 33. Sao lưu và khả năng khôi phục

Trong quá trình triển khai, CRM và Knowledge Base phải có chức năng sao lưu hoạt động và khả năng khôi phục khi xảy ra sự cố, theo 07 mục 20 và 08 mục 32. Việc sao lưu không được làm gián đoạn hoạt động sử dụng hằng ngày.

Tần suất sao lưu cụ thể và vị trí lưu trữ bản sao lưu: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 34. Rủi ro kỹ thuật đã nhận diện

- Dữ liệu còn thiếu (mục 7 của tài liệu này) có thể làm chậm hoặc gây sai lệch nếu một giai đoạn bắt đầu trước khi dữ liệu liên quan được xác nhận.
- AI có thể vượt phạm vi đã chốt nếu quy trình kiểm soát con người không được thiết lập đầy đủ trước Giai đoạn 6.
- Hình ảnh hoặc logo có thể bị chỉnh sửa sai nếu quy trình phê duyệt tại 08 mục 21 và mục 26 bị bỏ qua.
- Dữ liệu có thể mâu thuẫn giữa các hệ thống nếu các giai đoạn được triển khai song song mà không tuân theo quan hệ phụ thuộc tại mục 8 của tài liệu này.
- Đại lý nhập thủ công trong CRM có thể bị hiểu nhầm là dữ liệu chính thức nếu bỏ qua bước xác minh tại 07 mục 5 và mục 7.

---

## 35. Biện pháp kiểm soát rủi ro

- Mỗi giai đoạn chỉ được bắt đầu khi điều kiện bắt đầu tại mục 20 được đáp ứng, ngăn triển khai song song không kiểm soát.
- Mọi dữ liệu còn thiếu phải được ghi nhận rõ theo mục 7 và không được suy diễn khi giai đoạn liên quan cần đến dữ liệu đó.
- AI luôn phải qua bước Audit và Human Approval trước khi đầu ra trở thành dữ liệu chính thức, theo 06 mục 14.
- Hình ảnh và video luôn phải lấy từ Image Master Library đã phê duyệt và được con người kiểm tra trước khi sử dụng, theo mục 31 của tài liệu này.
- Khi phát hiện dữ liệu mâu thuẫn giữa các hệ thống, phải dừng sử dụng ngay và chuyển cho con người kiểm tra, theo 08 mục 23.
- Đại lý nhập thủ công chỉ trở thành hồ sơ chính thức sau khi con người kiểm tra và phê duyệt, theo 07 mục 5 và mục 7.

---

## 36. Tiêu chí chuyển sang vận hành chính thức

- Đạt toàn bộ tiêu chí nghiệm thu của Giai đoạn 0 đến Giai đoạn 9.
- Không còn sự cố nghiêm trọng chưa xử lý từ báo cáo vận hành thử tại Giai đoạn 8.
- Các dữ liệu còn thiếu quan trọng tại mục 7 và mục 37 đã được xác nhận, hoặc có phương án kiểm soát tạm thời được con người phê duyệt.
- Người quản trị Master Plan hoặc chủ dự án phê duyệt chính thức việc chuyển sang vận hành.

---

## 37. Các nội dung chưa đủ dữ liệu để lập lịch cụ thể

Các nội dung sau chưa có đủ dữ liệu để lập lịch triển khai cụ thể, và không được tự suy diễn:

- Thời hạn bảo hành cụ thể theo từng model.
- Cơ chế đồng bộ kỹ thuật giữa CRM và website, và giữa Knowledge Base và website.
- Cơ chế phân quyền và mã hóa kỹ thuật.
- Tần suất và vị trí lưu trữ bản sao lưu.
- Ngân sách và thời gian triển khai cụ thể cho từng giai đoạn.
- Nhân sự phụ trách cụ thể cho từng giai đoạn.

Đối với toàn bộ các nội dung trên: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 38. Nguyên tắc cập nhật Technical Roadmap

- Mọi thay đổi về thứ tự giai đoạn, phạm vi hoặc tiêu chí nghiệm thu phải được ghi nhận theo nguyên tắc Change Control: nội dung cũ, nội dung mới, lý do thay đổi, ngày thay đổi, người phê duyệt.
- Không thay đổi quan hệ phụ thuộc đã xác lập tại mục 8 và mục 9 khi chưa có lý do rõ ràng và phê duyệt của con người.
- Nếu nội dung tại 01–08 thay đổi, Technical Roadmap phải được rà soát lại để đảm bảo vẫn phản ánh đúng kiến trúc đã chốt.

---

## 39. Trách nhiệm của con người

- Người quản trị Master Plan: theo dõi tiến độ, xác nhận điều kiện bắt đầu và tiêu chí nghiệm thu, phê duyệt chuyển giai đoạn.
- Người phê duyệt từng hệ thống (website theo 03, CRM theo 07, Knowledge Base theo 08, marketing theo 05, AI theo 06): kiểm tra và phê duyệt trong phạm vi phụ trách.
- Con người luôn giữ quyền quyết định cuối cùng đối với việc chuyển giai đoạn và đưa hệ thống vào vận hành chính thức, phù hợp nguyên tắc Human Control tại 06 mục 3.

---

## 40. Trạng thái hoàn thành của Master Plan sau file 09

Sau khi file 09 được tạo, Master Plan gồm 9 file kiến trúc (01–09), bao phủ định hướng dự án, kinh doanh, website, sản phẩm, marketing, AI, CRM, Knowledge Base và lộ trình triển khai kỹ thuật. File 09 không thay đổi bất kỳ quyết định kiến trúc nào tại 01–08; tài liệu này chỉ chuyển kiến trúc đã chốt thành trình tự triển khai.

Việc Master Plan đã đủ điều kiện để bắt đầu Giai đoạn 0 hay chưa cần được xác nhận riêng bởi người quản trị dự án: Dữ liệu hiện tại chưa đủ để kết luận.

---

End of document.
