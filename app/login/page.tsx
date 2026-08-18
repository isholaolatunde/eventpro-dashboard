"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, DEMO_EMAIL, DEMO_PASSWORD } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) router.push("/dashboard");
  }, [user, isLoading, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }
    const ok = login(email.trim(), password);
    if (!ok) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/dashboard");
  };

  if (isLoading || user) return null;

  return (
    <div className="flex min-h-screen">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-slate-900 p-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">EventPro</span>
        </div>

        {/* Hero copy */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Manage your events <br />
            <span className="text-indigo-400">with confidence.</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Everything you need to plan, sell, and track events — all in one place.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "Real-time ticket sales & revenue tracking",
              "Customer management and insights",
              "Powerful analytics and reports",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-600">© 2026 EventPro. All rights reserved.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-6 lg:w-1/2">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800">EventPro</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-800">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to your dashboard to continue.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 ring-1 ring-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 rounded-xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Demo credentials</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p><span className="font-medium">Email:</span> {DEMO_EMAIL}</p>
              <p><span className="font-medium">Password:</span> {DEMO_PASSWORD}</p>
            </div>
            <button
              type="button"
              onClick={() => { setEmail(DEMO_EMAIL); setPassword(DEMO_PASSWORD); }}
              className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-xs font-medium text-indigo-600 ring-1 ring-slate-200 transition hover:bg-indigo-50"
            >
              Fill demo credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}