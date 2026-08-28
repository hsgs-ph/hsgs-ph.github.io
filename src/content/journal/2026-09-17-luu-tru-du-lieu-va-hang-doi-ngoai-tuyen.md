---
title: "Thiết kế lưu trữ dữ liệu và hàng đợi ngoại tuyến"
researchDate: 2026-09-17
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 17/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "lap-trinh"
status: "planned"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "lưu trữ"
  - "offline queue"
  - "đồng bộ"
  - "CSV"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Chốt schema bản ghi đo.
- Thiết kế lưu local trước, đồng bộ sau.
- Hỗ trợ xuất dữ liệu phục vụ phân tích thí nghiệm.

## Cơ sở và nội dung dự kiến

Kết quả phải được lưu tạm tại thiết bị hiện trường và lưu dài hạn trên Raspberry Pi. Dữ liệu không được mất hoặc ghi trùng khi nRF24L01 hay Internet gián đoạn.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Định nghĩa các trường: timestamp, cycle ID, pH, ADC, nhiệt độ, trạng thái và mã lỗi.
- [ ] Chọn định dạng CSV/JSON hoặc cơ sở dữ liệu cục bộ.
- [ ] Tạo quy tắc tên file theo ngày.
- [ ] Thử mất kết nối và đồng bộ lại.
- [ ] Kiểm tra chống trùng bằng cycle ID.

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

- [ ] Mẫu file dữ liệu.
- [ ] Sơ đồ luồng lưu trữ.
- [ ] Log thử offline/online.
- [ ] Ảnh đồ thị đọc lại từ dữ liệu đã lưu.

## Công việc tiếp theo

Kiểm tra riêng từng cơ cấu trước khi tích hợp.
