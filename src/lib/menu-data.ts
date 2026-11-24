export type MenuCategory =
  | "smoothies"
  | "juices"
  | "milkshakes"
  | "snacks"
  | "meals"
  | "extras"
  | "bowls";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description?: string;
  price: number | null; // null = "see WhatsApp" (Meals)
  emoji: string;
}

export interface CategoryInfo {
  key: MenuCategory;
  label: string;
  tagline: string;
  color: string; // tailwind color token base
}

export const CATEGORIES: CategoryInfo[] = [
  { key: "smoothies", label: "Smoothies", tagline: "Healthy, fresh, delicious", color: "pink" },
  { key: "juices", label: "Fresh Juices", tagline: "Pure, natural, refreshing", color: "orange" },
  { key: "milkshakes", label: "Milkshakes", tagline: "Creamy, thick, irresistible", color: "green" },
  { key: "snacks", label: "Snacks", tagline: "Tasty bites for every craving", color: "orange" },
  { key: "meals", label: "Food Menu", tagline: "Made fresh, served with love", color: "pink" },
  { key: "extras", label: "Extras", tagline: "Add a little more", color: "orange" },
  { key: "bowls", label: "Fresh Bowls", tagline: "Light, wholesome, made for you", color: "green" },
];

export const MENU_ITEMS: MenuItem[] = [
   // Smoothies
  { id: "sm-banana", category: "smoothies", name: "Banana Smoothie", description: "Creamy banana, blended fresh", price: 2500, emoji: "🍌" },
  { id: "sm-watermelon", category: "smoothies", name: "Watermelon Smoothie", description: "Cool, light & refreshing", price: 2000, emoji: "🍉" },
  { id: "sm-mango", category: "smoothies", name: "Mango Smoothie", description: "Tropical mangoes for a smooth & creamy delight", price: 2500, emoji: "🥭" },
  { id: "sm-pineapple", category: "smoothies", name: "Pineapple Smoothie", description: "Sweet & tangy tropical blend", price: 2500, emoji: "🍍" },
  { id: "sm-mixed", category: "smoothies", name: "Mixed Fruit Smoothie", description: "A colourful blend of fresh fruits", price: 3000, emoji: "🍹" },
  { id: "sm-strawberry", category: "smoothies", name: "Strawberry Smoothie", description: "Sweet, fresh strawberries", price: 3500, emoji: "🍓" },
  
  // Fresh juices
  { id: "ju-watermelon", category: "juices", name: "Watermelon Juice", description: "Pure, chilled watermelon", price: 1500, emoji: "🍉" },
  { id: "ju-pineapple", category: "juices", name: "Pineapple Juice", description: "Pure, natural, refreshing", price: 2000, emoji: "🍍" },
  { id: "ju-orange", category: "juices", name: "Orange Juice", description: "Freshly squeezed oranges", price: 2000, emoji: "🍊" },
  { id: "ju-apple", category: "juices", name: "Apple Juice", description: "Crisp, sweet apple", price: 2500, emoji: "🍎" },
  { id: "ju-pineginger", category: "juices", name: "Pineapple & Ginger Juice", description: "Sweet pineapple with a ginger kick", price: 2000, emoji: "🍍" },
  { id: "ju-mixed", category: "juices", name: "Mixed Fruit Juice", description: "A refreshing fruit mix", price: 2500, emoji: "🍹" },
  { id: "ju-green", category: "juices", name: "Green Juice", description: "Fresh & wholesome greens", price: 2000, emoji: "🥬" },
  { id: "ju-ginger", category: "juices", name: "Ginger Shot", description: "A fiery wellness kick", price: 1500, emoji: "🫚" },
  
   // Milkshakes
  { id: "mk-vanilla", category: "milkshakes", name: "Vanilla Milkshake", description: "Creamy, thick, irresistible", price: 2500, emoji: "🍦" },
  { id: "mk-chocolate", category: "milkshakes", name: "Chocolate Milkshake", description: "Rich chocolate bliss", price: 3000, emoji: "🍫" },
  { id: "mk-strawberry", category: "milkshakes", name: "Strawberry Milkshake", description: "Strawberry dream", price: 3000, emoji: "🍓" },
  { id: "mk-banana", category: "milkshakes", name: "Banana Milkshake", description: "Banana cream goodness", price: 2500, emoji: "🍌" },
  { id: "mk-oreo", category: "milkshakes", name: "Oreo Milkshake", description: "Cookies & cream crunch", price: 3500, emoji: "🍪" },
  
  // Snacks
  { id: "sn-doughnut", category: "snacks", name: "Doughnut", description: "Soft, sweet & freshly made", price: 1000, emoji: "🍩" },
  { id: "sn-meatpie", category: "snacks", name: "Meatpie", description: "Flaky pastry, savoury filling", price: 1500, emoji: "🥧" },
  { id: "sn-chickenpie", category: "snacks", name: "Chicken Pie", description: "Flaky pastry with chicken filling", price: 1500, emoji: "🥧" },
  { id: "sn-sausageroll", category: "snacks", name: "Sausage Roll", description: "Golden pastry-wrapped sausage", price: 1500, emoji: "🌭" },
  { id: "sn-fishroll", category: "snacks", name: "Fish Roll", description: "Flaky roll with fish filling", price: 1500, emoji: "🐟" },
  
   // Fresh bowls
  { id: "bw-parfait", category: "bowls", name: "Parfait", description: "Granola, yogurt & berries", price: 3500, emoji: "🍓" },
  { id: "bw-fruitsalad", category: "bowls", name: "Fruit Salad", description: "Fresh mixed fruit", price: 3000, emoji: "🍉" },

  // Food menu
  { id: "ml-friedrice-chicken", category: "meals", name: "Fried Rice & Chicken", description: "Fried rice served with chicken", price: 5000, emoji: "🍛" },
  { id: "ml-jollof-chicken", category: "meals", name: "Jollof Rice & Chicken", description: "Smoky party jollof with chicken", price: 4500, emoji: "🍛" },
  { id: "ml-friedrice-turkey", category: "meals", name: "Fried Rice & Turkey", description: "Fried rice served with turkey", price: 8500, emoji: "🍛" },
  { id: "ml-jollof-turkey", category: "meals", name: "Jollof Rice & Turkey", description: "Smoky party jollof with turkey", price: 8000, emoji: "🍛" },
  { id: "ml-native-chicken", category: "meals", name: "Native Rice & Chicken", description: "Rich native rice with chicken", price: 5500, emoji: "🍚" },
  { id: "ml-white-stew-chicken", category: "meals", name: "White Rice, Stew & Chicken", description: "White rice, tomato stew and chicken", price: 4500, emoji: "🍚" },
  { id: "ml-native-pasta-chicken", category: "meals", name: "Native Pasta & Chicken", description: "Native-style pasta with chicken", price: 4500, emoji: "🍝" },
  { id: "ml-spag-chicken", category: "meals", name: "Stir Fried Spaghetti & Chicken", description: "Stir-fried spaghetti with chicken", price: 4000, emoji: "🍝" },
  { id: "ml-spag-turkey", category: "meals", name: "Stir Fried Spaghetti & Turkey", description: "Stir-fried spaghetti with turkey", price: 7000, emoji: "🍝" },
  { id: "ml-yam-fish", category: "meals", name: "Fried Yam & Fish Sauce", description: "Golden fried yam with fish sauce", price: 4500, emoji: "🍠" },
  { id: "ml-potato-fish", category: "meals", name: "Fried Potato & Fish Sauce", description: "Fried potato with fish sauce", price: 4000, emoji: "🍟" },
  { id: "ml-plantain", category: "meals", name: "Plantain", description: "Sweet fried plantain", price: 1500, emoji: "🍌" },
  { id: "ml-coleslaw", category: "meals", name: "Coleslaw", description: "Fresh, creamy coleslaw", price: 1000, emoji: "🥗" },
  
  // Extras
  { id: "ex-chicken", category: "extras", name: "Extra Chicken", description: "Add a piece of chicken", price: 2500, emoji: "🍗" },
  { id: "ex-turkey", category: "extras", name: "Extra Turkey", description: "Add a piece of turkey", price: 4000, emoji: "🍗" },
  { id: "ex-plantain", category: "extras", name: "Extra Plantain", description: "Add more plantain", price: 1500, emoji: "🍌" },
  { id: "ex-coleslaw", category: "extras", name: "Extra Coleslaw", description: "Add more coleslaw", price: 1000, emoji: "🥗" },
  { id: "ex-potato", category: "extras", name: "Fried Potato (Extra Portion)", description: "An extra portion of fried potato", price: 1000, emoji: "🍟" },
];

export const BRAND = {
  name: "Nectar & Nosh",
  tagline: "Refreshing Sips, Delicious Bites",
  phone: "08100352203",
  whatsapp: "https://wa.me/2348100352203",
  instagram: "https://instagram.com/nectarandnosh_",
  tiktok: "https://tiktok.com/@nectarandnosh",
  deliveryAreas: ["Magodo", "Isheri", "Lagos"],
  badges: [
    "Fresh & Natural Ingredients",
    "Prepared Fresh Daily",
    "Made With Love",
    "Fast, Reliable & Safe Delivery",
  ],
  // TODO: replace with her real Opay details before launch
  opay: {
    accountName: "Oloore Mariam Teniola",
    accountNumber: "8100352203",
    bankName: "Opay",
  },
};

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}
