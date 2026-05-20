"use client";

import { useState } from "react";
import { Phone, Mail, Clapperboard, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "+250 788 843 915" },
    { icon: Mail, label: "hello@cllevermotion.com" },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#0d1117] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#E50914]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6 anim-fadeup">
            <span className="w-8 h-[1px] bg-[#E50914]" />
            <span className="font-mono-cm text-[0.7rem] tracking-[0.2em] uppercase text-[#E50914]">Lead Capture</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6 anim-fadeup delay-100">
            It's time to turn your <br />
            <em className="text-white/40 font-normal italic">vision into reality.</em>
          </h2>
          <p className="font-body text-lg text-white/60 mb-12 anim-fadeup delay-200">
            Get a free Impact Story Audit. We'll review your current storytelling and show you exactly where the gaps are — no strings attached.
          </p>
          
          <div className="flex flex-col gap-6 anim-fadeup delay-300">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4 text-white/70 font-body">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#E50914]">
                  <c.icon className="w-5 h-5" />
                </div>
                {c.label}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#080a0f] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-12 anim-fadein">
              <Clapperboard className="w-16 h-16 text-[#E50914] mx-auto mb-6" />
              <h3 className="font-display text-3xl font-bold mb-4">You're in the frame.</h3>
              <p className="font-body text-white/60">
                We'll review your story and reach out within 48 hours with your Impact Story Audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Organization"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors appearance-none"
                style={{ color: formData.service ? "white" : "rgba(255,255,255,0.4)" }}
              >
                <option value="" disabled>Select a service…</option>
                <option value="Documentary Production" className="text-black">Documentary Production</option>
                <option value="Photography Stories" className="text-black">Photography Stories</option>
                <option value="Social Media Campaign" className="text-black">Social Media Campaign</option>
                <option value="Corporate Video" className="text-black">Corporate Video</option>
                <option value="Impact Story Package" className="text-black">Impact Story Package</option>
                <option value="Other" className="text-black">Other</option>
              </select>
              <textarea
                placeholder="Tell us more about your project (optional) — timeline, budget, goals..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white font-body text-sm outline-none focus:border-[#E50914] transition-colors resize-y min-h-[120px]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#ff3b3b] text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get Your Free Impact Story Audit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};