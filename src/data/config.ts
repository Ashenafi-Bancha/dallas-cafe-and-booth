export type Lang = 'en' | 'am';

// A piece of text in both site languages
export type Localized = Record<Lang, string>;

// Photos live in image-sources/ and are compressed into public/images/ by `npm run images`.
// Stock photo credits are listed in image-sources/CREDITS.md.
export const photos = {
  ambo_water: { width: 900, height: 1200 },
  avocado: { width: 900, height: 1200 },
  avocado_juice: { width: 896, height: 1200 },
  beef_tibs: { width: 900, height: 1200 },
  burger: { width: 896, height: 1200 },
  burger_double: { width: 900, height: 1200 },
  burger_tuna: { width: 900, height: 1200 },
  burger_veg: { width: 900, height: 1200 },
  cafe_day: { width: 1086, height: 1448 },
  cafe_night: { width: 1086, height: 1448 },
  chechebsa: { width: 900, height: 1200 },
  club_sandwich: { width: 900, height: 1200 },
  coffee_ceremony: { width: 896, height: 1200 },
  cotton_candy: { width: 900, height: 1200 },
  dallas_special: { width: 900, height: 1200 },
  egg_firfir: { width: 900, height: 1200 },
  egg_meat: { width: 900, height: 1200 },
  egg_sandwich: { width: 900, height: 1200 },
  egg_silsi: { width: 900, height: 1200 },
  ethiopian_coffee: { width: 896, height: 1200 },
  foil: { width: 900, height: 1200 },
  fries: { width: 900, height: 1200 },
  hot_milk: { width: 900, height: 1200 },
  ice_cream: { width: 900, height: 1200 },
  juice_cup: { width: 900, height: 1200 },
  macchiato: { width: 896, height: 1200 },
  mango: { width: 900, height: 1200 },
  orange_tea: { width: 900, height: 1200 },
  papaya: { width: 900, height: 1200 },
  pasta: { width: 900, height: 1200 },
  pineapple: { width: 900, height: 1200 },
  pizza_beef: { width: 900, height: 1200 },
  pizza_box: { width: 900, height: 1200 },
  pizza_margherita: { width: 900, height: 1200 },
  pizza_special: { width: 900, height: 1200 },
  pizza_tuna: { width: 900, height: 1200 },
  pizza_veg: { width: 900, height: 1200 },
  play_castle: { width: 1088, height: 1445 },
  play_seesaw: { width: 1160, height: 1356 },
  play_slides: { width: 1086, height: 1448 },
  play_trampoline: { width: 1086, height: 1449 },
  quanta_firfir: { width: 900, height: 675 },
  shawarma: { width: 900, height: 1200 },
  shawarma_veg: { width: 900, height: 1200 },
  soft_drinks: { width: 900, height: 1200 },
  special_juice: { width: 900, height: 1200 },
  special_tea: { width: 900, height: 1200 },
  tea: { width: 900, height: 1200 },
  water_1l: { width: 900, height: 1200 },
  water_2l: { width: 900, height: 1200 },
  water_half: { width: 900, height: 1200 },
} as const;

export type PhotoName = keyof typeof photos;

export type MenuItem = {
  name: Localized;
  price: string;
  description?: Localized;
  // null shows a plain icon tile, for items with no fitting photo
  photo: PhotoName | null;
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
    // The same number in international form, used for the tap-to-call link
    phoneDial: string | null;
    address: Localized | null;
    email: string | null;
    whatsapp: string | null;
    mapsUrl: string | null;
    mapsEmbedUrl: string | null;
  };
  // The Amharic hours use the Ethiopian clock (6:00 AM is 12:00 in the morning).
  openingHours: { weekdays: Localized; weekends: Localized };
  socials: { instagram: string | null; tiktok: string | null; facebook: string | null; telegram: string | null };
  // Networks to show as a non-clickable placeholder until their link is added above
  socialPlaceholders: (keyof SiteConfig['socials'])[];
  // Shown in the footer credit line
  developer: { phone: string; phoneDial: string };
  menuIsSample: boolean;
  menu: MenuCategory[];
};

export const siteConfig: SiteConfig = {
  // Spelled as on the signboard and logo
  name: { en: "Dallas Café & Booth", am: "ዳላስ ካፌ እና ቡዝ" },
  shortName: { en: "Dallas Café", am: "ዳላስ ካፌ" },
  descriptor: { en: "& Booth", am: "እና ቡዝ" },
  city: { en: "Wolaita Sodo", am: "ወላይታ ሶዶ" },
  location: { en: "Wolaita Sodo, South Ethiopia, Ethiopia", am: "ወላይታ ሶዶ፣ ደቡብ ኢትዮጵያ፣ ኢትዮጵያ" },
  currency: { en: "ETB", am: "ብር" },
  contact: {
    phone: "0965 55 15 42",
    phoneDial: "+251965551542",
    address: null,
    email: null,
    whatsapp: null,
    // Pin at 6.824523, 37.751629
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=6.824523,37.751629",
    mapsEmbedUrl: "https://www.google.com/maps?q=6.824523,37.751629&z=16&output=embed",
  },
  openingHours: {
    weekdays: { en: "6:00 AM – 10:00 PM", am: "ጠዋት 12:00 – ምሽት 4:00" },
    weekends: { en: "6:00 AM – 11:00 PM", am: "ጠዋት 12:00 – ምሽት 5:00" },
  },
  socials: {
    instagram: "https://www.instagram.com/dallascafeandbooth",
    tiktok: "https://www.tiktok.com/@dallascafeandbooth",
    facebook: null,
    telegram: null,
  },
  socialPlaceholders: ["facebook"],
  developer: { phone: "0938103340", phoneDial: "+251938103340" },
  menuIsSample: false,
  // Transcribed from the cafe's printed menu. Amharic names follow the printed spelling.
  menu: [
    {
      category: { en: "Pizza & Shawarma", am: "የፒዛ ዓይነቶች" },
      items: [
        { name: { en: "Special Pizza", am: "እስፔሻል ፒዛ" }, price: "550", photo: "pizza_special" },
        { name: { en: "Tuna Pizza", am: "ቱና ፒዛ" }, price: "580", photo: "pizza_tuna" },
        { name: { en: "Vegetable Pizza", am: "አትክልት ፒዛ" }, price: "350", photo: "pizza_veg" },
        { name: { en: "Margherita Pizza", am: "ማርጋሬታ ፒዛ" }, price: "450", photo: "pizza_margherita" },
        { name: { en: "Beef Pizza", am: "ቢፍ ፒዛ" }, price: "400", photo: "pizza_beef" },
        { name: { en: "Special Shawarma", am: "እስፔሻል ሸዋርማ" }, price: "450", photo: "shawarma" },
        { name: { en: "Vegetable Shawarma", am: "አትክልት ሸዋርማ" }, price: "300", photo: "shawarma_veg" },
      ],
    },
    {
      category: { en: "Burgers", am: "በርገሮች" },
      items: [
        { name: { en: "Special Double Burger", am: "እስፔሻል ዳብል በርገር" }, price: "520", photo: "burger_double" },
        { name: { en: "Special Burger", am: "እስፔሻል በርገር" }, price: "400", photo: "burger" },
        { name: { en: "Tuna Burger", am: "ቱና በርገር" }, price: "475", photo: "burger_tuna" },
        { name: { en: "Vegetable Burger", am: "አትክልት በርገር" }, price: "250", photo: "burger_veg" },
      ],
    },
    {
      category: { en: "Sandwiches", am: "ሳንዱች" },
      items: [
        { name: { en: "Egg Sandwich", am: "እንቁላል ሳንዱች" }, price: "275", photo: "egg_sandwich" },
        { name: { en: "Special Sandwich", am: "እስፔሻል ሳንዱች" }, price: "300", photo: "club_sandwich" },
        { name: { en: "Special Chechebsa", am: "እስፔሻል ጨጨብሳ" }, price: "275", photo: "chechebsa" },
        { name: { en: "Chips", am: "ቺፕስ" }, price: "170", photo: "fries" },
      ],
    },
    {
      category: { en: "Meals", am: "የምግብ ዓይነቶች" },
      items: [
        { name: { en: "Dallas Special", am: "ዳላስ እስፔሻል" }, price: "600", photo: "dallas_special" },
        { name: { en: "Quanta Firfir", am: "ቋንጣ ፍርፍር" }, price: "300", photo: "quanta_firfir" },
        { name: { en: "Egg Firfir", am: "እንቁላል ፍርፍር" }, price: "250", photo: "egg_firfir" },
        { name: { en: "Tefersho", am: "ተፈርሾ" }, price: "300", photo: null },
        { name: { en: "Beef Tibs", am: "የበሬ ጥብስ" }, price: "400", photo: "beef_tibs" },
        { name: { en: "Egg with Meat", am: "እንቁላል በስጋ" }, price: "400", photo: "egg_meat" },
        { name: { en: "Egg Silsi", am: "እንቁላል ስልስ" }, price: "300", photo: "egg_silsi" },
        { name: { en: "Special Pasta", am: "እስፔሻል ፓስታ" }, price: "290", photo: "pasta" },
      ],
    },
    {
      category: { en: "Sweet Treats", am: "ጣፋጮች" },
      items: [
        { name: { en: "Ice Cream", am: "አይስ ክሬም" }, price: "150", photo: "ice_cream" },
        { name: { en: "Cotton Candy", am: "የጥጥ ከረሜላ" }, price: "50", photo: "cotton_candy" },
      ],
    },
    {
      category: { en: "Hot Drinks", am: "ትኩስ ነገር" },
      items: [
        { name: { en: "Jebena Coffee", am: "የጀበና ቡና" }, price: "30", photo: "ethiopian_coffee" },
        { name: { en: "Macchiato", am: "ማኪያቶ" }, price: "50", photo: "macchiato" },
        { name: { en: "Milk", am: "ወተት" }, price: "60", photo: "hot_milk" },
        { name: { en: "Tea", am: "ሻይ" }, price: "25", photo: "tea" },
        { name: { en: "Orange Tea", am: "ብርቱካን ሻይ" }, price: "60", photo: "orange_tea" },
        { name: { en: "Special Tea", am: "እስፔሻል ሻይ" }, price: "80", photo: "special_tea" },
      ],
    },
    {
      category: { en: "Juices", am: "ጁስ / ጭማቂዎች" },
      items: [
        { name: { en: "Special Juice", am: "እስፔሻል ጁስ" }, price: "150", photo: "special_juice" },
        { name: { en: "Mango Juice", am: "ማንጎ ጁስ" }, price: "100", photo: "mango" },
        { name: { en: "Pineapple Juice", am: "አናናስ ጁስ" }, price: "100", photo: "pineapple" },
        { name: { en: "Avocado Juice", am: "አቡካዶ ጁስ" }, price: "100", photo: "avocado" },
        { name: { en: "Papaya Juice", am: "ፓፓያ ጁስ" }, price: "100", photo: "papaya" },
      ],
    },
    {
      category: { en: "Soft Drinks & Water", am: "ለስላሳ መጠጦች" },
      items: [
        { name: { en: "Ambo Water", am: "አምቦ ውሃ" }, price: "60", photo: "ambo_water" },
        { name: { en: "Soft Drink", am: "ለስላሳ" }, price: "60", photo: "soft_drinks" },
        { name: { en: "Water ½ Litre", am: "ውሃ ግማሽ ሊትር" }, price: "40", photo: "water_half" },
        { name: { en: "Water 1 Litre", am: "ውሃ 1 ሊትር" }, price: "60", photo: "water_1l" },
        { name: { en: "Water 2 Litres", am: "ውሃ 2 ሊትር" }, price: "80", photo: "water_2l" },
      ],
    },
    {
      category: { en: "Takeaway Packaging", am: "ለመውሰጃ ማሸጊያ" },
      items: [
        { name: { en: "Foil", am: "ፎይል" }, price: "40", photo: "foil" },
        { name: { en: "Juice Cup", am: "የጁስ ካፕ" }, price: "25", photo: "juice_cup" },
        { name: { en: "Pizza Box", am: "የፒዛ ቦክስ" }, price: "40", photo: "pizza_box" },
      ],
    },
  ],
};
