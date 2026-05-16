"use client";

import { useState, useEffect } from "react";
import { Icon, fileIcon, fileColor, fileBg } from "./Icons";
import { lookupAsset } from "./MockData";

interface StepSearchProps {
  initialEmail: string;
  initialAsset: string;
  onFound: (result: { email: string; asset: any }) => void;
}

export function StepSearch({ initialEmail, initialAsset, onFound }: StepSearchProps) {
  const [email, setEmail] = useState(initialEmail || "");
  const [assetId, setAssetId] = useState(initialAsset || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialEmail && initialAsset) {
      handleSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError("");
    if (!email.trim()) return setError("Please enter your email address.");
    if (!assetId.trim()) return setError("Please enter the Project ID from your delivery notification.");
    setLoading(true);
    const asset = await lookupAsset(assetId.trim().toLowerCase());
    setLoading(false);
    if (!asset) return setError("No project found with that ID. Check your delivery email for the correct Project ID.");
    onFound({ email: email.trim().toLowerCase(), asset });
  };

  return (
    <div className="anim-fadein max-w-xl mx-auto">
      <div className="text-center mb-10 anim-fadeup">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 relative"
          style={{ background: "rgba(232,160,32,0.1)", border: "1px solid rgba(232,160,32,0.2)" }}>
          <span className="text-[#E8A020]"><Icon.Mail /></span>
          <span className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(232,160,32,.3)", animation: "pulse-ring 2.5s ease-out infinite" }} />
        </div>
        <h2 className="font-display text-3xl font-black text-white mb-3">Access Your Delivery</h2>
        <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,235,.5)" }}>
          Enter the email address you provided during your project brief,
          along with the Project ID from your delivery notification email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="anim-fadeup d-1">
          <label className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase block mb-2" style={{ color: "rgba(232,160,32,.7)" }}>
            Your Email Address
          </label>
          <input
            type="email"
            className={`cm-input ${error && !email ? "error" : ""}`}
            placeholder="you@organization.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
          />
        </div>

        <div className="anim-fadeup d-2">
          <label className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase block mb-2" style={{ color: "rgba(232,160,32,.7)" }}>
            Project ID
          </label>
          <input
            type="text"
            className={`cm-input font-mono-cm uppercase tracking-widest ${error && !assetId ? "error" : ""}`}
            placeholder="e.g. PROJ-001"
            value={assetId}
            onChange={e => { setAssetId(e.target.value); setError(""); }}
          />
          <p className="font-mono-cm text-[0.58rem] tracking-wide mt-1.5" style={{ color: "rgba(245,240,235,.28)" }}>
            Found in your delivery email from hello@cllevermotion.com
          </p>
        </div>

        {error && (
          <div className="anim-shake flex items-start gap-2.5 text-sm px-4 py-3 rounded-lg"
            style={{ background: "rgba(238,85,85,.08)", border: "1px solid rgba(238,85,85,.2)", color: "#f87171" }}>
            <span className="mt-0.5 flex-shrink-0"><Icon.Info /></span>
            {error}
          </div>
        )}

        <button type="submit" disabled={loading}
          className="anim-fadeup d-3 flex items-center justify-center gap-2.5 w-full py-3.5 rounded-lg font-body font-semibold text-sm transition-all mt-1"
          style={{ background: loading ? "rgba(232,160,32,.5)" : "#E8A020", color: "#080a0f", cursor: loading ? "not-allowed" : "pointer" }}>
          {loading ? <><Icon.Spinner /> Looking up your project…</> : <><Icon.Arrow /> Continue to Verification</>}
        </button>
      </form>

      <div className="mt-10 rounded-xl p-5 anim-fadeup d-4"
        style={{ background: "#111827", border: "1px solid rgba(255,255,255,.07)" }}>
        <p className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(232,160,32,.6)" }}>How delivery works</p>
        <div className="flex flex-col gap-4">
          {[
            ["01", "We email you", "When your project is ready, you'll receive a delivery notification with your Project ID and a unique access code."],
            ["02", "Verify your identity", "Enter your email + Project ID here, then confirm with your 6-character access code."],
            ["03", "Download your files", "All your deliverables are available for download for 30 days after delivery."],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-4">
              <div className="font-mono-cm text-[0.8rem] font-bold flex-shrink-0 mt-0.5" style={{ color: "rgba(232,160,32,.4)" }}>{n}</div>
              <div>
                <p className="font-body text-sm font-semibold text-white mb-0.5">{t}</p>
                <p className="font-body text-[0.82rem] leading-relaxed" style={{ color: "rgba(245,240,235,.42)" }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="font-mono-cm text-[0.58rem] tracking-wide text-center mt-6" style={{ color: "rgba(245,240,235,.22)" }}>
        Need help? Email us at hello@cllevermotion.com
      </p>
    </div>
  );
}