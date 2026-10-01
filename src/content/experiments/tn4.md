---
id: "TN4"
title: "Đánh giá vận hành định kỳ và độ tin cậy"
order: 4
status: "completed"
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
dataStatus: "Đã cập nhật hình ảnh và kết quả"
images:
  - src: "/images/journal/TN4/TN_4_trang_1.png"
    alt: "Trang 1 báo cáo xử lý số liệu thí nghiệm TN4"
    caption: "Minh chứng 1. Phạm vi, phương pháp và mười chu trình đầu của TN4."
  - src: "/images/journal/TN4/TN_4_trang_2.png"
    alt: "Trang 2 báo cáo xử lý số liệu thí nghiệm TN4"
    caption: "Minh chứng 2. Mười chu trình tiếp theo, kết quả tổng hợp và đồ thị TN4."

---

> Trang này trình bày thiết kế, quy trình và kết quả của thí nghiệm khảo sát liên tục.

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
  Cả 20 chu trình theo lịch được chọn đều có trạng thái `DONE` và tạo bản ghi, tương ứng 20/20 trong đoạn dữ liệu này. Không có lỗi công đoạn nào được ghi nhận trong chuỗi đã chọn.
- Khoảng dao động pH qua nhiều chu trình có phù hợp với kết quả của TN1–TN3 hay không?
  Cột pH hệ thống hiển thị dao động từ 9,67 đến 10,39, với khoảng dao động 0,72. Do phương trình hiệu chuẩn tại thời điểm thu nhận chưa ổn định và không có phép đo tham chiếu đồng thời, không dùng kết quả này để đánh giá độ chính xác pH hoặc so sánh định lượng với TN1–TN3.
- Kết nối nRF24L01 và quá trình lưu dữ liệu có ổn định trong suốt thử nghiệm hay không?
  Hai mươi chu trình được chọn đều có dữ liệu và báo cáo không ghi nhận dấu hiệu truyền lỗi. Kết quả này chỉ mô tả đoạn vận hành gần 10 giờ, không chứng minh độ tin cậy dài hạn của liên kết.
- Điện cực và KCl có xuất hiện dấu hiệu bất thường sau nhiều chu trình hay không?
  Báo cáo không cung cấp quan sát đối chứng đủ để kết luận về điện cực hoặc KCl sau vận hành.
- Những cải tiến nào cần được ưu tiên cho phiên bản tiếp theo?
  Cần ổn định và kiểm chứng lại hiệu chuẩn, bổ sung phép đo tham chiếu đồng thời, ghi lỗi theo từng công đoạn và tiếp tục kiểm tra cơ chế rửa, đường ống cùng phát hiện lỗi trong chuỗi dài hơn.

## Phạm vi dữ liệu

Đoạn dữ liệu được chọn từ 09:27:33 đến 19:03:03 ngày 19/09/2026, gồm 20 bản ghi theo lịch gần 30 phút. Các lần chạy xen kẽ cách lần trước 1–3 phút được xem là thao tác ngoài lịch và không đưa vào chuỗi định kỳ; việc loại này dựa trên tiêu chí thời gian, không dựa trên giá trị pH.

Tại thời điểm thu nhận, phương trình hiệu chuẩn pH chưa ổn định và có dấu hiệu trôi. Vì vậy, các số dưới đây được gọi là giá trị pH hệ thống hiển thị, chỉ dùng để kiểm tra tính liên tục của dữ liệu và không đại diện cho pH thực của bể.

## Kết quả thu nhận

| Chu trình | Thời gian | pH hệ thống hiển thị | Trạng thái | Bản ghi |
| ---: | --- | ---: | --- | --- |
| 1 | 09:27:33 | 9,67 | DONE | Có |
| 2 | 09:57:32 | 10,05 | DONE | Có |
| 3 | 10:27:35 | 10,34 | DONE | Có |
| 4 | 10:57:33 | 10,20 | DONE | Có |
| 5 | 11:27:43 | 10,27 | DONE | Có |
| 6 | 11:57:37 | 9,83 | DONE | Có |
| 7 | 12:28:59 | 10,24 | DONE | Có |
| 8 | 12:58:57 | 10,24 | DONE | Có |
| 9 | 13:29:01 | 10,34 | DONE | Có |
| 10 | 13:59:06 | 10,18 | DONE | Có |
| 11 | 14:29:03 | 10,18 | DONE | Có |
| 12 | 14:59:03 | 10,39 | DONE | Có |
| 13 | 15:29:07 | 9,69 | DONE | Có |
| 14 | 16:00:25 | 9,97 | DONE | Có |
| 15 | 16:30:29 | 10,03 | DONE | Có |
| 16 | 17:00:31 | 9,74 | DONE | Có |
| 17 | 17:30:26 | 9,71 | DONE | Có |
| 18 | 18:00:28 | 9,95 | DONE | Có |
| 19 | 18:33:04 | 10,14 | DONE | Có |
| 20 | 19:03:03 | 10,20 | DONE | Có |

### Kết quả tổng hợp

| Chỉ tiêu | Kết quả |
| --- | ---: |
| Tổng số chu trình theo lịch | 20 |
| Bản ghi trạng thái DONE | 20/20 (100%) |
| Bản ghi có dữ liệu | 20/20 (100%) |
| pH hệ thống hiển thị trung bình | 10,068 |
| Độ lệch chuẩn | 0,233 |
| Nhỏ nhất – lớn nhất | 9,67 – 10,39 |
| Khoảng dao động | 0,72 |
| Dấu hiệu truyền lỗi nRF24L01 | Không ghi nhận trong đoạn dữ liệu |

## Xử lý số liệu

Tỷ lệ chu trình hoàn thành được tính bằng `R = (N hoàn thành / N tổng) × 100%`. Với chuỗi đã chọn, `R = 20/20 × 100% = 100%`. Giá trị trung bình, độ lệch chuẩn, nhỏ nhất, lớn nhất và khoảng dao động được tính trên toàn bộ 20 giá trị pH hệ thống hiển thị; không loại chu trình theo giá trị pH.

<figure class="media-figure">
  <a class="image-zoom-trigger" href="../../images/journal/TN4/th_4.png" target="_blank" rel="noopener noreferrer" aria-label="Mở ảnh đầy đủ của đồ thị 20 chu trình TN4">
    <img src="../../images/journal/TN4/th_4.png" alt="Giá trị pH hệ thống hiển thị trong 20 chu trình của thí nghiệm TN4" loading="lazy" />
  </a>
  <figcaption>Hình 1. Giá trị pH hệ thống hiển thị trong 20 chu trình theo lịch.</figcaption>
</figure>

Hai mươi chu trình theo lịch đều tạo được bản ghi và có trạng thái `DONE`. Điều này cho thấy nguyên mẫu duy trì được chuỗi vận hành và đường lưu dữ liệu trong đoạn gần 10 giờ đã chọn.

## Nhận xét và giới hạn diễn giải

Kết quả 20/20 chỉ áp dụng cho đoạn dữ liệu theo lịch đã chọn, không phải bằng chứng về độ tin cậy dài hạn, tuổi thọ điện cực hoặc khả năng vận hành không lỗi trong mọi điều kiện. Các lần chạy ngoài lịch đã được tách theo tiêu chí thời gian và cần được phân tích riêng nếu dùng để đánh giá thao tác thủ công hoặc phục hồi lỗi.

Do thiếu phép đo tham chiếu đồng thời và hiệu chuẩn có dấu hiệu trôi, trung bình 10,068 cùng khoảng dao động 0,72 không được dùng để khẳng định pH thực của bể hoặc độ chính xác của cảm biến. Việc không thấy dấu hiệu truyền lỗi trong 20 bản ghi cũng không loại trừ lỗi nRF24L01 ở thời điểm khác.

## Kết luận

Trong đoạn vận hành gần 10 giờ ngày 19/09/2026, 20/20 chu trình theo lịch tạo được bản ghi và kết thúc với trạng thái `DONE`. Kết quả xác nhận tính liên tục của chuỗi vận hành và lưu dữ liệu trong phạm vi đoạn đã chọn. Chưa đủ căn cứ để kết luận về độ chính xác pH, độ tin cậy dài hạn, tuổi thọ điện cực hoặc hiệu quả bảo quản KCl; các nội dung này cần hiệu chuẩn ổn định, phép đo tham chiếu đồng thời và thời gian theo dõi dài hơn.

## Minh chứng xử lý số liệu

Toàn bộ 20 bản ghi, tiêu chí chọn chuỗi, thống kê và đồ thị được lưu trong báo cáo TN4. Hai ảnh cuối trong mục “Kết quả và minh chứng” là ảnh chụp trực tiếp từ báo cáo.

[Tải báo cáo xử lý số liệu Thí nghiệm 4 dạng PDF](../../images/journal/TN4/TN_4.pdf)
