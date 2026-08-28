---
title: "Kiểm tra riêng các khối của nguyên mẫu"
researchDate: 2026-09-19
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 19/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "che-tao"
  - "sua-loi"
status: "planned"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "kiểm thử mô-đun"
  - "bơm"
  - "van"
  - "cánh tay"
  - "cảm biến"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Xác nhận từng khối hoạt động độc lập.
- Ghi nhận giới hạn cơ khí và thời gian phản hồi.
- Khắc phục lỗi trước tích hợp.

## Cơ sở và nội dung dự kiến

Mỗi cơ cấu cần được kiểm tra riêng trước khi vận hành đồng thời để dễ xác định lỗi và giảm nguy cơ tràn mẫu hoặc va chạm điện cực.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Thử đóng/mở van.
- [ ] Thử bơm và cảm biến đường thoát.
- [ ] Thử từng trục của cánh tay.
- [ ] Thử công tắc hành trình.
- [ ] Thử đọc ADC.
- [ ] Thử nRF24L01 và lưu file.

## Kết quả và quan sát

- [CẦN CẬP NHẬT] Mô tả những việc thực sự đã hoàn thành.
- [CẦN CẬP NHẬT] Ghi hiện tượng quan sát được, kể cả kết quả không như mong đợi.
- [CẦN CẬP NHẬT] Phân biệt rõ dữ liệu đo, nhận xét và suy luận.

## Số liệu

- [CẦN CẬP NHẬT] Ghi số liệu, thông số, phiên bản file hoặc liên kết dữ liệu liên quan; không tự tạo số liệu minh họa.

## Vấn đề và sai số

- [CẦN CẬP NHẬT] Lỗi, giới hạn, sai số, can thiệp thủ công hoặc điều kiện khác với kế hoạch.
- [CẦN CẬP NHẬT] Không xóa dữ liệu bất thường; ghi lý do nếu loại khỏi phân tích.

## Điều chỉnh

- [CẦN CẬP NHẬT] Thay đổi về cơ khí, điện tử, thuật toán, tham số hoặc quy trình sau buổi nghiên cứu.
- [CẦN CẬP NHẬT] Ghi mã phiên bản/commit nếu thay đổi chương trình hoặc thiết kế.

## Minh chứng cần bổ sung

- [ ] Checklist từng mô-đun.
- [ ] Ảnh/video thử riêng.
- [ ] Danh sách lỗi và cách xử lý.

## Công việc tiếp theo

Tích hợp và chạy thử một chu trình hoàn chỉnh.
