---
title: "Thiết kế kiến trúc thiết bị hiện trường và khối giám sát"
researchDate: 2026-08-28
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 28/08/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "dien-tu"
  - "lap-trinh"
status: "planned"
experimentIds: []
systemVersion: "v0.1"
tags:
  - "Raspberry Pi"
  - "thiết bị hiện trường"
  - "kiến trúc hệ thống"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Phân định trách nhiệm hai khối.
- Xác định dữ liệu và lệnh cấu hình trao đổi hai chiều.
- Đảm bảo thiết bị hiện trường vẫn hoạt động khi mất liên kết.

## Cơ sở và nội dung dự kiến

Hệ thống được tách thành thiết bị hiện trường chịu trách nhiệm điều khiển trực tiếp và Raspberry Pi chịu trách nhiệm giám sát, cấu hình, biểu diễn và lưu trữ dài hạn.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Vẽ kiến trúc tổng thể.
- [ ] Liệt kê tín hiệu vào/ra của bộ điều khiển hiện trường.
- [ ] Liệt kê chức năng giao diện Raspberry Pi.
- [ ] Xác định cơ chế lưu tạm và đồng bộ lại.

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

- [ ] Sơ đồ kiến trúc.
- [ ] Bảng tín hiệu vào/ra.
- [ ] Danh sách gói dữ liệu dự kiến.

## Công việc tiếp theo

Thiết kế chi tiết hai buồng và đường dẫn mẫu.
