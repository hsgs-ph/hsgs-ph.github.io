---
id: "TN3"
title: "Xác định thông số vận hành của một chu trình đo"
order: 3
status: "completed"
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
dataStatus: "Đã cập nhật hình ảnh và kết quả"
images:
  - src: "/images/journal/TN3/TN_3_trang_1.png"
    alt: "Trang 1 báo cáo xử lý số liệu thí nghiệm TN3"
    caption: "Minh chứng 1. Thiết kế khảo sát và dữ liệu pH theo thời gian chờ của TN3."
  - src: "/images/journal/TN3/TN_3_trang_2.png"
    alt: "Trang 2 báo cáo xử lý số liệu thí nghiệm TN3"
    caption: "Minh chứng 2. Đồ thị, nhận xét và kết luận về thời gian chờ của TN3."

---

> Trang này trình bày thiết kế, quy trình và kết quả của thí nghiệm.

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
  Trong điều kiện dung dịch pH 6,86 ở 27 °C, thời gian chờ 20 giây là mốc sớm nhất có pH trung bình gần giá trị tham chiếu và nằm trong vùng ổn định quan sát được từ 20 đến 60 giây.
- Số lần thu nhận N nào cân bằng tốt nhất giữa độ ổn định và thời gian chu kỳ?
  Báo cáo hiện có không chứa phép thử thay đổi N, nên chưa đủ dữ liệu để lựa chọn số lần thu nhận.
- Thời gian để ráo nào phù hợp với nguyên mẫu hiện tại?
  Báo cáo hiện có không chứa phép thử thời gian để ráo, nên chưa thể chốt thông số này.
- Bộ thông số nào sẽ được giữ cố định khi thực hiện TN4?
  Chỉ thời gian chờ 20 giây được hỗ trợ trực tiếp bởi dữ liệu TN3 hiện có. Các thông số khác cần dựa trên minh chứng bổ sung hoặc giữ nguyên cấu hình vận hành đã ghi nhận mà không tuyên bố là tối ưu.

## Kết quả thu nhận

| Thời gian chờ (giây) | Lần 1 | Lần 2 | Lần 3 | pH trung bình | Độ lệch tuyệt đối so với 6,86 |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 5 | 6,40 | 6,40 | 6,41 | 6,403 | 0,457 |
| 10 | 6,42 | 6,45 | 6,50 | 6,457 | 0,403 |
| 20 | 6,84 | 6,85 | 6,85 | 6,847 | 0,013 |
| 30 | 6,85 | 6,85 | 6,85 | 6,850 | 0,010 |
| 45 | 6,85 | 6,85 | 6,85 | 6,850 | 0,010 |
| 60 | 6,85 | 6,85 | 6,85 | 6,850 | 0,010 |
| 90 | 6,85 | 6,84 | 6,80 | 6,830 | 0,030 |

Tại 5 và 10 giây, pH trung bình lần lượt là 6,403 và 6,457, thấp hơn giá trị tham chiếu. Từ 20 đến 60 giây, pH trung bình nằm trong khoảng 6,847–6,850 và độ lệch tuyệt đối không vượt quá 0,013 đơn vị pH.

Điểm 90 giây được giữ nguyên: pH trung bình giảm còn 6,830 do lần đo thứ ba đạt 6,80. Dữ liệu hiện có chưa đủ để xác định nguyên nhân của dao động này.

## Xử lý số liệu

Tại mỗi thời điểm, giá trị trung bình được tính bằng `pH̄ = (pH₁ + pH₂ + pH₃) / 3`. Độ lệch tuyệt đối so với dung dịch tham chiếu được tính bằng `ΔpH = |pH̄ − 6,86|`.

<figure class="media-figure">
  <a class="image-zoom-trigger" href="../../images/journal/TN3/th_3.jpg" target="_blank" rel="noopener noreferrer" aria-label="Mở ảnh đầy đủ của đồ thị thời gian chờ TN3">
    <img src="../../images/journal/TN3/th_3.jpg" alt="Sự thay đổi của pH theo thời gian chờ trong thí nghiệm TN3" loading="lazy" />
  </a>
  <figcaption>Hình 1. Sự thay đổi của pH theo thời gian chờ trước khi đo.</figcaption>
</figure>

Đồ thị cho thấy sự thay đổi lớn trong 10 giây đầu, sau đó hình thành vùng giá trị gần ổn định từ 20 đến 60 giây. Điểm 90 giây không bị loại khỏi bảng và không được dùng để suy diễn nguyên nhân khi chưa có phép thử bổ sung.

## Nhận xét và giới hạn diễn giải

Kéo dài thời gian chờ từ 20 giây lên 30–60 giây làm độ lệch tuyệt đối giảm từ 0,013 xuống 0,010 đơn vị pH, tương ứng mức thay đổi 0,003. Trong cấu hình và điều kiện của thí nghiệm này, mức cải thiện đó không tạo khác biệt thực tế rõ ràng cho chu trình hiện tại.

Kết quả chỉ áp dụng cho dung dịch pH 6,86, nhiệt độ 27 °C và cấu hình thiết bị đã thử. Không thể mặc định thời gian chờ 20 giây sẽ phù hợp với mọi mẫu, nhiệt độ, trạng thái điện cực hoặc tốc độ dòng. Báo cáo cũng không cung cấp dữ liệu để đánh giá độc lập số lần thu nhận hay thời gian để ráo.

## Kết luận

Trong điều kiện đã khảo sát, hệ thống đạt vùng giá trị ổn định từ khoảng 20 giây sau khi bơm dừng. Tại 20 giây, pH trung bình là 6,847 và độ lệch tuyệt đối so với giá trị tham chiếu là 0,013 đơn vị. Vì vậy, 20 giây được chọn làm thời gian chờ vận hành cho cấu hình hiện tại; kết luận này không được mở rộng ngoài điều kiện thí nghiệm nếu chưa có dữ liệu bổ sung.

## Minh chứng xử lý số liệu

Toàn bộ bảng số liệu, đồ thị và phần lựa chọn thời gian chờ được lưu trong báo cáo TN3. Hai ảnh cuối trong mục “Kết quả và minh chứng” là ảnh chụp trực tiếp từ báo cáo.

[Tải báo cáo xử lý số liệu Thí nghiệm 3 dạng PDF](../../images/journal/TN3/TN_3.pdf)
