# Nectar & Nosh — Website

Menu-driven ordering site for Nectar & Nosh (smoothies, juices, milkshakes,
snacks, meals). Customers browse the menu, add to cart, and pay directly to
your Opay account (no Paystack, no third-party fees). You manage incoming
orders from a simple admin dashboard.

Built with Next.js 14, Tailwind, Framer Motion, and Supabase — same stack as
CampusCrack.

## 1. Set up Supabase (5 minutes)

1. Go to https://supabase.com → create a new project (free tier is fine).
2. In the Supabase dashboard, go to **SQL Editor** → paste the contents of
   `supabase/schema.sql` → Run. This creates the `orders` table and security
   rules.
3. Go to **Storage** → **New bucket** → name it `payment-proofs` → make it
   **public**. This is where payment screenshots get uploaded.
4. Go to **Authentication → Users** → **Add user** → create a login for
   yourself (email + password). This is what you'll use to log into
   `/admin` — customers never see this, it's just for you and her.
5. Go to **Project Settings → API** → copy the **Project URL** and
   **anon public key**.

## 2. Add your environment variables

Copy `.env.local.example` to `.env.local` and paste in the values from step 1:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 3. Add her real Opay details

Open `src/lib/menu-data.ts` and find the `opay` block near the bottom —
replace the placeholder account name and number with her real Opay details.

## 4. Run it locally

```
npm install
npm run dev
```

Visit http://localhost:3000 — menu at `/menu`, admin dashboard at `/admin`.

## 5. Deploy to Vercel (free)

1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Add the same two environment variables in Vercel's project settings.
4. Deploy. You'll get a free `.vercel.app` URL to share — she can move to a
   custom domain later once the business scales up.

## How it works

- **`/`** — homepage with hero, category teasers, trust badges
- **`/menu`** — full menu with category tabs and animated add-to-cart
- **`/cart`** — cart → delivery details → Opay payment instructions →
  screenshot upload → order submitted to Supabase
- **`/admin`** — password-protected dashboard listing every order, with a
  status dropdown (awaiting payment → confirmed → preparing → delivered)
- **`/contact`** — phone, WhatsApp, Instagram, TikTok, delivery areas

## What's still a placeholder / to double check

- Opay account name & number (`src/lib/menu-data.ts`)
- Real product photos — currently using emoji + color accents to match the
  flyer's playful energy; can swap in real photos of her drinks later by
  adding an `image` field to each menu item and an `<img>` in `MenuCard`
- Meals category has no fixed menu since her flyer says "check WhatsApp for
  daily menu" — that card links straight to her WhatsApp instead of add-to-cart
