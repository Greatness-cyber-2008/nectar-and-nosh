import { Phone, Camera, Music2, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/menu-data";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-14 min-h-[60vh]">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-choc mb-3 text-center">
          Let&apos;s Talk
        </h1>
        <p className="text-center text-choc/60 mb-10">
          Questions, custom orders, or today&apos;s meal menu — reach us here.
        </p>

        <div className="grid gap-4">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-pop transition-shadow"
          >
            <span className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <MessageCircle size={22} />
            </span>
            <div>
              <p className="font-display font-bold text-choc">WhatsApp</p>
              <p className="text-sm text-choc/60">{BRAND.phone}</p>
            </div>
          </a>

          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-pop transition-shadow"
          >
            <span className="w-12 h-12 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">
              <Phone size={22} />
            </span>
            <div>
              <p className="font-display font-bold text-choc">Call Us</p>
              <p className="text-sm text-choc/60">{BRAND.phone}</p>
            </div>
          </a>

          <a
            href={BRAND.instagram}
            target="_blank"
            className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-pop transition-shadow"
          >
            <span className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
              <Camera size={22} />
            </span>
            <div>
              <p className="font-display font-bold text-choc">Instagram</p>
              <p className="text-sm text-choc/60">@nectarandnosh_</p>
            </div>
          </a>

          <a
            href={BRAND.tiktok}
            target="_blank"
            className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-pop transition-shadow"
          >
            <span className="w-12 h-12 rounded-full bg-choc/10 text-choc flex items-center justify-center">
              <Music2 size={22} />
            </span>
            <div>
              <p className="font-display font-bold text-choc">TikTok</p>
              <p className="text-sm text-choc/60">@nectarandnosh</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-green-600 text-cream rounded-2xl p-5 shadow-card">
            <span className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
              <MapPin size={22} />
            </span>
            <div>
              <p className="font-display font-bold">We Deliver To</p>
              <p className="text-sm text-cream/80">Magodo &amp; Isheri, Lagos</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button href="/menu">Browse the Menu</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
