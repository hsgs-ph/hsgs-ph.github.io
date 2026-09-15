---
title: "Thiết kế tổng thể và kết nối thiết bị"
researchDate: 2026-09-05
publishedDate: 2026-09-05
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Thiết kế sơ đồ tổng thể, xác định vai trò và nguyên tắc kết nối giữa Raspberry Pi, Bảng mạch xử lý, cảm biến pH, cảm biến mức và các cơ cấu chấp hành của hệ thống."
activityTypes:
  - "dien-tu"
status: "completed"
experimentIds:
  - "TN1"
systemVersion: "v0.2"
tags:
  - "sơ đồ điện"
  - "kết nối thiết bị"
  - "nguồn điện"
images:
 - src: "/images/journal/2026-09-05/Hinh_1.jpg"
   alt: "Tìm hiểu"
   caption: "Sơ đồ thiết kế tổng quát"
 - src: "/images/journal/2026-09-05/Hinh_2.jpg"
   alt: "Tìm hiểu"
   caption: "Thuật toán hoạt động của hệ thống"
 - src: "/images/journal/2026-09-05/mau_4.jpg"
   alt: "Tìm hiểu"
   caption: "Các kết nối thiết bị trong hệ thống"
youtubeVideos: []
dataFiles: []
draft: false
---

## Mục tiêu buổi nghiên cứu

Buổi nghiên cứu nhằm xây dựng sơ đồ tổng thể của hệ thống, xác định chức năng của từng thiết bị và lựa chọn phương án kết nối giữa khối đo, khối giao diện và các cơ cấu chấp hành.

Nhóm tập trung giải quyết các nội dung:

1. Phân chia nhiệm vụ giữa Raspberry Pi và bảng mạch xử lý tại khối đo.
2. Xác định đường truyền tín hiệu từ điện cực pH đến giá trị hiển thị.
3. Xác định các tín hiệu đầu vào và đầu ra của hệ thống.
4. Xây dựng nguyên tắc cấp nguồn cho cảm biến, mạch xử lý, mô-đun truyền thông và cơ cấu chấp hành.
5. Xây dựng kịch bản hoạt động của một chu trình đo hoàn chỉnh.
6. Xác định các trạng thái lỗi cần phát hiện và xử lý.
7. Lựa chọn phương án giao tiếp không dây giữa khối đo và khối giao diện.

## Yêu cầu đối với hệ thống

Hệ thống được thiết kế để thực hiện phép đo pH theo lịch đặt trước. Giữa hai lần đo, điện cực được đặt trong buồng chứa dung dịch bảo quản. Khi đến thời điểm đo, hệ thống phải lấy mẫu nước, di chuyển điện cực sang buồng đo, thu nhận dữ liệu và đưa điện cực trở lại vị trí bảo quản.

Thiết kế cần đáp ứng các yêu cầu:

* Thực hiện chu trình đo theo trình tự xác định.
* Không để bơm, van hoặc động cơ hoạt động quá thời gian cho phép.
* Phát hiện trạng thái mẫu nước đã đạt mức cần thiết.
* Thu nhận và lưu giá trị ADC thô.
* Hạn chế ảnh hưởng của nhiễu từ bơm, van, động cơ và mô-đun vô tuyến đến tín hiệu pH.
* Trao đổi lệnh và dữ liệu không dây qua nRF24L01.

## Kiến trúc tổng thể

Hệ thống được chia thành bốn khối chức năng.

### Khối cảm biến và thu nhận dữ liệu

Khối này gồm điện cực pH, mạch xử lý tín hiệu và bảng mạch xử lý trung tâm tại thiết bị đo.

Điện cực tạo ra tín hiệu điện thế phụ thuộc vào pH của dung dịch. Do tín hiệu điện cực có trở kháng cao và biên độ nhỏ, điện cực không được nối trực tiếp vào chân ADC. Tín hiệu phải đi qua mạch chuyên dụng có chức năng xử lý, khuếch đại và đưa điện áp về phạm vi phù hợp với ADC.

Bảng mạch xử lý thực hiện các nhiệm vụ:

* Đọc giá trị ADC từ mạch pH.
* Lấy nhiều mẫu ADC trong một lần đo.
* Theo dõi cảm biến mức chất lỏng.
* Điều khiển bơm, van và cơ cấu di chuyển điện cực thông qua mạch công suất.
* Thực hiện máy trạng thái của chu trình đo.
* Trao đổi lệnh và dữ liệu với Raspberry Pi qua nRF24L01.

Việc lưu và truyền giá trị ADC thô giúp nhóm có thể kiểm tra lại phương trình hiệu chuẩn mà không phụ thuộc hoàn toàn vào giá trị pH đã chuyển đổi.

### Khối điều khiển cơ cấu chấp hành

Khối chấp hành gồm:

* Bơm cấp mẫu nước.
* Van thoát ở đáy buồng đo.
* Cơ cấu di chuyển điện cực hai bậc tự do.
* Mạch công suất và bộ điều khiển động cơ.

Bảng mạch xử lý phát tín hiệu điều khiển nhưng không cấp công suất trực tiếp cho bơm, van hoặc động cơ. Các tải này được điều khiển thông qua mạch công suất hoặc bộ điều khiển động cơ phù hợp.

Đối với bơm, van hoặc động cơ có tính cảm, cần có biện pháp hạn chế điện áp ngược khi đóng ngắt. Điện áp và dòng điện của mạch công suất phải được lựa chọn dựa trên thông số thực tế của từng thiết bị.

### Khối giao diện và lưu trữ

Raspberry Pi là trung tâm của khối giao diện và giám sát. Raspberry Pi đảm nhiệm:

* Thiết lập lịch đo.
* Gửi lệnh bắt đầu hoặc dừng chu trình.
* Nhận trạng thái và dữ liệu từ khối đo qua nRF24L01.
* Chuyển đổi ADC thành giá trị pH theo phương trình hiệu chuẩn.
* Hiển thị thông tin trên màn hình cảm ứng.
* Lưu dữ liệu và nhật ký lỗi.
* Cung cấp chức năng cấu hình và giám sát từ xa.

Raspberry Pi không trực tiếp đọc điện cực pH và không trực tiếp điều khiển tải công suất. Khi nhận được lệnh bắt đầu, bảng mạch xử lý tại khối đo phải có khả năng tự thực hiện máy trạng thái của chu trình mà không phụ thuộc vào kết nối liên tục với Raspberry Pi.

Cách tổ chức này giúp hệ thống vẫn có thể dừng tải và đưa điện cực về vị trí bảo quản nếu liên lạc không dây bị gián đoạn trong khi đang đo.

### Khối truyền thông không dây

Mỗi bên sử dụng một mô-đun nRF24L01:

* Một mô-đun kết nối với bảng mạch xử lý tại khối đo.
* Một mô-đun kết nối với Raspberry Pi tại khối giao diện.

Mỗi mô-đun trao đổi dữ liệu với bộ xử lý cục bộ bằng sóng vô tuyến. Hai mô-đun truyền lệnh, trạng thái và dữ liệu qua sóng vô tuyến.

### Khối nguồn điện

Khối nguồn cần cung cấp điện áp phù hợp cho Raspberry Pi, bảng mạch xử lý, mạch pH, hai mô-đun nRF24L01 và các cơ cấu chấp hành.

Thiết kế nguồn tuân theo các nguyên tắc:

* Tách nguồn tải công suất khỏi nguồn của mạch đo và mạch xử lý.
* Không lấy nguồn cho bơm, van hoặc động cơ trực tiếp từ bảng mạch xử lý.
* Các thiết bị có dây nối tín hiệu trong cùng một khối phải có điểm tham chiếu điện áp chung.
* Bổ sung bảo vệ ngược cực, quá dòng và ngắn mạch.
* Không bố trí dây tín hiệu pH song song và quá gần dây nguồn của bơm hoặc động cơ.

## Các kết nối chính

| Thiết bị                    | Kiểu tín hiệu             | Kết nối                      | Yêu cầu cần kiểm tra                               |
| --------------------------- | ------------------------- | ---------------------------- | -------------------------------------------------- |
| Điện cực pH                 | Điện thế có trở kháng cao | Mạch xử lý tín hiệu pH       | Không nối trực tiếp vào chân ADC                   |
| Mạch pH                     | Điện áp tương tự          | Chân ADC của bảng mạch xử lý | Không vượt quá dải điện áp ADC                     |
| Cảm biến mức                | Tín hiệu số hoặc tương tự | Bảng mạch xử lý              | Phân biệt trạng thái chưa có nước và đủ nước       |
| Bơm cấp mẫu                 | Tải công suất             | Mạch công suất               | Kiểm tra điện áp, dòng điện và chống điện áp ngược |
| Van thoát                   | Tải công suất             | Mạch công suất               | Xác định trạng thái an toàn khi mất điện           |
| Cơ cấu hai bậc tự do        | Tín hiệu điều khiển       | Bộ điều khiển động cơ        | Giới hạn hành trình và tránh va chạm               |
| Màn hình cảm ứng            | Giao tiếp theo thiết bị   | Raspberry Pi                 | Kiểm tra nguồn và giao tiếp thực tế                |

Số chân cụ thể của SPI, ADC, cảm biến và mạch điều khiển sẽ được ghi trong bảng ánh xạ chân của phiên bản v0.2.

## Giao tiếp giữa khối đo và khối giao diện

Nhóm lựa chọn nRF24L01 để truyền dữ liệu không dây giữa bảng mạch xử lý và Raspberry Pi. Phương án này giúp khối đo có thể được đặt cách xa khối giao diện mà không cần sử dụng cáp USB.

Raspberry Pi gửi các lệnh điều khiển ở mức cao, còn bảng mạch xử lý thực hiện chu trình và gửi lại trạng thái, dữ liệu hoặc mã lỗi.

Các nhóm bản tin dự kiến gồm:

* Kiểm tra trạng thái kết nối.
* Yêu cầu bắt đầu chu trình.
* Yêu cầu dừng khẩn cấp.
* Giá trị ADC thô.

Mỗi bản tin cần có tối thiểu:

* Loại bản tin.
* Mã chu trình.
* Số thứ tự bản tin.
* Dữ liệu chính.
* Trạng thái hoặc mã lỗi.

## Xử lý khi mất liên lạc

Khối đo không được phụ thuộc vào việc Raspberry Pi gửi liên tục từng bước điều khiển. Sau khi nhận và xác nhận lệnh bắt đầu, bảng mạch xử lý phải tự thực hiện chu trình theo máy trạng thái đã lập trình.

Nếu mất liên lạc trong khi chờ lệnh, khối đo tiếp tục ở trạng thái an toàn và không tự bắt đầu chu trình mới.

Nếu mất liên lạc trong khi chu trình đang thực hiện, bảng mạch xử lý phải:

1. Không khởi động thêm thao tác mới không cần thiết.
2. Dừng bơm khi vượt quá thời gian an toàn.
3. Đưa cơ cấu về trạng thái an toàn nếu điều kiện cho phép.
4. Đưa điện cực trở lại buồng bảo quản.
5. Xả mẫu còn lại theo trình tự an toàn.

## Kết quả của buổi nghiên cứu

Nhóm đã hoàn thành:

* Sơ đồ tổng thể của hệ thống.
* Phân chia chức năng giữa Raspberry Pi và bảng mạch xử lý.
* Xác định các tín hiệu đầu vào và đầu ra.
* Lựa chọn nRF24L01 làm phương thức liên lạc giữa hai khối.
* Xây dựng nguyên tắc kết nối các tải công suất.
* Xây dựng lưu đồ dự kiến của một chu trình đo.
* Xác định các trường dữ liệu cần lưu và truyền.

## Vấn đề cần tiếp tục kiểm tra

* Xác định điện áp và dòng điện thực tế của từng thiết bị.
* Đo tỉ lệ truyền nhận thành công ở các khoảng cách khác nhau.
* Kiểm tra ảnh hưởng của vật cản và nhiễu trong môi trường hoạt động.
* Xác định trạng thái an toàn của van khi mất điện.
* Xác định giới hạn hành trình của cơ cấu di chuyển.

## Công việc tiếp theo

Thử truyền bản tin hai chiều giữa Raspberry Pi và bảng mạch xử lý.
Đo tỉ lệ bản tin thành công ở các khoảng cách khác nhau.
Kiểm tra riêng cảm biến và từng cơ cấu chấp hành.
Hoàn thiện chương trình máy trạng thái của chu trình đo.
Chuẩn bị kết nối phục vụ thí nghiệm TN1.
