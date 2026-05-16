"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowLeft, Loader2 } from "lucide-react";
import { useDeliver } from "./DeliverContext";

interface DeliverVerifyProps {
  email: string;
}

export function DeliverVerify({ email }: DeliverVerifyProps) {
  const router = useRouter();
  const { setVerifiedEmail } = useDeliver();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || code.length < 4) {
      setError("Please enter a valid verification code");
      return;
    }

    setIsVerifying(true);
    setError(null);

    // In production, this would verify against a backend
    // For demo purposes, accept any 4+ character code
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful verification - in production, this would validate against backend
      // and get the list of assets for this email
      setVerifiedEmail(email);
      
      // Redirect to show available assets (mock asset ID for demo)
      router.push(`/deliver?email=${encodeURIComponent(email)}&asset=1`);
    } catch {
      setError("Verification failed. Please check your code and try again.");
    } finally {
      setIsVerifying(false);
    }
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
        <a 
          href="/deliver" 
          className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Start over
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-20">
        <div className="max-w-md w-full">
          {/* Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E8A020]/10 border border-[#E8A020]/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-[#E8A020]" />
            </div>
            <h1 className="font-display text-3xl font-black text-white mb-3">
              Verify Your Identity
            </h1>
            <p className="font-body text-white/60">
              Enter the unique code we sent to <span className="text-[#E8A020]">{email}</span>
            </p>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase());
                  setError(null);
                }}
                placeholder="Enter your verification code"
                className="w-full bg-[#111827] border border-white/[0.07] rounded-xl py-4 px-6 font-body text-white text-center text-lg tracking-widest placeholder:text-white/30 focus:outline-none focus:border-[#E8A020]/50 transition-colors"
                maxLength={10}
                required
              />
            </div>

            {error && (
              <p className="text-center font-body text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying || code.length < 4}
              className="w-full flex items-center justify-center gap-2 bg-[#E8A020] text-[#080a0f] font-body font-semibold py-4 rounded-xl hover:bg-[#f5c842] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify & Access Project"
              )}
            </button>
          </form>

          {/* Resend Option */}
          <p className="text-center mt-6 font-body text-sm text-white/40">
            Didnt receive a code?{" "}
            <button 
              type="button"
              className="text-[#E8A020] hover:underline"
              onClick={() => {
                // In production, this would trigger a resend
                alert("Code resent! (Demo - check your inbox)");
              }}
            >
              Request new code
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}