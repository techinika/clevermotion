"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const clients = [
  "McKinsey",
  "REMA Rwanda",
  "Rising Academies",
  "PSF",
  "TangNest",
  "EstatesRW",
  "Umurava",
  "ACES Africa",
  "RYIA",
  "Heriot-Watt",
];

const problems = [
  {
    num: "01",
    title: "Unclear Messaging",
    desc: "Great programs lose impact when the story behind them is scattered, inconsistent, or too technical for the audiences that matter.",
  },
  {
    num: "02",
    title: "Low Visibility",
    desc: "Without compelling visual content, your work stays invisible — to donors, partners, and the communities you're trying to reach.",
  },
  {
    num: "03",
    title: "Weak Storytelling",
    desc: "Stakeholders forget what they can't feel. Dry reports and slide decks fail to create the emotional connection that drives action.",
  },
];

const solutions = [
  {
    icon: "🎬",
    title: "Documentary Production",
    desc: "Cinematic field documentaries that turn your program's work into powerful human stories donors and stakeholders can't ignore.",
  },
  {
    icon: "📸",
    title: "Photography Stories",
    desc: "Editorial-grade photography that captures authentic moments — from rural communities to high-stakes conferences.",
  },
  {
    icon: "✂️",
    title: "Social Media Campaigns",
    desc: "Multi-format content packages built for every platform your audience uses — reels, stills, stories, and hero films.",
  },
  {
    icon: "🎙️",
    title: "Corporate Video",
    desc: "Leadership interviews, brand films, and launch content that makes your organization's voice credible and memorable.",
  },
  {
    icon: "📋",
    title: "Story Strategy",
    desc: "We map your goals, audiences, and key blockers before a camera rolls — so every asset earns its place.",
  },
  {
    icon: "🗂️",
    title: "Impact Packages",
    desc: "Audit-ready story packages combining film, photography, and written narrative for grant reporting and partner updates.",
  },
];

const steps = [
  {
    num: "1",
    title: "Understand",
    desc: "We map your goals, audiences, key blockers, and proof points. No camera rolls without a clear story brief.",
  },
  {
    num: "2",
    title: "Strategy",
    desc: "We build the message framework, narrative arc, and multi-platform content plan tailored to your stakeholders.",
  },
  {
    num: "3",
    title: "Production",
    desc: "We film, edit, package, and prepare launch-ready assets — documentaries, cuts, stills, and campaign files.",
  },
];

const works = [
  {
    tag: "Documentary",
    client: "Development Partner",
    title: "Field Program Impact Film",
    challenge:
      "A strong field program was difficult to explain to donors in a clear, emotional way.",
    solution:
      "We shaped beneficiary interviews into a concise impact film and supporting campaign cutdowns.",
    outcome:
      "Clearer stakeholder presentations and shareable assets for web and events.",
    bg: "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    tag: "Brand Film",
    client: "Corporate Team",
    title: "Leadership Brand Campaign",
    challenge:
      "The brand looked active online, but the story behind the work was not memorable.",
    solution:
      "We built a message framework, filmed leadership content, and created launch videos.",
    outcome:
      "A sharper brand narrative and stronger trust across digital touchpoints.",
    bg: "linear-gradient(135deg, #2d1b00 0%, #3d2a00 50%, #1a1000 100%)",
  },
  {
    tag: "Photography",
    client: "Creative Initiative",
    title: "Climate Action Kigali",
    challenge:
      "Program outcomes were scattered across photos, notes, and event footage.",
    solution:
      "We organized the story into a case-study format with hero visuals and short edits.",
    outcome:
      "A clean proof-of-impact package for partners, sponsors, and future participants.",
    bg: "linear-gradient(135deg, #0a2e1a 0%, #163d2a 50%, #0f2a1a 100%)",
  },
];

const tools = [
  {
    icon: "📋",
    title: "Impact Story Audit",
    desc: "Score your current story for clarity, proof, emotion, and conversion readiness.",
  },
  {
    icon: "📄",
    title: "Storytelling Templates",
    desc: "Reusable prompts for campaign stories, beneficiary stories, and partner updates.",
  },
  {
    icon: "🎞️",
    title: "Video Brief Template",
    desc: "A structured brief to align objectives, audience, scenes, interviews, and deliverables.",
  },
];

const galleryItems = [
  {
    label: "Documentary — Field Interviews",
    wide: false,
    tall: true,
    bg: "linear-gradient(160deg,#1a2a3a,#0d1b2a)",
  },
  {
    label: "Conference — REMA Climate Summit",
    wide: true,
    tall: false,
    bg: "linear-gradient(160deg,#2a1a1a,#3d0f0f)",
  },
  {
    label: "Portrait — Community Leaders",
    wide: false,
    tall: false,
    bg: "linear-gradient(160deg,#1a2a1a,#0d2a10)",
  },
  {
    label: "Corporate — Leadership Session",
    wide: false,
    tall: false,
    bg: "linear-gradient(160deg,#2a2010,#3d2d00)",
  },
  {
    label: "Event — Youth Entrepreneurship",
    wide: false,
    tall: true,
    bg: "linear-gradient(160deg,#1a1a2a,#0d0d3d)",
  },
  {
    label: "Field — Agricultural Stories",
    wide: true,
    tall: false,
    bg: "linear-gradient(160deg,#1a2a10,#2a3d00)",
  },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    whatsapp: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const marqueeClients = [...clients, ...clients]; // double for seamless loop

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="10" height="24" rx="1" fill="#E8A020" />
            <rect
              x="16"
              y="2"
              width="10"
              height="16"
              rx="1"
              fill="rgba(232,160,32,0.4)"
            />
          </svg>
          Clléver<span>motion</span>
        </a>
        <ul className="nav-links">
          {["#work", "#process", "#gallery", "#tools", "#contact"].map(
            (href, i) => (
              <li key={i}>
                <a href={href}>
                  {["Work", "Process", "Gallery", "Free Tools", "Contact"][i]}
                </a>
              </li>
            ),
          )}
        </ul>
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn-outline"
            style={{ padding: "10px 20px", fontSize: "0.82rem" }}
          >
            Book Consultation
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.82rem" }}
          >
            Start a Project →
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-pattern" />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow animate-fadeup">
            <span className="label">
              Strategic Storytelling & Media Production
            </span>
          </div>

          <h1 className="hero-title animate-fadeup delay-1">
            Visual Stories
            <br />
            for Organizations
            <br />
            That <em>Create Impact.</em>
          </h1>

          <p className="hero-desc animate-fadeup delay-2">
            Cllevermotion helps NGOs, development organizations, and corporate
            teams produce powerful documentaries, brand films, and photography
            that move audiences to action.
          </p>

          <div className="hero-cta animate-fadeup delay-3">
            <a href="#contact" className="btn-primary">
              Start a Project →
            </a>
            <a href="/work" className="btn-outline">
              View Our Work
            </a>
          </div>

          <div className="hero-stat-row animate-fadeup delay-4">
            {[
              ["5+", "Years Experience"],
              ["80+", "Projects Delivered"],
              ["45K+", "Content Views"],
              ["12+", "Countries Reached"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side – media mosaic */}
        <div className="hero-media">
          <div
            className="hero-img"
            style={{ background: "linear-gradient(135deg,#1a2a3a,#0d1117)" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(160deg,#0d2a3d,#1a0a1a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="play-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5 3l10 6-10 6V3z" fill="#080a0f" />
                </svg>
              </div>
            </div>
            <div className="hero-img-badge">Showreel 2025</div>
          </div>
          {[
            {
              label: "Documentary",
              bg: "linear-gradient(160deg,#1a2a3a,#0d1b2a)",
            },
            {
              label: "Photography",
              bg: "linear-gradient(160deg,#2a1a1a,#1a0a0a)",
            },
            {
              label: "Conference",
              bg: "linear-gradient(160deg,#1a2a1a,#0d2010)",
            },
          ].map(({ label, bg }) => (
            <div key={label} className="hero-img" style={{ background: bg }}>
              <div style={{ width: "100%", height: "100%", background: bg }} />
              <div className="hero-img-badge">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ──────────────────────────────────────────────── */}
      <div className="clients-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "0 40px",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--ff-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            Trusted by organizations across Africa
          </span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="clients-inner">
            {marqueeClients.map((c, i) => (
              <div key={i} className="client-item">
                <span className="client-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section id="problem">
        <div className="problem-header">
          <div className="label">The Problem</div>
          <h2 className="problem-title">
            Great work deserves better storytelling
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted)",
            }}
          >
            Your organization is creating real change — but without the right
            story, that impact stays invisible to the audiences who need to see
            it.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card">
              <div className="problem-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <section id="solution">
        <div className="label" style={{ justifyContent: "center" }}>
          The Solution
        </div>
        <h2 className="solution-title">
          We don&apos;t just create content. We design stories.
        </h2>
        <div className="solution-grid">
          {solutions.map((s) => (
            <div key={s.title} className="solution-card">
              <div className="solution-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process">
        <div className="process-header">
          <div>
            <div className="label">How It Works</div>
            <h2 className="process-title">
              Understand → Strategy → Production
            </h2>
          </div>
          <p
            style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--muted)" }}
          >
            A simple production system that keeps the story clear and
            intentional before cameras ever roll.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────────────── */}
      <section id="work">
        <div className="work-header">
          <div>
            <div className="label">Case Studies</div>
            <h2 className="work-title">Proof that story changes perception</h2>
          </div>
          <a
            href="#"
            style={{
              color: "var(--gold)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            View all work →
          </a>
        </div>
        <div className="work-grid">
          {works.map((w) => (
            <div key={w.title} className="work-card">
              <div className="work-card-img">
                <div
                  className="work-card-img-inner"
                  style={{ background: w.bg }}
                />
                <div className="work-tag">{w.tag}</div>
              </div>
              <div className="work-card-body">
                <div className="work-client">Client → {w.client}</div>
                <h3>{w.title}</h3>
                <div className="work-meta">
                  <div className="work-meta-row">
                    <strong>Challenge:</strong> {w.challenge}
                  </div>
                  <div className="work-meta-row">
                    <strong>Solution:</strong> {w.solution}
                  </div>
                  <div className="work-meta-row">
                    <strong>Outcome:</strong> {w.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section id="gallery">
        <div className="label">Featured Work</div>
        <h2 className="gallery-title">Real stories from real organizations</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item${item.tall ? " tall" : ""}${item.wide ? " wide" : ""}`}
            >
              <div
                className="gallery-item-inner"
                style={{ background: item.bg }}
              />
              <div className="gallery-item-label">{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" className="btn-outline">
            Explore Our Work →
          </a>
        </div>
      </section>

      {/* ── FREE TOOLS ───────────────────────────────────────────────────── */}
      <section id="tools">
        <div className="tools-grid">
          <div>
            <div className="label">Free Tools</div>
            <h2 className="tools-title">
              Free resources to sharpen your story
            </h2>
            <p className="tools-desc">
              Use these before investing in production. Clarify your message,
              know your audience, and come to the brief ready.
            </p>
          </div>
          <div className="tools-list">
            {tools.map((t) => (
              <div key={t.title} className="tool-item">
                <div className="tool-item-left">
                  <div className="tool-icon">{t.icon}</div>
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </div>
                <svg
                  className="tool-dl"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 3v10M6 9l4 4 4-4M3 17h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / LEAD CAPTURE ───────────────────────────────────────── */}
      <section id="contact">
        <div className="contact-bg" />
        <div
          className="contact-grid"
          style={{ position: "relative", zIndex: 1 }}
        >
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
            <div style={{ marginTop: 40, display: "flex", gap: 24 }}>
              {[
                { icon: "📞", label: "+250 788 843 915" },
                { icon: "✉️", label: "hello@cllevermotion.com" },
              ].map((c) => (
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
                  <span>{c.icon}</span>
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
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🎬</div>
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
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9l14-7-7 14V9H2z" fill="currentColor" />
                </svg>
                Get Your Free Impact Story Audit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              Clléver<span>motion</span>
            </div>
            <div className="footer-tagline">
              &ldquo;New Rules: Inspiring
              <br />
              creatives at a difficult time.&rdquo;
            </div>
            <div className="footer-contact">
              <a href="tel:+250788843915">+250 788 843 915</a>
              <a href="mailto:hello@cllevermotion.com">
                hello@cllevermotion.com
              </a>
              <a href="#">Kigali, Rwanda</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            {["Home", "Portfolio", "Gallery", "About", "Insights"].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {[
              "Documentary",
              "Photography",
              "Brand Film",
              "Social Content",
              "Impact Packages",
            ].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            {["LinkedIn", "Instagram", "YouTube", "TikTok"].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Cllevermotion. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--ff-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
            }}
          >
            Built by{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://ubunifu.techinika.co.rw"
            >
              Ubunifu Labs
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
