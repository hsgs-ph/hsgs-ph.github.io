---
id: "TN2"
title: "Ảnh hưởng của bơm, đường ống và buồng đo"
order: 2
status: "planned"
summary: "So sánh mẫu nguồn với mẫu sau khi đi qua bơm, đường ống và buồng đo; đồng thời kiểm tra ảnh hưởng của mẫu còn lại từ chu trình trước."
startDate: 2026-08-10
endDate: null
independentVariables:
  - "Loại mẫu và trình tự chuyển mẫu"
  - "Số lần nạp hoặc xả mẫu"
dependentVariables:
  - "Chênh lệch pH giữa mẫu nguồn và mẫu trong buồng"
  - "Sai số pH của hệ thống"
  - "Bọt khí, rò rỉ hoặc tràn mẫu"
controlVariables:
  - "Quy trình xả và nạp mẫu"
  - "Nhiệt độ mẫu"
  - "Cấu hình bơm, đường ống và buồng đo"
  - "Thiết bị pH tham chiếu"
dataStatus: "Chưa bổ sung ảnh kết quả"
images: []
---

> Trang này trình bày thiết kế và quy trình của thí nghiệm. Kết quả sẽ được bổ sung sau bằng ảnh chụp phiếu số liệu gốc.

## Mục đích

- Kiểm tra mẫu sau khi đi qua bơm, đường ống và buồng đo có còn đại diện cho mẫu nguồn hay không.
- Đánh giá ảnh hưởng của lượng mẫu cũ còn lại khi chuyển giữa hai mẫu có pH khác nhau.
- Ghi nhận bọt khí, tràn mẫu hoặc các hiện tượng cơ học có thể ảnh hưởng đến phép đo.

## Tóm tắt lý thuyết

Điện cực không đo trực tiếp tại nguồn mà đo mẫu đã được bơm vào buồng. Mẫu có thể thay đổi do nước còn lại trong đường ống, sự trộn với mẫu trước, bọt khí hoặc thời gian vận chuyển.

Để tách ảnh hưởng của quá trình lấy mẫu khỏi sai số của điện cực hệ thống, máy pH thương mại được dùng để đo cả mẫu nguồn và mẫu lấy tại buồng hoặc đường xả trong cùng thí nghiệm.

## Dụng cụ cần thiết

- Nguyên mẫu hoàn chỉnh gồm bơm, đường ống, buồng đo, van xả và cảm biến phát hiện chất lỏng.
- Máy đo pH thương mại đã hiệu chuẩn.
- Ít nhất 3 mẫu có pH khác nhau trong vùng dự kiến sử dụng.
- Cốc lấy mẫu, nhiệt kế hoặc cảm biến nhiệt độ và đồng hồ bấm giờ.
- Khăn giấy và dụng cụ hỗ trợ quan sát bọt khí, rò rỉ hoặc tràn.

## Các bước tiến hành

1. Chuẩn bị ba mẫu A, B và C có pH khác nhau. Ghi pH và nhiệt độ của từng mẫu bằng máy tham chiếu.
2. Xả sạch buồng đo, đóng van đáy và thực hiện một chu trình nạp mẫu A đến khi cảm biến đường thoát mặt báo đầy.
3. Lấy một phần mẫu trong buồng hoặc tại đường xả ngay sau khi đo, kiểm tra lại pH bằng máy tham chiếu và đồng thời ghi pH của hệ thống.
4. Lặp lại tối thiểu 5 lần với mẫu A, sau đó thực hiện tương tự với mẫu B và mẫu C.
5. Kiểm tra ảnh hưởng của mẫu cũ bằng cách chuyển liên tiếp A → B → A hoặc B → C → B. Sau mỗi lần chuyển, chỉ sử dụng quy trình xả và nạp hiện có của hệ thống.
6. Nếu nghi ngờ mẫu cũ ảnh hưởng đáng kể, thực hiện thêm điều kiện nạp và xả mẫu mới lần thứ hai trước khi đo; so sánh với điều kiện chỉ nạp một lần.
7. Trong mọi lần thử, ghi nhận bọt khí quanh điện cực, thời gian nạp buồng, rò rỉ, tràn hoặc trạng thái bất thường.

## Kế hoạch xử lý số liệu

- Với từng mẫu, tính pH trung bình của mẫu nguồn, mẫu trong buồng và giá trị do hệ thống xác định.
- Tính chênh lệch tuyệt đối giữa pH nguồn và pH trong buồng để đánh giá riêng ảnh hưởng của bơm, đường ống và buồng đo.
- Tính sai số của hệ thống so với pH tham chiếu trong buồng và khoảng dao động giữa các lần lặp.
- Ở phép chuyển mẫu, so sánh lần nạp thứ nhất với lần nạp thứ hai.
- Nếu lần nạp thứ hai giảm sai lệch rõ rệt, xem xét bổ sung bước làm mới mẫu vào thuật toán vận hành.

## Nội dung cần đánh giá sau thí nghiệm

- Mẫu trong buồng có sai khác đáng kể so với mẫu nguồn hay không?
- Khi chuyển giữa các mẫu có pH khác nhau, có quan sát thấy ảnh hưởng của mẫu trước hay không?
- Một lần nạp đến mức tràn mặt đã đủ làm mới mẫu hay cần thêm bước nạp và xả?
- Bọt khí hoặc đặc điểm cơ học nào cần điều chỉnh trước khi thực hiện TN3?
