"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw, Phone, MapPin } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { formatNaira } from "@/lib/menu-data";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface Order {
  id: string;
  customer_name: string;
  phone: string;
  address: string;
  delivery_area: string | null;
  items: OrderItem[];
  total: number;
  payment_proof_url: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

const STATUS_FLOW = ["pending_payment", "confirmed", "preparing", "delivered"];
const STATUS_LABELS: Record<string, string> = {
  pending_payment: "Awaiting payment check",
  confirmed: "Payment confirmed",
  preparing: "Preparing",
  delivered: "Delivered",
  cancelled: "Cancelled",
};
const STATUS_COLORS: Record<string, string> = {
  pending_payment: "bg-orange-100 text-orange-700",
  confirmed: "bg-blue-100 text-blue-700",
  preparing: "bg-pink-100 text-pink-600",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-choc/10 text-choc/50",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    setOrders((data as Order[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const updateStatus = async (id: string, status: string) => {
    const supabase = createClient();
    await supabase.from("orders").update({ status }).eq("id", id);
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-cream">
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display font-extrabold text-xl text-choc">
            Orders Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={loadOrders}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-cream text-choc/60 hover:text-pink-500"
              aria-label="Refresh"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-choc/60 hover:text-pink-500"
            >
              <LogOut size={16} /> Log out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {loading && orders.length === 0 && (
          <p className="text-choc/40 text-center py-16">Loading orders…</p>
        )}
        {!loading && orders.length === 0 && (
          <p className="text-choc/40 text-center py-16">No orders yet.</p>
        )}

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-5 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <p className="font-display font-bold text-choc">
                    {order.customer_name}
                  </p>
                  <p className="text-xs text-choc/40">
                    {new Date(order.created_at).toLocaleString("en-NG")}
                  </p>
                </div>
                <span
                  className={`text-xs font-display font-bold px-3 py-1 rounded-full ${STATUS_COLORS[order.status] || ""}`}
                >
                  {STATUS_LABELS[order.status] || order.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-choc/60 mb-3">
                <span className="flex items-center gap-1">
                  <Phone size={14} /> {order.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {order.address} ({order.delivery_area})
                </span>
              </div>

              <ul className="text-sm text-choc/70 mb-3 space-y-0.5">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.qty}× {item.name} — {formatNaira(item.price * item.qty)}
                  </li>
                ))}
              </ul>

              {order.notes && (
                <p className="text-sm text-choc/50 italic mb-3">Note: {order.notes}</p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-pink-50">
                <span className="font-display font-extrabold text-lg text-pink-500">
                  {formatNaira(order.total)}
                </span>
                <div className="flex items-center gap-2">
                  {order.payment_proof_url && (
                    <a
                      href={order.payment_proof_url}
                      target="_blank"
                      className="text-xs font-display font-semibold text-green-600 underline"
                    >
                      View payment proof
                    </a>
                  )}
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="text-sm rounded-full border border-pink-100 px-3 py-1.5 font-display font-semibold"
                  >
                    {STATUS_FLOW.map((s) => (
                      <option key={s} value={s}>
                        {STATUS_LABELS[s]}
                      </option>
                    ))}
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
