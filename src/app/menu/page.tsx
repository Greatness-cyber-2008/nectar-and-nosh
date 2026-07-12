import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MenuClient } from "./menu-client";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-10 min-h-[60vh]">
        <Suspense fallback={<div className="text-choc/50">Loading menu…</div>}>
          <MenuClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
