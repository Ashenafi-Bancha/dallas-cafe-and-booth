export type Lang = 'en' | 'am';

// A piece of text in both site languages
export type Localized = Record<Lang, string>;

// Photos live in image-sources/ and are compressed into public/images/ by `npm run images`.
export const photos = {
  avocado_juice: { width: 896, height: 1200 },
  burger: { width: 896, height: 1200 },
  coffee_ceremony: { width: 896, height: 1200 },
  ethiopian_coffee: { width: 896, height: 1200 },
  hero: { width: 1376, height: 768 },
  macchiato: { width: 896, height: 1200 },
  snacks: { width: 896, height: 1200 },
} as const;

export type PhotoName = keyof typeof photos;

export type MenuItem = {
  name: Localized;
  price: string;
  description: Localized;
  photo: PhotoName;
};

export type MenuCategory = {
  category: Localized;
  items: MenuItem[];
};

type SiteConfig = {
  name: Localized;
  shortName: Localized;
  descriptor: Localized;
  city: Localized;
  location: Localized;
  currency: Localized;
  // Leave a contact field as null until the owner confirms it; the page shows "coming soon" instead.
  contact: {
    phone: string | null;
    address: Localized | null;
    email: string | null;
    whatsapp: string | null;
    mapsUrl: string | null;
    mapsEmbedUrl: string | null;
  };
  // The Amharic hours use the Ethiopian clock (6:00 AM is 12:00 in the morning).
  openingHours: { weekdays: Localized; weekends: Localized };
  socials: { facebook: string | null; instagram: string | null; telegram: string | null };
  menuIsSample: boolean;
  menu: MenuCategory[];
};

export const siteConfig: SiteConfig = {
  name: { en: "Dallas Cafe & Booth", am: "ዳላስ ካፌ እና ቡዝ" },
  shortName: { en: "Dallas", am: "ዳላስ" },
  descriptor: { en: "Cafe & Booth", am: "ካፌ እና ቡዝ" },
  city: { en: "Wolaita Sodo", am: "ወላይታ ሶዶ" },
  location: { en: "Wolaita Sodo, South Ethiopia, Ethiopia", am: "ወላይታ ሶዶ፣ ደቡብ ኢትዮጵያ፣ ኢትዮጵያ" },
  currency: { en: "ETB", am: "ብር" },
  contact: {
    phone: null,
    address: null,
    email: null,
    whatsapp: null,
    mapsUrl: null,
    mapsEmbedUrl: null,
  },
  openingHours: {
    weekdays: { en: "6:00 AM – 10:00 PM", am: "ጠዋት 12:00 – ምሽት 4:00" },
    weekends: { en: "6:00 AM – 11:00 PM", am: "ጠዋት 12:00 – ምሽት 5:00" },
  },
  socials: {
    facebook: null,
    instagram: null,
    telegram: null,
  },
  menuIsSample: true,
  menu: [
    {
      category: { en: "Coffee & Hot Drinks", am: "ቡና እና ትኩስ መጠጦች" },
      items: [
        {
          name: { en: "Ethiopian Coffee", am: "የኢትዮጵያ ቡና" },
          price: "25",
          description: { en: "Traditional roasted Ethiopian coffee.", am: "በባህላዊ መንገድ የተቆላ የኢትዮጵያ ቡና።" },
          photo: "ethiopian_coffee",
        },
        {
          name: { en: "Macchiato", am: "ማኪያቶ" },
          price: "30",
          description: { en: "Espresso with a dash of frothy milk.", am: "ኤስፕሬሶ ከጥቂት አረፋማ ወተት ጋር።" },
          photo: "macchiato",
        },
        {
          name: { en: "Spiced Tea", am: "የቅመም ሻይ" },
          price: "20",
          description: { en: "Black tea infused with cardamom and cloves.", am: "በሄል እና በቅርንፉድ የተቀመመ ጥቁር ሻይ።" },
          photo: "macchiato", // placeholder photo
        },
      ],
    },
    {
      category: { en: "Snacks & Bites", am: "መክሰስ" },
      items: [
        {
          name: { en: "Sambusa", am: "ሳምቡሳ" },
          price: "15",
          description: { en: "Crispy pastry filled with spiced lentils.", am: "በቅመም ምስር የተሞላ ጥርት ያለ ሳምቡሳ።" },
          photo: "snacks",
        },
        {
          name: { en: "Fresh Pastry", am: "ትኩስ ፓስትሪ" },
          price: "40",
          description: { en: "Daily baked sweet and savory pastries.", am: "በየቀኑ የሚጋገሩ ጣፋጭ እና ጨዋማ ፓስትሪዎች።" },
          photo: "snacks",
        },
        {
          name: { en: "Special Burger", am: "ስፔሻል በርገር" },
          price: "120",
          description: { en: "Beef burger with local spices.", am: "በአገር ውስጥ ቅመሞች የተዘጋጀ የበሬ ሥጋ በርገር።" },
          photo: "burger",
        },
      ],
    },
    {
      category: { en: "Cold Drinks", am: "ቀዝቃዛ መጠጦች" },
      items: [
        {
          name: { en: "Fresh Avocado Juice", am: "ትኩስ የአቮካዶ ጭማቂ" },
          price: "50",
          description: { en: "Rich and creamy seasonal avocado.", am: "ወፍራምና ለስላሳ የወቅቱ አቮካዶ።" },
          photo: "avocado_juice",
        },
        {
          name: { en: "Mango Splash", am: "የማንጎ ጭማቂ" },
          price: "50",
          description: { en: "Freshly blended local mangoes.", am: "ትኩስ የተፈጨ የአገር ውስጥ ማንጎ።" },
          photo: "avocado_juice", // placeholder photo
        },
      ],
    },
  ],
};
