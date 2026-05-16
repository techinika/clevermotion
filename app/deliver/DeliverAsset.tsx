"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Download, Play, Image, FileText, ArrowLeft, CheckCircle2, 
  Copy, ExternalLink, Share2, Package, MonitorPlay
} from "lucide-react";
import { useDeliver } from "./DeliverContext";
import { PROJECTS } from "@/components/data/projects";
import { Toast } from "@/components/ui/Modal";

interface DeliverAssetProps {
  email: string;
  assetId: string;
}

export function DeliverAsset({ email, assetId }: DeliverAssetProps) {
  const router = useRouter();
  const { verifiedEmail } = useDeliver();
  const [project, setProject] = useState<typeof PROJECTS[number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const found = PROJECTS.find((p) => p.id === parseInt(assetId));
    setProject(found || null);
    setLoading(false);
  }, [assetId]);

  useEffect(() => {
    if (!verifiedEmail || verifiedEmail !== email) {
      router.push(`/deliver?email=${encodeURIComponent(email)}`);
    }
  }, [verifiedEmail, email, router]);

  const handleDownload = (item: string) => {
    setDownloadedItems((prev) => new Set(prev).add(item));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast({ message: "Link copied to clipboard!", type: "success" });
    setTimeout(() => setToast(null), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#E8A020] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <Package className="w-16 h-16 text-white/20 mb-4" />
        <h1 className="font-display text-2xl font-bold text-white mb-2">Project Not Found</h1>
        <p className="font-body text-white/50 mb-6">We could not find this project.</p>
        <a href="/deliver" className="text-[#E8A020] hover:underline">Go back to delivery portal</a>
      </div>
    );
  }

  const getIcon = (item: string) => {
    const lower = item.toLowerCase();
    if (lower.includes("video") || lower.includes("film")) return Play;
    if (lower.includes("photo") || lower.includes("essay") || lower.includes("still")) return Image;
    return FileText;
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.07]">
        <a href="/" className="font-display text-xl font-bold text-white flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="2" y="2" width="9" height="22" rx="1" fill="#E8A020" />
            <rect x="15" y="2" width="9" height="14" rx="1" fill="rgba(232,160,32,0.38)" />
          </svg>
          Clléver<span className="text-[#E8A020]">motion</span>
        </a>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
          >
            <Copy className="w-4 h-4" />
            Share
          </button>
          <a 
            href="/deliver" 
            className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit
          </a>
        </div>
      </nav>

      <div className="pt-28 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#E8A020]/10 border border-[#E8A020]/20 mb-8">
            <CheckCircle2 className="w-5 h-5 text-[#E8A020]" />
            <span className="font-body text-sm text-white">
              Verified access granted for <span className="text-[#E8A020]">{email}</span>
            </span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-[#E8A020]/10 text-[#E8A020] border border-[#E8A020]/20">
                {project.category}
              </span>
              <span className="font-mono-cm text-[0.6rem] tracking-[0.14em] uppercase text-white/30">
                {project.year}
              </span>
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-2">
              {project.title}
            </h1>
            <p className="font-body text-lg text-white/60">
              {project.subtitle}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8" style={{ height: "400px" }}>
            <div 
              className="absolute inset-0"
              style={{ background: project.slides[0]?.bg }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent" />
            
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#E8A020]/90 flex items-center justify-center hover:bg-[#f5c842] transition-colors group">
              <MonitorPlay className="w-8 h-8 text-[#080a0f] group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {project.slides.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-[#E8A020]" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-display text-xl font-bold text-white mb-4">Deliverables</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.deliverables.map((item, i) => {
                const isDownloaded = downloadedItems.has(item);
                const Icon = getIcon(item);
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#111827] border border-white/[0.07] group hover:border-[#E8A020]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDownloaded ? "bg-[#E8A020]/10" : "bg-white/5"}`}>
                        <Icon className={`w-5 h-5 ${isDownloaded ? "text-[#E8A020]" : "text-white/40"}`} />
                      </div>
                      <span className="font-body text-sm text-white">{item}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(item)}
                      className={`p-2 rounded-lg transition-colors ${isDownloaded ? "bg-[#E8A020]/10 text-[#E8A020]" : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"}`}
                    >
                      {isDownloaded ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#111827] border border-white/[0.07]">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-1">Location</p>
              <p className="font-body text-sm text-white">{project.location}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#111827] border border-white/[0.07]">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-1">Duration</p>
              <p className="font-body text-sm text-white">{project.duration}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-5 rounded-xl bg-[#111827]/50 border border-white/[0.07]">
              <h3 className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-[#E8A020] mb-2">The Challenge</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-5 rounded-xl bg-[#111827]/50 border border-white/[0.07]">
              <h3 className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-[#E8A020] mb-2">Our Approach</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{project.solution}</p>
            </div>
            <div className="p-5 rounded-xl bg-[#111827]/50 border border-white/[0.07]">
              <h3 className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-[#E8A020] mb-2">The Outcome</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-display text-xl font-bold text-white mb-4">Impact</h2>
            <div className="flex flex-wrap gap-3">
              {project.impact.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8A020]/10 border border-[#E8A020]/20 text-[#E8A020] font-body text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#E8A020] text-[#080a0f] font-body font-semibold px-6 py-3 rounded-xl hover:bg-[#f5c842] transition-colors">
              <Download className="w-5 h-5" />
              Download All Assets
            </button>
            <button className="flex items-center gap-2 bg-[#111827] text-white font-body font-medium px-6 py-3 rounded-xl border border-white/[0.07] hover:border-[#E8A020]/30 transition-colors">
              <Share2 className="w-5 h-5" />
              Share Project
            </button>
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-transparent text-white font-body font-medium px-6 py-3 rounded-xl border border-white/[0.07] hover:border-white/20 transition-colors"
            >
              Request Changes
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}