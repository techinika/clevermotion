"use client";

import { useState } from "react";
import { Icon, fileIcon, fileColor, fileBg } from "./Icons";
import { sleep } from "./MockData";
import { Modal } from "@/components/ui/Modal";

interface StepUnlockedProps {
  asset: any;
  email: string;
}

export function StepUnlocked({ asset, email }: StepUnlockedProps) {
  const [downloading, setDownloading] = useState<Record<string, boolean>>({});
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadingFile, setDownloadingFile] = useState("");

  const handleDownload = async (file: any) => {
    setDownloadingFile(file.name);
    setDownloading(d => ({ ...d, [file.id]: true }));
    await sleep(1500);
    setDownloading(d => ({ ...d, [file.id]: false }));
    setShowDownloadModal(true);
  };

  const videoCount = asset.files.filter((f: any) => f.type === "video").length;

  return (
    <div className="anim-unlock scanline-wrap max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8 anim-fadeup">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{ background: "rgba(52,211,153,.1)", border: "1px solid rgba(52,211,153,.25)" }}>
          <span className="text-emerald-400"><Icon.Check /></span>
          <span className="font-mono-cm text-[0.6rem] tracking-[0.16em] uppercase text-emerald-400">Access Granted</span>
        </div>
        <span className="font-mono-cm text-[0.58rem] tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,235,.25)" }}>
          {email}
        </span>
      </div>

      <div className="rounded-2xl overflow-hidden mb-6 relative anim-fadeup d-1"
        style={{ background: asset.gradient, border: "1px solid rgba(255,255,255,.07)" }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")" }} />
        <div className="relative px-8 py-10">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(229,9,20,.75)" }}>{asset.category} · {asset.year}</p>
              <h1 className="font-display text-4xl font-black text-white leading-tight mb-1">{asset.title}</h1>
              <p className="font-body text-base" style={{ color: "rgba(245,240,235,.55)" }}>{asset.subtitle}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="font-mono-cm text-[0.58rem] tracking-[0.14em] uppercase mb-1" style={{ color: "rgba(245,240,235,.3)" }}>Client</p>
              <p className="font-body text-sm font-semibold text-white">{asset.client}</p>
            </div>
          </div>

          <div className="flex gap-8 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
            {[
              ["Files", asset.files.length],
              ["Videos", videoCount],
              ["Delivered", asset.delivered],
              ["Expires", asset.expires],
            ].map(([l, v]) => (
              <div key={l}>
                <p className="font-mono-cm text-[0.54rem] tracking-[0.16em] uppercase mb-1" style={{ color: "rgba(245,240,235,.3)" }}>{l}</p>
                <p className="font-body text-sm font-semibold text-white">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl p-5 mb-6 flex gap-4 anim-fadeup d-2"
        style={{ background: "rgba(229,9,20,.05)", border: "1px solid rgba(229,9,20,.15)" }}>
        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
          style={{ background: "rgba(229,9,20,.15)" }}>
          <span className="font-display text-sm font-bold" style={{ color: "#E50914" }}>C</span>
        </div>
        <div>
          <p className="font-mono-cm text-[0.58rem] tracking-[0.16em] uppercase mb-1.5" style={{ color: "rgba(229,9,20,.6)" }}>
            A note from Cllevermotion
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,235,.65)" }}>
            {asset.message}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg mb-6 anim-fadeup d-2"
        style={{ background: "rgba(251,191,36,.05)", border: "1px solid rgba(251,191,36,.15)" }}>
        <span style={{ color: "#fbbf24" }}><Icon.Calendar /></span>
        <p className="font-body text-[0.82rem]" style={{ color: "rgba(245,240,235,.5)" }}>
          These links are active until <strong style={{ color: "#fbbf24" }}>{asset.expires}</strong>.
          Download all files before this date.
        </p>
      </div>

      <div className="anim-fadeup d-3">
        <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(229,9,20,.7)" }}>
          Deliverables · {asset.files.length} files
        </p>

        <div className="flex flex-col gap-2">
          {asset.files.map((file: any, i: number) => {
            const FileIcon = fileIcon(file.type);
            const isDown = downloading[file.id];
            return (
              <div
                key={file.id}
                className="file-row flex items-center gap-4 px-5 py-4 rounded-xl anim-fadeup"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.06)",
                  animationDelay: `${0.32 + i * 0.06}s`
                }}>
                <div className={`w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center border ${fileBg(file.type)}`}>
                  <span className={fileColor(file.type)}><FileIcon /></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-mono-cm text-[0.72rem] tracking-wide text-white truncate">{file.name}</p>
                    {file.duration && (
                      <span className="flex items-center gap-1 font-mono-cm text-[0.56rem] tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(167,139,250,.1)", color: "#a78bfa", border: "1px solid rgba(167,139,250,.2)" }}>
                        <Icon.Play />{file.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <p className="font-body text-[0.78rem]" style={{ color: "rgba(245,240,235,.4)" }}>{file.desc}</p>
                    <span className="font-mono-cm text-[0.56rem] tracking-wider" style={{ color: "rgba(245,240,235,.25)" }}>·</span>
                    <p className="font-mono-cm text-[0.58rem] tracking-wide" style={{ color: "rgba(245,240,235,.3)" }}>{file.size}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(file)}
                  disabled={isDown}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg font-body text-xs font-semibold transition-all"
                  style={{
                    background: isDown ? "rgba(229,9,20,.15)" : "rgba(229,9,20,.12)",
                    color: isDown ? "rgba(229,9,20,.5)" : "#E50914",
                    border: `1px solid ${isDown ? "rgba(229,9,20,.1)" : "rgba(229,9,20,.2)"}`,
                    cursor: isDown ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={e => { if (!isDown) e.currentTarget.style.background = "rgba(229,9,20,.22)"; }}
                  onMouseLeave={e => { if (!isDown) e.currentTarget.style.background = "rgba(229,9,20,.12)"; }}>
                  {isDown ? <><Icon.Spinner /> Preparing…</> : <><Icon.Download /> Download</>}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 anim-fadeup d-5">
        <button onClick={() => asset.files.forEach((f: any) => handleDownload(f))} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-body font-semibold text-sm transition-all" style={{ background: "#E50914", color: "#080a0f" }} onMouseEnter={e => e.currentTarget.style.background="#FF3B3B"} onMouseLeave={e => e.currentTarget.style.background="#E50914"}><Icon.Download /><span>Download All Files</span></button>
        <p className="font-mono-cm text-[0.58rem] tracking-[0.1em] text-center mt-2.5" style={{ color: "rgba(245,240,235,.2)" }}>
          Questions about your delivery? Email hello@cllevermotion.com
        </p>
      </div>

      <Modal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        type="success"
        title="Download Started"
        message={`Download initiated for: ${downloadingFile}\n\n(In production this would stream the file via a signed URL)`}
      />
    </div>
  );
}