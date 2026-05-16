"use client";

import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { OTPInput } from "./OTPInput";
import { verifyCode } from "./MockData";

interface StepVerifyProps {
  email: string;
  asset: any;
  onVerified: () => void;
  onBack: () => void;
}

export function StepVerify({ email, asset, onVerified, onBack }: StepVerifyProps) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const MAX_ATTEMPTS = 5;

  const handleVerify = async () => {
    if (code.length < 6) return;
    setLoading(true);
    setError(false);
    const ok = await verifyCode(email, asset.id, code);
    setLoading(false);
    if (ok) {
      onVerified();
    } else {
      setError(true);
      setAttempts(a => a + 1);
      setCode("");
    }
  };

  useEffect(() => {
    if (code.length === 6) handleVerify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <div className="anim-fadein max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 font-mono-cm text-[0.62rem] tracking-[0.15em] uppercase mb-8 transition-colors" style={{ color: "rgba(245,240,235,.35)" }} onMouseEnter={e => e.currentTarget.style.color = "#E8A020"} onMouseLeave={e => e.currentTarget.style.color = "rgba(245,240,235,.35)"}><Icon.ArrowLeft /><span>Back</span></button>

      <div className="flex items-center gap-3 mb-8 p-3 rounded-xl anim-fadeup"
        style={{ background: "#111827", border: "1px solid rgba(255,255,255,.07)" }}>
        <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ background: asset.gradient }} />
        <div>
          <p className="font-body text-sm font-semibold text-white">{asset.title}</p>
          <p className="font-mono-cm text-[0.58rem] tracking-[0.12em] uppercase mt-0.5" style={{ color: "rgba(232,160,32,.6)" }}>
            {asset.client} · {asset.id.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="text-center mb-8 anim-fadeup d-1">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 relative"
          style={{ background: "rgba(232,160,32,0.1)", border: "1px solid rgba(232,160,32,0.2)" }}>
          <span className="text-[#E8A020]"><Icon.Lock /></span>
        </div>
        <h2 className="font-display text-3xl font-black text-white mb-2">Enter Access Code</h2>
        <p className="font-body text-sm" style={{ color: "rgba(245,240,235,.45)" }}>
          Enter the 6-character code from your delivery email.
        </p>
        <p className="font-mono-cm text-[0.6rem] tracking-[0.12em] mt-1" style={{ color: "rgba(232,160,32,.55)" }}>
          Delivering to: {email}
        </p>
      </div>

      <div className={`anim-fadeup d-2 mb-4 ${error ? "anim-shake" : ""}`} key={error ? "e" : "n"}>
        <OTPInput length={6} value={code} onChange={v => { setCode(v); setError(false); }} error={error} />
      </div>

      {error && (
        <div className="flex items-start gap-2 text-sm px-4 py-3 rounded-lg mb-4 anim-fadein"
          style={{ background: "rgba(238,85,85,.08)", border: "1px solid rgba(238,85,85,.2)", color: "#f87171" }}>
          <span className="mt-0.5 flex-shrink-0"><Icon.Info /></span>
          <span>
            Incorrect code. {attempts < MAX_ATTEMPTS
              ? `${MAX_ATTEMPTS - attempts} attempt${MAX_ATTEMPTS - attempts !== 1 ? "s" : ""} remaining.`
              : "Too many attempts. Please contact hello@cllevermotion.com for help."}
          </span>
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center gap-2.5 py-3 font-body text-sm anim-fadein" style={{ color: "rgba(245,240,235,.5)" }}>
          <Icon.Spinner /> Verifying...
        </div>
      )}

      <button
        onClick={handleVerify}
        disabled={code.length < 6 || loading || attempts >= MAX_ATTEMPTS}
        className="anim-fadeup d-3 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-body font-semibold text-sm mt-4 transition-all"
        style={{
          background: code.length === 6 && !loading && attempts < MAX_ATTEMPTS ? "#E8A020" : "rgba(232,160,32,.25)",
          color: code.length === 6 && !loading && attempts < MAX_ATTEMPTS ? "#080a0f" : "rgba(245,240,235,.3)",
          cursor: code.length === 6 && !loading && attempts < MAX_ATTEMPTS ? "pointer" : "not-allowed"
        }}>
        <Icon.Unlock /> Unlock Project
      </button>

      <p className="font-mono-cm text-[0.58rem] tracking-wide text-center mt-5" style={{ color: "rgba(245,240,235,.2)" }}>
        Can't find your code? Check spam or email hello@cllevermotion.com
      </p>
    </div>
  );
}