"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      setError("Wrong email or password. Try again.");
      setLoading(false);
      return;
    }
    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-pop"
      >
        <h1 className="font-script text-3xl text-pink-500 text-center mb-1">
          Nectar & Nosh
        </h1>
        <p className="text-center text-choc/50 text-sm mb-6">Admin dashboard</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-2xl border border-pink-100 px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-2xl border border-pink-100 px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        {error && <p className="text-sm text-pink-600 mb-3">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in…" : "Log In"}
        </Button>
      </form>
    </main>
  );
}
