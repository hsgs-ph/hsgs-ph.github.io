# Hướng dẫn đưa bộ nhật ký vào website

## Dùng Copilot trong VS Code

Sao chép thư mục `src/content/journal` của gói này vào repository `hsgs-ph/hsgs-ph.github.io`. Trước khi ghi đè, Copilot phải đọc `src/content.config.ts` hoặc `src/content.config.*` và hai bài journal đang có.

Gửi Copilot yêu cầu:

```text
Nhập bộ 32 file Markdown trong thư mục src/content/journal của gói nhật ký vào collection journal hiện tại.

1. Đọc schema collection hiện hành trước khi chỉnh file.
2. Không xóa hai bài journal hiện có.
3. Nếu frontmatter của gói khác schema, chỉ điều chỉnh tên/kiểu trường để hợp lệ; không thay đổi nội dung lộ trình.
4. Giữ mọi bài mới ở status: planned và draft: true.
5. Kiểm tra route journal, trang chủ, RSS và sitemap không công khai bài có draft: true. Nếu mã hiện tại chưa lọc draft, hãy bổ sung bộ lọc mà không làm mất bài đã xuất bản.
6. Không tự tạo số liệu, kết quả, ảnh hoặc URL YouTube.
7. Chuẩn hóa UTF-8 NFC.
8. Kiểm tra không trùng slug hoặc researchDate/filename ngoài ý muốn.
9. Chạy npm run check, BASE_PATH=/ npm run build và git diff --check.
10. Báo cáo danh sách file thêm mới và lỗi schema đã xử lý.
11. Chưa commit, chưa push cho đến khi tôi kiểm tra.
```

## Quy trình cập nhật từng bài trên GitHub

1. Mở `https://github.com/hsgs-ph/hsgs-ph.github.io`.
2. Vào `src/content/journal/`.
3. Chọn file theo ngày và nhấn **Edit this file**.
4. Thay nội dung kế hoạch bằng ghi chép thực tế; giữ lại cả lỗi và kết quả không như mong đợi.
5. Bổ sung ảnh vào `public/images/journal/YYYY/MM/DD/` và cập nhật frontmatter/nội dung.
6. Video chỉ dùng YouTube ID/URL theo schema hiện tại.
7. Đổi `status` phù hợp; chỉ đổi `draft: false` khi muốn công khai.
8. Commit trực tiếp với thông điệp `journal: YYYY-MM-DD mo-ta-ngan`.
9. Kiểm tra Actions và website sau khi deploy.
