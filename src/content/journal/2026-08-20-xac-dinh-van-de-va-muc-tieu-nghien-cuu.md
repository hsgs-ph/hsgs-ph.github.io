---
title: "Xác định vấn đề và mục tiêu nghiên cứu"
researchDate: 2026-08-20
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 20/08/2026. Gặp nhau, trao đổi ý tưởng để chốt định hướng và nội dung nghiên cứu."
activityTypes:
  - "tai-lieu"
status: "completed"
experimentIds: []
systemVersion: "v0.1"
tags:
  - "vấn đề nghiên cứu"
  - "mục tiêu"
images:
 - src: "/images/journal/2026-08-20/discuss.JPG"
   alt: "Thảo luận"
   caption: "Bắt tay vào thảo luận nghiên cứu"
 - src: "/images/journal/2026-08-20/dung_cu.jpg"
   alt: "Dụng cụ"
   caption: "Các dụng cụ thiết bị đã mua hoặc xin"
 - src: "/images/journal/2026-08-20/cam dung cu.jpg"
   alt: "Làm quen thiết bị"
   caption: "Các dụng cụ sử dụng trong nghiên cứu"
 - src: "/images/journal/2026-08-20/chuyen gia.jpg"
   alt: "Tầm sư học đạo"
   caption: "Các anh chị sinh viên hướng dẫn"
youtubeIds: []
dataFiles: []
draft: false
---

> **Một đề tài nghiên cứu giao thoa giữa Hóa học và Sinh học**

## Mục tiêu buổi nghiên cứu

Buổi làm việc đầu tiên nhằm xác định vấn đề thực tiễn, giới hạn phạm vi nghiên cứu và xây dựng mục tiêu cho đề tài về hệ thống đo pH tự động trong môi trường nước. Nhóm tập trung trả lời ba câu hỏi:

1. Vì sao cần tự động hóa việc đo pH định kỳ?
2. Khó khăn chính khi sử dụng điện cực pH trong thời gian dài là gì?
3. Hệ thống cần giải quyết những yêu cầu kỹ thuật nào?

## Vấn đề thực tiễn

pH là một thông số quan trọng khi theo dõi chất lượng nước. Trong nhiều trường hợp, việc đo pH vẫn được thực hiện thủ công bằng giấy chỉ thị, thiết bị cầm tay hoặc lấy mẫu tại từng thời điểm. Phương pháp này phụ thuộc vào người vận hành, khó duy trì lịch đo đều đặn và chưa thuận tiện cho việc lưu trữ dữ liệu lâu dài.

Điện cực pH cũng cần được sử dụng và bảo quản đúng cách. Nếu điện cực được ngâm liên tục trong môi trường đo, bề mặt điện cực có thể bị bám bẩn và kết quả có thể bị ảnh hưởng theo thời gian. Ngược lại, nếu để điện cực bị khô hoặc bảo quản không phù hợp, khả năng đáp ứng của điện cực cũng có thể suy giảm.

Từ đó, vấn đề nghiên cứu được xác định không chỉ là đọc giá trị pH mà còn phải xây dựng một chu trình đo có khả năng:

* Lấy mẫu nước vào buồng đo theo định kỳ.
* Đưa điện cực từ vị trí bảo quản sang vị trí đo.
* Chờ tín hiệu ổn định trước khi ghi nhận kết quả.
* Thực hiện nhiều lần đọc để hạn chế dao động ngẫu nhiên.
* Xả mẫu sau khi đo.
* Đưa điện cực trở lại dung dịch bảo quản.
* Lưu dữ liệu kèm thời gian để có thể kiểm tra lại.

## Câu hỏi nghiên cứu

Có thể xây dựng một hệ thống tự động đo pH định kỳ trong môi trường nước, đồng thời đưa điện cực trở lại dung dịch bảo quản sau mỗi chu trình, để giảm thao tác thủ công và duy trì quá trình đo có khả năng lặp lại hay không?

Các câu hỏi kỹ thuật cần tiếp tục kiểm chứng gồm:

* Mẫu nước trong buồng đo có đại diện cho nguồn nước ban đầu không?
* Quá trình bơm, lưu mẫu và thoát mẫu ảnh hưởng như thế nào đến kết quả?
* Cần chờ bao lâu để tín hiệu pH đạt trạng thái phù hợp để ghi nhận?
* Nên lấy bao nhiêu lần đọc trong mỗi chu trình?
* Hệ thống có thể vận hành lặp lại nhiều chu trình mà không phát sinh lỗi cơ khí, điều khiển hoặc lưu trữ dữ liệu hay không?

## Mục tiêu nghiên cứu

### Mục tiêu chung

Xây dựng và đánh giá hệ thống tự động đo pH định kỳ trong môi trường nước, tích hợp cơ chế đưa điện cực về dung dịch bảo quản sau mỗi lần đo.

### Mục tiêu cụ thể

1. Thiết kế nguyên mẫu gồm buồng đo, buồng bảo quản điện cực, hệ thống cấp–thoát mẫu và cơ cấu di chuyển điện cực.
2. Xây dựng trình tự điều khiển cho một chu trình lấy mẫu, đo pH, ghi dữ liệu, xả mẫu và bảo quản điện cực.
3. Hiệu chuẩn cảm biến bằng các dung dịch chuẩn và kiểm chứng bằng dung dịch chuẩn độc lập.
4. Đánh giá ảnh hưởng của quá trình lấy mẫu, buồng đo và thời gian chờ đến kết quả đo.
5. Khảo sát số lần đọc phù hợp trong mỗi chu trình và khả năng lặp lại của phép đo.
6. Đánh giá độ tin cậy của hệ thống khi vận hành nhiều chu trình liên tiếp.
7. Xây dựng giao diện theo dõi và phương án lưu trữ dữ liệu có dấu thời gian.

## Phạm vi nghiên cứu

Trong giai đoạn hiện tại, đề tài tập trung vào:

* Đại lượng cần đo là pH.
* Nguyên mẫu được thử nghiệm trong điều kiện có kiểm soát.
* Giá trị cảm biến được thu nhận dưới dạng ADC qua Arduino.
* Raspberry Pi đảm nhiệm giao diện, lập lịch, lưu trữ và giám sát hệ thống.
* Điện cực được hiệu chuẩn bằng dung dịch chuẩn pH 4,00 và pH 6,86; dung dịch pH 9,18 được sử dụng để kiểm chứng.
* Kết quả chỉ được kết luận sau khi hoàn thành các thí nghiệm và đối chiếu với thiết bị tham chiếu.

Đề tài chưa đặt mục tiêu chế tạo sản phẩm thương mại hoặc khẳng định khả năng sử dụng lâu dài ngoài thực địa ở giai đoạn này.

## Phương án nghiên cứu ban đầu

Hệ thống dự kiến được chia thành hai khối:

* **Khối đo tại hiện trường:** Bảng mạch điều khiển, cảm biến pH, bơm, van, cảm biến mức chất lỏng, buồng đo và cơ cấu di chuyển điện cực.
* **Khối điều khiển và giám sát:** Raspberry Pi, màn hình cảm ứng, chức năng lập lịch, lưu dữ liệu và hiển thị trạng thái.

Phương án cơ khí ban đầu sử dụng hai buồng đặt gần nhau: một buồng chứa mẫu nước khi đo và một buồng chứa dung dịch bảo quản điện cực. Một cơ cấu hai bậc tự do sẽ di chuyển điện cực giữa hai vị trí.

Đây mới là phương án định hướng. Kích thước buồng, lưu lượng bơm, thời gian chờ, số lần đọc và trình tự điều khiển cần được xác định bằng thiết kế và thí nghiệm tiếp theo.

## Kết quả của buổi làm việc

Sau buổi nghiên cứu, nhóm thống nhất tên đề tài:

**Hệ thống tự động đo pH định kỳ trong môi trường nước tích hợp cơ chế bảo quản điện cực.**

Nhóm cũng thống nhất bốn nhóm thí nghiệm chính:

1. Hiệu chuẩn và kiểm chứng phép đo pH.
2. Đánh giá ảnh hưởng của quá trình lấy mẫu và buồng đo.
3. Xác định thời gian chờ và số lần thu nhận trong một chu trình.
4. Đánh giá độ tin cậy khi hệ thống vận hành lặp lại.

Chưa có số liệu thực nghiệm hoặc kết luận khoa học trong buổi làm việc này.

## Minh chứng

* Ảnh ghi chép và thảo luận của nhóm.
* Ảnh các thiết bị hỗ trợ đo và chuẩn hóa.
* Các danh sách thiết bị, hóa chất mua trên shoppe và đi xin.

## Công việc tiếp theo

1. Tìm hiểu cơ sở khoa học của phép đo pH và yêu cầu bảo quản điện cực.
2. Khảo sát các phương pháp đo pH thủ công, liên tục và định kỳ.
3. So sánh các phương án cơ khí trước khi lựa chọn thiết kế.
4. Xây dựng kiến trúc tổng thể của hệ thống.
5. Xác định tiêu chí đánh giá và nội dung chi tiết của bốn thí nghiệm.
