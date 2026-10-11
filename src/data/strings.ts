import type { Lang } from './config';

// A heading with one phrase picked out in the accent colour
type Heading = { before: string; accent: string; after?: string };

type Strings = {
  meta: { title: string; description: string };
  nav: { story: string; menu: string; gallery: string; visit: string; home: string; cta: string; openMenu: string; closeMenu: string; language: string };
  hero: {
    eyebrow: string;
    heading: Heading;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    openDaily: string;
    openFrom: string;
    kind: string;
    offer: string;
    scroll: string;
    photoAlt: string;
    marquee: string[];
  };
  about: {
    eyebrow: string;
    heading: Heading;
    body: string;
    caption: string;
    photoAlt: string;
  };
  menu: { eyebrow: string; heading: Heading; intro: string; hoverHint: string; sampleNote: string };
  gallery: {
    eyebrow: string;
    heading: Heading;
    intro: string;
    items: { caption: string; alt: string }[];
  };
  visit: {
    eyebrow: string;
    heading: Heading;
    where: string;
    hours: string;
    contact: string;
    weekdays: string;
    weekends: string;
    addressSoon: string;
    phoneSoon: string;
    call: string;
    directions: string;
    mapSoon: string;
    mapSoonBody: string;
    mapTitle: string;
  };
  social: { followUs: string };
  footer: { tagline: string; explore: string; findUs: string; rights: string; credit: string };
};

export const strings: Record<Lang, Strings> = {
  en: {
    meta: {
      title: 'Dallas Cafe & Booth | Wolaita Sodo',
      description: 'Discover great coffee, delicious bites, and a welcoming atmosphere at Dallas Cafe & Booth in Wolaita Sodo.',
    },
    nav: {
      story: 'Our Story',
      menu: 'Menu',
      gallery: 'Gallery',
      visit: 'Visit',
      home: 'Home',
      cta: 'See the menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Wolaita Sodo, Ethiopia',
      heading: { before: 'Where coffee is still a', accent: 'ceremony.' },
      intro: 'Great coffee, fresh bites and an unhurried table at Dallas Cafe & Booth, in the heart of Wolaita Sodo.',
      primaryCta: 'Explore the menu',
      secondaryCta: 'Find the cafe',
      openDaily: 'Open daily',
      openFrom: 'From 6:00 AM',
      kind: 'Cafe & snack house',
      offer: 'Coffee, juice & bites',
      scroll: 'Scroll',
      photoAlt: 'Coffee being poured from a jebena into small cups during an Ethiopian coffee ceremony',
      marquee: ['Buna', 'Macchiato', 'Spiced tea', 'Sambusa', 'Fresh pastry', 'Avocado juice', 'Mango splash'],
    },
    about: {
      eyebrow: 'Our story',
      heading: { before: 'More than coffee.', accent: 'A place to connect.' },
      body: 'Every great café experience starts with a warm welcome. Dallas Cafe & Booth brings together the pleasure of good coffee, satisfying snacks, and a comfortable atmosphere where people can relax, connect, and enjoy the moment in the heart of Wolaita Sodo.',
      caption: 'The jebena, at the centre of the table',
      photoAlt: 'A clay jebena on a woven mat beside a small cup of freshly poured coffee',
    },
    menu: {
      eyebrow: 'The menu',
      heading: { before: 'Drinks', accent: '&', after: 'bites' },
      intro: 'A carefully chosen selection of drinks and bites, served with love. All prices in ETB.',
      hoverHint: 'Hover the menu',
      sampleNote: '* Menu items and prices shown are sample data pending owner verification.',
    },
    gallery: {
      eyebrow: 'Gallery',
      heading: { before: 'The Dallas', accent: 'experience' },
      intro: 'A glimpse into our welcoming space and delicious offerings.',
      items: [
        { caption: 'The room', alt: 'Dallas Cafe interior with guests at wooden tables' },
        { caption: 'Macchiato', alt: 'A layered macchiato in a glass cup' },
        { caption: 'Snacks & pastry', alt: 'A plate of sambusa and pastries' },
        { caption: 'Fresh juice', alt: 'A layered avocado and mango juice' },
        { caption: 'Special burger', alt: 'A burger served with fries' },
      ],
    },
    visit: {
      eyebrow: 'Visit us',
      heading: { before: 'Pull up', accent: 'a chair.' },
      where: 'Where',
      hours: 'Hours',
      contact: 'Contact',
      weekdays: 'Mon – Fri',
      weekends: 'Sat – Sun',
      addressSoon: 'Exact address coming soon',
      phoneSoon: 'Phone number coming soon',
      call: 'Call now',
      directions: 'Get directions',
      mapSoon: 'Map coming soon',
      mapSoonBody: 'We are confirming our exact pin in Wolaita Sodo and will add the map here.',
      mapTitle: 'Map showing Dallas Cafe & Booth',
    },
    social: { followUs: 'Follow us' },
    footer: {
      tagline: 'Your favorite spot in Wolaita Sodo for great coffee, delicious bites, and memorable moments.',
      explore: 'Explore',
      findUs: 'Find us',
      rights: 'All rights reserved.',
      credit: 'Designed for Wolaita Sodo.',
    },
  },

  am: {
    meta: {
      title: 'ዳላስ ካፌ እና ቡዝ | ወላይታ ሶዶ',
      description: 'በወላይታ ሶዶ በሚገኘው ዳላስ ካፌ እና ቡዝ ምርጥ ቡና፣ ጣፋጭ መክሰስ እና ሞቅ ያለ አቀባበል ያገኛሉ።',
    },
    nav: {
      story: 'ታሪካችን',
      menu: 'ሜኑ',
      gallery: 'ምስሎች',
      visit: 'ይጎብኙን',
      home: 'መነሻ',
      cta: 'ሜኑውን ይመልከቱ',
      openMenu: 'ማውጫውን ክፈት',
      closeMenu: 'ማውጫውን ዝጋ',
      language: 'ቋንቋ',
    },
    hero: {
      eyebrow: 'ወላይታ ሶዶ፣ ኢትዮጵያ',
      heading: { before: 'ቡና አሁንም', accent: 'ሥነ ሥርዓት', after: 'የሆነበት ቦታ።' },
      intro: 'ምርጥ ቡና፣ ትኩስ መክሰስ እና የተረጋጋ ቆይታ፤ በወላይታ ሶዶ እምብርት በሚገኘው ዳላስ ካፌ እና ቡዝ።',
      primaryCta: 'ሜኑውን ይመልከቱ',
      secondaryCta: 'ካፌውን ያግኙ',
      openDaily: 'በየቀኑ ክፍት',
      openFrom: 'ከጠዋቱ 12:00 ጀምሮ',
      kind: 'ካፌ እና መክሰስ ቤት',
      offer: 'ቡና፣ ጭማቂ እና መክሰስ',
      scroll: 'ወደ ታች',
      photoAlt: 'በኢትዮጵያ የቡና ሥነ ሥርዓት ላይ ቡና ከጀበና ወደ ሲኒዎች ሲቀዳ',
      marquee: ['ቡና', 'ማኪያቶ', 'የቅመም ሻይ', 'ሳምቡሳ', 'ትኩስ ፓስትሪ', 'የአቮካዶ ጭማቂ', 'የማንጎ ጭማቂ'],
    },
    about: {
      eyebrow: 'ታሪካችን',
      heading: { before: 'ከቡና በላይ።', accent: 'የመገናኛ ስፍራ።' },
      body: 'እያንዳንዱ ምርጥ የካፌ ቆይታ በሞቀ አቀባበል ይጀምራል። ዳላስ ካፌ እና ቡዝ ጥሩ ቡናን፣ አርኪ መክሰስን እና ምቹ ድባብን በአንድ ላይ ያቀርባል፤ በወላይታ ሶዶ እምብርት ሰዎች የሚዝናኑበት፣ የሚገናኙበት እና ጊዜያቸውን የሚያጣጥሙበት ስፍራ ነው።',
      caption: 'ጀበና፣ በጠረጴዛው መሃል',
      photoAlt: 'በሰፌድ ላይ የተቀመጠ የሸክላ ጀበና እና አዲስ የተቀዳ ቡና የያዘ ሲኒ',
    },
    menu: {
      eyebrow: 'ሜኑ',
      heading: { before: 'መጠጦች', accent: 'እና', after: 'መክሰስ' },
      intro: 'በጥንቃቄ የተመረጡ መጠጦች እና መክሰሶች፣ በፍቅር የሚቀርቡ። ሁሉም ዋጋዎች በብር ናቸው።',
      hoverHint: 'ዝርዝሩን ይዳስሱ',
      sampleNote: '* የሚታዩት የሜኑ ዝርዝሮች እና ዋጋዎች ናሙና ናቸው፤ በባለቤቱ ገና አልተረጋገጡም።',
    },
    gallery: {
      eyebrow: 'ምስሎች',
      heading: { before: 'የዳላስ', accent: 'ቆይታ' },
      intro: 'ስለ ሞቅ ያለ ስፍራችን እና ጣፋጭ አቅርቦቶቻችን ጥቂት እይታ።',
      items: [
        { caption: 'ቤታችን', alt: 'የዳላስ ካፌ ውስጠኛ ክፍል፣ እንግዶች በእንጨት ጠረጴዛዎች ላይ' },
        { caption: 'ማኪያቶ', alt: 'በብርጭቆ ሲኒ የቀረበ ማኪያቶ' },
        { caption: 'መክሰስ እና ፓስትሪ', alt: 'ሳምቡሳ እና ፓስትሪ የያዘ ሳህን' },
        { caption: 'ትኩስ ጭማቂ', alt: 'የአቮካዶ እና የማንጎ ጭማቂ' },
        { caption: 'ስፔሻል በርገር', alt: 'ከድንች ጥብስ ጋር የቀረበ በርገር' },
      ],
    },
    visit: {
      eyebrow: 'ይጎብኙን',
      heading: { before: 'ይምጡ፣', accent: 'አብረን እንቀመጥ።' },
      where: 'አድራሻ',
      hours: 'የሥራ ሰዓት',
      contact: 'መገናኛ',
      weekdays: 'ሰኞ – ዓርብ',
      weekends: 'ቅዳሜ – እሑድ',
      addressSoon: 'ትክክለኛ አድራሻ በቅርቡ ይገለጻል',
      phoneSoon: 'ስልክ ቁጥር በቅርቡ ይገለጻል',
      call: 'አሁኑኑ ይደውሉ',
      directions: 'አቅጣጫ ያግኙ',
      mapSoon: 'ካርታ በቅርቡ',
      mapSoonBody: 'በወላይታ ሶዶ ያለንበትን ትክክለኛ ቦታ እያረጋገጥን ነው፤ ካርታውን እዚህ እናክላለን።',
      mapTitle: 'ዳላስ ካፌ እና ቡዝን የሚያሳይ ካርታ',
    },
    social: { followUs: 'ይከተሉን' },
    footer: {
      tagline: 'በወላይታ ሶዶ ለምርጥ ቡና፣ ለጣፋጭ መክሰስ እና ለማይረሱ ጊዜያት የሚመርጡት ስፍራ።',
      explore: 'ገጾች',
      findUs: 'ያግኙን',
      rights: 'መብቱ በሕግ የተጠበቀ ነው።',
      credit: 'ለወላይታ ሶዶ የተዘጋጀ።',
    },
  },
};
