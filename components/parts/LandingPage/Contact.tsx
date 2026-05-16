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
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "+250 788 843 915" },
    { icon: Mail, label: "hello@cllevermotion.com" },
  ];

  return (
    <section id="contact">
      <div className="contact-bg" />
      <div className="contact-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <div className="label">Lead Capture</div>
          <h2 className="contact-title">
            It&apos;s time to turn your vision into reality.
          </h2>
          <p className="contact-desc">
            Get a free Impact Story Audit. We&apos;ll review your current
            storytelling and show you exactly where the gaps are — no strings
            attached.
          </p>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            {contactInfo.map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "var(--muted)",
                  fontSize: "0.88rem",
                }}
              >
                <c.icon className="w-5 h-5" />
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div
            style={{
              background: "var(--card)",
              border: "1px solid rgba(232,160,32,0.3)",
              borderRadius: 12,
              padding: 48,
              textAlign: "center",
            }}
          >
            <Clapperboard className="w-12 h-12 text-[#E8A020] mx-auto mb-4" />
            <h3
              style={{
                fontFamily: "var(--ff-display)",
                fontSize: "1.4rem",
                marginBottom: 12,
              }}
            >
              You&apos;re in the frame.
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              We&apos;ll review your story and reach out within 48 hours with your
              Impact Story Audit.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Organization"
              value={formData.org}
              onChange={(e) =>
                setFormData({ ...formData, org: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
            />
            <select
              className="full"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              style={{
                background: "var(--card)",
                color: formData.service ? "var(--white)" : "var(--muted)",
              }}
            >
              <option value="" disabled>
                Select a service…
              </option>
              <option>Documentary Production</option>
              <option>Photography Stories</option>
              <option>Social Media Campaign</option>
              <option>Corporate Video</option>
              <option>Impact Story Package</option>
              <option>Other</option>
            </select>
            <button type="submit">
              <Send className="w-4 h-4" />
              Get Your Free Impact Story Audit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};