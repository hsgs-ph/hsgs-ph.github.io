---
title: "Thiết kế sơ đồ điện và ánh xạ chân kết nối"
researchDate: 2026-09-05
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 05/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "dien-tu"
status: "planned"
experimentIds: []
systemVersion: "v0.2"
tags:
  - "Arduino"
  - "sơ đồ điện"
  - "pin map"
  - "nguồn"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Xây dựng sơ đồ khối điện tử.
- Lập pin map không xung đột.
- Xác định nguồn và mạch công suất phù hợp.

## Cơ sở và nội dung dự kiến

Bộ điều khiển hiện trường phải đồng thời đọc đầu đo pH, cảm biến mức, công tắc hành trình và điều khiển bơm, van, động cơ cùng mô-đun nRF24L01.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Liệt kê điện áp và dòng của từng thiết bị.
- [ ] Chọn chân ADC, chân số, SPI và chân điều khiển.
- [ ] Bố trí relay/MOSFET/driver nếu cần.
- [ ] Kiểm tra nối đất chung và nhiễu từ bơm/động cơ.

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

- [ ] Sơ đồ nguyên lý.
- [ ] Bảng pin map.
- [ ] Ảnh breadboard hoặc mạch thử.
- [ ] Kết quả đo nguồn khi tải hoạt động.

## Công việc tiếp theo

Xây dựng chương trình đọc ADC và hiệu chuẩn cảm biến.
