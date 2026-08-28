# Lộ trình nhật ký nghiên cứu 20/08–20/10/2026

Nguồn xây dựng: báo cáo đề tài và bộ bốn thí nghiệm đánh giá hệ thống đo pH định kỳ. Các file được tạo trước là **kế hoạch**, không phải bằng chứng công việc đã hoàn thành.

## Nguyên tắc sử dụng

1. Mỗi file ban đầu có `status: planned` và `draft: true`.
2. Sau đúng buổi nghiên cứu, sửa nội dung theo thực tế và bổ sung minh chứng.
3. Nếu buổi nghiên cứu dời ngày, đổi `researchDate` và tên file cho đúng ngày thực tế.
4. Khi bài đã kiểm tra, đổi trạng thái phù hợp và đặt `draft: false` để công khai.
5. Ngày commit GitHub phản ánh thời điểm nhập/sửa, không thay thế ngày thực hiện.
6. Không backdate commit, không điền số liệu giả và không xóa chu trình lỗi.

## Danh sách 32 buổi

| STT | Ngày dự kiến | Nội dung | Nhóm/TN | Trạng thái ban đầu |
|---:|---|---|---|---|
| 1 | 20/08/2026 | Xác định vấn đề và mục tiêu nghiên cứu | Thiết kế/phát triển | planned |
| 2 | 22/08/2026 | Khảo sát cơ sở khoa học pH và bảo quản điện cực | Thiết kế/phát triển | planned |
| 3 | 24/08/2026 | Lựa chọn phương án cơ khí và kiến trúc hệ thống | Thiết kế/phát triển | planned |
| 4 | 26/08/2026 | Xây dựng câu hỏi nghiên cứu và tiêu chí đánh giá | Thiết kế/phát triển | planned |
| 5 | 28/08/2026 | Thiết kế kiến trúc thiết bị hiện trường và khối giám sát | Thiết kế/phát triển | planned |
| 6 | 30/08/2026 | Thiết kế buồng đo và buồng bảo quản điện cực | Thiết kế/phát triển | planned |
| 7 | 01/09/2026 | Thiết kế cấp thoát mẫu và cảm biến phát hiện chất lỏng | Thiết kế/phát triển | planned |
| 8 | 03/09/2026 | Thiết kế cánh tay robot hai bậc tự do | Thiết kế/phát triển | planned |
| 9 | 05/09/2026 | Thiết kế sơ đồ điện và ánh xạ chân kết nối | Thiết kế/phát triển | planned |
| 10 | 07/09/2026 | Xây dựng thu nhận ADC và phương trình hiệu chuẩn | Thiết kế/phát triển | planned |
| 11 | 09/09/2026 | Xây dựng máy trạng thái điều khiển chu trình đo | Thiết kế/phát triển | planned |
| 12 | 11/09/2026 | Thiết kế lập lịch, timeout và phục hồi lỗi | Thiết kế/phát triển | planned |
| 13 | 13/09/2026 | Thiết kế giao tiếp nRF24L01 hai chiều | Thiết kế/phát triển | planned |
| 14 | 15/09/2026 | Xây dựng giao diện Raspberry Pi và cấu hình từ xa | Thiết kế/phát triển | planned |
| 15 | 17/09/2026 | Thiết kế lưu trữ dữ liệu và hàng đợi ngoại tuyến | Thiết kế/phát triển | planned |
| 16 | 19/09/2026 | Kiểm tra riêng các khối của nguyên mẫu | Thiết kế/phát triển | planned |
| 17 | 21/09/2026 | Tích hợp và chạy thử chu trình hoàn chỉnh | Thiết kế/phát triển | planned |
| 18 | 23/09/2026 | Thí nghiệm 1 – Chuẩn bị hiệu chuẩn và kiểm chứng | TN1 | planned |
| 19 | 25/09/2026 | Thí nghiệm 1 – Hiệu chuẩn hai điểm bằng ADC | TN1 | planned |
| 20 | 27/09/2026 | Thí nghiệm 1 – Kiểm chứng pH 9.18 và mẫu độc lập | TN1 | planned |
| 21 | 29/09/2026 | Thí nghiệm 1 – Lặp lại và tổng hợp kết quả | TN1 | planned |
| 22 | 01/10/2026 | Thí nghiệm 2 – So sánh mẫu nguồn và mẫu trong buồng | TN2 | planned |
| 23 | 03/10/2026 | Thí nghiệm 2 – Kiểm tra ảnh hưởng của mẫu trước | TN2 | planned |
| 24 | 05/10/2026 | Thí nghiệm 2 – Phân tích và điều chỉnh quá trình lấy mẫu | TN2 | planned |
| 25 | 07/10/2026 | Thí nghiệm 3 – Khảo sát thời gian chờ trước khi đo | TN3 | planned |
| 26 | 09/10/2026 | Thí nghiệm 3 – Khảo sát số lần thu nhận trong một chu kỳ | TN3 | planned |
| 27 | 11/10/2026 | Thí nghiệm 3 – Thời gian để ráo và chốt thông số vận hành | TN3 | planned |
| 28 | 13/10/2026 | Thí nghiệm 4 – Chuẩn bị vận hành định kỳ | TN4 | planned |
| 29 | 15/10/2026 | Thí nghiệm 4 – Vận hành 50 đến 100 chu trình | TN4 | planned |
| 30 | 17/10/2026 | Thí nghiệm 4 – Tổng hợp độ tin cậy và phân loại lỗi | TN4 | planned |
| 31 | 19/10/2026 | Tổng hợp bốn thí nghiệm và cập nhật báo cáo | Thiết kế/phát triển | planned |
| 32 | 20/10/2026 | Hoàn thiện kết luận, minh chứng và sao lưu nghiên cứu | Thiết kế/phát triển | planned |
