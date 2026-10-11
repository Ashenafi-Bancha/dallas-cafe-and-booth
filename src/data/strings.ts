import type { Lang } from './config';

// A heading with one phrase picked out in the accent colour
type Heading = { before: string; accent: string; after?: string };

type Strings = {
  meta: { title: string; description: string };
  nav: { story: string; menu: string; play: string; gallery: string; visit: string; home: string; cta: string; openMenu: string; closeMenu: string; language: string };
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
    scrollExplore: string;
    photoAlt: string;
    slideLabel: string;
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
  play: {
    eyebrow: string;
    heading: Heading;
    body: string;
    note: string;
    items: { caption: string; alt: string }[];
  };
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
  social: { followUs: string; soon: string };
  footer: { tagline: string; explore: string; findUs: string; rights: string; credit: string };
};

export const strings: Record<Lang, Strings> = {
  en: {
    meta: {
      title: 'Dallas Café & Booth | Wolaita Sodo',
      description: 'Discover great coffee, delicious bites, and a welcoming atmosphere at Dallas Café & Booth in Wolaita Sodo.',
    },
    nav: {
      story: 'Our Story',
      menu: 'Menu',
      play: 'Kids',
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
      heading: { before: 'Coffee for you.', accent: 'Play for the kids.' },
      intro: 'Great coffee, fresh bites and a garden where the children can play, at Dallas Café & Booth in the heart of Wolaita Sodo.',
      primaryCta: 'Explore the menu',
      secondaryCta: 'Find the café',
      openDaily: 'Open daily',
      openFrom: 'From 6:00 AM',
      kind: 'Café & snack house',
      offer: 'Coffee, juice & bites',
      scroll: 'Scroll',
      scrollExplore: 'Scroll to explore',
      photoAlt: 'The Dallas Café garden pavilion lit up at night, with guests at the tables',
      slideLabel: 'Show photo',
      marquee: ['Jebena coffee', 'Macchiato', 'Special tea', 'Pizza', 'Burgers', 'Shawarma', 'Fresh juice', 'Ice cream'],
    },
    about: {
      eyebrow: 'Our story',
      heading: { before: 'More than coffee.', accent: 'A place to connect.' },
      body: 'Every great café experience starts with a warm welcome. Dallas Café & Booth brings together the pleasure of good coffee, satisfying snacks, and a comfortable atmosphere where people can relax, connect, and enjoy the moment in the heart of Wolaita Sodo.',
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
    play: {
      eyebrow: 'For the little ones',
      heading: { before: 'Room to', accent: 'play.' },
      body: 'While you enjoy your coffee, the children have a garden of their own. Our grassy outdoor play area has an inflatable bouncy castle with its own slide, a netted trampoline, a seesaw, and a climbing frame with tube and wave slides. Bring the whole family: the grown-ups get an unhurried table, and the kids get space to run.',
      note: 'Children should be supervised by a parent or guardian while they play.',
      items: [
        { caption: 'Bouncy castle', alt: 'A colourful inflatable bouncy castle with a slide, set on the grass' },
        { caption: 'Trampoline', alt: 'A round trampoline with a safety net on the lawn' },
        { caption: 'Slides & climbing frame', alt: 'A climbing frame with a tube slide and a yellow wave slide' },
        { caption: 'Seesaw', alt: 'A yellow four-seat seesaw with red seats on the grass' },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      heading: { before: 'The Dallas', accent: 'experience' },
      intro: 'A glimpse into our welcoming space and delicious offerings.',
      items: [
        { caption: 'The garden pavilion', alt: 'The Dallas Café pavilion with teal and white curtains, set in a garden under a blue sky' },
        { caption: 'Buna', alt: 'Coffee being poured from a jebena into small cups during an Ethiopian coffee ceremony' },
        { caption: 'Macchiato', alt: 'A layered macchiato in a glass cup' },
        { caption: 'Pizza', alt: 'A slice of pizza being lifted, with melted cheese stretching' },
        { caption: 'Fresh juice', alt: 'A layered avocado and mango juice' },
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
      mapTitle: 'Map showing Dallas Café & Booth',
    },
    social: { followUs: 'Follow us', soon: 'link coming soon' },
    footer: {
      tagline: 'Your favorite spot in Wolaita Sodo for great coffee, delicious bites, and memorable moments.',
      explore: 'Explore',
      findUs: 'Find us',
      rights: 'All rights reserved.',
      credit: 'Developed by Ashenafi Bancha',
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
      play: 'ለልጆች',
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
      heading: { before: 'ቡና ለእርስዎ።', accent: 'ጨዋታ ለልጆችዎ።' },
      intro: 'ምርጥ ቡና፣ ትኩስ መክሰስ እና ልጆች የሚጫወቱበት የአትክልት ስፍራ፤ በወላይታ ሶዶ እምብርት በሚገኘው ዳላስ ካፌ እና ቡዝ።',
      primaryCta: 'ሜኑውን ይመልከቱ',
      secondaryCta: 'ካፌውን ያግኙ',
      openDaily: 'በየቀኑ ክፍት',
      openFrom: 'ከጠዋቱ 12:00 ጀምሮ',
      kind: 'ካፌ እና መክሰስ ቤት',
      offer: 'ቡና፣ ጭማቂ እና መክሰስ',
      scroll: 'ወደ ታች',
      scrollExplore: 'ለማየት ወደ ታች ይሸብልሉ',
      photoAlt: 'በምሽት መብራት የደመቀው የዳላስ ካፌ የአትክልት ስፍራ ዳስ፣ እንግዶች በጠረጴዛዎች ላይ',
      slideLabel: 'ምስል አሳይ',
      marquee: ['የጀበና ቡና', 'ማኪያቶ', 'እስፔሻል ሻይ', 'ፒዛ', 'በርገር', 'ሸዋርማ', 'ጁስ', 'አይስ ክሬም'],
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
    play: {
      eyebrow: 'ለትንንሾቹ',
      heading: { before: 'የልጆች', accent: 'መጫወቻ ስፍራ።' },
      body: 'እርስዎ ቡናዎን ሲያጣጥሙ፣ ልጆችዎ የራሳቸው የመጫወቻ ሜዳ አላቸው። በሣር የተሸፈነው የውጪ መጫወቻ ስፍራችን ሸርተቴ ያለው በአየር የሚነፋ መዝለያ ቤት፣ በመረብ የተከበበ ትራምፖሊን፣ የሚዛን መጫወቻ እና የተለያዩ ሸርተቴዎች ያሉት መወጣጫ አለው። ቤተሰብዎን ሙሉ ይዘው ይምጡ፤ ትልልቆቹ በእርጋታ ይቀመጣሉ፣ ልጆቹ ደግሞ የሚቦርቁበት ቦታ ያገኛሉ።',
      note: 'ልጆች በሚጫወቱበት ጊዜ የወላጅ ወይም የአሳዳጊ ክትትል ያስፈልጋል።',
      items: [
        { caption: 'የአየር መዝለያ ቤት', alt: 'በሣር ላይ የተቀመጠ ሸርተቴ ያለው ባለቀለም የአየር መዝለያ ቤት' },
        { caption: 'ትራምፖሊን', alt: 'በሣር ሜዳ ላይ የተቀመጠ የመከላከያ መረብ ያለው ክብ ትራምፖሊን' },
        { caption: 'ሸርተቴዎች እና መወጣጫ', alt: 'የቱቦ ሸርተቴ እና ቢጫ ሸርተቴ ያለው የልጆች መወጣጫ' },
        { caption: 'የሚዛን መጫወቻ', alt: 'በሣር ላይ የተቀመጠ ቀይ መቀመጫዎች ያሉት ቢጫ የሚዛን መጫወቻ' },
      ],
    },
    gallery: {
      eyebrow: 'ምስሎች',
      heading: { before: 'የዳላስ', accent: 'ቆይታ' },
      intro: 'ስለ ሞቅ ያለ ስፍራችን እና ጣፋጭ አቅርቦቶቻችን ጥቂት እይታ።',
      items: [
        { caption: 'የአትክልት ስፍራው ዳስ', alt: 'በሰማያዊ ሰማይ ስር በአትክልት ስፍራ ውስጥ የሚገኘው ባለ መጋረጃ የዳላስ ካፌ ዳስ' },
        { caption: 'ቡና', alt: 'በኢትዮጵያ የቡና ሥነ ሥርዓት ላይ ቡና ከጀበና ወደ ሲኒዎች ሲቀዳ' },
        { caption: 'ማኪያቶ', alt: 'በብርጭቆ ሲኒ የቀረበ ማኪያቶ' },
        { caption: 'ፒዛ', alt: 'አይብ እየተሳበ የሚነሳ የፒዛ ቁራጭ' },
        { caption: 'ትኩስ ጭማቂ', alt: 'የአቮካዶ እና የማንጎ ጭማቂ' },
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
    social: { followUs: 'ይከተሉን', soon: 'ሊንኩ በቅርቡ ይጨመራል' },
    footer: {
      tagline: 'በወላይታ ሶዶ ለምርጥ ቡና፣ ለጣፋጭ መክሰስ እና ለማይረሱ ጊዜያት የሚመርጡት ስፍራ።',
      explore: 'ገጾች',
      findUs: 'ያግኙን',
      rights: 'መብቱ በሕግ የተጠበቀ ነው።',
      credit: 'የተሠራው በአሸናፊ ባንጫ',
    },
  },
};
