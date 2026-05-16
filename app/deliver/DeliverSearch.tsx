"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Package, Mail, ArrowRight } from "lucide-react";

export function DeliverSearch() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSearching(true);
    // In production, this would validate against a backend
    // For now, just redirect to verify page
    setTimeout(() => {
      router.push(`/deliver?email=${encodeURIComponent(email)}`);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.07]">
        <a href="/" className="font-display text-xl font-bold text-white flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="2" y="2" width="9" height="22" rx="1" fill="#E8A020" />
            <rect x="15" y="2" width="9" height="14" rx="1" fill="rgba(232,160,32,0.38)" />
          </svg>
          Clléver<span className="text-[#E8A020]">motion</span>
        </a>
        <a href="/" className="font-body text-sm text-white/50 hover:text-white transition-colors">
          Back to Home
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-20">
        <div className="max-w-xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E8A020]/10 border border-[#E8A020]/20 mb-6">
              <Package className="w-8 h-8 text-[#E8A020]" />
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-4">
              Project Delivery
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed">
              Access your delivered project assets securely. Enter your email to get started.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#111827] border border-white/[0.07] rounded-xl py-4 pl-14 pr-6 font-body text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8A020]/50 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !email.trim()}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#E8A020] text-[#080a0f] font-body font-semibold py-4 rounded-xl hover:bg-[#f5c842] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Searching...
                </span>
              ) : (
                <>
                  Find My Project
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Instructions */}
          <div className="mt-12 p-6 rounded-xl bg-[#111827]/50 border border-white/[0.07]">
            <h3 className="font-mono-cm text-[0.65rem] tracking-[0.2em] uppercase text-[#E8A020] mb-4">
              How it works
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8A020]/10 text-[#E8A020] text-xs font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="font-body text-sm text-white font-medium">Enter your email</p>
                  <p className="font-body text-xs text-white/40 mt-0.5">Use the email we sent your delivery notification to</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8A020]/10 text-[#E8A020] text-xs font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="font-body text-sm text-white font-medium">Verify your identity</p>
                  <p className="font-body text-xs text-white/40 mt-0.5">Enter the unique code we provided with your delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8A020]/10 text-[#E8A020] text-xs font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="font-body text-sm text-white font-medium">Access & download</p>
                  <p className="font-body text-xs text-white/40 mt-0.5">View your project assets and download what you need</p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center mt-8 font-body text-sm text-white/30">
            Need help? <a href="#contact" className="text-[#E8A020] hover:underline">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}