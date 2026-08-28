---
title: "Xây dựng giao diện Raspberry Pi và cấu hình từ xa"
researchDate: 2026-09-15
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 15/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "lap-trinh"
status: "planned"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "Raspberry Pi"
  - "giao diện"
  - "đồ thị pH"
  - "màn hình cảm ứng"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Hiển thị giá trị pH và trạng thái thiết bị.
- Thiết lập thông số vận hành có kiểm tra hợp lệ.
- Phù hợp với màn hình cảm ứng 7 inch.

## Cơ sở và nội dung dự kiến

Raspberry Pi tiếp nhận, hiển thị và quản lý dữ liệu; người dùng xem pH theo giờ/ngày/tuần và thay đổi chu kỳ đo hoặc số lần thu nhận.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Thiết kế bố cục giao diện.
- [ ] Hiển thị giá trị mới nhất và đồ thị.
- [ ] Tạo biểu mẫu chu kỳ đo và số lần thu nhận.
- [ ] Hiển thị lỗi/mất kết nối.
- [ ] Thử thao tác cảm ứng và khởi động lại ứng dụng.

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

- [ ] Ảnh chụp giao diện.
- [ ] Video thay đổi cấu hình.
- [ ] Log cấu hình được thiết bị hiện trường tiếp nhận.

## Công việc tiếp theo

Thiết kế lưu trữ cục bộ, hàng đợi ngoại tuyến và đồng bộ.
