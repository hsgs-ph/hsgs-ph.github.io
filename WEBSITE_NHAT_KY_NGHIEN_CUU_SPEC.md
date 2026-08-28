# ĐẶC TẢ TRIỂN KHAI WEBSITE NHẬT KÝ NGHIÊN CỨU

> Tệp này là yêu cầu triển khai hoàn chỉnh dành cho Codex trong VS Code. Hãy đọc toàn bộ trước khi tạo hoặc sửa mã nguồn. Nếu có điểm chưa rõ nhưng không ảnh hưởng lớn đến kiến trúc, hãy chọn phương án hợp lý, ghi lại trong `README.md` và tiếp tục triển khai.

## 1. Bối cảnh dự án

Xây dựng một website tĩnh dùng để ghi lại quá trình thực hiện đề tài:

**Hệ thống tự động đo pH định kỳ trong môi trường nước tích hợp cơ chế bảo quản điện cực**

Website vừa là nhật ký nghiên cứu, vừa là hồ sơ minh chứng cho quá trình hình thành, thử nghiệm, sửa lỗi và hoàn thiện sản phẩm. Website phải cho phép người xem đối chiếu bài nhật ký với lịch sử commit trên GitHub.

Đối tượng sử dụng gồm:

- Nhóm nghiên cứu cập nhật nhật ký và hình ảnh.
- Giáo viên hướng dẫn kiểm tra tiến độ.
- Ban giám khảo xem quá trình nghiên cứu và các bằng chứng.
- Người xem trên máy tính và điện thoại.

## 2. Mục tiêu triển khai

1. Xây dựng website tĩnh, xuất bản bằng GitHub Pages.
2. Mỗi hoạt động nghiên cứu được lưu thành một bài Markdown riêng.
3. Nhật ký được sắp xếp và lọc theo ngày, tháng, thí nghiệm, loại hoạt động và trạng thái.
4. Ảnh được lưu trong repository; video được nhúng từ YouTube.
5. Mỗi bài nhật ký có thể liên kết đến thí nghiệm và phiên bản hệ thống liên quan.
6. GitHub lưu lại lịch sử thay đổi theo commit để làm minh chứng tiến trình.
7. Không cần cơ sở dữ liệu, máy chủ riêng hoặc tài khoản đăng nhập trong phiên bản đầu.
8. Quy trình thêm bài mới phải đơn giản, nhất quán và có hướng dẫn rõ ràng.

## 3. Nguyên tắc về tính xác thực của minh chứng

- Không tạo commit lùi ngày và không sửa lịch sử commit để mô phỏng tiến trình nghiên cứu.
- Ngày nghiên cứu trong bài viết phản ánh ngày hoạt động thực tế; ngày commit phản ánh thời điểm nội dung được đưa vào Git.
- Nếu nhập lại một ghi chép cũ, phải ghi rõ `Ngày nhập lên website` và giữ nguyên `Ngày thực hiện`.
- Mỗi ngày có hoạt động đáng kể nên tạo ít nhất một commit sau khi hoàn tất nội dung của ngày đó.
- Không dùng `git push --force` trên nhánh `main`.
- Không squash các commit nhật ký sau khi đã push lên GitHub.
- Không đưa mật khẩu, token, thông tin cá nhân nhạy cảm hoặc dữ liệu bí mật vào repository.
- Khuyến nghị bật bảo vệ nhánh `main`, xác thực hai lớp và ký commit nếu tài khoản đã cấu hình.
- Lịch sử GitHub, thời điểm push và lịch sử GitHub Pages là bằng chứng bổ trợ; nội dung khoa học, ảnh gốc, bảng số liệu và nhật ký giấy vẫn cần được bảo quản.

## 4. Công nghệ và kiến trúc

### 4.1. Công nghệ bắt buộc

- Astro phiên bản ổn định hiện hành.
- TypeScript.
- Markdown/MDX cho nội dung nhật ký.
- Astro Content Collections để kiểm tra cấu trúc dữ liệu.
- CSS thuần hoặc CSS Modules; không cần framework giao diện lớn.
- GitHub Actions để kiểm tra, build và triển khai GitHub Pages.
- Không dùng backend và không dùng cơ sở dữ liệu.

### 4.2. Yêu cầu vận hành

- Dùng Node.js LTS.
- Trình quản lý gói: npm.
- Chạy được bằng các lệnh:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

- Website phải hoạt động đúng khi GitHub Pages được triển khai ở đường dẫn dạng `https://<username>.github.io/<repository>/`.
- Cấu hình `site` và `base` bằng biến môi trường hoặc cấu hình tập trung, không rải đường dẫn tuyệt đối trong mã.
- Mọi đường dẫn ảnh và liên kết nội bộ phải tương thích với `base` của GitHub Pages.

## 5. Cấu trúc điều hướng

Thanh điều hướng chính gồm đúng 6 mục:

1. **Trang chủ**
2. **Giới thiệu**
3. **Nhật ký**
4. **Thí nghiệm**
5. **Hệ thống**
6. **Kết quả**

Chân trang gồm:

- Tài liệu tham khảo
- Thành viên thực hiện
- Repository GitHub
- Ngày cập nhật gần nhất
- Thông báo bản quyền ảnh và dữ liệu

## 6. Yêu cầu giao diện chung

- Phong cách khoa học, hiện đại, rõ ràng, không trang trí quá mức.
- Màu chính: xanh lam đậm hoặc xanh ngọc.
- Nền trắng và xám rất nhạt.
- Xanh lá biểu thị hoàn thành; cam biểu thị đang thực hiện; đỏ biểu thị lỗi hoặc cần xử lý.
- Font ưu tiên: `Be Vietnam Pro`, có font hệ thống dự phòng.
- Chiều rộng nội dung đọc tối đa khoảng 1100–1200 px.
- Nội dung bài viết có chiều rộng dễ đọc khoảng 720–820 px.
- Thiết kế mobile-first; kiểm tra tối thiểu ở 360 px, 768 px và 1440 px.
- Thanh điều hướng thu gọn hợp lý trên điện thoại.
- Có breadcrumb ở các trang chi tiết.
- Ảnh có chú thích; có thể nhấn để xem lớn hơn bằng giải pháp nhẹ và hỗ trợ bàn phím.
- Không tự động phát video, âm thanh hoặc hiệu ứng chuyển động.
- Tôn trọng `prefers-reduced-motion`.
- Đảm bảo tương phản màu, focus state và điều hướng bàn phím cơ bản theo WCAG AA.

## 7. Nội dung từng trang

### 7.1. Trang chủ

Phần đầu trang gồm:

- Tên đầy đủ của đề tài.
- Mô tả ngắn 2–3 câu.
- Một ảnh đại diện của hệ thống.
- Nút `Xem nhật ký nghiên cứu`.
- Nút `Xem kết quả thí nghiệm`.

Khối thống kê lấy tự động từ nội dung:

- Ngày bắt đầu.
- Số ngày có nhật ký.
- Số bài nhật ký.
- Số thí nghiệm.
- Phiên bản hệ thống mới nhất.

Khối tiến độ gồm 6 giai đoạn:

1. Xác định vấn đề.
2. Thiết kế nguyên mẫu.
3. Hiệu chuẩn cảm biến.
4. Kiểm chứng bơm và buồng đo.
5. Thử nghiệm dài hạn.
6. Hoàn thiện sản phẩm.

Mỗi giai đoạn có một trong ba trạng thái: `Chưa thực hiện`, `Đang thực hiện`, `Đã hoàn thành`.

Cuối trang hiển thị 3–5 bài nhật ký mới nhất với ngày, ảnh đại diện, tiêu đề, mô tả ngắn, nhãn và liên kết chi tiết.

### 7.2. Giới thiệu

Trình bày các mục:

- Bối cảnh và vấn đề nghiên cứu.
- Lý do lựa chọn đề tài.
- Câu hỏi nghiên cứu.
- Mục tiêu tổng quát và mục tiêu cụ thể.
- Giả thuyết nghiên cứu.
- Đối tượng và phạm vi nghiên cứu.
- Tính mới và ý nghĩa thực tiễn.
- Sơ đồ tổng quan quá trình nghiên cứu.

Nội dung ban đầu có thể dùng văn bản mẫu rõ ràng và đánh dấu `CẦN CẬP NHẬT`, không tự bịa số liệu hoặc kết quả.

### 7.3. Nhật ký

Trang danh sách hiển thị bài mới nhất trước. Cung cấp:

- Tìm kiếm tiêu đề và nội dung tóm tắt.
- Lọc theo năm/tháng.
- Lọc theo thí nghiệm.
- Lọc theo loại hoạt động.
- Lọc theo trạng thái.
- Nút xóa toàn bộ bộ lọc.
- Hiển thị số kết quả sau lọc.

Các loại hoạt động chuẩn:

- `tai-lieu`: Khảo sát tài liệu
- `co-khi`: Thiết kế cơ khí
- `dien-tu`: Thiết kế điện tử
- `lap-trinh`: Lập trình
- `che-tao`: Chế tạo
- `hieu-chuan`: Hiệu chuẩn
- `thi-nghiem`: Thí nghiệm
- `phan-tich`: Phân tích dữ liệu
- `sua-loi`: Khắc phục lỗi
- `bao-cao`: Viết báo cáo

Các trạng thái chuẩn:

- `planned`: Dự kiến
- `in-progress`: Đang thực hiện
- `completed`: Hoàn thành
- `issue`: Phát sinh vấn đề

Trang chi tiết một bài nhật ký phải hiển thị:

1. Ngày thực hiện.
2. Ngày nhập lên website nếu khác ngày thực hiện.
3. Người thực hiện.
4. Loại hoạt động và trạng thái.
5. Thí nghiệm liên quan.
6. Phiên bản hệ thống liên quan.
7. Mục tiêu trong ngày.
8. Thiết bị và vật liệu.
9. Các bước thực hiện.
10. Kết quả và quan sát.
11. Số liệu hoặc liên kết tệp số liệu.
12. Vấn đề hoặc sai số.
13. Điều chỉnh đã thực hiện.
14. Công việc tiếp theo.
15. Thư viện ảnh có chú thích.
16. Video YouTube nếu có.
17. Liên kết đến commit GitHub của bài viết nếu đã khai báo.
18. Bài trước và bài tiếp theo theo thời gian.

Không bắt buộc mọi bài phải có đủ ảnh, video hoặc số liệu. Giao diện không được để vùng trống khó hiểu khi trường tùy chọn không tồn tại.

### 7.4. Thí nghiệm

Trang danh sách gồm 4 thẻ thí nghiệm:

1. Hiệu chuẩn và đặc trưng cảm biến.
2. Đánh giá ảnh hưởng của bơm và buồng đo.
3. Tối ưu chu trình đo và bảo quản điện cực.
4. Đánh giá chu kỳ đo và độ tin cậy hệ thống.

Mỗi trang chi tiết thí nghiệm gồm:

- Mã và tên thí nghiệm.
- Trạng thái.
- Mục tiêu.
- Giả thuyết.
- Biến độc lập.
- Biến phụ thuộc.
- Biến kiểm soát.
- Thiết bị và vật liệu.
- Sơ đồ bố trí.
- Quy trình.
- Bảng số liệu.
- Biểu đồ.
- Phân tích.
- Kết luận.
- Giới hạn.
- Danh sách tự động các bài nhật ký liên quan.

Không điền số liệu giả. Tạo dữ liệu mẫu có nhãn rõ `Dữ liệu minh họa – cần thay thế` hoặc để trạng thái `Chưa có dữ liệu`.

### 7.5. Hệ thống

Chia thành bốn phần:

- Tổng quan: nguyên lý và một chu trình đo hoàn chỉnh.
- Cơ khí: buồng đo, đường ống, giá điện cực, bình rửa và bình bảo quản.
- Điện tử: Arduino, Raspberry Pi, cảm biến pH, bơm, van, RTC và nguồn.
- Phần mềm: điều khiển, giao diện cảm ứng, lưu dữ liệu, cảnh báo và xử lý lỗi.

Có khu vực quản lý phiên bản nguyên mẫu. Mỗi phiên bản gồm:

- Mã phiên bản.
- Ngày bắt đầu sử dụng.
- Ảnh.
- Thay đổi chính.
- Vấn đề của phiên bản trước.
- Kết quả cải tiến.
- Các bài nhật ký liên quan.

### 7.6. Kết quả

Hiển thị tổng hợp khi dữ liệu đã có:

- Sai số trung bình.
- Độ lệch lớn nhất.
- Độ lặp lại.
- Độ trôi theo thời gian.
- Tỉ lệ chu trình thành công.
- Thời gian một chu trình.
- Thể tích nước và dung dịch sử dụng.

Dự kiến các biểu đồ:

- pH hệ thống so với pH tham chiếu.
- Sai số theo mức pH.
- Sai số theo thời gian.
- Độ lặp lại qua các lần đo.
- Ảnh hưởng của thể tích tráng.
- Độ trôi của điện cực theo số ngày.
- Tỉ lệ chu trình thành công.

Thiết kế component biểu đồ để có thể đọc CSV/JSON nội bộ. Trong giai đoạn khởi tạo, chỉ cần một biểu đồ minh họa có nhãn rõ, không tự tạo kết quả nghiên cứu.

Cuối trang có:

- Kết luận chính.
- Mục tiêu đã đạt.
- Mục tiêu chưa đạt.
- Giới hạn của nguyên mẫu.
- Hướng cải tiến.

## 8. Mô hình nội dung

### 8.1. Nhật ký

Tạo collection `journal` với schema tương đương:

```yaml
title: "Hoàn thiện buồng đo phiên bản 2"
slug: "2026-08-28-hoan-thien-buong-do-v2"
researchDate: 2026-08-28
publishedDate: 2026-08-28
updatedDate: 2026-08-28
authors:
  - "Tên người thực hiện"
summary: "Mô tả ngắn hoạt động và kết quả chính."
activityTypes:
  - "co-khi"
  - "che-tao"
status: "completed"
experimentIds:
  - "TN2"
systemVersion: "v0.2"
tags:
  - "buồng đo"
  - "bọt khí"
coverImage: "/images/journal/2026/08/28/cover.webp"
coverAlt: "Buồng đo pH phiên bản 2 sau khi lắp ráp"
youtubeIds: []
dataFiles: []
githubCommit: ""
draft: false
```

Phần nội dung Markdown dùng các tiêu đề chuẩn:

```markdown
## Mục tiêu
## Thiết bị và vật liệu
## Các bước thực hiện
## Kết quả và quan sát
## Số liệu
## Vấn đề và sai số
## Điều chỉnh
## Công việc tiếp theo
## Hình ảnh và video
```

### 8.2. Thí nghiệm

Tạo collection `experiments` gồm tối thiểu:

```yaml
id: "TN1"
title: "Hiệu chuẩn và đặc trưng cảm biến"
order: 1
status: "in-progress"
summary: "..."
startDate: 2026-08-01
endDate: null
coverImage: ""
```

### 8.3. Phiên bản hệ thống

Tạo collection `systemVersions` gồm:

```yaml
version: "v0.1"
title: "Nguyên mẫu buồng đo đầu tiên"
date: 2026-08-01
status: "archived"
summary: "..."
images: []
```

### 8.4. Tiến độ

Lưu cấu hình tiến độ trong một tệp dữ liệu duy nhất để dễ cập nhật, gồm mã, tên, mô tả, trạng thái, ngày bắt đầu, ngày hoàn thành và phần trăm ước tính.

## 9. Quy ước ảnh và video

### 9.1. Ảnh

Cấu trúc đề xuất:

```text
public/images/
├── journal/
│   └── YYYY/
│       └── MM/
│           └── DD/
├── experiments/
│   ├── TN1/
│   ├── TN2/
│   ├── TN3/
│   └── TN4/
└── system/
    ├── mechanical/
    ├── electronics/
    └── software/
```

Quy tắc đặt tên:

```text
YYYY-MM-DD-noi-dung-ngan-so-thu-tu.webp
```

Ví dụ:

```text
2026-08-28-hieu-chuan-ph7-lan-01.webp
```

Yêu cầu:

- Không dùng tên mặc định như `IMG_1234.jpg`.
- Không commit ảnh trùng lặp hoặc ảnh gốc không cần thiết.
- Giữ bản gốc ở nơi lưu trữ nghiên cứu riêng.
- Tạo script npm để tối ưu ảnh sang WebP, giữ chất lượng hợp lý.
- Ảnh hiển thị web thường nên dưới khoảng 500 KB nếu không làm mất thông tin cần quan sát.
- Mọi ảnh có `alt`; ảnh khoa học có chú thích riêng.
- Không tự động xóa EXIF của ảnh gốc bên ngoài repository; chỉ xử lý bản sao dùng cho website.

### 9.2. YouTube

- Chỉ lưu YouTube video ID trong frontmatter, không lưu toàn bộ mã iframe.
- Tạo component nhúng YouTube có tiêu đề và lazy loading.
- Hỗ trợ video công khai và `Unlisted`.
- Hiển thị liên kết mở trực tiếp trên YouTube khi iframe không tải được.
- Không tải video trực tiếp vào repository.

## 10. Cấu trúc repository dự kiến

```text
ph-research-journal/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy-pages.yml
│   ├── ISSUE_TEMPLATE/
│   │   └── journal-entry.md
│   └── pull_request_template.md
├── public/
│   ├── images/
│   ├── data/
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   ├── create-journal-entry.mjs
│   ├── optimize-images.mjs
│   └── validate-content.mjs
├── src/
│   ├── components/
│   ├── content/
│   │   ├── journal/
│   │   ├── experiments/
│   │   └── system-versions/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── config.ts
│   └── content.config.ts
├── .editorconfig
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## 11. Script tạo bài nhật ký

Tạo lệnh:

```bash
npm run journal:new
```

Script hỏi hoặc nhận tham số:

- Ngày nghiên cứu, mặc định là ngày hiện tại.
- Tiêu đề.
- Người thực hiện.
- Loại hoạt động.
- Trạng thái.
- Thí nghiệm liên quan.
- Phiên bản hệ thống.

Sau đó script:

1. Tạo slug không dấu.
2. Tạo tệp Markdown đúng schema.
3. Tạo thư mục ảnh tương ứng ngày.
4. Không ghi đè nếu slug đã tồn tại.
5. In ra đường dẫn tệp vừa tạo và hướng dẫn bước tiếp theo.

Nếu `researchDate` khác ngày hiện tại, script phải thêm trường `publishedDate` là ngày hiện tại và nhắc người dùng ghi rõ đây là ghi chép được nhập lại.

## 12. Quy trình Git và commit làm minh chứng

### 12.1. Khởi tạo một lần

```bash
git init
git branch -M main
git add .
git commit -m "chore: khoi tao website nhat ky nghien cuu"
git remote add origin <URL_REPOSITORY_GITHUB>
git push -u origin main
```

Không chạy tự động các lệnh tạo repository từ xa hoặc push nếu người dùng chưa cung cấp URL và xác nhận tài khoản GitHub đã sẵn sàng.

### 12.2. Quy trình cập nhật một ngày nghiên cứu

```bash
git pull --ff-only
npm run journal:new
# thêm nội dung và ảnh
npm run check
npm run build
git status
git diff --check
git add <danh-sach-tep-cu-the>
git diff --cached
git commit -m "journal: YYYY-MM-DD mo-ta-ngan-hoat-dong"
git push origin main
```

Không dùng `git add .` trong quy trình hằng ngày nếu có nguy cơ đưa nhầm ảnh gốc, dữ liệu lớn hoặc tệp bí mật lên GitHub. Ưu tiên thêm đúng tệp nhật ký và thư mục ảnh liên quan.

### 12.3. Quy ước commit

- `journal: YYYY-MM-DD ...` — thêm hoặc hoàn thiện nhật ký ngày.
- `experiment: TN1 ...` — cập nhật quy trình hoặc kết quả thí nghiệm.
- `system: v0.2 ...` — cập nhật phiên bản hệ thống.
- `data: TN2 ...` — thêm hoặc sửa dữ liệu đã kiểm tra.
- `fix: ...` — sửa lỗi website.
- `docs: ...` — sửa hướng dẫn hoặc tài liệu.
- `chore: ...` — cấu hình, phụ thuộc hoặc công việc bảo trì.

Ví dụ:

```text
journal: 2026-08-28 hoan thien buong do phien ban 2
experiment: TN2 bo sung ket qua danh gia bot khi
system: v0.3 thay doi duong ong va van xa
```

### 12.4. Liên kết commit trong bài viết

Do mã commit chỉ tồn tại sau khi commit, thực hiện theo một trong hai cách:

**Cách đơn giản, ưu tiên:** trang bài viết có nút `Xem lịch sử tệp trên GitHub`, tạo tự động từ URL repository và đường dẫn tệp. Người xem có thể thấy toàn bộ commit liên quan mà không cần cập nhật hash thủ công.

**Cách bổ sung:** sau khi push, có thể thêm hash vào trường `githubCommit` trong một commit tiếp theo nếu thật sự cần liên kết tới một commit cụ thể.

Không tự động sửa lại commit cũ chỉ để thêm hash của chính commit đó.

## 13. GitHub Actions

Tạo hai workflow:

### 13.1. CI

Chạy khi pull request hoặc push lên `main`:

- Checkout.
- Thiết lập Node.js LTS và npm cache.
- `npm ci`.
- `npm run check`.
- `npm run build`.
- Kiểm tra liên kết nội bộ nếu có thể thực hiện ổn định.

### 13.2. GitHub Pages

- Dùng GitHub Actions chính thức dành cho Pages.
- Chỉ triển khai sau khi build thành công trên nhánh `main`.
- Cấu hình đúng quyền tối thiểu cần thiết.
- Upload thư mục build `dist` làm Pages artifact.
- Hỗ trợ manual dispatch.
- Không lưu token cá nhân trong mã nguồn.

Viết rõ trong README cách bật `Settings → Pages → Source: GitHub Actions`.

## 14. Dữ liệu và an toàn repository

`.gitignore` tối thiểu phải loại trừ:

```text
node_modules/
dist/
.astro/
.env
.env.*
!.env.example
.DS_Store
Thumbs.db
*.log
```

Thêm hướng dẫn:

- Không commit dữ liệu có thông tin cá nhân.
- Không commit file video.
- Không commit dữ liệu thô dung lượng lớn nếu không cần để kiểm chứng trực tiếp.
- CSV công khai phải có đơn vị, tên cột rõ và mô tả nguồn.
- Nếu một file lớn là bắt buộc, đánh giá Git LFS hoặc kho dữ liệu khoa học riêng trước khi đưa vào GitHub.

## 15. SEO và chia sẻ

- Tiêu đề và mô tả riêng cho từng trang.
- Open Graph cơ bản.
- Canonical URL sau khi cấu hình repository.
- Sitemap và RSS cho nhật ký.
- `robots.txt` phù hợp.
- Dữ liệu có cấu trúc cơ bản cho bài viết nếu triển khai gọn.
- URL không dấu, ngắn và ổn định; nội dung hiển thị vẫn dùng tiếng Việt đầy đủ dấu.

## 16. Kiểm thử và tiêu chí hoàn thành

Website chỉ được xem là hoàn thành phiên bản đầu khi:

- `npm ci`, `npm run check` và `npm run build` thành công.
- Không có liên kết nội bộ hỏng trong nội dung mẫu.
- Hoạt động đúng với `base` không phải `/`.
- Sáu tab chính đầy đủ và có trạng thái nội dung hợp lý.
- Có ít nhất hai bài nhật ký mẫu: một bài đầy đủ và một bài không có video/số liệu để kiểm tra trường tùy chọn.
- Có bốn trang thí nghiệm với nhãn nội dung mẫu rõ ràng.
- Bộ lọc nhật ký hoạt động trên máy tính và điện thoại.
- YouTube lazy embed hoạt động với video ID mẫu có thể thay thế.
- Ảnh có alt và chú thích.
- Kiểm tra bàn phím và focus state cơ bản.
- README đủ để một người mới có thể cài đặt, chạy, thêm bài, thêm ảnh, nhúng video, commit và triển khai.
- GitHub Actions không chứa secret hoặc URL giả được xem như dữ liệu thật.

## 17. Nội dung README bắt buộc

README cần có:

1. Mục đích website.
2. Ảnh chụp màn hình hoặc vị trí bổ sung ảnh sau này.
3. Yêu cầu hệ thống.
4. Cài đặt và chạy local.
5. Cách tạo bài nhật ký.
6. Cách tối ưu và thêm ảnh.
7. Cách nhúng YouTube.
8. Cách thêm dữ liệu CSV/JSON.
9. Quy trình kiểm tra, commit và push theo ngày.
10. Cách tạo repository GitHub mới.
11. Cách bật GitHub Pages.
12. Cách cấu hình tên repository và `base`.
13. Cách xử lý lỗi deploy thường gặp.
14. Nguyên tắc không sửa lịch sử minh chứng.

## 18. Trình tự Codex phải thực hiện

1. Kiểm tra thư mục hiện tại và xác nhận không nằm trong repository ChilNet.
2. Nếu đang ở ChilNet hoặc một repository khác, dừng và yêu cầu người dùng mở một thư mục dự án mới, ví dụ `ph-research-journal`.
3. Kiểm tra `git status` trước khi tạo tệp; không sửa hoặc xóa thay đổi ngoài phạm vi.
4. Khởi tạo Astro với TypeScript trong chính thư mục dự án mới.
5. Cài các dependency tối thiểu cần thiết; không dùng dependency nặng nếu CSS hoặc JavaScript nhỏ có thể xử lý.
6. Xây dựng content schema trước, sau đó layout, component và các trang.
7. Tạo nội dung mẫu có nhãn rõ, không bịa kết quả khoa học.
8. Tạo script thêm nhật ký và tối ưu ảnh.
9. Tạo GitHub Actions, README và hướng dẫn vận hành.
10. Chạy formatter nếu đã cấu hình, sau đó chạy check và build.
11. Khắc phục lỗi cho đến khi build thành công.
12. Báo cáo các tệp đã tạo, kết quả kiểm thử và các bước người dùng phải làm để kết nối GitHub.
13. Không tự push, không tạo repository từ xa, không sửa Git config toàn cục và không commit thay người dùng trừ khi người dùng yêu cầu rõ ràng.

## 19. Yêu cầu khi chạy song song với ChilNet

- Website phải nằm trong một thư mục và repository hoàn toàn riêng với ChilNet.
- Không dùng môi trường Conda của ChilNet.
- Website chỉ dùng Node.js/npm; không cài package Python vào môi trường training.
- Mở website trong một cửa sổ VS Code khác hoặc dùng `File → New Window`.
- Chọn đúng thư mục trước khi giao việc cho Codex.
- Có thể chạy `npm run dev` song song với training GPU vì Astro dev server chủ yếu dùng CPU và RAM, gần như không dùng GPU.
- Không chạy các tác vụ tối ưu hàng nghìn ảnh hoặc build lặp liên tục nếu máy đang thiếu RAM/CPU trong lúc training.
- Nếu VS Code/Codex hoặc WSL phản hồi chậm, tạm dừng dev server khi không xem giao diện.
- Không đóng terminal đang chạy training và không chạy lệnh quản lý process chung như `killall node`, `killall python` hoặc đóng toàn bộ WSL.

## 20. Kết quả bàn giao mong đợi

Codex cần bàn giao:

- Một repository website chạy local thành công.
- Giao diện hoàn chỉnh cho sáu tab.
- Nội dung mẫu và schema có thể mở rộng.
- Script thêm nhật ký và xử lý ảnh.
- Workflow CI và GitHub Pages.
- README hướng dẫn chi tiết.
- Báo cáo ngắn kết quả `check` và `build`.
- Danh sách các thông tin còn cần người dùng cung cấp: tên GitHub, tên repository, thành viên nghiên cứu, logo/ảnh đại diện, URL YouTube và dữ liệu thật.

---

## Lệnh bắt đầu dành cho người dùng

1. Giữ nguyên cửa sổ VS Code đang chạy ChilNet.
2. Tạo và mở một cửa sổ VS Code mới tại thư mục trống `ph-research-journal`.
3. Sao chép tệp đặc tả này vào thư mục đó.
4. Mở Codex trong cửa sổ mới và gửi yêu cầu:

```text
Đọc toàn bộ file WEBSITE_NHAT_KY_NGHIEN_CUU_SPEC.md và triển khai website theo đúng đặc tả. Trước tiên kiểm tra để chắc chắn đây là thư mục/repository riêng, không phải ChilNet. Tự triển khai, kiểm tra và sửa lỗi cho đến khi npm run check và npm run build thành công. Không push GitHub và không tạo commit cho đến khi tôi kiểm tra giao diện.
```

Sau khi kiểm tra giao diện và điền thông tin GitHub, mới yêu cầu Codex cấu hình repository, commit đầu tiên và hướng dẫn push.
