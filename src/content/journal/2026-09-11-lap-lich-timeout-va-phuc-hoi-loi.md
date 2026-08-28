---
title: "Thiết kế lập lịch, timeout và phục hồi lỗi"
researchDate: 2026-09-11
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 11/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "lap-trinh"
status: "planned"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "lập lịch"
  - "RTC"
  - "timeout"
  - "an toàn"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Thiết kế lịch đo không phụ thuộc vòng lặp chặn.
- Xác định timeout cho các bước có rủi ro.
- Đảm bảo trạng thái an toàn khi lỗi hoặc khởi động lại.

## Cơ sở và nội dung dự kiến

Khoảng thời gian giữa hai chu kỳ phải cấu hình được. Các thao tác bơm và chuyển động cần timeout để tránh hoạt động kéo dài khi cảm biến hoặc cơ cấu không đạt trạng thái mong muốn.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Chọn nguồn thời gian và cách lưu lịch.
- [ ] Định nghĩa chu kỳ đo và lần đo kế tiếp.
- [ ] Thiết lập timeout bơm, van và cơ cấu.
- [ ] Xác định phản ứng khi mất điện/khởi động lại.
- [ ] Ghi log lý do bỏ hoặc thất bại chu trình.

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

- [ ] Bảng tham số thời gian.
- [ ] Log thử timeout.
- [ ] Mô tả trạng thái an toàn.
- [ ] Ảnh cấu hình lịch đo.

## Công việc tiếp theo

Thiết kế giao thức nRF24L01 hai chiều.
