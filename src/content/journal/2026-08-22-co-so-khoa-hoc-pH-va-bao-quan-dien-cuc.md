---
title: "Khảo sát cơ sở khoa học pH và bảo quản điện cực"
researchDate: 2026-08-22
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 22/08/2026. Kiểm nghiệm lại hoạt động của quá trình hoạt động của điện cực thủy tinh để đo pH, các khái niệm trong kỹ thuật đo lường số liệu bằng tín hiệu điện..."
activityTypes:
  - "tai-lieu"
status: "completed"
experimentIds: []
systemVersion: "v0.1"
tags:
  - "điện cực pH"
  - "KCl bão hòa"
  - "ADC"
  - "nhiệt độ"
images:
 - src: "/images/journal/2026-08-22/trao_doi.jpg"
   alt: "Tìm hiểu"
   caption: "Tìm hiểu về ADC kỹ hơn"
 - src: "/images/journal/2026-08-22/cam_bien.jpg"
   alt: "Tìm hiểu"
   caption: "Cảm biến đo pH và mạch chuyển đổi"
 - src: "/images/journal/2026-08-22/cam_bien_da_noi.jpg"
   alt: "Tìm hiểu"
   caption: "Nối lại cảm biến cho phù hợp"
youtubeIds: []
dataFiles: []
draft: false
---

> **Nhiều đại lượng vật lý có thể được chuyển đổi thành tín hiệu điện. Thông qua quá trình lấy mẫu, lượng tử hóa và mã hóa, máy tính có thể tiếp nhận, lưu trữ và xử lý các đại lượng này dưới dạng dữ liệu số**

## Mục tiêu buổi nghiên cứu

Buổi nghiên cứu tập trung tìm hiểu mối liên hệ giữa pH, điện thế do điện cực thủy tinh tạo ra và giá trị ADC mà vi xử lý thu nhận. Nhóm cũng trao đổi với chuyên gia để làm rõ giới hạn của phương pháp hiệu chuẩn hai điểm và lựa chọn hướng xử lý phù hợp khi giá trị cần đo nằm ngoài khoảng hiệu chuẩn.

Các câu hỏi được đặt ra gồm:

Điện cực thủy tinh chuyển sự thay đổi pH thành tín hiệu điện như thế nào?
Bộ chuyển đổi ADC biểu diễn điện áp thành giá trị số ra sao?
Làm thế nào chuyển giá trị ADC thành pH?
Vì sao phép kiểm tra tại pH 9,18 có thể sai lệch mặc dù kết quả tại pH 4,00 và pH 6,86 phù hợp?
Có cần sử dụng nội suy đa thức hay có thể áp dụng một phương pháp đơn giản và dễ kiểm chứng hơn?
Điện cực phải được bảo quản như thế nào giữa các chu trình đo?
## Nguyên lý tạo tín hiệu của điện cực pH

Điện cực pH không trực tiếp tạo ra một “con số pH”. Khi đầu điện cực thủy tinh tiếp xúc với dung dịch, sự tương tác giữa lớp màng thủy tinh đã hydrat hóa và ion hiđrô tạo nên một điện thế phụ thuộc vào hoạt độ của ion hiđrô trong dung dịch.

Thiết bị đo xác định hiệu điện thế giữa điện cực thủy tinh và điện cực tham chiếu. Ở một nhiệt độ xác định, mối quan hệ giữa điện thế điện cực và pH được mô tả gần đúng theo phương trình Nernst. Vì vậy, điện thế thay đổi gần tuyến tính theo pH trong vùng làm việc thích hợp, nhưng hệ số góc phụ thuộc vào nhiệt độ và tình trạng thực tế của điện cực.

Tín hiệu của điện cực có biên độ nhỏ và trở kháng cao nên không phù hợp để đưa trực tiếp vào vi xử lý. Mạch xử lý tín hiệu có nhiệm vụ khuếch đại, lọc và dịch mức điện áp về phạm vi mà bộ ADC có thể tiếp nhận.

## Từ tín hiệu tương tự đến giá trị ADC

Điện áp đầu ra của mạch xử lý thay đổi liên tục theo thời gian nên được xem là tín hiệu tương tự. Vi xử lý sử dụng bộ chuyển đổi tương tự sang số, hay ADC, để biến điện áp này thành các giá trị rời rạc.

Quá trình chuyển đổi gồm ba bước chính:

Lấy mẫu: ghi nhận điện áp tại từng thời điểm.
Lượng tử hóa: chia dải điện áp thành các mức rời rạc.
Mã hóa: biểu diễn mỗi mức bằng một mã nhị phân.

Với ADC 10 bit, số mức lượng tử là:

2^10 = 1.024 mức

Các mã ADC nhận được nằm trong khoảng từ 0 đến 1.023, không phải từ 0 đến 1.024.

Nếu điện áp tham chiếu thực tế là 5 V, độ rộng lý tưởng của một mức lượng tử xấp xỉ:

5 / 1.024 = 0,00488 V ≈ 4,88 mV

Giá trị trên chỉ là lý thuyết. Sai số của điện áp tham chiếu, nhiễu nguồn, chất lượng mạch xử lý và dao động của điện cực đều có thể ảnh hưởng đến giá trị ADC thực tế.

## Chuyển đổi giá trị ADC thành pH

ADC chỉ biểu diễn điện áp đầu vào, vì vậy cần hiệu chuẩn để xây dựng quan hệ giữa ADC và pH. Với hai dung dịch chuẩn có pH đã biết, công thức nội suy tuyến tính được viết như sau:

pH = pH1 + (ADC - ADC1) × (pH2 - pH1) / (ADC2 - ADC1)

Trong đó:

pH1, pH2 là giá trị của hai dung dịch chuẩn;
ADC1, ADC2 là giá trị ADC tương ứng;
ADC là giá trị đọc được của mẫu cần đo.

Với hai dung dịch chuẩn pH 4,00 và pH 6,86, công thức trở thành:

pH = 4,00 + (ADC - ADC4,00) × (6,86 - 4,00) / (ADC6,86 - ADC4,00)

Công thức vẫn áp dụng được khi ADC tăng hoặc giảm theo pH, miễn là các giá trị hiệu chuẩn được ghi nhận đúng và mẫu số khác 0.

## Vấn đề phát hiện khi kiểm tra tại pH 9,18

Trong lần kiểm tra ban đầu, kết quả tại pH 4,00 và pH 6,86 tương đối phù hợp, trong khi kết quả tại pH 9,18 xuất hiện sai lệch lớn hơn. Nhóm ban đầu đặt giả thuyết rằng quan hệ giữa ADC và pH có thể không hoàn toàn tuyến tính.

Sau khi trao đổi, nhóm nhận thấy chưa đủ bằng chứng để kết luận nguyên nhân chỉ là tính phi tuyến của điện cực. Điểm pH 9,18 nằm ngoài khoảng hiệu chuẩn từ pH 4,00 đến pH 6,86, vì vậy phép tính tại điểm này là ngoại suy, không còn là nội suy. Sai số ngoại suy thường lớn hơn và có thể kết hợp với các nguyên nhân khác như:

Điện cực chưa đạt trạng thái ổn định.
Dung dịch chuẩn bị nhiễm bẩn hoặc thay đổi chất lượng.
Điện cực chưa được rửa đúng cách giữa các dung dịch.
Nhiệt độ hiệu chuẩn và nhiệt độ đo khác nhau.
Điện cực bị khô, lão hóa hoặc giảm độ dốc.
Mạch xử lý tín hiệu bị lệch hoặc tiến gần giới hạn đầu ra.
Điện áp tham chiếu của ADC không ổn định.
Thời gian lấy mẫu hoặc số lần đọc chưa phù hợp.

Do đó, cần kiểm tra lần lượt các yếu tố trên trước khi lựa chọn một mô hình toán học phức tạp hơn.

## So sánh các phương pháp hiệu chuẩn

### Hiệu chuẩn hai điểm

Hai điểm chuẩn tạo thành một đường thẳng dùng để chuyển đổi ADC sang pH. Phương pháp này đơn giản, dễ thực hiện và phù hợp khi pH của mẫu nằm trong hoặc gần khoảng được bao bởi hai dung dịch chuẩn.

Ví dụ, cặp chuẩn pH 4,00 và pH 6,86 phù hợp hơn khi đo mẫu có pH khoảng 5 so với mẫu có pH khoảng 9.

### Hiệu chuẩn đa điểm và nội suy từng đoạn

Có thể bổ sung dung dịch chuẩn pH 9,18 để tạo thêm một đoạn hiệu chuẩn. Khi đó:

Mẫu nằm giữa pH 4,00 và pH 6,86 sử dụng đường thẳng thứ nhất.
Mẫu nằm giữa pH 6,86 và pH 9,18 sử dụng đường thẳng thứ hai.

Cách này được gọi là nội suy tuyến tính từng đoạn. Phương pháp dễ giải thích, dễ lập trình và cho phép kiểm tra riêng từng khoảng đo.

### Nội suy đa thức

Nội suy hoặc hồi quy đa thức có thể mô tả một đường cong bằng một phương trình bậc cao hơn. Tuy nhiên, phương pháp này cần nhiều điểm hiệu chuẩn đáng tin cậy và có nguy cơ tạo ra kết quả bất thường giữa các điểm hoặc ở ngoài vùng hiệu chuẩn.

Ở giai đoạn hiện tại, nhóm chưa lựa chọn nội suy đa thức vì chưa có đủ dữ liệu để chứng minh phương pháp này cần thiết. Nội suy tuyến tính từng đoạn được xem là phương án dễ kiểm chứng và phù hợp hơn với phạm vi đề tài.

## Bảo quản điện cực

Màng thủy tinh của điện cực cần duy trì trạng thái hydrat hóa và điện cực tham chiếu cần được bảo quản trong dung dịch phù hợp. Không nên để đầu điện cực bị khô trong thời gian dài.

Nhóm dự kiến sử dụng dung dịch KCl cho buồng bảo quản điện cực. Nồng độ dung dịch phải được lựa chọn theo hướng dẫn của loại điện cực thực tế; không mặc định mọi điện cực đều sử dụng cùng một loại KCl bão hòa.

Nước cất hoặc nước khử ion có thể được dùng để tráng nhanh điện cực, nhưng không nên dùng làm dung dịch bảo quản lâu dài vì có thể làm thay đổi môi trường điện ly của điện cực tham chiếu.

Sau khi tráng, điện cực nên được thấm nhẹ bằng giấy mềm thay vì chà xát trực tiếp lên bầu thủy tinh.

## Điều chỉnh nhận thức sau trao đổi

Sau buổi làm việc, nhóm chốt lại bốn điểm quan trọng:

ADC 10 bit tạo ra 1.024 mức nhưng mã số chỉ chạy từ 0 đến 1.023.
Điện thế của điện cực pH gần tuyến tính với pH theo phương trình Nernst (đây chứa đựng nhiều kiến thức mới) trong điều kiện xác định; kết quả sai tại một điểm chưa đủ chứng minh toàn bộ hệ thống phi tuyến.
Giá trị pH 9,18 nằm ngoài khoảng chuẩn 4,00–6,86 nên kết quả tính toán là ngoại suy và có thể có sai số lớn hơn.
Hiệu chuẩn đa điểm kết hợp nội suy tuyến tính từng đoạn là phương án nên được kiểm tra trước khi cân nhắc nội suy đa thức.

Một ngưỡng dao động pH được khuyến nghị cho môi trường nuôi thủy sản không thể được sử dụng làm sai số cho phép của thiết bị đo. Hai đại lượng này có ý nghĩa khác nhau và cần được đánh giá bằng các tiêu chí riêng.

## Kết quả của buổi nghiên cứu

Buổi nghiên cứu chưa tạo ra số liệu dùng để kết luận về độ chính xác của hệ thống. Kết quả chính là xây dựng được chuỗi chuyển đổi cần kiểm chứng:

pH của dung dịch → điện thế điện cực → mạch xử lý tín hiệu → ADC → thuật toán hiệu chuẩn → giá trị pH hiển thị

Nhóm lựa chọn tiếp tục sử dụng giá trị ADC thô để xây dựng và kiểm tra phương trình hiệu chuẩn. Nội suy tuyến tính từng đoạn sẽ được xem xét nếu kết quả kiểm chứng cho thấy một đường chuẩn hai điểm không đáp ứng phạm vi đo dự kiến.

## Công việc tiếp theo
Ghi lại ADC của các dung dịch chuẩn pH 4,00; 6,86 và 9,18.
Lặp lại phép đọc nhiều lần tại mỗi dung dịch.
Ghi đồng thời nhiệt độ và thời gian chờ ổn định.
Kiểm tra điện áp tham chiếu và giới hạn đầu ra của mạch xử lý.
So sánh hiệu chuẩn hai điểm với nội suy tuyến tính từng đoạn.
Xây dựng bảng ghi dữ liệu cho thí nghiệm hiệu chuẩn.
Kiểm tra hướng dẫn bảo quản của loại điện cực đang sử dụng.
Tra cứu chính xác tiêu chuẩn về phương pháp đo pH và yêu cầu pH trong môi trường nuôi thủy sản trước khi đưa số hiệu tiêu chuẩn vào báo cáo.
## Minh chứng
Ảnh điện cực pH và mạch xử lý tín hiệu.
Ảnh nối lại dây điện cực cho phù hợp với prototype
Bảng giá trị ADC đọc được tại từng dung dịch.
Ảnh của buổi trao đổi thực hiện thí nghiệm.
