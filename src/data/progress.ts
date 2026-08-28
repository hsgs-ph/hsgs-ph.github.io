export const progress = [
  { id: 'problem', title: 'Xác định vấn đề', status: 'completed', percent: 100 },
  { id: 'prototype', title: 'Thiết kế nguyên mẫu', status: 'completed', percent: 100 },
  { id: 'calibration', title: 'Hiệu chuẩn cảm biến', status: 'in-progress', percent: 40 },
  { id: 'validation', title: 'Kiểm chứng bơm và buồng đo', status: 'planned', percent: 0 },
  { id: 'long-term', title: 'Thử nghiệm dài hạn', status: 'planned', percent: 0 },
  { id: 'finish', title: 'Hoàn thiện sản phẩm', status: 'planned', percent: 0 },
] as const;
