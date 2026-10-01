---
id: "TN1"
title: "Hiệu chuẩn và đánh giá phép đo pH"
order: 1
status: "completed"
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
dataStatus: "Đã cập nhật hình ảnh và kết quả"
images:
  - src: "/images/journal/TN1/ph_3.jpg"
    alt: "Dụng cụ đối sánh chuẩn bị thí nghiệm 1"
    caption: "Dụng cụ đối sánh chuẩn bị thí nghiệm 1"
  - src: "/images/journal/TN1/ph_1.jpg"
    alt: "Hiệu chuẩn điện cực bằng dung dịch chuẩn"
    caption: "Quan sát định tính pH thông qua chất chỉ thị màu"
  - src: "/images/journal/TN1/ph_4.jpg"
    alt: "Hiệu chuẩn điện cực bằng dung dịch chuẩn"
    caption: "Kiểm soát mẫu đo thực tế khác nhau"
  - src: "/images/journal/TN1/ph_2.jpg"
    alt: "Bảng số liệu thí nghiệm TN1"
    caption: "Kiểm tra các giá trị ADC trên thiết bị từ dung dịch chuẩn"
  - src: "/images/journal/TN1/TN_1_trang_1.png"
    alt: "Trang 1 báo cáo xử lý số liệu thí nghiệm TN1"
    caption: "Minh chứng 1. Dữ liệu hiệu chuẩn ADC và quy trình thí nghiệm TN1."
  - src: "/images/journal/TN1/TN_1_trang_2.png"
    alt: "Trang 2 báo cáo xử lý số liệu thí nghiệm TN1"
    caption: "Minh chứng 2. Kết quả kiểm chứng, đồ thị và nhận xét của thí nghiệm TN1."

---

> Trang này trình bày thiết kế và quy trình của thí nghiệm.

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
- Máy đo pH hàng chợ để đối sánh kết quả
- Cốc sạch, nước cất hoặc nước tinh khiết để làm sạch điện cực và giấy thấm mềm.
- Cảm biến nhiệt độ hoặc nhiệt kế.
- Giấy quỳ và dung dịch chỉ thị màu nếu cần kiểm tra định tính.

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
  Trong lượt thí nghiệm được báo cáo, tín hiệu ADC có độ phân tán giới hạn ở từng dung dịch. Dữ liệu hiện có chưa đủ để kết luận về độ ổn định giữa nhiều lần hiệu chuẩn ở các thời điểm khác nhau.
- Độ chênh ở dung dịch ghi nhãn pH 9,18 và các mẫu kiểm chứng có lớn hơn trong vùng pH 4,00–6,86 hay không?
  Trong bộ dữ liệu hiện có, độ chênh tại dung dịch ghi nhãn pH 9,18 và Mẫu 1 lớn hơn tại Mẫu 2 và Mẫu 3. Kết quả này không được dùng để khẳng định độ chênh luôn tăng theo pH.
- Khoảng dao động có phù hợp để tiếp tục sử dụng hệ đo hay không?
  Khoảng dao động cần được đánh giá theo yêu cầu của từng ứng dụng. Bộ dữ liệu này chưa đủ để khẳng định độ chính xác trên toàn dải pH.
- Dữ liệu có cho thấy cần chuyển sang hiệu chuẩn ba điểm hoặc hiệu chuẩn từng đoạn hay không?
  Kết quả cho thấy cần kiểm chứng lại mẫu tham chiếu và bổ sung hiệu chuẩn trước khi sử dụng ở vùng kiềm cao; chưa đủ căn cứ để lựa chọn dứt khoát hiệu chuẩn ba điểm hay tuyến tính từng đoạn.

## Kết quả thu nhận

### Dữ liệu hiệu chuẩn ADC

| Dung dịch | ADC 1 | ADC 2 | ADC 3 | ADC 4 | ADC 5 | ADC trung bình | Khoảng dao động | Độ lệch chuẩn mẫu |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| pH 4,00 | 574 | 568 | 572 | 572 | 574 | 572,0 | 6 | 2,45 |
| pH 6,86 | 456 | 451 | 452 | 447 | 447 | 450,6 | 9 | 3,78 |
| Ghi nhãn pH 9,18 | 395 | 399 | 395 | 401 | 393 | 396,6 | 8 | 3,29 |

ADC trung bình tại pH 4,00, pH 6,86 và dung dịch ghi nhãn pH 9,18 lần lượt là 572,0; 450,6 và 396,6. Khoảng dao động tương ứng là 6, 9 và 8 đơn vị ADC; độ lệch chuẩn mẫu tương ứng là 2,45; 3,78 và 3,29 đơn vị ADC.

### Kết quả kiểm chứng phép đo pH

| Mẫu | pH tham chiếu hoặc danh định | pH đo 1 | pH đo 2 | pH đo 3 | pH đo 4 | pH đo 5 | Trung bình hệ thống | Độ chênh tuyệt đối | Khoảng dao động D |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ghi nhãn pH 9,18 | 9,18 | 8,16 | 8,10 | 8,00 | 8,19 | 8,20 | 8,130 | 1,050 | 0,20 |
| Mẫu 1 | 10,70 | 9,64 | 9,37 | 9,78 | 9,45 | 9,67 | 9,582 | 1,118 | 0,41 |
| Mẫu 2 | 1,08 | 1,13 | 1,09 | 1,10 | 1,21 | 1,18 | 1,142 | 0,062 | 0,12 |
| Mẫu 3 | 1,28 | 1,30 | 1,25 | 1,29 | 1,23 | 1,31 | 1,276 | 0,004 | 0,08 |

Mẫu 2 và Mẫu 3 có độ chênh tuyệt đối lần lượt là 0,062 và 0,004 đơn vị pH. Dung dịch ghi nhãn pH 9,18 và Mẫu 1 có độ chênh lần lượt là 1,050 và 1,118 đơn vị pH. Mẫu 1 có khoảng dao động lớn nhất, với `D = 0,41`.

## Xử lý số liệu

Hai giá trị ADC trung bình 572,0 tại pH 4,00 và 450,6 tại pH 6,86 được dùng để xác định phương trình hiệu chuẩn. Không làm tròn các giá trị ADC trung bình trước khi tính hệ số. Phương trình thu được là:

`pH = -0,0235585 × ADC + 17,47545`

Với ADC trung bình bằng 396,6, phương trình cho pH bằng 8,132, gần với pH trung bình hệ thống 8,130.

<figure class="media-figure">
  <a class="image-zoom-trigger" href="../../images/journal/TN1/th_1.png" target="_blank" rel="noopener noreferrer" aria-label="Mở ảnh đầy đủ của đường hiệu chuẩn TN1">
    <img src="../../images/journal/TN1/th_1.png" alt="Đường hiệu chuẩn hai điểm giữa giá trị ADC và pH trong thí nghiệm TN1" loading="lazy" />
  </a>
  <figcaption>Hình 1. Đường hiệu chuẩn hai điểm và độ chênh tại dung dịch ghi nhãn pH 9,18.</figcaption>
</figure>

Đồ thị cho thấy giá trị ADC giảm khi pH tăng. Hai điểm pH 4,00 và 6,86 được dùng để thiết lập đường hiệu chuẩn. Tại dung dịch ghi nhãn pH 9,18, giá trị suy ra từ ADC là khoảng 8,13, tạo độ chênh xấp xỉ 1,05 đơn vị pH so với giá trị danh định.

## Nhận xét và giới hạn diễn giải

Giá trị 8,130 phù hợp với giá trị 8,132 tính từ phương trình hiệu chuẩn. Kết quả này chứng minh chương trình chuyển đổi ADC sang pH hoạt động nhất quán với phương trình đã sử dụng; bản thân sự nhất quán đó chưa đủ để xác nhận độ đúng của giá trị pH tại vùng kiềm.

Giá trị 9,18 được xem là giá trị ghi nhãn hoặc danh định vì tài liệu hiện có chưa cung cấp bản ghi đủ để xác nhận độc lập giá trị thực của dung dịch bằng một máy đo thương mại đã hiệu chuẩn tại thời điểm đo. Vì vậy, độ chênh 1,050 không được gọi là sai số của hệ thống. Sai lệch quan sát được ở vùng kiềm có thể liên quan đến dung dịch, nhiệt độ, điện cực, mạch xử lý tín hiệu hoặc quy trình hiệu chuẩn.

Dữ liệu hiện có chưa đủ căn cứ để quy nguyên nhân hoàn toàn cho tính phi tuyến của điện cực, cũng chưa đủ để khẳng định độ chính xác của cấu hình hiện tại trên toàn dải pH.

## Kết luận

Thí nghiệm xác nhận tín hiệu ADC có độ lặp lại trong cùng điều kiện và chương trình chuyển đổi ADC sang pH hoạt động nhất quán với phương trình hiệu chuẩn hai điểm. Độ chênh tại hai mẫu axit nhỏ, trong khi hai mẫu kiềm có độ chênh khoảng 1,05–1,12 đơn vị pH. Kết quả cho thấy cần kiểm chứng lại mẫu tham chiếu và bổ sung hiệu chuẩn trước khi sử dụng hệ thống ở vùng kiềm cao.

## Minh chứng xử lý số liệu

Toàn bộ bảng số liệu, phương trình hiệu chuẩn và phần xử lý kết quả được lưu trong báo cáo TN1. Hai ảnh cuối trong mục “Kết quả và minh chứng” là ảnh chụp trực tiếp từ bản báo cáo đã xử lý.

[Tải báo cáo xử lý số liệu Thí nghiệm 1 dạng PDF](../../images/journal/TN1/TN_1.pdf)
