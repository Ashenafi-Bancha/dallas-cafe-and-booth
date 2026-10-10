export type Lang = 'en' | 'am';

// A piece of text in both site languages
export type Localized = Record<Lang, string>;

// Photos live in image-sources/ and are compressed into public/images/ by `npm run images`.
// Stock photo credits are listed in image-sources/CREDITS.md.
export const photos = {
  avocado: { width: 900, height: 1200 },
  avocado_juice: { width: 896, height: 1200 },
  bombolino: { width: 900, height: 1200 },
  burger: { width: 896, height: 1200 },
  cake: { width: 900, height: 1200 },
  cappuccino: { width: 900, height: 1200 },
  club_sandwich: { width: 900, height: 1200 },
  coffee_ceremony: { width: 896, height: 1200 },
  coffee_milk: { width: 900, height: 1200 },
  egg_sandwich: { width: 900, height: 1200 },
  ethiopian_coffee: { width: 896, height: 1200 },
  fries: { width: 900, height: 1200 },
  ginger_tea: { width: 900, height: 1200 },
  hero: { width: 1376, height: 768 },
  hot_milk: { width: 900, height: 1200 },
  iced_coffee: { width: 900, height: 1200 },
  latte: { width: 900, height: 1200 },
  macchiato: { width: 896, height: 1200 },
  mango: { width: 900, height: 1200 },
  milk_tea: { width: 900, height: 1200 },
  papaya: { width: 900, height: 1200 },
  peanut_tea: { width: 900, height: 1200 },
  pineapple: { width: 900, height: 1200 },
  sambusa: { width: 900, height: 1200 },
  snacks: { width: 896, height: 1200 },
  soft_drinks: { width: 900, height: 1200 },
  special_juice: { width: 900, height: 1200 },
  special_tea: { width: 900, height: 1200 },
  spiced_tea: { width: 900, height: 1200 },
  spris: { width: 900, height: 1200 },
  tea: { width: 900, height: 1200 },
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
      category: { en: "Coffee", am: "ቡና" },
      items: [
        { name: { en: "Ethiopian Coffee", am: "የኢትዮጵያ ቡና" }, price: "50", description: { en: "Traditional roasted Ethiopian coffee.", am: "በባህላዊ መንገድ የተቆላ የኢትዮጵያ ቡና።" }, photo: "ethiopian_coffee" },
        { name: { en: "Spris", am: "ስፕሪስ" }, price: "55", description: { en: "Half coffee, half tea, poured in layers.", am: "ግማሽ ቡና፣ ግማሽ ሻይ በንብርብር የተቀዳ።" }, photo: "spris" },
        { name: { en: "Macchiato", am: "ማኪያቶ" }, price: "60", description: { en: "Espresso with a dash of frothy milk.", am: "ኤስፕሬሶ ከጥቂት አረፋማ ወተት ጋር።" }, photo: "macchiato" },
        { name: { en: "Coffee with Milk", am: "ቡና በወተት" }, price: "65", description: { en: "Strong coffee topped up with hot milk.", am: "ጠንካራ ቡና ከትኩስ ወተት ጋር።" }, photo: "coffee_milk" },
        { name: { en: "Cappuccino", am: "ካፑቺኖ" }, price: "70", description: { en: "Espresso under a thick cap of milk foam.", am: "ኤስፕሬሶ ከወፍራም የወተት አረፋ ጋር።" }, photo: "cappuccino" },
        { name: { en: "Café Latte", am: "ካፌ ላቴ" }, price: "75", description: { en: "Espresso with plenty of steamed milk.", am: "ኤስፕሬሶ ከብዙ የተፈላ ወተት ጋር።" }, photo: "latte" },
      ],
    },
    {
      category: { en: "Tea & Milk", am: "ሻይ እና ወተት" },
      items: [
        { name: { en: "Tea", am: "ሻይ" }, price: "40", description: { en: "Classic black tea, served hot.", am: "ትኩስ ጥቁር ሻይ።" }, photo: "tea" },
        { name: { en: "Spiced Tea", am: "የቅመም ሻይ" }, price: "55", description: { en: "Black tea infused with cardamom and cloves.", am: "በሄል እና በቅርንፉድ የተቀመመ ጥቁር ሻይ።" }, photo: "spiced_tea" },
        { name: { en: "Ginger Tea", am: "የዝንጅብል ሻይ" }, price: "55", description: { en: "Fresh ginger steeped in hot tea.", am: "በትኩስ ዝንጅብል የተፈላ ሻይ።" }, photo: "ginger_tea" },
        { name: { en: "Special Tea", am: "ስፔሻል ሻይ" }, price: "60", description: { en: "Black tea with ginger, cinnamon and a slice of lemon.", am: "ከዝንጅብል፣ ከቀረፋ እና ከሎሚ ጋር የሚቀርብ ሻይ።" }, photo: "special_tea" },
        { name: { en: "Tea with Milk", am: "ሻይ በወተት" }, price: "60", description: { en: "Black tea with hot milk.", am: "ጥቁር ሻይ ከትኩስ ወተት ጋር።" }, photo: "milk_tea" },
        { name: { en: "Hot Milk", am: "ትኩስ ወተት" }, price: "60", description: { en: "Steamed fresh milk.", am: "የተፈላ ትኩስ ወተት።" }, photo: "hot_milk" },
        { name: { en: "Peanut Tea", am: "የለውዝ ሻይ" }, price: "70", description: { en: "A warm, creamy drink of ground peanuts.", am: "ከተፈጨ ለውዝ የሚዘጋጅ ሞቅ ያለ መጠጥ።" }, photo: "peanut_tea" },
      ],
    },
    {
      category: { en: "Snacks & Bites", am: "መክሰስ" },
      items: [
        { name: { en: "Sambusa", am: "ሳምቡሳ" }, price: "55", description: { en: "Crispy pastry filled with spiced lentils.", am: "በቅመም ምስር የተሞላ ጥርት ያለ ሳምቡሳ።" }, photo: "sambusa" },
        { name: { en: "Bombolino", am: "ቦምቦሊኖ" }, price: "60", description: { en: "Soft fried doughnut dusted with sugar.", am: "በስኳር የተነሰነሰ ለስላሳ የተጠበሰ ዶናት።" }, photo: "bombolino" },
        { name: { en: "Fresh Pastry", am: "ትኩስ ፓስትሪ" }, price: "70", description: { en: "Daily baked sweet and savory pastries.", am: "በየቀኑ የሚጋገሩ ጣፋጭ እና ጨዋማ ፓስትሪዎች።" }, photo: "snacks" },
        { name: { en: "Cake Slice", am: "ኬክ" }, price: "90", description: { en: "A slice of the day's cake.", am: "የዕለቱ ኬክ ቁራጭ።" }, photo: "cake" },
        { name: { en: "French Fries", am: "የድንች ጥብስ" }, price: "120", description: { en: "Crispy golden fries.", am: "ጥርት ያለ ወርቃማ የድንች ጥብስ።" }, photo: "fries" },
        { name: { en: "Egg Sandwich", am: "የእንቁላል ሳንድዊች" }, price: "150", description: { en: "Scrambled egg, tomato and onion in fresh bread.", am: "የእንቁላል ፍርፍር፣ ቲማቲም እና ሽንኩርት በትኩስ ዳቦ።" }, photo: "egg_sandwich" },
        { name: { en: "Club Sandwich", am: "ክለብ ሳንድዊች" }, price: "250", description: { en: "Triple-layer sandwich served with fries.", am: "ባለ ሦስት ድርብ ሳንድዊች ከድንች ጥብስ ጋር።" }, photo: "club_sandwich" },
        { name: { en: "Special Burger", am: "ስፔሻል በርገር" }, price: "300", description: { en: "Beef burger with local spices.", am: "በአገር ውስጥ ቅመሞች የተዘጋጀ የበሬ ሥጋ በርገር።" }, photo: "burger" },
      ],
    },
    {
      category: { en: "Juices & Cold Drinks", am: "ጭማቂ እና ቀዝቃዛ መጠጦች" },
      items: [
        { name: { en: "Soft Drinks", am: "ለስላሳ መጠጦች" }, price: "60", description: { en: "Chilled bottled soft drinks.", am: "የቀዘቀዙ የታሸጉ ለስላሳ መጠጦች።" }, photo: "soft_drinks" },
        { name: { en: "Iced Coffee", am: "ቀዝቃዛ ቡና" }, price: "90", description: { en: "Chilled coffee over ice.", am: "በበረዶ የሚቀርብ ቀዝቃዛ ቡና።" }, photo: "iced_coffee" },
        { name: { en: "Fresh Avocado Juice", am: "ትኩስ የአቮካዶ ጭማቂ" }, price: "100", description: { en: "Rich and creamy seasonal avocado.", am: "ወፍራምና ለስላሳ የወቅቱ አቮካዶ።" }, photo: "avocado" },
        { name: { en: "Mango Splash", am: "የማንጎ ጭማቂ" }, price: "100", description: { en: "Freshly blended local mangoes.", am: "ትኩስ የተፈጨ የአገር ውስጥ ማንጎ።" }, photo: "mango" },
        { name: { en: "Papaya Juice", am: "የፓፓያ ጭማቂ" }, price: "100", description: { en: "Smooth, ripe papaya.", am: "ለስላሳ የበሰለ ፓፓያ።" }, photo: "papaya" },
        { name: { en: "Pineapple Juice", am: "የአናናስ ጭማቂ" }, price: "110", description: { en: "Fresh pineapple, lightly sweet.", am: "ትኩስ አናናስ፣ በትንሹ ጣፋጭ።" }, photo: "pineapple" },
        { name: { en: "Mixed Juice", am: "ድብልቅ ጭማቂ" }, price: "120", description: { en: "Avocado, mango and papaya in layers.", am: "አቮካዶ፣ ማንጎ እና ፓፓያ በንብርብር።" }, photo: "avocado_juice" },
        { name: { en: "Special Juice", am: "ስፔሻል ጭማቂ" }, price: "150", description: { en: "Layered mixed juice topped with fresh fruit.", am: "በትኩስ ፍራፍሬ የተሸፈነ ድብልቅ ጭማቂ።" }, photo: "special_juice" },
      ],
    },
  ],
};
