---
title: "Xây dựng chương trình điều khiển và giao diện"
researchDate: 2026-09-15
publishedDate: 2026-09-30
authors:
  - "Lê Quang Minh"
  - "Vũ Tuệ Phương"
summary: "Xây dựng chương trình điều khiển chu trình đo, giao tiếp giữa các khối và giao diện theo dõi hệ thống."
activityTypes:
  - "lap-trinh"
status: "completed"
experimentIds: []
systemVersion: "v0.3"
tags:
  - "chương trình điều khiển"
  - "giao diện"
  - "Raspberry Pi"
images:
- src: "/images/journal/2026-09-30/thuat_toan.jpg"
  alt: "Tìm hiểu"
  caption: "Thuật toán tương tác giữa 2 thiết bị trong hệ thống"
- src: "/images/journal/2026-09-30/trang_chinh.jpg"
  alt: "Tìm hiểu"
  caption: "Trang chính thao tác đo"
- src: "/images/journal/2026-09-30/lich_do.jpg"
  alt: "Tìm hiểu"
  caption: "Đặt lịch đo tự động"
- src: "/images/journal/2026-09-30/thu_cong.jpg"
  alt: "Tìm hiểu"
  caption: "Các thao tác điều khiển đo thủ công"
- src: "/images/journal/2026-09-30/hieu_chuan.jpg"
  alt: "Tìm hiểu"
  caption: "Hiệu chuẩn cảm biến theo dung dịch chuẩn"
- src: "/images/journal/2026-09-30/du_lieu.jpg"
  alt: "Tìm hiểu"
  caption: "Lưu trữ dữ liệu dài hạn"

youtubeVideos: []
dataFiles: []
draft: false
---

> **ĐÃ CẬP NHẬT XONG CÁC CHỨC NĂNG CẦN THIẾT, CÓ SỰ HỖ TRỢ CỦA PHỤ HUYNH**.

## Mục tiêu

- Xây dựng phần giao diện trên Raspberry Pi
- Tương tác với cánh tay robot, đọc ADC từ điện cực trong dung dịch và chuyển thành pH.

## Chương trình trên Raspberry Pi

- Tạo mã cho giao diện điều khiển từ AI agent (codex).
- Promt "Tạo chương trình sử dụng thư viện đồ họa, trên màn hình touch screen, có các chức năng đo, hiệu chỉnh, thống kê số liệu, kết nối với Dropbox để đo pH từ xa, giao tiếp qua module nRF24l01. Gợi ý cách kết nối nRF24l01 với rasberry pi"
- Fix dần các lỗi khi tương tác.

## Chương trình trên bảng mạch phát triển đo pH

- Tạo mã cho chương trình điều khiển cánh tay robot, đo cảm biến pH từ AI agent (codex).
- Promt: Tạo chương trình viết cho Atmega128, sử dụng trình biên dịch codevision, với các kết nối ngoại vi như sơ đồ đính kèm, các công tắc tiệm cận, động cơ hoạt động theo kịch bản cho trước, khi nhận yêu cầu từ Rasberry Pi thì tự động thao tác.
- Fix dần các lỗi khi tương tác, phát triển các kịch bản đo tối ưu.

## Cập nhật các phiên bản

- Giao diện cơ bản
- Cập nhật thêm chức năng đo tự động, đặt lịch
- Cập nhật thêm chức năng nâng, hạ cảm biến thủ công
- Cập nhật chức năng ổn định cảm biến trước khi đo

## Liên hệ với các thí nghiệm

Thí nghiệm 1 [TN1] liên quan trực tiếp.

## Minh chứng

- [ ] Ảnh chụp các giao diện.
- [ ] Sơ đồ thuật toán chương trình.

## Công việc tiếp theo

Ghi công việc cụ thể sẽ thực hiện ở nhật ký tiếp theo.
