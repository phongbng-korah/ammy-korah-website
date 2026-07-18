# KORAH KNOWLEDGE BASE ARCHITECTURE

## 1. Mục đích của KORAH Knowledge Base

Knowledge Base là nguồn tri thức trung tâm đã được kiểm tra của KORAH Digital Brain, phục vụ nguyên tắc Single Source of Truth và Never Duplicate Knowledge đã xác định tại 01_PROJECT_CHARTER.md mục 7.

Mục tiêu của Knowledge Base là đảm bảo website, marketing, CRM, AI và con người đều sử dụng chung một nguồn dữ liệu chính thức về thương hiệu, sản phẩm, công nghệ, hình ảnh, tài liệu kỹ thuật, nội dung marketing và đại lý — thay vì mỗi hệ thống tự lưu một phiên bản riêng.

Knowledge Base tương ứng với "Knowledge Base" trong Vision tại 01_PROJECT_CHARTER.md mục 6 và "Knowledge Center" trong Project Scope tại 01_PROJECT_CHARTER.md mục 8.

---

## 2. Vai trò trong KORAH Digital Brain

Knowledge Base là lớp dữ liệu nền phía dưới các hệ thống vận hành:

- Website (03_WEBSITE_ARCHITECTURE.md) hiển thị công khai một phần dữ liệu từ Knowledge Base, thông qua các mục Knowledge Center (03 mục 5.5) và Tài liệu (03 mục 5.6). Website không tự lưu bản sao dữ liệu riêng.
- Product Knowledge (04_PRODUCT_KNOWLEDGE.md) là nội dung chi tiết của nhóm Product Database và Technology Library trong Knowledge Base.
- Marketing System (05_MARKETING_SYSTEM.md) lấy dữ liệu nguồn từ Knowledge Base theo Marketing Data Sources tại 05 mục 15.
- CRM (07_CRM_ARCHITECTURE.md) tham chiếu Product Database và Dealer Library trong Knowledge Base để xác thực model sản phẩm và đại lý, theo 07 mục 16.
- AI Architecture (06_AI_ARCHITECTURE.md) xác định các công cụ AI được phép truy vấn Knowledge Base và giới hạn sử dụng của từng công cụ.

Knowledge Base không lưu dữ liệu giao dịch khách hàng, phiếu bảo hành hoặc lịch sử bán hàng cụ thể — các dữ liệu này thuộc phạm vi CRM theo 07_CRM_ARCHITECTURE.md.

---

## 3. Phạm vi dữ liệu được quản lý

Knowledge Base quản lý:

- Nhận diện thương hiệu AMMY và KORAH.
- Dữ liệu sản phẩm đã được phê duyệt.
- Dữ liệu công nghệ.
- Hình ảnh sản phẩm gốc.
- Nội dung marketing đã được phê duyệt.
- Video đã được phê duyệt.
- Tài liệu kỹ thuật.
- Hướng dẫn sử dụng dành cho AI.
- Tài liệu hỗ trợ bán hàng.
- Dữ liệu đại lý đã được xác minh.

Knowledge Base không quản lý dữ liệu khách hàng, phiếu bảo hành, lịch sử bảo trì hoặc giao dịch bán hàng cụ thể — các nhóm dữ liệu này thuộc CRM theo 07_CRM_ARCHITECTURE.md mục 2 và mục 3.

---

## 4. Nguồn dữ liệu được chấp nhận

Knowledge Base chỉ chấp nhận:

- Dữ liệu sản phẩm đã ở trạng thái Approved theo 04_PRODUCT_KNOWLEDGE.md mục 11.
- Tài liệu kỹ thuật chính thức: datasheet, manual, technical handbook, warranty guide.
- Hình ảnh sản phẩm gốc chính thức.
- Nội dung thương hiệu đã được phê duyệt.
- Nội dung marketing đã đạt trạng thái Approved theo 05_MARKETING_SYSTEM.md mục 9.
- Dữ liệu đại lý đã được xác minh theo 07_CRM_ARCHITECTURE.md mục 7.
- Chính sách và quyết định kinh doanh đã được phê duyệt theo Governance tại 02_BUSINESS_ARCHITECTURE.md mục 10.

---

## 5. Nguồn dữ liệu không được tự động xem là chính thức

Knowledge Base không tự động xem các nguồn sau là dữ liệu chính thức:

- Nội dung do AI tạo ra nhưng chưa qua kiểm tra, theo AI Safety Rules tại 06_AI_ARCHITECTURE.md mục 16.
- Thông tin tìm thấy trên Internet không do KORAH công bố.
- Dữ liệu nhập thủ công chưa được xác minh, ví dụ đại lý nhập thủ công trong CRM theo 07_CRM_ARCHITECTURE.md mục 5 và mục 7.
- Tài liệu đang ở trạng thái Draft, Under Review, Needs Correction hoặc Pending Approval, bất kể thuộc hệ thống trạng thái nào trong 04 mục 11, 05 mục 9, 06 mục 19 hoặc 07 mục 11.
- Bản tóm tắt, bản dịch hoặc suy luận chưa được con người kiểm tra.

---

## 6. Cấu trúc các nhóm thư viện tri thức

Knowledge Base được tổ chức thành đúng mười nhóm thư viện đã chốt, không thêm hoặc bớt nhóm nào:

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

Mỗi tài liệu trong Knowledge Base phải thuộc đúng một trong mười nhóm này, theo quy tắc phân loại tại mục 18 của tài liệu này.

---

## 7. Brand Guideline

Nội dung gồm:

- Logo chuẩn KORAH và AMMY.
- Font chữ thương hiệu.
- Màu sắc thương hiệu, bao gồm champagne gold và ivory gold theo 03_WEBSITE_ARCHITECTURE.md mục 9 và 05_MARKETING_SYSTEM.md mục 11.
- Quy tắc phân biệt AMMY là doanh nghiệp và KORAH là thương hiệu, theo 02_BUSINESS_ARCHITECTURE.md mục 2.
- Giọng thương hiệu và nguyên tắc truyền thông theo 02_BUSINESS_ARCHITECTURE.md mục 7.

Brand Guideline là nguồn tham chiếu bắt buộc cho website, marketing và mọi thiết kế hình ảnh.

---

## 8. Product Database

Nội dung là toàn bộ dữ liệu sản phẩm chuẩn đã được phê duyệt tại 04_PRODUCT_KNOWLEDGE.md, gồm danh mục sáu model, thông số kỹ thuật, giá niêm yết, chính sách bảo hành, hình ảnh và tài liệu liên quan, theo cấu trúc trường dữ liệu tại 04 mục 6.

Product Database là nguồn duy nhất cho thông số sản phẩm chính thức. CRM không lưu bản sao thông số sản phẩm mà chỉ tham chiếu tới Product Database khi ghi nhận giao dịch bán hàng, theo 07_CRM_ARCHITECTURE.md mục 16.

---

## 9. Technology Library

Nội dung gồm thông tin công nghệ PFC, Silicon Carbide, Class D và hệ thống bảo vệ, theo Technology Mapping tại 04_PRODUCT_KNOWLEDGE.md mục 5 và nội dung Công nghệ tại 03_WEBSITE_ARCHITECTURE.md mục 5.4.

Không được gán công nghệ cho model không được trang bị công nghệ đó, theo đúng nguyên tắc tại 04_PRODUCT_KNOWLEDGE.md mục 5.

---

## 10. Image Master Library

Nội dung gồm ảnh sản phẩm gốc (mặt trước, mặt sau, góc nghiêng, ảnh chi tiết, ảnh ứng dụng), logo chuẩn và icon công nghệ, theo nhóm Media tại 04_PRODUCT_KNOWLEDGE.md mục 6.6.

Image Master Library là nguồn duy nhất cung cấp ảnh gốc cho website, marketing và catalog, theo Quy tắc lưu trữ hình ảnh gốc tại mục 25 và Quy tắc bảo vệ logo và hình ảnh sản phẩm tại mục 26 của tài liệu này.

---

## 11. Marketing Library

Nội dung gồm caption, hook, script, hashtag và các định dạng nội dung đã được phê duyệt, theo Content Formats tại 05_MARKETING_SYSTEM.md mục 7 và Content Database tại 05 mục 16.

Chỉ nội dung ở trạng thái Approved theo 05_MARKETING_SYSTEM.md mục 9 mới được lưu chính thức vào Marketing Library.

---

## 12. Video Library

Nội dung gồm video sản phẩm, video kỹ thuật và video marketing đã được phê duyệt, tương ứng với nhóm Video sản phẩm tại 04_PRODUCT_KNOWLEDGE.md mục 6.6 và định dạng video tại 05_MARKETING_SYSTEM.md mục 6.2 và 6.3.

Video đầu vào và đầu ra khi xử lý bằng CapCut phải tuân thủ quy tắc bảo vệ hình ảnh và video sản phẩm đã thống nhất tại 06_AI_ARCHITECTURE.md mục 12.

---

## 13. Technical Library

Nội dung gồm Datasheet, Manual, Technical Handbook, Warranty Guide, hướng dẫn DIP switch, hướng dẫn Bridge, Stereo và Parallel, theo nhóm Documentation tại 04_PRODUCT_KNOWLEDGE.md mục 6.7, DIP Switch Knowledge tại 04 mục 8, và nội dung Tài liệu tại 03_WEBSITE_ARCHITECTURE.md mục 5.6.

---

## 14. AI Instructions

Nội dung gồm vai trò, giới hạn và quy tắc sử dụng dành cho từng công cụ AI, tham chiếu trực tiếp tới 06_AI_ARCHITECTURE.md.

AI Instructions chỉ hướng dẫn cách AI sử dụng đúng Knowledge Base và các hệ thống khác; nhóm này không cho phép AI tự thay đổi dữ liệu chính thức, theo AI Safety Rules tại 06 mục 16 và Human Control tại 06 mục 3.

---

## 15. Sales Library

Nội dung gồm tài liệu hỗ trợ bán hàng, bảng thông số dùng cho tư vấn bán hàng, catalog và tài liệu tư vấn đại lý, theo Dealer Support Content tại 05_MARKETING_SYSTEM.md mục 4.5 và định dạng Dealer sales brief tại 05 mục 7.

Sales Library không chứa dữ liệu giao dịch khách hàng cụ thể; dữ liệu đó thuộc CRM theo 07_CRM_ARCHITECTURE.md.

---

## 16. Dealer Library

Nội dung gồm hồ sơ đại lý đã được xác minh: mã đại lý, tên đại lý, khu vực, thông tin liên hệ, theo đúng cấu trúc dữ liệu đại lý đã mô tả tại 07_CRM_ARCHITECTURE.md mục 7.

Dealer Library lưu trữ hồ sơ đại lý chính thức sau khi đã được kiểm tra và phê duyệt. Đại lý được nhập thủ công trong CRM chỉ được đưa vào Dealer Library sau khi con người kiểm tra và phê duyệt, theo đúng nguyên tắc đã xác định tại 07_CRM_ARCHITECTURE.md mục 5 và mục 7.

---

## 17. Quy tắc đặt tên file và thư mục

Tên file và thư mục trong Knowledge Base phải:

- Rõ ràng, nhất quán và phản ánh đúng nhóm thư viện chứa tài liệu.
- Sử dụng tên model viết đúng theo quy tắc tại 04_PRODUCT_KNOWLEDGE.md mục 10, ví dụ k16s, k16pro, k19s, k19pro, k20s, k20plus.
- Không dùng biến thể tên model chưa được phê duyệt.
- Không đặt tên gây nhầm lẫn giữa các nhóm thư viện hoặc giữa các phiên bản tài liệu.

---

## 18. Quy tắc phân loại tài liệu

- Mỗi tài liệu phải được gán vào đúng một trong mười nhóm thư viện đã chốt tại mục 6.
- Không tạo nhóm phụ hoặc nhóm con ngoài mười nhóm đã chốt.
- Nếu một tài liệu có liên quan tới nhiều nhóm, tài liệu được lưu tại nhóm chính phù hợp nhất và ghi chú liên kết chéo tới các nhóm liên quan.
- Việc phân loại sai phải được sửa lại khi phát hiện, theo quy trình tại mục 22.

---

## 19. Trạng thái xác minh dữ liệu

Tài liệu trong Knowledge Base sử dụng chung một nhóm trạng thái xác minh:

- Draft: tài liệu mới, chưa kiểm tra.
- Under Review: đang được kiểm tra.
- Needs Correction: cần chỉnh sửa trước khi phê duyệt.
- Approved: đã được xác minh và sử dụng chính thức.
- Archived: không còn sử dụng, được lưu trữ.

Nhóm trạng thái này áp dụng cho việc quản trị tài liệu trong Knowledge Base, không thay thế Data Status tại 04_PRODUCT_KNOWLEDGE.md mục 11, Content Status tại 05_MARKETING_SYSTEM.md mục 9, Approval States tại 06_AI_ARCHITECTURE.md mục 19, hoặc trạng thái dữ liệu CRM tại 07_CRM_ARCHITECTURE.md mục 11. Các nhóm trạng thái này phục vụ mục đích khác nhau và không được trộn lẫn.

Chỉ tài liệu ở trạng thái Approved mới được các hệ thống khác sử dụng làm dữ liệu chính thức.

---

## 20. Quy trình thêm tài liệu mới

1. Xác định nhóm thư viện phù hợp trong mười nhóm đã chốt.
2. Kiểm tra tài liệu thuộc nguồn dữ liệu được chấp nhận theo mục 4.
3. Gắn trạng thái Draft.
4. Đặt tên file và phân loại theo mục 17 và mục 18.
5. Chuyển sang Under Review để kiểm tra.
6. Thực hiện quy trình kiểm tra và phê duyệt tại mục 21.
7. Sau khi Approved, lưu tài liệu vào đúng vị trí trong Knowledge Base.

---

## 21. Quy trình kiểm tra và phê duyệt

Người phê duyệt kiểm tra:

- Tính chính xác của nội dung.
- Sự phù hợp với dữ liệu đã có trong Product Database, Brand Guideline và các nhóm thư viện liên quan.
- Không có mâu thuẫn với tài liệu hiện có, theo quy trình xử lý dữ liệu mâu thuẫn tại mục 23.
- Đúng quy tắc đặt tên và phân loại.

AI có thể hỗ trợ rà soát và phát hiện sai lệch nhưng không được tự phê duyệt, theo AI Safety Rules tại 06_AI_ARCHITECTURE.md mục 16 và Human Control tại 06 mục 3. Chỉ con người mới có quyền chuyển tài liệu sang trạng thái Approved.

---

## 22. Quy trình sửa đổi và cập nhật phiên bản

Mọi thay đổi đối với tài liệu đã Approved phải ghi rõ:

- Nội dung cũ.
- Nội dung mới.
- Lý do thay đổi.
- Ngày thay đổi.
- Người phê duyệt.
- Hệ thống bị ảnh hưởng.

Nguyên tắc này áp dụng theo tinh thần Change Control đã xác định tại 04_PRODUCT_KNOWLEDGE.md mục 12. Phiên bản cũ chuyển sang trạng thái Archived thay vì bị xóa, để giữ lịch sử thay đổi.

---

## 23. Quy trình xử lý dữ liệu mâu thuẫn

Khi phát hiện dữ liệu mâu thuẫn giữa các tài liệu trong Knowledge Base, hoặc giữa Knowledge Base với website, marketing hoặc CRM:

- Dừng sử dụng dữ liệu đang mâu thuẫn ngay lập tức.
- Không tự chọn phiên bản nào là đúng, kể cả bằng AI.
- Chuyển toàn bộ dữ liệu liên quan cho con người kiểm tra.
- Chỉ tiếp tục sử dụng sau khi con người xác nhận phiên bản chính thức và cập nhật trạng thái Approved.

---

## 24. Quy trình xử lý dữ liệu thiếu

Khi dữ liệu cần thiết chưa có trong Knowledge Base:

- Không tự suy diễn dữ liệu sản phẩm, công nghệ, giá, bảo hành hoặc chính sách đại lý.
- Không tự bổ sung bằng thông tin chưa xác minh, kể cả thông tin tìm thấy trên Internet.
- Ghi rõ: "Dữ liệu hiện tại chưa đủ để kết luận."
- Chuyển yêu cầu bổ sung dữ liệu cho người phụ trách nhóm thư viện liên quan.

---

## 25. Quy tắc lưu trữ hình ảnh gốc

- Ảnh sản phẩm gốc được lưu trong Image Master Library làm nguồn tham chiếu chính thức duy nhất.
- Không ghi đè lên ảnh gốc khi tạo phiên bản chỉnh sửa.
- Mọi phiên bản đã chỉnh sửa (cắt ảnh, đổi nền, chỉnh ánh sáng) phải giữ liên kết rõ ràng về ảnh gốc tương ứng.
- Ảnh gốc chỉ được thay thế khi có phiên bản chụp mới chính thức, đã được phê duyệt theo mục 21.

---

## 26. Quy tắc bảo vệ logo và hình ảnh sản phẩm KORAH

Áp dụng cho toàn bộ Knowledge Base và mọi công cụ sử dụng dữ liệu hình ảnh từ Knowledge Base, bao gồm Canva, Gemini và CapCut theo 06_AI_ARCHITECTURE.md mục 12:

- Lưu giữ ảnh sản phẩm gốc làm nguồn tham chiếu chính thức.
- Không render hoặc vẽ lại sản phẩm KORAH.
- Không thay đổi logo hoặc font chữ thương hiệu.
- Không thay đổi cấu trúc, tỷ lệ, màu sắc hoặc nhận diện model.
- Không thêm, bớt hoặc di chuyển tay cầm, núm điều khiển, nút nguồn, đèn LED, lưới tản nhiệt và chữ trên mặt máy.
- Chỉ được chỉnh nền, ánh sáng, bố cục, crop và lớp chữ bên ngoài sản phẩm khi đã được phê duyệt.
- Hình ảnh đầu ra phải được con người kiểm tra trước khi sử dụng.

---

## 27. Quy tắc sử dụng Knowledge Base của AI

- AI chỉ được sử dụng dữ liệu có trạng thái Approved.
- Không coi nội dung do AI tạo ra là dữ liệu chính thức.
- Không coi thông tin trên Internet là dữ liệu KORAH đã xác nhận.
- Nếu dữ liệu thiếu, AI phải ghi rõ "Dữ liệu hiện tại chưa đủ để kết luận."
- Nếu phát hiện dữ liệu mâu thuẫn, AI phải dừng sử dụng và chuyển cho con người kiểm tra theo mục 23.
- AI không được tự thay đổi Product Database, giá bán, bảo hành, thông số kỹ thuật hoặc chính sách đại lý.
- NotebookLM có thể được dùng để tra cứu và hỏi đáp trên tài liệu đã có trong Knowledge Base, đúng theo vai trò đã xác định tại 06_AI_ARCHITECTURE.md mục 9, nhưng không phải nguồn xác minh dữ liệu và không thay thế bước phê duyệt của con người.

---

## 28. Quy tắc sử dụng Knowledge Base cho website

Website chỉ hiển thị nội dung ở trạng thái Approved từ Product Database, Technology Library, Technical Library, Brand Guideline, Image Master Library và Dealer Library.

Website không tự động đồng bộ dữ liệu chưa được phê duyệt. Cơ chế đồng bộ kỹ thuật cụ thể giữa Knowledge Base và website: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 29. Quy tắc sử dụng Knowledge Base cho marketing

Marketing System lấy dữ liệu nguồn từ Product Database, Technology Library, Brand Guideline, Image Master Library, Marketing Library và Video Library, theo Marketing Data Sources tại 05_MARKETING_SYSTEM.md mục 15.

Nội dung marketing mới tạo ra phải qua quy trình kiểm tra và phê duyệt tại mục 21 của tài liệu này trước khi được lưu chính thức vào Marketing Library hoặc Video Library.

---

## 30. Quy tắc sử dụng Knowledge Base cho CRM

CRM tham chiếu Product Database để xác thực model sản phẩm khi ghi nhận giao dịch bán hàng, theo 07_CRM_ARCHITECTURE.md mục 16, và tham chiếu Dealer Library để xác thực đại lý bán, theo 07_CRM_ARCHITECTURE.md mục 7.

CRM không được ghi đè hoặc thay đổi trực tiếp dữ liệu trong Product Database hoặc Dealer Library. Đại lý mới hoặc thông tin đại lý cần cập nhật phải qua quy trình kiểm tra và phê duyệt tại mục 21 trước khi trở thành dữ liệu chính thức trong Dealer Library.

---

## 31. Vai trò và trách nhiệm của con người

- Người quản trị Knowledge Base: tổ chức thư viện, kiểm tra phân loại, theo dõi trạng thái xác minh.
- Người đóng góp nội dung: nhân viên các bộ phận liên quan (sản phẩm, kỹ thuật, marketing, kinh doanh) đề xuất tài liệu mới hoặc cập nhật.
- Người phê duyệt: kiểm tra và quyết định chuyển tài liệu sang trạng thái Approved, theo mục 21.

Con người luôn giữ quyền quyết định cuối cùng đối với mọi dữ liệu trong Knowledge Base, phù hợp nguyên tắc Human Control tại 06_AI_ARCHITECTURE.md mục 3.

---

## 32. Sao lưu và khôi phục dữ liệu ở mức kiến trúc

Ở mức kiến trúc, Knowledge Base cần đảm bảo:

- Toàn bộ mười nhóm thư viện đều được sao lưu định kỳ.
- Có khả năng khôi phục dữ liệu khi xảy ra sự cố hoặc mất dữ liệu.
- Việc sao lưu không làm gián đoạn việc sử dụng Knowledge Base hằng ngày.

Google Drive có thể được sử dụng để lưu trữ tài liệu Knowledge Base, đúng theo vai trò đã xác định tại 06_AI_ARCHITECTURE.md mục 10, không phát sinh nền tảng lưu trữ mới.

Tần suất sao lưu và vị trí lưu trữ bản sao lưu cụ thể: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 33. Kiểm tra định kỳ và bảo trì Knowledge Base

Việc kiểm tra định kỳ nhằm phát hiện:

- Dữ liệu lỗi thời cần chuyển sang trạng thái Archived.
- Dữ liệu còn thiếu, cần bổ sung theo quy trình tại mục 24.
- Dữ liệu mâu thuẫn, cần xử lý theo quy trình tại mục 23.
- Tài liệu trùng lặp hoặc phân loại sai theo mục 18.
- Vi phạm quy tắc đặt tên tại mục 17.

Việc kiểm tra định kỳ do con người thực hiện. AI có thể hỗ trợ phát hiện dữ liệu bất thường nhưng không được tự sửa dữ liệu, theo mục 27.

Tần suất kiểm tra định kỳ cụ thể: Dữ liệu hiện tại chưa đủ để kết luận.

---

## 34. Các giai đoạn triển khai đã có trong Master Plan

Knowledge Center đã được xác định trong phạm vi dự án tại 01_PROJECT_CHARTER.md mục 8.

Theo Business Priorities tại 02_BUSINESS_ARCHITECTURE.md mục 9, xây dựng Knowledge Center là ưu tiên thứ tư, sau khi chuẩn hóa dữ liệu và hoàn thiện website.

Theo Current Priority tại 03_WEBSITE_ARCHITECTURE.md mục 16, xây dựng Knowledge Center là ưu tiên thứ sáu của website, sau khi chuẩn hóa nội dung sản phẩm và tài liệu. Theo Future Development tại 03 mục 15, Knowledge Center nâng cao là hạng mục mở rộng trong tương lai.

Theo Current Priority tại 06_AI_ARCHITECTURE.md mục 20, chuẩn hóa Knowledge Base là ưu tiên thứ tư, thực hiện sau khi hoàn thành Master Plan, chuẩn hóa dữ liệu sản phẩm và hoàn thiện website.

Tài liệu kiến trúc này là bước chuẩn bị cho việc chuẩn hóa và triển khai Knowledge Base, không phải kế hoạch triển khai kỹ thuật cụ thể. Thời điểm và công cụ triển khai chi tiết: Dữ liệu hiện tại chưa đủ để kết luận.

---

End of document.
