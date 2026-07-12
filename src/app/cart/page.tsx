"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Check, ShoppingBag, Upload } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CartLine } from "@/components/cart/cart-line";
import { useCart } from "@/components/cart/cart-context";
import { BRAND, formatNaira } from "@/lib/menu-data";
import { createClient } from "@/lib/supabase/client";

type Step = "cart" | "details" | "pay" | "done";

export default function CartPage() {
  const { lines, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    area: "Magodo",
    notes: "",
  });

  const copyAccount = () => {
    navigator.clipboard.writeText(BRAND.opay.accountNumber.replace(/\D/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const submitOrder = async () => {
    setSubmitting(true);
    setError("");
    try {
      const supabase = createClient();
      let paymentProofUrl: string | null = null;

      if (proofFile) {
        const fileName = `${Date.now()}-${proofFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("payment-proofs")
          .upload(fileName, proofFile);
        if (uploadError) throw uploadError;
        const { data: publicUrl } = supabase.storage
          .from("payment-proofs")
          .getPublicUrl(uploadData.path);
        paymentProofUrl = publicUrl.publicUrl;
      }

      const { error: insertError } = await supabase.from("orders").insert({
        customer_name: form.name,
        phone: form.phone,
        address: form.address,
        delivery_area: form.area,
        items: lines,
        total,
        payment_proof_url: paymentProofUrl,
        status: "pending_payment",
        notes: form.notes || null,
      });
      if (insertError) throw insertError;

      setStep("done");
      clearCart();
    } catch (e) {
      console.error(e);
      setError(
        "Couldn't submit your order automatically — no worries, just send your order details directly on WhatsApp and we'll sort you out."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (lines.length === 0 && step !== "done") {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center min-h-[50vh]">
          <ShoppingBag size={48} className="mx-auto text-pink-300 mb-4" />
          <h1 className="font-display font-extrabold text-2xl text-choc mb-2">
            Your cart is empty
          </h1>
          <p className="text-choc/60 mb-6">
            Add something delicious from the menu to get started.
          </p>
          <Button href="/menu">Browse Menu</Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-10 min-h-[60vh]">
        <h1 className="font-display font-extrabold text-3xl text-choc mb-8">
          {step === "done" ? "Order received! 🎉" : "Your Order"}
        </h1>

        <AnimatePresence mode="wait">
          {step === "cart" && (
            <motion.div key="cart" exit={{ opacity: 0 }} className="space-y-4">
              {lines.map((line) => (
                <CartLine key={line.id} line={line} />
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                <span className="font-display font-bold text-lg text-choc">Total</span>
                <span className="font-display font-extrabold text-2xl text-pink-500">
                  {formatNaira(total)}
                </span>
              </div>
              <Button
                onClick={() => setStep("details")}
                className="w-full mt-4 text-base py-4"
              >
                Continue to Delivery Details
              </Button>
            </motion.div>
          )}

          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <input
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="Magodo">Magodo</option>
                <option value="Isheri">Isheri</option>
              </select>
              <textarea
                placeholder="Full delivery address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={3}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <textarea
                placeholder="Any notes (optional) — e.g. less sugar, extra straws"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={2}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <Button
                onClick={() => setStep("pay")}
                disabled={!form.name || !form.phone || !form.address}
                className="w-full text-base py-4"
              >
                Continue to Payment
              </Button>
            </motion.div>
          )}

          {step === "pay" && (
            <motion.div
              key="pay"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-3xl p-6 text-center">
                <p className="font-display font-semibold text-choc/70 mb-1">
                  Transfer {formatNaira(total)} to
                </p>
                <p className="font-display font-extrabold text-2xl text-green-700">
                  {BRAND.opay.accountName}
                </p>
                <button
                  onClick={copyAccount}
                  className="mt-2 inline-flex items-center gap-2 font-display font-bold text-xl text-choc bg-white rounded-full px-5 py-2 shadow-card"
                >
                  {BRAND.opay.accountNumber}
                  {copied ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} className="text-choc/40" />
                  )}
                </button>
                <p className="text-sm text-choc/50 mt-2">{BRAND.opay.bankName}</p>
              </div>

              <label className="block">
                <span className="font-display font-semibold text-sm text-choc/70 mb-2 flex items-center gap-2">
                  <Upload size={16} /> Upload payment screenshot (optional but recommended)
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProofFile(e.target.files?.[0] || null)}
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm"
                />
              </label>

              {error && (
                <p className="text-sm text-pink-600 bg-pink-50 rounded-xl p-3">{error}</p>
              )}

              <Button
                onClick={submitOrder}
                disabled={submitting}
                className="w-full text-base py-4"
              >
                {submitting ? "Submitting…" : "I&apos;ve Paid — Submit Order"}
              </Button>
              <p className="text-xs text-center text-choc/40">
                We&apos;ll confirm your payment and start preparing your order.
              </p>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white rounded-3xl p-10 shadow-card"
            >
              <span className="text-6xl block mb-4">🎉</span>
              <p className="text-choc/70 mb-6">
                Thanks, {form.name.split(" ")[0] || "friend"}! We&apos;ve received your
                order and will confirm your payment shortly. We&apos;ll reach out on{" "}
                {form.phone} once it&apos;s on the way.
              </p>
              <Button href="/menu">Order Something Else</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
