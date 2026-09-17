---
id: "TN1"
title: "Hiệu chuẩn và đánh giá phép đo pH"
order: 1
status: "in-progress"
summary: "Xây dựng quan hệ giữa giá trị ADC và pH, sau đó kiểm chứng phép đo bằng dung dịch pH 9,18 và các mẫu không tham gia hiệu chuẩn."
startDate: 2026-08-01
endDate: null
independentVariables:
  - "Dung dịch chuẩn và mẫu kiểm chứng"
  - "Giá trị pH tham chiếu"
dependentVariables:
  - "Giá trị ADC"
  - "Giá trị pH do hệ thống xác định"
  - "Sai số tuyệt đối E"
  - "Khoảng dao động D"
controlVariables:
  - "Nhiệt độ mẫu"
  - "Quy trình làm sạch điện cực"
  - "Thời gian chờ ổn định"
  - "Hệ số hiệu chuẩn"
dataStatus: "Chưa bổ sung ảnh kết quả"
images: []
---

> Trang này trình bày thiết kế và quy trình của thí nghiệm. Kết quả sẽ được bổ sung sau bằng ảnh chụp phiếu số liệu gốc.

## Mục đích

- Xác định quan hệ giữa giá trị ADC của mạch đầu đo và pH của dung dịch chuẩn.
- Kiểm chứng khả năng suy ra pH của hệ thống bằng dung dịch pH 9,18 và các mẫu chưa tham gia hiệu chuẩn.
- Đánh giá sai số và mức dao động của các phép đo lặp lại.

## Tóm tắt lý thuyết

Điện cực pH tạo ra tín hiệu điện phụ thuộc vào hoạt độ ion hiđrô của dung dịch. Trong nguyên mẫu, tín hiệu được mạch giao tiếp xử lý và chuyển thành giá trị ADC để vi điều khiển thu nhận. Hệ thống xây dựng đường chuẩn thực nghiệm thay vì sử dụng trực tiếp điện áp lý thuyết.

Với hai điểm chuẩn pH 4,00 và pH 6,86, pH được xác định theo quan hệ:

`pH = 4,00 + (ADC − ADC4,00) × (6,86 − 4,00) / (ADC6,86 − ADC4,00)`

Dung dịch pH 9,18 được dùng như một điểm kiểm chứng độc lập. Nếu sai số tại điểm này lớn hoặc có xu hướng hệ thống, nhóm sẽ xem xét hiệu chuẩn ba điểm hoặc hiệu chuẩn tuyến tính từng đoạn trước khi sử dụng cho dải pH rộng.

## Dụng cụ cần thiết

- Nguyên mẫu thiết bị đo pH và điện cực đang sử dụng trong hệ thống.
- Dung dịch chuẩn pH 4,00; pH 6,86; pH 9,18 và dung dịch KCl bão hòa.
- Máy đo pH thương mại đã hiệu chuẩn để đối chiếu.
- Cốc sạch, nước cất hoặc nước tinh khiết để làm sạch điện cực và giấy thấm mềm.
- Cảm biến nhiệt độ hoặc nhiệt kế.
- Giấy quỳ hoặc dung dịch chỉ thị màu nếu cần kiểm tra định tính.

## Các bước tiến hành

1. Chuẩn bị ba cốc dung dịch chuẩn pH 4,00; pH 6,86 và pH 9,18. Ghi nhiệt độ của từng dung dịch.
2. Đưa điện cực ra khỏi KCl bão hòa, làm sạch và để ráo theo cùng một cách trước mỗi lần đo.
3. Đặt điện cực vào dung dịch pH 6,86. Theo dõi ADC đến khi ổn định và ghi 5 lần đo độc lập hoặc 5 chu kỳ thu nhận trong cùng điều kiện.
4. Lặp lại với dung dịch pH 4,00. Tính ADC trung bình của hai dung dịch để xác định phương trình hiệu chuẩn.
5. Giữ nguyên hệ số hiệu chuẩn, đo dung dịch pH 9,18 và tính pH bằng phương trình vừa xây dựng.
6. Đo thêm ít nhất 2 mẫu nước có pH khác nhau. Với mỗi mẫu, đo bằng máy tham chiếu và bằng hệ thống trong điều kiện gần nhau về thời gian và nhiệt độ.
7. Nếu điều kiện cho phép, lặp lại toàn bộ quá trình tối thiểu 3 lần ở các thời điểm khác nhau để kiểm tra tính lặp lại của hiệu chuẩn.

## Kế hoạch xử lý số liệu

- Tính ADC trung bình tại pH 4,00 và pH 6,86, sau đó thay vào phương trình hiệu chuẩn.
- Tính pH trung bình của từng mẫu.
- Tính sai số tuyệt đối: `E = |pH hệ thống trung bình − pH tham chiếu|`.
- Tính khoảng dao động: `D = pH lớn nhất − pH nhỏ nhất`.
- So sánh pH 9,18 và các mẫu kiểm chứng với giá trị tham chiếu.
- Không dùng pH 4,00 và pH 6,86 như bằng chứng độc lập về độ chính xác vì hai điểm này đã tham gia hiệu chuẩn.

## Nội dung cần đánh giá sau thí nghiệm

- Quan hệ ADC–pH có ổn định giữa các lần hiệu chuẩn hay không?
- Sai số ở pH 9,18 và các mẫu kiểm chứng có lớn hơn trong vùng pH 4,00–6,86 hay không?
- Khoảng dao động có phù hợp để tiếp tục sử dụng hệ đo hay không?
- Dữ liệu có cho thấy cần chuyển sang hiệu chuẩn ba điểm hoặc hiệu chuẩn từng đoạn hay không?
