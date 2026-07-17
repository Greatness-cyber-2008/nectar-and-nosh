import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BadgesStrip } from "@/components/home/badges-strip";
import { FloatingFruit } from "@/components/home/floating-fruit";
import { CATEGORIES,  BRAND } from "@/lib/menu-data";

const CATEGORY_EMOJI: Record<string, string> = {
  smoothies: "🍓",
  juices: "🍊",
  milkshakes: "🍫",
  snacks: "🍿",
  meals: "🍛",
  bowls: "🥣",
};


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-splash-pink px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 text-center overflow-hidden">
          <FloatingFruit />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-display font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              NEW BUSINESS ALERT
            </span>
            <h1 className="font-script text-5xl sm:text-7xl leading-tight">
              <span className="text-pink-500">Nectar</span>{" "}
              <span className="text-choc font-display font-bold text-4xl sm:text-6xl align-middle">
                &
              </span>{" "}
              <span className="text-green-600">Nosh</span>
            </h1>
            <p className="font-display text-lg sm:text-xl text-choc/80 mt-3">
              {BRAND.tagline}
            </p>
            <p className="mt-5 text-choc/70 max-w-xl mx-auto">
              Smoothies · Milkshakes · Fresh Juices · Snacks · Meals — made fresh
              with quality ingredients, served with love, delivered to your door
              in Magodo &amp; Isheri, Lagos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/menu" variant="primary" className="text-base px-8 py-4">
                 Order Now
              </Button> 
            </div>
          </div>
        </section>

        {/* Category teasers */}
<section className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center text-choc mb-2">
    What are you craving?
  </h2>
  <p className="text-center text-choc/60 mb-10">
    Tap a category to see flavors &amp; prices
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5">
    {CATEGORIES.map((cat) => (
      <Link
        key={cat.key}
        href={`/menu?category=${cat.key}`}
        className="group flex flex-col items-center text-center gap-3 bg-white rounded-3xl px-4 py-7 shadow-card hover:shadow-pop hover:-translate-y-1 transition-all duration-200"
      >
        <span className="text-4xl group-hover:animate-pop">
          {CATEGORY_EMOJI[cat.key]}
        </span>
        <span className="font-display font-bold text-choc">
          {cat.label}
        </span>
      </Link>
    ))}
  </div>
</section>
            {/* Badges */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <BadgesStrip />
        </section>

              </main>
      <Footer />
    </>
  );
}
