import Link from "next/link";
import { Phone, Camera, MapPin, Music2 } from "lucide-react";
import { BRAND } from "@/lib/menu-data";

export function Footer() {
  return (
   <footer className="bg-choc text-cream">
  <div className="relative bg-green-600 text-center px-6 pt-14 pb-20">
    <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-3">
      Hungry already? Let&apos;s fix that.
    </h2>
    <p className="text-cream/80 mb-6 max-w-md mx-auto">
      Order now for fast, reliable delivery straight to Magodo &amp; Isheri.
    </p>
    <Link
      href="/menu"
      className="inline-flex items-center justify-center font-display font-bold rounded-full px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white shadow-pop transition-colors"
    >
      Start Your Order
    </Link>
    <svg
      className="absolute bottom-0 left-0 w-full text-choc"
      viewBox="0 0 1440 60"
      fill="currentColor"
      preserveAspectRatio="none"
    >
      <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z" />
    </svg>
  </div>

  <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-3">
       <div>
          <div className="flex items-center gap-1 mb-3">
            <span className="font-script text-2xl text-pink-400">Nectar</span>
            <span className="font-display font-bold text-xl">&</span>
            <span className="font-script text-2xl text-green-400">Nosh</span>
          </div>
          <p className="text-cream/70 text-sm">{BRAND.tagline}</p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-orange-400 mb-3">
            Get in touch
          </h3>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            className="flex items-center gap-2 text-sm text-cream/80 hover:text-pink-400 mb-2"
          >
            <Phone size={16} /> {BRAND.phone}
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            className="flex items-center gap-2 text-sm text-cream/80 hover:text-pink-400 mb-2"
          >
            <Camera size={16} /> @nectarandnosh_
          </a>
          <a
            href={BRAND.tiktok}
            target="_blank"
            className="flex items-center gap-2 text-sm text-cream/80 hover:text-pink-400"
          >
            <Music2 size={16} /> @nectarandnoshlagos
          </a>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-orange-400 mb-3">
            We deliver to
          </h3>
          <p className="flex items-center gap-2 text-sm text-cream/80">
            <MapPin size={16} /> Magodo &amp; Isheri, Lagos
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        Thank you for supporting our business. Your support means everything to us. ♥
      </div>
    </footer>
  );
}
