# Nhật ký nghiên cứu hệ thống đo pH

Website tĩnh ghi lại quá trình nghiên cứu **hệ thống tự động đo pH định kỳ trong môi trường nước tích hợp cơ chế bảo quản điện cực**. Nội dung được lưu bằng Markdown trong Astro Content Collections để có thể đối chiếu với lịch sử Git.

## Yêu cầu

- Node.js LTS (khuyến nghị Node 22 trở lên)
- npm

## Cài đặt và chạy local

```bash
npm ci
npm run dev
```

Mở `http://localhost:4321/`. Website User Site dùng base root `/`.

```bash
npm run check
npm run build
npm run preview
npm run journal:new
npm run images:optimize
```

## Nội dung

- `src/content/journal/`: bài nhật ký, mỗi file Markdown là một bài.
- `src/content/experiments/`: bốn thí nghiệm và schema biến nghiên cứu.
- `src/content/system-versions/`: phiên bản nguyên mẫu.
- `src/content.config.ts`: schema bắt buộc của ba collection.
- `src/data/progress.ts`: cấu hình sáu giai đoạn tiến độ.

Mọi nội dung chưa có hồ sơ thật phải ghi `Dữ liệu minh họa – cần thay thế` hoặc `Chưa có dữ liệu`. Không điền số liệu nghiên cứu giả.

## Tạo bài nhật ký

```bash
npm run journal:new
```

Có thể truyền ngày, tiêu đề và người thực hiện theo vị trí: `node scripts/create-journal-entry.mjs 2026-08-28 "Tên bài" "Tên người"`. Script không ghi đè slug đã tồn tại và tạo sẵn thư mục ảnh theo ngày. Sau đó hoàn thiện các tiêu đề Markdown chuẩn, thêm ảnh/video nếu có và chạy `npm run check`.

## Ảnh, video và dữ liệu

Ảnh web đặt trong `public/images/journal/YYYY/MM/DD/`, đặt tên dạng `YYYY-MM-DD-mo-ta-so-thu-tu.webp`. Mỗi ảnh trong frontmatter cần `src`, `alt` và có thể có `caption`. Bản tối ưu dùng cho web là bản sao, không thay thế ảnh gốc nghiên cứu. Script `images:optimize` là điểm mở rộng cho pipeline WebP.

YouTube chỉ lưu video ID trong `youtubeIds`. Component `YouTube.astro` dùng iframe lazy loading và có liên kết mở trực tiếp. Không đưa file video vào repository.

CSV/JSON công khai đặt trong `public/data/`, phải có tên cột, đơn vị và mô tả nguồn. Chỉ thêm dữ liệu đã kiểm tra; dữ liệu thô lớn hoặc có thông tin cá nhân nên để ở kho riêng.

## Git và minh chứng

Không sửa lịch sử commit, không dùng `push --force` trên `main`, không commit token hoặc dữ liệu bí mật. Quy trình đề xuất:

```bash
git pull --ff-only
npm run check
npm run build
git diff --check
git status
git add src/content/journal/ public/images/journal/YYYY/MM/DD/
git commit -m "journal: YYYY-MM-DD mo-ta-ngan"
git push origin main
```

Các tiền tố commit: `journal:`, `experiment:`, `system:`, `data:`, `fix:`, `docs:`, `chore:`. Không dùng `git add .` nếu có nguy cơ thêm ảnh gốc hoặc tệp lớn.

## GitHub Pages

1. Repository GitHub là `https://github.com/hsgs-ph/hsgs-ph.github.io`.
2. Đặt remote: `git remote add origin https://github.com/hsgs-ph/hsgs-ph.github.io.git`.
3. Push nhánh `main` sau khi đã kiểm tra local.
4. Vào **Settings → Pages → Source: GitHub Actions**.
5. Workflow `deploy-pages.yml` tự lấy tên owner/repository từ GitHub để đặt `SITE_URL` và `BASE_PATH`.

Thông tin triển khai hiện tại:

```text
SITE_URL=https://hsgs-ph.github.io
BASE_PATH=/
PUBLIC_GITHUB_REPO_URL=https://github.com/hsgs-ph/hsgs-ph.github.io
```

Ba giá trị này đã được cấu hình trong `.env.example`, `astro.config.mjs` và workflow Pages. Không đưa token vào `.env` hoặc mã nguồn. Nếu site bị lỗi CSS/link, kiểm tra `BASE_PATH=/` và build lại.

## RSS, sitemap và lỗi deploy

RSS ở `https://hsgs-ph.github.io/rss.xml`, sitemap được tạo bởi `@astrojs/sitemap`, và robots.txt đã trỏ tới sitemap Pages thật. Nếu deploy lỗi, xem log Actions, xác nhận Node/npm lockfile, quyền Pages và nhánh `main`; chạy lại `npm ci`, `npm run check`, `npm run build` local.

## Thông tin còn cần bổ sung

Tên thành viên nghiên cứu, ảnh đại diện/logo, ảnh gốc đã tối ưu, YouTube ID, dữ liệu CSV/JSON đã kiểm tra, URL GitHub thật và các kết luận khoa học chính thức. Website hiện chủ động không tự tạo các thông tin này.
