---
title: "Xây dựng thu nhận ADC và phương trình hiệu chuẩn"
researchDate: 2026-09-07
publishedDate: 2026-08-28
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Kế hoạch nhật ký ngày 07/09/2026. Chỉ chuyển sang hoàn thành sau khi bổ sung dữ liệu và minh chứng thực tế."
activityTypes:
  - "lap-trinh"
  - "hieu-chuan"
status: "planned"
experimentIds: []
systemVersion: "v0.2"
tags:
  - "ADC"
  - "pH 4.00"
  - "pH 6.86"
  - "lọc tín hiệu"
images: []
youtubeIds: []
dataFiles: []
draft: true
---

> **Nhật ký được tạo trước theo lộ trình.** Nội dung dưới đây là kế hoạch thực hiện, không phải kết quả đã đạt. Sau buổi nghiên cứu, hãy thay các phần hướng dẫn bằng ghi chép thực tế, bổ sung ảnh/video/dữ liệu, đổi `status` và chỉ đặt `draft: false` khi đã kiểm tra.

## Mục tiêu

- Đọc ADC ổn định và có dấu thời gian.
- Xây dựng hàm chuyển ADC sang pH.
- Không dùng điểm hiệu chuẩn như bằng chứng độc lập về độ chính xác.

## Cơ sở và nội dung dự kiến

Hệ thống thu trực tiếp giá trị ADC. Hai điểm pH 4.00 và 6.86 được dùng xây dựng quan hệ nội suy; pH 9.18 và mẫu độc lập dành cho kiểm chứng.

## Thiết bị và vật liệu

- [CẦN CẬP NHẬT] Liệt kê đúng thiết bị, vật liệu và phiên bản phần cứng/phần mềm thực sự sử dụng trong buổi này.
- [CẦN CẬP NHẬT] Ghi tình trạng hiệu chuẩn, nguồn điện, dung dịch và thiết bị tham chiếu nếu có.

## Các bước thực hiện

- [ ] Viết chương trình đọc ADC.
- [ ] Khảo sát tần suất lấy mẫu và dao động tức thời.
- [ ] Tính trung bình nhiều lần đọc.
- [ ] Lưu hệ số hiệu chuẩn có kiểm soát phiên bản.
- [ ] Thử dữ liệu giả để kiểm tra công thức.

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

- [ ] Đoạn log ADC.
- [ ] Công thức và ví dụ tính.
- [ ] Ảnh giao diện serial hoặc bảng dữ liệu thử.

## Công việc tiếp theo

Xây dựng máy trạng thái cho toàn bộ chu trình đo.
