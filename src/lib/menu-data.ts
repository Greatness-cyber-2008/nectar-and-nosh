export type MenuCategory =
  | "smoothies"
  | "juices"
  | "milkshakes"
  | "snacks"
  | "meals";

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
  { key: "meals", label: "Meals", tagline: "Made fresh, served with love", color: "pink" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Smoothies
  { id: "sm-mango", category: "smoothies", name: "Mango Smoothie", description: "Tropical mangoes blended smooth", price: 3000, emoji: "🥭" },
  { id: "sm-strawberry", category: "smoothies", name: "Strawberry Smoothie", description: "Sweet strawberries blended to perfection", price: 3500, emoji: "🍓" },
  { id: "sm-banana", category: "smoothies", name: "Banana Smoothie", description: "Creamy bananas for natural energy", price: 2500, emoji: "🍌" },
  { id: "sm-mixed", category: "smoothies", name: "Mixed Fruit Smoothie", description: "A delicious mix of seasonal fruits", price: 3500, emoji: "🍇" },
  { id: "sm-pineapple", category: "smoothies", name: "Pineapple Smoothie", description: "Refreshing pineapple, tropical twist", price: 3000, emoji: "🍍" },

  // Fresh Juices (50cl)
  { id: "ju-orange", category: "juices", name: "Orange Juice", description: "50cl, freshly squeezed", price: 2000, emoji: "🍊" },
  { id: "ju-pineapple", category: "juices", name: "Pineapple Juice", description: "50cl, pure & natural", price: 2000, emoji: "🍍" },
  { id: "ju-watermelon", category: "juices", name: "Watermelon Juice", description: "50cl, chilled & refreshing", price: 2000, emoji: "🍉" },
  { id: "ju-carrot", category: "juices", name: "Carrot Juice", description: "50cl, packed with goodness", price: 2500, emoji: "🥕" },
  { id: "ju-mixed", category: "juices", name: "Mixed Fruit Juice", description: "50cl, a fruity blend", price: 2500, emoji: "🍹" },

  // Milkshakes
  { id: "mk-chocolate", category: "milkshakes", name: "Chocolate Milkshake", description: "Rich chocolate bliss", price: 3500, emoji: "🍫" },
  { id: "mk-strawberry", category: "milkshakes", name: "Strawberry Milkshake", description: "Thick & fruity strawberry dream", price: 3500, emoji: "🍓" },
  { id: "mk-vanilla", category: "milkshakes", name: "Vanilla Milkshake", description: "Classic vanilla delight", price: 3500, emoji: "🍦" },
  { id: "mk-oreo", category: "milkshakes", name: "Oreo Milkshake", description: "Cookies & cream, extra thick", price: 4000, emoji: "🍪" },

  // Snacks
  { id: "sn-meatpie", category: "snacks", name: "Meat Pie", description: "Freshly baked, flaky pastry", price: 1000, emoji: "🥟" },
  { id: "sn-sausageroll", category: "snacks", name: "Sausage Roll", description: "Golden and savory", price: 800, emoji: "🌭" },
  { id: "sn-doughnut", category: "snacks", name: "Doughnut", description: "Soft & sweet", price: 700, emoji: "🍩" },
  { id: "sn-popcorn", category: "snacks", name: "Popcorn", description: "Perfectly popped", price: 1000, emoji: "🍿" },
  { id: "sn-fries", category: "snacks", name: "French Fries", description: "Crispy golden fries", price: 2000, emoji: "🍟" },

  // Meals (no fixed price — see WhatsApp)
  { id: "ml-daily", category: "meals", name: "Daily Meal Menu", description: "Delicious & satisfying meals, made fresh — check today's options on WhatsApp", price: null, emoji: "🍛" },
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
