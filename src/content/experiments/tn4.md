---
id: "TN4"
title: "Đánh giá vận hành định kỳ và độ tin cậy"
order: 4
status: "planned"
summary: "Theo dõi nhiều chu trình tự động liên tiếp để đánh giá tỷ lệ hoàn thành, truyền dữ liệu, dao động pH và các lỗi vận hành của hệ thống."
startDate: 2026-08-20
endDate: null
independentVariables:
  - "Chu kỳ đo"
  - "Số chu trình và thời gian vận hành"
dependentVariables:
  - "Tỷ lệ chu trình hoàn thành R"
  - "Khoảng dao động pH D"
  - "Tỷ lệ truyền dữ liệu thành công"
  - "Số lần và loại lỗi"
controlVariables:
  - "Bộ thông số đã chốt từ TN3"
  - "Mẫu nước và nhiệt độ"
  - "Dung dịch KCl bảo quản"
  - "Nguồn điện và cấu hình hệ thống"
dataStatus: "Chưa bổ sung ảnh kết quả"
images: []
---

> Trang này trình bày thiết kế và quy trình của thí nghiệm. Kết quả sẽ được bổ sung sau bằng ảnh chụp phiếu số liệu gốc.

## Mục đích

- Đánh giá khả năng hệ thống thực hiện nhiều chu trình tự động liên tiếp với bộ thông số đã lựa chọn.
- Theo dõi mức dao động của pH trong điều kiện mẫu tương đối ổn định.
- Đánh giá tỷ lệ chu trình hoàn thành, khả năng truyền dữ liệu nRF24L01 và các lỗi cơ khí hoặc điều khiển.
- Kiểm tra khả năng duy trì điện cực trong KCl bão hòa giữa các lần đo trong điều kiện vận hành thực tế của nguyên mẫu.

## Tóm tắt lý thuyết

Một nguyên mẫu cần không chỉ đo tại một thời điểm mà còn phải lặp lại được chu trình theo thời gian. Độ tin cậy được đánh giá thông qua tỷ lệ chu trình hoàn thành đúng trình tự, mức dao động của kết quả trong cùng điều kiện và khả năng truyền, lưu dữ liệu đầy đủ.

Việc bảo quản điện cực trong KCl giữa các chu kỳ chỉ được đánh giá ở mức vận hành của nguyên mẫu. Thí nghiệm này không được dùng để khẳng định tuổi thọ điện cực dài hạn nếu chưa có nhóm đối chứng và thời gian theo dõi đủ dài.

## Dụng cụ cần thiết

- Nguyên mẫu hoàn chỉnh, sử dụng bộ thông số đã chốt từ TN3.
- Một bể hoặc mẫu nước có pH tương đối ổn định và đủ thể tích để vận hành nhiều chu kỳ.
- Dung dịch KCl bão hòa trong buồng bảo quản.
- Máy đo pH thương mại để kiểm tra mẫu ở đầu, giữa và cuối thí nghiệm.
- Raspberry Pi, giao diện giám sát và hệ thống lưu dữ liệu.
- Nguồn điện ổn định và sổ nhật ký để ghi lỗi hoặc hiện tượng bất thường.

## Các bước tiến hành

1. Ghi pH và nhiệt độ tham chiếu của mẫu trước khi bắt đầu. Kiểm tra mức KCl, bơm, van, cánh tay robot, cảm biến mức và kết nối nRF24L01.
2. Cài đặt chu kỳ đo cùng các tham số đã lựa chọn từ TN3. Không thay đổi tham số trong quá trình thử nếu không có lỗi bắt buộc phải can thiệp.
3. Cho hệ thống vận hành tối thiểu 50 chu trình. Nếu thời gian cho phép, thực hiện khoảng 100 chu trình hoặc kéo dài qua nhiều ngày.
4. Ở mỗi chu trình, ghi pH trung bình, trạng thái hoàn thành, tình trạng truyền dữ liệu và lỗi nếu có. Hệ thống nên tự lưu dữ liệu; sổ tay dùng để xác nhận sự kiện bất thường.
5. Kiểm tra pH mẫu bằng máy tham chiếu tối thiểu tại đầu, giữa và cuối thí nghiệm để phân biệt biến động của mẫu với biến động do hệ thống.
6. Khi xuất hiện lỗi, không xóa chu trình. Ghi loại lỗi, thời điểm, bước xảy ra và cách xử lý.
7. Sau thí nghiệm, kiểm tra lại điện cực, KCl, đường ống và các chi tiết cơ khí; ghi nhận cặn bám, rò rỉ hoặc thay đổi bất thường.

## Kế hoạch xử lý số liệu

- Tính pH trung bình của toàn bộ các chu trình hợp lệ và khoảng dao động `D = pH lớn nhất − pH nhỏ nhất`.
- Tính tỷ lệ chu trình hoàn thành: `R = (N hoàn thành / N tổng) × 100%`.
- Có thể tính thêm tỷ lệ truyền dữ liệu thành công theo cùng cách nếu đây là chỉ tiêu được báo cáo.
- So sánh pH tham chiếu ở đầu, giữa và cuối thí nghiệm.
- Nếu mẫu tự thay đổi đáng kể, không quy toàn bộ biến động pH cho hệ thống.
- Thống kê số lần và loại lỗi: bơm, mức nước, van, cánh tay, công tắc hành trình và truyền thông.
- Không tính một chu trình là hoàn thành tự động nếu phải can thiệp thủ công để hoàn tất.

## Nội dung cần đánh giá sau thí nghiệm

- Tỷ lệ chu trình hoàn thành là bao nhiêu và lỗi tập trung ở công đoạn nào?
- Khoảng dao động pH qua nhiều chu trình có phù hợp với kết quả của TN1–TN3 hay không?
- Kết nối nRF24L01 và quá trình lưu dữ liệu có ổn định trong suốt thử nghiệm hay không?
- Điện cực và KCl có xuất hiện dấu hiệu bất thường sau nhiều chu trình hay không?
- Những cải tiến nào cần được ưu tiên cho phiên bản tiếp theo, đặc biệt ở cơ chế rửa, đường ống và phát hiện lỗi?
