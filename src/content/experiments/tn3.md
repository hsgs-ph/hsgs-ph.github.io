---
id: "TN3"
title: "Xác định thông số vận hành của một chu trình đo"
order: 3
status: "in-progress"
summary: "Khảo sát thời gian chờ, số lần thu nhận và thời gian để ráo điện cực nhằm lựa chọn bộ thông số cho một chu trình đo."
startDate: 2026-08-15
endDate: null
independentVariables:
  - "Thời gian chờ trước khi đo"
  - "Số lần thu nhận N"
  - "Thời gian để ráo điện cực"
dependentVariables:
  - "Giá trị pH trung bình"
  - "Khoảng dao động D"
  - "Sai số của phép đo kế tiếp"
  - "Lượng dung dịch còn bám"
controlVariables:
  - "Mẫu nước"
  - "Cấu hình hiệu chuẩn"
  - "Nhiệt độ"
  - "Quy trình nạp và xả mẫu"
dataStatus: "Chưa bổ sung ảnh kết quả"
images: []
---

> Trang này trình bày thiết kế và quy trình của thí nghiệm. Kết quả sẽ được bổ sung sau bằng ảnh chụp phiếu số liệu gốc.

## Mục đích

- Xác định thời gian chờ phù hợp sau khi bơm mẫu và trước khi đưa điện cực vào đo.
- Lựa chọn số lần thu nhận pH trong một chu kỳ để kết quả ổn định nhưng không kéo dài thời gian đo không cần thiết.
- Khảo sát thời gian để ráo điện cực trước khi đưa về KCl bão hòa trong điều kiện nguyên mẫu chưa có cơ chế rửa riêng.

## Tóm tắt lý thuyết

Ngay sau khi bơm dừng, mẫu trong buồng có thể còn chuyển động và bọt khí có thể chưa thoát hết. Điện cực pH cũng cần một khoảng thời gian để tín hiệu tiến tới trạng thái ổn định.

Lấy trung bình nhiều lần thu nhận giúp giảm ảnh hưởng của dao động ngắn hạn nhưng làm tăng thời gian chu kỳ. Do nguyên mẫu chưa có bước rửa riêng, thời gian giữ điện cực phía trên buồng trước khi đưa về KCl cũng cần được lựa chọn sao cho giảm lượng mẫu bám mà không kéo dài chu trình quá mức.

## Dụng cụ cần thiết

- Nguyên mẫu hoàn chỉnh đã được hiệu chuẩn theo TN1.
- Một mẫu nước ổn định có pH nằm trong vùng làm việc của hệ thống.
- Máy đo pH thương mại, nhiệt kế hoặc cảm biến nhiệt độ và đồng hồ bấm giờ.
- Raspberry Pi hoặc máy tính để ghi liên tục dữ liệu theo thời gian nếu thuận tiện.

## Các bước tiến hành

1. Chọn một mẫu có pH ổn định và ghi pH tham chiếu trước thí nghiệm.
2. Sau khi buồng được nạp đầy, ghi pH tại các thời điểm chờ 0, 10, 20, 30, 45, 60, 90 và 120 giây. Có thể điều chỉnh dãy thời gian nếu điện cực ổn định nhanh hoặc chậm hơn.
3. Lặp lại phép thử thời gian chờ tối thiểu 3 lần. Xác định thời điểm sớm nhất mà kết quả không còn thay đổi đáng kể so với giá trị ổn định cuối.
4. Giữ thời gian chờ vừa lựa chọn. Thử số lần thu nhận `N = 1, 3, 5 và 10` trong một chu kỳ. Với mỗi N, thực hiện tối thiểu 5 chu kỳ và ghi giá trị trung bình cùng khoảng dao động.
5. Chọn N nhỏ nhất nhưng vẫn đáp ứng tiêu chí ổn định của nhóm để giảm thời gian đo.
6. Khảo sát thời gian để ráo điện cực ở các mức 5, 15, 30 và 60 giây. Quan sát số giọt còn bám và, nếu có thể, thực hiện phép chuyển giữa các mẫu có pH khác nhau.
7. Chốt bộ thông số gồm thời gian chờ mẫu, số lần thu nhận và thời gian để ráo. Giữ nguyên bộ thông số này trong TN4.

## Kế hoạch xử lý số liệu

- Tính giá trị trung bình tại từng thời điểm chờ và so sánh với giá trị trung bình ở vùng tín hiệu đã ổn định.
- Có thể xác định trước một ngưỡng ổn định `ε` và chọn thời điểm sớm nhất mà kết quả nằm trong ngưỡng này ở các lần lặp.
- Với từng N, tính giá trị trung bình và khoảng dao động `D`.
- Ưu tiên N nhỏ nhất nhưng vẫn cho khoảng dao động phù hợp với yêu cầu nghiên cứu.
- Với thời gian để ráo, kết hợp quan sát và sai số của phép đo kế tiếp để lựa chọn mức hợp lý.
- Không kết luận tác dụng “rửa” vì nguyên mẫu hiện tại không có công đoạn rửa điện cực.

## Nội dung cần đánh giá sau thí nghiệm

- Thời gian chờ nào phù hợp và căn cứ lựa chọn là gì?
- Số lần thu nhận N nào cân bằng tốt nhất giữa độ ổn định và thời gian chu kỳ?
- Thời gian để ráo nào phù hợp với nguyên mẫu hiện tại?
- Bộ thông số nào sẽ được giữ cố định khi thực hiện TN4?
