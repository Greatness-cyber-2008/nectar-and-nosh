-- Nectar & Nosh: orders table
-- Run this in the Supabase SQL editor for your project.

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  address text not null,
  delivery_area text,
  items jsonb not null, -- [{ id, name, price, qty }]
  total integer not null,
  payment_proof_url text,
  status text not null default 'pending_payment', -- pending_payment | confirmed | preparing | delivered | cancelled
  notes text,
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;

-- Anyone (anon) can INSERT an order — customers placing orders aren't logged in.
create policy "Anyone can create an order"
  on public.orders for insert
  to anon
  with check (true);

-- Only authenticated users (Gboy's client, logged into Supabase auth) can read/update orders.
create policy "Authenticated users can view orders"
  on public.orders for select
  to authenticated
  using (true);

create policy "Authenticated users can update orders"
  on public.orders for update
  to authenticated
  using (true);

-- Storage bucket for payment proof screenshots (create via Supabase dashboard: Storage > New bucket "payment-proofs", public read)
