"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
  vi: {
    // Header
    'home': 'TRANG CHỦ',
    'dai-su-gom-trang': 'ĐẠI SỨ GOM TRĂNG',
    'dai-su-dong-hanh': 'ĐẠI SỨ ĐỒNG HÀNH',
    '80-dstt': '80 ĐSTT',
    'nhan-vien-3h': 'NHÂN VIÊN 3H',
    'open-menu': 'Mở menu',

    // Partnership Section
    'chapter-1': 'Chặng 1: Gom Trăng',
    'event-title-1': 'SỰ KIỆN THU THẬP TEM NGUYÊN',
    'event-title-2': 'LIỆU NHẬN BÁNH TRUNG THU',
    'event-description': 'Từ ngày 05/09 - 30/09/2025, mỗi ly nước trong mùa Trung thu năm nay sẽ đi kèm 01 tem cào chứa nguyên liệu làm nên bánh trung thu, bao gồm: bột, đường, trứng, đậu xanh, khoai môn/hạt sen. Khi sưu tập đủ 5 tem, bạn có thể đổi một chiếc bánh Trung thu <strong>THREE O\'CLOCK</strong> đậm vị sẻ chia hoặc có thể chọn trao tặng cho các em bệnh nhi Bệnh Viện Nhi Đồng 1 TP.HCM trong "Đêm Hội Trăng Rằm" vào mùa Ấm năm nay.',

    // Journey Section
    'journey-title': 'HÀNH TRÌNH CỦA ẤM',
    'journey-desc-1': '"Ấm" là hành trình đặc biệt mà <strong>THREE O\'CLOCK</strong> bền bỉ viết tiếp suốt 5 năm qua.',
    'journey-desc-2': '<strong>Ấm 5</strong> do <strong>THREE O\'CLOCK</strong> đồng hành cùng Bệnh viện Nhi Đồng 1 TP.HCM gây quỹ quà tặng Trung thu 2025 cho hơn 300 bệnh nhi đang từng ngày chiến đấu với bệnh tật. Dưới ánh trăng Ấm 5, từng phần quà Trung thu sẽ được trao tận tay các em nhỏ, gửi gắm những lời chúc của khách hàng về một mùa trăng trọn vẹn đến với các em.',

    // Tea Collection Section
    'tea-collection-title': 'BỘ SƯU TẬP MỚI: TRÀ TRÔNG TRĂNG',

    // Set Cake Section
    'set-cake-title': 'BÁNH TRUNG THU "VỊ TRĂNG"',
    'set-cake-desc-1': 'Trong hành trình "Ấm 5", ánh trăng trở thành điểm hẹn chung của mọi tấm lòng, nơi từng ly trà, từng miếng bánh và những tiếng cười được góp nhặt, hòa quyện để tạo nên một mùa trăng đủ đầy, trọn vẹn yêu thương cho các em.',
    'set-cake-desc-2': 'Với ước mong cho các em có một mùa Trăng tròn đầy và ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc check-in nho nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều ước gửi đến các em nhỏ, và cùng nhau nhìn lại hành trình của những mùa Ấm đã qua. Không chỉ là một điểm dừng chân, đây còn là nơi kết nối những tấm lòng, để mỗi điều ước viết ra đều góp phần thắp sáng thêm một mùa trăng hy vọng.',

    // Cooperate With Section
    'chapter-2': 'Chặng 2: Treo Trăng',
    'cooperate-title-1': 'HÀNH TRÌNH LAN TỎA YÊU',
    'cooperate-title-2': 'THƯƠNG CÙNG ĐẠI SỨ',
    'actor-name': 'DIỄN VIÊN CHÍ TÂM',
    'cooperate-desc-1': 'Sự hiện diện của Đại sứ không chỉ mang đến làn gió mới cho chiến dịch, mà còn là cầu nối giúp lan tỏa mạnh mẽ thông điệp: Một ly trà thơm, thêm mùa trăng Ấm.',
    'cooperate-desc-2': 'Cùng <strong>THREE O\'CLOCK</strong>, Đại sứ sẽ trực tiếp tham gia các hoạt động thiện nguyện, đồng hành trong hành trình trao gửi những phần quà Trung thu đến các em nhỏ và kể lại những câu chuyện phía sau mỗi chiếc bánh được trao đi.',

    // Workshop Section
    'workshop-title': 'WORKSHOP: THẮP SÁNG TRĂNG RẰM',

    // Stage 3 Section
    'chapter-3': 'Chặng 3: Trông Trăng',
    'stage3-desc': 'Ngày 2/10, trong Ngày hội Trung thu: <strong>"Câu Chuyện Mùa Trăng"</strong> tổ chức tại Bệnh Viện Nhi Đồng 1, TP.HCM, THREE O\'CLOCK trao tặng 300 phần quà và 50.000.000 VNĐ dành tặng cho 10 trẻ em có hoàn cảnh khó khăn.',

    // Info Card Section
    'info-desc-1': '<strong>THREE O\'CLOCK</strong> tin rằng chỉ với một lượt chia sẻ thông điệp này, bạn đã góp công sức không nhỏ trong công cuộc truyền cảm hứng, lan tỏa hoạt động ý nghĩa này đến nhiều người hơn, để từ đó <strong>QUỸ ẤM 5</strong> sẽ có thêm sức mạnh giúp đỡ cho nhiều em nhỏ hơn nữa.',
    'info-desc-2': 'Hãy chung tay cùng <strong>THREE O\'CLOCK</strong> mang đến một mùa Tết Đoàn Viên đầy niềm vui và ấm áp cho các em thiếu nhi đang phải điều trị bởi ảnh hưởng của bệnh tật tại Bệnh Viện Nhi Đồng 1 TP.HCM mùa Trăng Ấm năm nay nhé!',

    // Common
    'language': 'Ngôn ngữ',
    'vietnamese': 'Tiếng Việt',
    'english': 'Tiếng Anh',
  },
  en: {
    // Header
    'home': 'HOME',
    'dai-su-gom-trang': 'MOON COLLECTORS',
    'dai-su-dong-hanh': 'AMBASSADORS',
    '80-dstt': '80 DSTT',
    'nhan-vien-3h': '3H EMPLOYEES',
    'open-menu': 'Open menu',

    // Partnership Section
    'chapter-1': 'Chapter 1:<br>Collecting the Moon',
    'event-title-1': 'EVENT TO COLLECT INGREDIENT STAMPS',
    'event-title-2': 'TO RECEIVE MOONCAKES',
    'event-description': 'From September 5 - September 30, 2025, each drink during this year\'s Mid-Autumn season will come with one scratch card containing a mooncake ingredient, including: flour, sugar, egg, mung bean, taro/lotus seed. After collecting 5 cards, you can redeem a unique <strong>THREE O\'CLOCK</strong> mooncake to share or choose to donate it to the child patients at Nhi Dong 1 Hospital in Ho Chi Minh City during the "Full Moon Festival" this year\'s "WARTH" season.',

    // Journey Section
    'journey-title': 'THE JOURNEY OF WARTH',
    'journey-desc-1': '"WARTH" is a special journey that <strong>THREE O\'CLOCK</strong> has persistently continued for the past 5 years.',
    'journey-desc-2': 'For the Mid-Autumn Festival 2025, <strong>WARTH 5</strong> is accompanied by Nhi Dong 1 Hospital in Ho Chi Minh City to raise a fund for gifting more than 300 pediatric patients who are fighting their illnesses every day. Under the WARTH 5 moonlight, each Mid-Autumn gift will be delivered directly to the children, sending along customers\' wishes for a complete moon season to them.',

    // Tea Collection Section
    'tea-collection-title': 'THE COLLECTION: TRÀ TRÔNG TRĂNG',

    // Set Cake Section
    'set-cake-title': 'MOONCAKE SET "TASTE OF THE MOON"',
    'set-cake-desc-1': 'On the "WARTH 5" journey, the moonlight becomes a shared meeting point for everyone, where each cup of tea, each piece of cake, and every laugh is collected and blended to create a Mid-Autumn season full of complete and heartfelt love for the children.',
    'set-cake-desc-2': 'With the wish for the children to have a full and meaningful Mid-Autumn season, at all stores, a small check-in corner will be set up where customers can stop to take photos, write wishes for the children, and look back together at the journey of past WARTH seasons. Not just a resting place, this is also a place to connect hearts, so that every wish written contributes to lighting up another season of hopeful moon.',

    // Cooperate With Section
    'chapter-2': 'Chapter 2:<br>Hanging the Moon',
    'cooperate-title-1': 'A JOURNEY OF SPREADING LOVE',
    'cooperate-title-2': 'WITH AMBASSADORS',
    'actor-name': 'ACTOR CHÍ TÂM',
    'cooperate-desc-1': 'The presence of the Ambassador not only brings a fresh breeze to the campaign but also acts as a bridge to powerfully spread the message: "A warm cup of tea, a warmer moon season."',
    'cooperate-desc-2': 'Together with <strong>THREE O\'CLOCK</strong>, the Ambassador will directly participate in charity activities, joining the journey to deliver Mid-Autumn gifts to the children and recount the stories behind each mooncake given away.',

    // Workshop Section
    'workshop-title': 'WORKSHOP: LIGHTING UP THE FULL MOON',

    // Stage 3 Section
    'chapter-3': 'Chapter 3:<br>Gazing at the Moon',
    'stage3-desc': 'On October 2, 2025, during the Mid-Autumn Festival: <strong>"The Moon Season Story"</strong> will be held at Nhi Dong 1 Hospital in Ho Chi Minh City to present 300 gifts and 50,000,000 VND to 10 disadvantaged children.',

    // Info Card Section
    'info-desc-1': '<strong>THREE O\'CLOCK</strong> believes that by simply sharing this message, you are making a significant contribution to spreading this meaningful activity to others, so that <strong>WARMTH FUND 5</strong> can gain more strength to help many more children.',
    'info-desc-2': 'Let\'s join hands with <strong>THREE O\'CLOCK</strong> to bring a joyful and warm Mid-Autumn season to the children who are undergoing treatment affected by their illnesses at Nhi Dong 1 Hospital during this year\'s "WARTH" moon season!',

    // Common
    'language': 'Language',
    'vietnamese': 'Vietnamese',
    'english': 'English',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.vi] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
