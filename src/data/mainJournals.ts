/**
 * Tám nhật ký chính được hiển thị trên website.
 *
 * Khi đổi tên tệp nhật ký, cần cập nhật ID tương ứng tại đây. Các tệp nhật ký
 * cũ vẫn được giữ trong content collection để bảo toàn dữ liệu và đường dẫn.
 */
export const mainJournalIds = [
  '2026-08-20-xac-dinh-van-de-va-muc-tieu-nghien-cuu',
  '2026-08-22-co-so-khoa-hoc-ph-va-bao-quan-dien-cuc',
  '2026-08-24-03-lua-chon-phuong-an-thiet-ke-va-che-tao-co-khi',
  '2026-09-05-04-thiet-ke-so-do-dien-va-ket-noi-thiet-bi',
  '2026-09-15-05-xay-dung-chuong-trinh-dieu-khien-va-giao-dien',
  '2026-09-21-06-tich-hop-va-chay-thu-he-thong-hoan-chinh',
  '2026-10-19-07-viet-bao-cao-tong-hop-ket-qua-va-minh-chung',
  '2026-10-20-08-chuan-bi-trinh-bay-va-tra-loi-cau-hoi-gia-dinh',
] as const;

const mainJournalIdSet = new Set<string>(mainJournalIds);

export function isMainJournal(id: string) {
  return mainJournalIdSet.has(id);
}
