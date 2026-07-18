# KORAH CRM ARCHITECTURE

## 1. Mục đích của CRM KORAH

CRM KORAH là hệ thống quản lý quan hệ khách hàng nội bộ của AMMY Electronics, dùng để liên kết dữ liệu khách hàng, sản phẩm đã bán, đại lý bán hàng, phiếu bảo hành và hoạt động chăm sóc sau bán hàng thành một nguồn thông tin thống nhất.

Mục tiêu của CRM là:

- Theo dõi lịch sử mua hàng của từng khách hàng.
- Hỗ trợ đội ngũ bán hàng và hậu mãi tra cứu nhanh thông tin sản phẩm đã bán.
- Quản lý phiếu bảo hành và lịch sử bảo trì theo từng sản phẩm.
- Cung cấp báo cáo kinh doanh theo tháng và theo đại lý.
- Giữ đúng nguyên tắc Single Source of Truth đã xác định tại 01_PROJECT_CHARTER.md.

CRM không thay thế Product Knowledge, Website hoặc Marketing System. CRM chỉ quản lý dữ liệu quan hệ khách hàng và giao dịch, tham chiếu tới dữ liệu sản phẩm đã được phê duyệt ở nơi khác.

---

## 2. Phạm vi quản lý

CRM KORAH quản lý các nhóm dữ liệu sau:

- Khách hàng.
- Sản phẩm khách hàng đã mua.
- Đại lý bán hàng.
- Phiếu bảo hành.
- Lịch sử bảo trì và chăm sóc sau bán hàng.
- Giá bán, chiết khấu và trạng thái sản phẩm theo từng giao dịch.
- Báo cáo theo tháng và theo đại lý.
- Chức năng sao lưu dữ liệu.

CRM phải được thiết kế và sử dụng thuận tiện trên điện thoại, vì đội ngũ bán hàng và hậu mãi thường làm việc ngoài văn phòng.

CRM không bao gồm ERP, kế toán, sản xuất hoặc quản lý kho, theo đúng phạm vi "Out of Scope" đã xác định tại 01_PROJECT_CHARTER.md mục 9.

---

## 3. Các nhóm người sử dụng CRM

- **Nhân viên kinh doanh**: tạo và cập nhật hồ sơ khách hàng, sản phẩm bán, đại lý, giá bán, chiết khấu.
- **Nhân viên hậu mãi / kỹ thuật**: tạo và cập nhật phiếu bảo hành, ghi nhận lịch sử bảo trì và hỗ trợ kỹ thuật.
- **Quản lý**: xem báo cáo theo tháng và theo đại lý, phê duyệt các thay đổi dữ liệu quan trọng.
- **Người phê duyệt dữ liệu**: kiểm tra và phê duyệt dữ liệu trước khi chuyển sang trạng thái chính thức.

CRM phục vụ chủ yếu cho đội ngũ nội bộ AMMY Electronics. Đại lý không phải là người dùng trực tiếp của CRM; hệ thống Dealer Portal (đã liệt kê riêng trong phạm vi dự án tại 01_PROJECT_CHARTER.md mục 8) là kênh dành cho đại lý, không nằm trong tài liệu này.

---

## 4. Cấu trúc dữ liệu khách hàng

Hồ sơ khách hàng gồm các nhóm trường dữ liệu:

- Mã khách hàng.
- Tên khách hàng hoặc tên đơn vị.
- Nhóm khách hàng, theo đúng phân nhóm đã xác định tại 02_BUSINESS_ARCHITECTURE.md mục 5: đại lý âm thanh, đơn vị tổ chức sự kiện, đơn vị cho thuê âm thanh, kỹ thuật viên âm thanh, khách hàng cuối.
- Thông tin liên hệ: điện thoại, email, địa chỉ.
- Khu vực kinh doanh.
- Nguồn tiếp cận khách hàng.
- Ghi chú nội bộ.
- Trạng thái xử lý dữ liệu (theo mục 11 của tài liệu này).
- Ngày tạo và người tạo hồ sơ.

Tài liệu này chỉ mô tả cấu trúc trường dữ liệu, không chứa dữ liệu khách hàng thật.

---

## 5. Cấu trúc dữ liệu sản phẩm khách hàng đã mua

Mỗi sản phẩm khách hàng đã mua là một bản ghi riêng, gồm:

- Mã sản phẩm bán.
- Khách hàng liên kết.
- Model sản phẩm, phải thuộc danh mục Approved tại 04_PRODUCT_KNOWLEDGE.md mục 3: K16S, K16PRO, K19S, K19PRO, K20S, K20PLUS.
- Số lượng.
- Ngày mua.
- Giá bán, nhập thủ công.
- Chiết khấu: 10%, 20% hoặc "Khác". Khi chọn "Khác", cho phép nhập mức chiết khấu thủ công.
- Đại lý bán, chọn từ danh sách đại lý hoặc chọn "Nhập thủ công" khi đại lý chưa có trong dữ liệu.
- Trạng thái sản phẩm: "Mới" hoặc "Cũ".
- Số serial, nếu có.
- Phiếu bảo hành liên kết, nếu áp dụng.

Tên model phải viết đúng theo quy tắc đặt tên tại 04_PRODUCT_KNOWLEDGE.md mục 10, không tự ý dùng biến thể tên chưa được phê duyệt.

Trường "Đại lý bán" phải liên kết trực tiếp tới hồ sơ đại lý mô tả tại mục 7 của tài liệu này. Khi đại lý chưa có trong danh sách, sử dụng lựa chọn "Nhập thủ công"; việc nhập thủ công không tự động tạo hồ sơ đại lý chính thức. Hồ sơ đại lý mới chỉ được tạo hoặc chuẩn hóa sau khi con người kiểm tra và phê duyệt, theo quy tắc tại mục 7 và mục 13 của tài liệu này.

---

## 6. Quan hệ một khách hàng có thể sở hữu nhiều sản phẩm

Một khách hàng có thể liên kết với nhiều bản ghi sản phẩm đã mua. Mỗi bản ghi sản phẩm chỉ thuộc về đúng một khách hàng.

Nguyên tắc:

- Khách hàng, sản phẩm khách hàng đã mua và phiếu bảo hành là ba nhóm dữ liệu tách biệt, không gộp chung.
- Quan hệ giữa khách hàng và sản phẩm là quan hệ một-nhiều.
- Mỗi sản phẩm có lịch sử mua hàng, bảo hành và bảo trì riêng, không trộn lẫn với sản phẩm khác của cùng khách hàng.
- Cấu trúc này giúp tra cứu chính xác từng thiết bị khi khách hàng liên hệ hỗ trợ.

---

## 7. Cấu trúc dữ liệu đại lý bán hàng

Hồ sơ đại lý trong CRM gồm:

- Mã đại lý.
- Tên đại lý.
- Khu vực.
- Thông tin liên hệ.
- Ghi chú.

Khi chọn đại lý bán cho một sản phẩm, người dùng chọn từ danh sách đại lý đã có trong CRM, hoặc chọn "Nhập thủ công" nếu đại lý chưa có trong dữ liệu. Trường hợp nhập thủ công cần được kiểm tra và bổ sung vào danh sách đại lý chính thức sau khi xác minh, theo quy tắc tại mục 13 của tài liệu này.

Danh sách đại lý công khai trên website (mục Đại lý tại 03_WEBSITE_ARCHITECTURE.md mục 5.8) là nội dung riêng, đã được phê duyệt để công khai. Cơ chế đồng bộ kỹ thuật giữa danh sách đại lý trong CRM và danh sách đại lý công khai trên website: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 8. Cấu trúc phiếu bảo hành

Phiếu bảo hành là dữ liệu tách biệt, liên kết tới đúng một sản phẩm và một khách hàng, gồm:

- Mã phiếu bảo hành.
- Sản phẩm liên kết.
- Khách hàng liên kết.
- Ngày mua hoặc ngày kích hoạt bảo hành.
- Thời hạn bảo hành.
- Trạng thái phiếu: còn hạn, hết hạn hoặc đã sử dụng bảo hành.
- Lịch sử sử dụng bảo hành.
- Ghi chú kỹ thuật.

Thời hạn bảo hành cụ thể theo từng model chưa được công bố trong 04_PRODUCT_KNOWLEDGE.md mục 7. Dữ liệu hiện tại chưa đủ để kết luận về con số thời hạn bảo hành chính xác cho từng model; CRM phải tham chiếu chính sách bảo hành chính thức khi chính sách đó được phê duyệt và công bố.

---

## 9. Theo dõi bảo trì và chăm sóc sau bán hàng

CRM ghi nhận lịch sử hỗ trợ sau bán hàng cho từng sản phẩm, gồm:

- Ngày liên hệ hoặc ngày bảo trì.
- Nội dung yêu cầu hoặc sự cố.
- Nội dung xử lý.
- Người phụ trách.
- Trạng thái xử lý: đang xử lý hoặc đã hoàn tất.
- Sản phẩm và khách hàng liên kết.

Nhóm dữ liệu này tương ứng với "Lịch sử hỗ trợ" đã được liệt kê trong phạm vi CRM tại 02_BUSINESS_ARCHITECTURE.md mục 8, và phục vụ trực tiếp hoạt động Customer Support đã mô tả tại 02_BUSINESS_ARCHITECTURE.md mục 3.3.

---

## 10. Giá bán, chiết khấu và trạng thái sản phẩm

Ba nhóm dữ liệu này được ghi nhận theo từng bản ghi sản phẩm đã bán, theo đúng quyết định đã chốt:

- Giá bán: nhập thủ công tại thời điểm bán.
- Chiết khấu: chọn 10%, 20% hoặc "Khác". Khi chọn "Khác", hệ thống cho phép nhập mức chiết khấu thủ công.
- Trạng thái sản phẩm: "Mới" hoặc "Cũ".

Giá niêm yết tại 04_PRODUCT_KNOWLEDGE.md mục 7 là dữ liệu tham chiếu chính thức, không phải giá bán thực tế. CRM không tự động suy ra giá bán hoặc mức chiết khấu từ giá niêm yết; mọi giá trị đều do người dùng nhập và chịu trách nhiệm.

---

## 11. Trạng thái xử lý dữ liệu CRM

Dữ liệu CRM sử dụng một nhóm trạng thái riêng, phục vụ vòng đời của hồ sơ khách hàng, sản phẩm đã bán, đại lý và phiếu bảo hành:

- Draft: hồ sơ mới nhập, chưa kiểm tra.
- Under Review: đang được kiểm tra.
- Needs Correction: cần chỉnh sửa trước khi phê duyệt.
- Approved: đã được xác minh và sử dụng chính thức.
- Archived: không còn sử dụng, được lưu trữ.

Nhóm trạng thái này không thay thế Data Status tại 04_PRODUCT_KNOWLEDGE.md mục 11, Content Status tại 05_MARKETING_SYSTEM.md mục 9, hoặc Approval States tại 06_AI_ARCHITECTURE.md mục 19. Mỗi nhóm trạng thái phục vụ một loại dữ liệu khác nhau và không được trộn lẫn, theo đúng nguyên tắc đã thống nhất tại 06_AI_ARCHITECTURE.md mục 19.

---

## 12. Quyền truy cập và trách nhiệm cập nhật dữ liệu

- Nhân viên kinh doanh: tạo và cập nhật khách hàng, sản phẩm đã bán, giá bán, chiết khấu, đại lý bán.
- Nhân viên hậu mãi: tạo và cập nhật phiếu bảo hành, lịch sử bảo trì và chăm sóc sau bán hàng.
- Quản lý: xem báo cáo theo tháng và theo đại lý, phê duyệt các thay đổi dữ liệu nhạy cảm.
- Người phê duyệt dữ liệu: quyền phê duyệt cuối cùng đối với dữ liệu chuyển từ trạng thái chờ duyệt sang Approved.

Con người luôn giữ quyền quyết định cuối cùng đối với dữ liệu CRM, phù hợp nguyên tắc Human Control đã xác định tại 06_AI_ARCHITECTURE.md mục 3.

---

## 13. Quy tắc kiểm tra, sửa và phê duyệt dữ liệu

Trước khi một bản ghi CRM chuyển sang trạng thái Approved, cần kiểm tra:

- Đúng khách hàng liên kết.
- Đúng model sản phẩm, thuộc danh mục Approved tại 04_PRODUCT_KNOWLEDGE.md.
- Đúng đại lý bán, hoặc ghi rõ là dữ liệu nhập thủ công đang chờ xác minh.
- Đúng mức chiết khấu đã chọn (10%, 20% hoặc "Khác" kèm giá trị nhập thủ công).
- Đúng trạng thái sản phẩm ("Mới" hoặc "Cũ").
- Đúng thông tin phiếu bảo hành liên kết, nếu có.

Mọi chỉnh sửa dữ liệu phải ghi rõ nội dung thay đổi và người thực hiện, theo tinh thần Change Control đã xác định tại 04_PRODUCT_KNOWLEDGE.md mục 12. Không có bước phê duyệt nào được thực hiện tự động; con người luôn là người duyệt cuối cùng.

---

## 14. Liên kết CRM với Business Architecture

CRM là một trong các kênh số chính đã xác định tại 02_BUSINESS_ARCHITECTURE.md mục 8, quản lý: Khách hàng, Sản phẩm đã bán, Đại lý, Phiếu bảo hành, Lịch sử hỗ trợ, Báo cáo.

CRM phục vụ trực tiếp hai nhóm hoạt động kinh doanh cốt lõi đã mô tả tại 02_BUSINESS_ARCHITECTURE.md mục 3: Sales and Distribution (mục 3.2) và Customer Support (mục 3.3).

Mọi thay đổi liên quan đến giá, bảo hành hoặc chính sách trong CRM phải tuân thủ Governance đã xác định tại 02_BUSINESS_ARCHITECTURE.md mục 10.

---

## 15. Liên kết CRM với Website Architecture

CRM là dữ liệu vận hành nội bộ, tách biệt với nội dung công khai trên website. Các nội dung công khai có liên quan như danh sách đại lý (03_WEBSITE_ARCHITECTURE.md mục 5.8) và chính sách bảo hành (03_WEBSITE_ARCHITECTURE.md mục 5.7) phải được kiểm tra và phê duyệt riêng trước khi công khai, không được xuất bản trực tiếp và tự động từ CRM.

Cơ chế kỹ thuật cụ thể để đồng bộ dữ liệu giữa CRM và website: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 16. Liên kết CRM với Product Knowledge

Model sản phẩm nhập trong CRM phải khớp với danh mục sản phẩm Approved tại 04_PRODUCT_KNOWLEDGE.md mục 3, và viết đúng tên gọi theo quy tắc tại 04_PRODUCT_KNOWLEDGE.md mục 10.

Giá niêm yết tại 04_PRODUCT_KNOWLEDGE.md mục 7 là dữ liệu tham chiếu; CRM không thay đổi hoặc ghi đè dữ liệu sản phẩm gốc. CRM chỉ ghi nhận giao dịch thực tế liên quan đến sản phẩm đó.

Thời hạn bảo hành cụ thể theo từng model chưa được xác định trong Product Knowledge hiện tại. Dữ liệu hiện tại chưa đủ để kết luận.

---

## 17. Liên kết CRM với Marketing System

CRM cung cấp dữ liệu thực tế như lịch sử mua hàng, phản hồi đại lý và phản hồi kỹ thuật, hỗ trợ đánh giá hiệu quả nội dung marketing theo tiêu chí Performance Review tại 05_MARKETING_SYSTEM.md mục 17.

Marketing System không được truy cập trực tiếp hoặc chỉnh sửa dữ liệu khách hàng trong CRM. Marketing System chỉ được sử dụng số liệu tổng hợp hoặc báo cáo đã được phê duyệt.

---

## 18. Giới hạn vai trò của AI đối với dữ liệu CRM

AI không được tự động thay đổi dữ liệu khách hàng, giá bán, bảo hành hoặc quyết định kinh doanh.

AI có thể được sử dụng để:

- Tổng hợp báo cáo theo tháng và theo đại lý từ dữ liệu đã Approved.
- Phát hiện dữ liệu thiếu hoặc sai định dạng.
- Hỗ trợ soạn thảo nội dung liên hệ chăm sóc khách hàng khi được giao nhiệm vụ cụ thể.

AI không được:

- Tự tạo, tự sửa hoặc tự xóa hồ sơ khách hàng, sản phẩm đã bán, đại lý hoặc phiếu bảo hành.
- Tự quyết định giá bán hoặc mức chiết khấu.
- Tự thay đổi trạng thái bảo hành.
- Tự chuyển dữ liệu sang trạng thái Approved.

Nguyên tắc này thống nhất với AI Safety Rules tại 06_AI_ARCHITECTURE.md mục 16 và Human Control tại 06_AI_ARCHITECTURE.md mục 3.

---

## 19. Bảo mật và bảo vệ dữ liệu khách hàng

- Chỉ người dùng được cấp quyền mới được truy cập dữ liệu khách hàng trong CRM.
- Dữ liệu khách hàng không được chia sẻ ra ngoài phạm vi nội bộ khi chưa được cho phép.
- Không đưa dữ liệu khách hàng thật vào tài liệu kiến trúc, tài liệu đào tạo hoặc bất kỳ nội dung công khai nào.
- Truy cập và chỉnh sửa dữ liệu phải gắn với người dùng cụ thể, theo đúng phân quyền tại mục 12 của tài liệu này.

Cơ chế phân quyền kỹ thuật, mã hóa dữ liệu và nền tảng lưu trữ cụ thể: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 20. Quy trình sao lưu và khôi phục dữ liệu ở mức kiến trúc

CRM phải có chức năng sao lưu dữ liệu, theo đúng quyết định đã chốt.

Ở mức kiến trúc, quy trình sao lưu cần đảm bảo:

- Dữ liệu khách hàng, sản phẩm đã bán, đại lý, phiếu bảo hành và lịch sử hỗ trợ đều được sao lưu.
- Có khả năng khôi phục dữ liệu khi xảy ra sự cố hoặc mất dữ liệu.
- Việc sao lưu không làm gián đoạn hoạt động sử dụng CRM hằng ngày.

Tần suất sao lưu, nơi lưu trữ bản sao lưu và công cụ kỹ thuật thực hiện: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 21. Các giai đoạn triển khai đã có trong Master Plan

CRM đã được xác định là một phần trong phạm vi dự án tại 01_PROJECT_CHARTER.md mục 8.

Theo Business Priorities tại 02_BUSINESS_ARCHITECTURE.md mục 9, việc liên kết CRM được xếp ở vị trí ưu tiên thứ sáu, sau khi hoàn thiện website, cải thiện SEO, xây dựng Knowledge Center và phát triển AI Technical Expert.

Theo Future Development tại 03_WEBSITE_ARCHITECTURE.md mục 15, kết nối CRM là một hạng mục mở rộng trong tương lai, chỉ được triển khai sau khi dữ liệu nền đã được chuẩn hóa.

Theo Current Priority tại 06_AI_ARCHITECTURE.md mục 20, hệ thống hiện đang ưu tiên hoàn thành Master Plan, chuẩn hóa dữ liệu sản phẩm, hoàn thiện website và chuẩn hóa Knowledge Base trước khi mở rộng sang các hệ thống khác.

Tài liệu kiến trúc CRM này là bước chuẩn bị cho giai đoạn triển khai CRM trong tương lai, không phải chỉ định thời điểm hoặc kế hoạch triển khai kỹ thuật cụ thể. Thời điểm triển khai chi tiết: Dữ liệu hiện tại chưa đủ để kết luận.

Các nội dung trong tài liệu này đang ghi "Dữ liệu hiện tại chưa đủ để kết luận" — gồm thời hạn bảo hành theo từng model, phương thức đồng bộ dữ liệu giữa CRM và website, cơ chế phân quyền và mã hóa, tần suất và nơi lưu trữ bản sao lưu, và thời điểm triển khai cụ thể — là các quyết định cần được xác nhận ở giai đoạn thiết kế hoặc triển khai CRM, không phải lỗi của kiến trúc hiện tại. Các nội dung này không được tự suy diễn hoặc tự bổ sung khi chưa có quyết định chính thức.

---

End of document.
