import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";

export const metadata: Metadata = {
  title: "Nectar & Nosh | Refreshing Sips, Delicious Bites",
  description:
    "Fresh smoothies, juices, milkshakes, snacks & meals — made fresh daily, delivered to Magodo & Isheri, Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Baloo+2:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-cream text-choc antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
