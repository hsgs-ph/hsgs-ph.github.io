export const teamMembers = [
  { id: 'member-1', name: 'Lê Quang Minh', className: '10A3-Sinh học', imageSrc: '/images/team/le_quang_minh.jpg', imageAlt: 'Lê Quang Minh' },
  { id: 'member-2', name: 'Vũ Tuệ Phương', className: '10A2-Hóa học', imageSrc: '/images/team/vu_tue_phuong.jpg', imageAlt: 'Vũ Tuệ Phương' },
] as const;

export const homePrototypeImage = {
  src: '/images/prototype/prototype.jpg',
  alt: 'Mô hình nguyên mẫu hệ thống tự động đo pH',
};

export const systemOverviewImage = {
  src: '',
  alt: '',
};

export const prototypeVideo = {
  youtubeUrl: 'gTjA7VdTcCs',
  title: 'VIDEO MỘT CHU TRÌNH HOÀN CHỈNH',
  caption: '',
};

export const libraryVideos = [
  { youtubeUrl: 'https://youtu.be/mOs3y8B0luo', title: 'Xác thực những điều đã được học', caption: 'pH đặc trưng cho nồng độ ion [H+] trong dung dịch' },
  { youtubeUrl: '', title: 'Chế tạo nguyên mẫu', caption: '' },
  { youtubeUrl: 'https://youtu.be/d10D2-FmUkc', title: 'Hiệu chuẩn cảm biến', caption: 'Sử dụng các mẫu tiêu chuẩn 4 ; 6,86 và 9,18' },
  { youtubeUrl: 'https://youtu.be/t-VUYzsYKag', title: 'Chuẩn bị các mẫu đo', caption: 'Pha loãng nhiều nồng độ hóa chất khác nhau để có đa dạng độ pH' },
  { youtubeUrl: 'https://youtu.be/yJRBGig1Fa0', title: 'Thử nghiệm dài hạn', caption: 'Thử nghiệm hệ thống dài hạn trong môi trường kiểm soát' },
  { youtubeUrl: 'https://youtu.be/gTjA7VdTcCs', title: 'Hoàn thiện hệ thống', caption: 'Một chu trình hoàn chỉnh trong phòng thí nghiệm' },
] as const;
