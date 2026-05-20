"use client";

import { useState } from "react";
import { FileText, FileVideo, Download, X, Mail, User, Phone, Check } from "lucide-react";

interface Tool {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  downloadUrl: string;
}

const tools: Tool[] = [
  {
    icon: FileText,
    title: "Impact Story Audit",
    desc: "Score your current story for clarity, proof, emotion, and conversion readiness.",
    downloadUrl: "/downloads/impact-story-audit.pdf",
  },
  {
    icon: FileVideo,
    title: "Storytelling Templates",
    desc: "Reusable prompts for campaign stories, beneficiary stories, and partner updates.",
    downloadUrl: "/downloads/storytelling-templates.pdf",
  },
  {
    icon: FileVideo,
    title: "Video Brief Template",
    desc: "A structured brief to align objectives, audience, scenes, interviews, and deliverables.",
    downloadUrl: "/downloads/video-brief-template.pdf",
  },
];

function SubscribeModal({ tool, onClose }: { tool: Tool; onClose: () => void }) {
  const [formData, setFormData] = useState({ firstName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-[#111827] border border-[#E50914]/30 rounded-2xl p-8 max-w-md w-full text-center anim-fadein">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 rounded-full bg-[#E50914]/20 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-[#E50914]" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">You're in!</h3>
          <p className="text-white/60 mb-6">
            Check your inbox for <strong className="text-[#E50914]">{formData.email}</strong> to download your free resource.
          </p>
          <a
            href={tool.downloadUrl}
            download
            className="inline-flex items-center gap-2 bg-[#E50914] text-[#080a0f] font-semibold px-6 py-3 rounded-lg hover:bg-[#FF3B3B] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 max-w-md w-full anim-fadein">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 flex items-center justify-center mx-auto mb-3">
            <tool.icon className="w-6 h-6 text-[#E50914]" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">Get Your Free Resource</h3>
          <p className="text-white/50 text-sm">Enter your details to download {tool.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="First Name *"
                required
                className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:border-[#E50914] focus:outline-none"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:border-[#E50914] focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:border-[#E50914] focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !formData.firstName || !formData.email}
            className="w-full bg-[#E50914] text-[#080a0f] font-semibold py-3 rounded-lg hover:bg-[#FF3B3B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download Free Resource
              </>
            )}
          </button>
          
          <p className="text-center text-white/30 text-xs mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}

export const FreeTools = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <section id="tools">
      <div className="tools-grid">
        <div>
          <div className="label">Free Tools</div>
          <h2 className="tools-title">Free resources to sharpen your story</h2>
          <p className="tools-desc">
            Use these before investing in production. Clarify your message, know
            your audience, and come to the brief ready.
          </p>
        </div>
        <div className="tools-list">
          {tools.map((t) => (
            <div key={t.title} className="tool-item">
              <div className="tool-item-left">
                <div className="tool-icon">
                  <t.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTool(t)}
                className="tool-dl w-5 h-5 hover:text-[#E50914] transition-colors cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedTool && (
        <SubscribeModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </section>
  );
};