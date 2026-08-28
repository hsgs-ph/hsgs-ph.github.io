---
title: "Xây dựng máy trạng thái điều khiển chu trình đo"
researchDate: 2026-09-09
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 09/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "lap-trinh"
status: "planned"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "state machine"
  - "chu trình đo"
  - "điều khiển"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Mô hình hóa chu trình thành các trạng thái rõ ràng.
- Chỉ chuyển trạng thái khi điều kiện được đáp ứng.
- Ghi được bước phát sinh lỗi.

## Cơ sở và nội dung dự kiến

Chu trình gồm chờ, đóng van, bơm mẫu, xác nhận đầy, ổn định mẫu, chuyển điện cực, đo, để ráo, đưa về KCl, xả mẫu, truyền và lưu dữ liệu.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Vẽ lưu đồ trạng thái.
- [ ] Định nghĩa điều kiện vào/ra từng trạng thái.
- [ ] Tạo mã lỗi và log sự kiện.
- [ ] Thử chu trình mô phỏng không tải.
- [ ] Bảo đảm điện cực trở về KCl khi kết thúc bình thường.

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

- [ ] Lưu đồ thuật toán.
- [ ] Bảng trạng thái–điều kiện–hành động.
- [ ] Log một chu trình mô phỏng.

## Công việc tiếp theo

Bổ sung lập lịch, timeout và cơ chế phục hồi lỗi.
