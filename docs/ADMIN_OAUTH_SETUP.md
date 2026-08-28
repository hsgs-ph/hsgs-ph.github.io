# Cấu hình OAuth cho Decap CMS

## Phạm vi

Trang quản trị nằm tại `https://hsgs-ph.github.io/admin/`. GitHub Pages chỉ phục vụ file tĩnh, vì vậy không thể tự xử lý OAuth callback hoặc giữ client secret. `public/admin/config.yml` hiện dùng GitHub backend và các placeholder của OAuth proxy:

```text
base_url: https://YOUR-OAUTH-PROXY.example.com
auth_endpoint: auth
```

Chưa tạo OAuth App, chưa triển khai proxy và chưa có secret trong repository.

## Vì sao cần OAuth proxy

Decap CMS cần một endpoint server-side để nhận callback GitHub và trao đổi authorization code. Client secret phải ở secret store của proxy, không được đặt trong `config.yml`, JavaScript hoặc `.env` public.

## Phương án đề xuất: Cloudflare Worker

1. Tạo một GitHub OAuth App trong **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Dùng callback URL do proxy cung cấp, ví dụ `https://<worker-domain>/callback`.
3. Giới hạn homepage và callback đúng domain `https://hsgs-ph.github.io`; không dùng wildcard.
4. Tạo Cloudflare Worker OAuth proxy theo tài liệu Decap CMS/GitHub OAuth.
5. Lưu `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` và các secret phiên trong Cloudflare secret bindings, không commit chúng.
6. Proxy chỉ cấp token cho người dùng đã được phép và chỉ phục vụ repository `hsgs-ph/hsgs-ph.github.io`.
7. Cập nhật `base_url` trong `public/admin/config.yml` bằng domain HTTPS thật của Worker; giữ `auth_endpoint: auth` nếu Worker dùng đường dẫn `/auth`.
8. Đăng nhập tại `/admin/`, thử tạo một bài nháp nhỏ, kiểm tra commit trên nhánh `main`, rồi xóa bài thử.

## Quyền và giới hạn

OAuth App cần quyền tối thiểu để Decap ghi repository. Người quản trị phải giới hạn allow-list theo GitHub username hoặc tổ chức, từ chối repository khác và không lưu access token lâu hơn cần thiết. GitHub OAuth không thay thế bảo vệ branch; nên bật branch protection, 2FA và review nếu nhóm cần kiểm soát phát hành.

## Timestamp và tính xác thực

Decap CMS không có cơ chế đáng tin cậy, built-in, để tự đặt `createdAt` lúc tạo và tự cập nhật `updatedAt` mà vẫn giữ nguyên `createdAt` khi sửa. Các trường này được để optional để bài cũ hợp lệ. Người dùng có thể điền timestamp đã xác minh thủ công; thời gian commit GitHub mới là mốc hệ thống. Không tạo commit lùi ngày, không sửa lịch sử và không squash nhật ký.

## Ảnh và video

Media được cấu hình vào `public/images/journal`. Giao diện có cảnh báo khi file ảnh lớn hơn 2 MB; hãy tối ưu bản sao và không tải video vào repository. Decap giữ tên file đã chọn và cơ chế media của nó không được dùng để ghi đè một file đang tồn tại; hãy dùng tên ngày + mô tả + số thứ tự để tránh va chạm.

## Kiểm tra sau cấu hình

```bash
npm run check
BASE_PATH=/ npm run build
git diff --check
```

Xác nhận `dist/admin/index.html` có `noindex, nofollow`, sitemap/RSS không chứa `/admin/`, và workflow Pages chạy thành công sau commit CMS.
