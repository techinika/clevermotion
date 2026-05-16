"use client";

import { useState, useEffect, useCallback } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Seeds of Change",
    subtitle: "Agricultural Impact Documentary",
    client: "McKinsey & TUBURA Rwanda",
    category: "Documentary",
    year: "2024",
    location: "Musanze, Rwanda",
    duration: "22 min hero film + 4 cutdowns",
    deliverables: ["Hero Documentary", "3× Social Cutdowns", "Photo Essay", "Campaign Stills"],
    tags: ["NGO", "Agriculture", "Impact", "Rural"],
    challenge: "TUBURA's smallholder farming program was reaching 80,000 families — but donors couldn't see or feel that scale.",
    solution: "We embedded with field teams for five days across three districts, following three farming families through a full day's cycle.",
    outcome: "The documentary anchored a major donor renewal presentation and was shown at two international development conferences.",
    impact: ["80K+ families represented", "Donor renewal secured", "2 international screenings", "Most-shared internal asset"],
    slides: [
      { bg: "linear-gradient(160deg,#0d2a1a 0%,#193d10 60%,#0a1a08 100%)", label: "Field — Musanze District" },
      { bg: "linear-gradient(160deg,#1a2a0d 0%,#2d3d10 60%,#0a1505 100%)", label: "Interview — Farming Family" },
      { bg: "linear-gradient(160deg,#0a1a0d 0%,#153d20 60%,#081208 100%)", label: "B-Roll — Harvest Season" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#0d2a1a,#193d10,#0a1a08)", aspect: "wide" },
    featured: true,
  },
  {
    id: 2,
    title: "Frontline Voices",
    subtitle: "Healthcare Worker Portrait Series",
    client: "Africa CDC / WHO Rwanda",
    category: "Photography",
    year: "2024",
    location: "Kigali & Kayonza, Rwanda",
    duration: "3-week shoot",
    deliverables: ["60-image photo essay", "8 hero portraits", "Exhibition prints", "Digital campaign set"],
    tags: ["Healthcare", "Portraiture", "Campaign", "WHO"],
    challenge: "A regional vaccination campaign needed faces, not statistics.",
    solution: "We photographed 24 frontline health workers across six facilities using available light.",
    outcome: "The portrait series ran across outdoor media in three countries.",
    impact: ["24 workers featured", "3-country media campaign", "AU HQ exhibition", "WHO annual report cover"],
    slides: [
      { bg: "linear-gradient(160deg,#2a0d1a 0%,#3d1020 60%,#1a0810 100%)", label: "Studio — Kigali" },
      { bg: "linear-gradient(160deg,#1a0d2a 0%,#200f3d 60%,#100815 100%)", label: "Clinic — Kayonza" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#2a0d1a,#3d1020,#1a0810)", aspect: "tall" },
    featured: false,
  },
  {
    id: 3,
    title: "Climate Action Kigali",
    subtitle: "Conference Campaign Package",
    client: "REMA Rwanda",
    category: "Campaign",
    year: "2023",
    location: "Kigali Convention Centre",
    duration: "4-day event coverage",
    deliverables: ["Opening ceremony film", "12 social assets", "Speaker reels", "Event photo set"],
    tags: ["Climate", "Conference", "Government", "Campaign"],
    challenge: "A high-profile regional climate conference needed content that would live beyond the event.",
    solution: "We deployed a 3-person crew across all four days, running parallel documentary and event photography tracks.",
    outcome: "12 assets posted during the event generated 45K+ combined views.",
    impact: ["45K+ content views", "12 assets in 4 days", "Year-end report featured", "180hrs source footage"],
    slides: [
      { bg: "linear-gradient(160deg,#0d1a2a 0%,#103040 60%,#08151a 100%)", label: "Opening Ceremony" },
      { bg: "linear-gradient(160deg,#0d2a1a 0%,#10402a 60%,#08150f 100%)", label: "Panel Sessions" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#0d1a2a,#103040,#08151a)", aspect: "wide" },
    featured: true,
  },
  {
    id: 4,
    title: "Youth Entrepreneurship Forum",
    subtitle: "Multi-format Event Production",
    client: "PSF Rwanda",
    category: "Event",
    year: "2023",
    location: "Kigali, Rwanda",
    duration: "3 Conferences",
    deliverables: ["3× event films", "Social content set", "Speaker portraits", "Recap reels"],
    tags: ["Youth", "Business", "Event", "PSF"],
    challenge: "Three consecutive forums needed consistent visual branding and storytelling.",
    solution: "We created a visual language guide before event one, then deployed the same crew across all three forums.",
    outcome: "The three-part series became a recruitment tool for the 2024 cohort.",
    impact: ["3 complete event films", "Consistent visual language", "Organic social sharing", "2024 cohort recruitment asset"],
    slides: [
      { bg: "linear-gradient(160deg,#2a1a0d 0%,#3d280a 60%,#1a100a 100%)", label: "Forum 1 — Opening" },
      { bg: "linear-gradient(160deg,#1a2a0d 0%,#283d0a 60%,#0f180a 100%)", label: "Forum 2 — Pitching Round" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#2a1a0d,#3d280a,#1a100a)", aspect: "square" },
    featured: false,
  },
  {
    id: 5,
    title: "Rising Academies",
    subtitle: "Education Brand Documentary",
    client: "Rising Academies",
    category: "Documentary",
    year: "2024",
    location: "Freetown, Sierra Leone",
    duration: "18 min film + cutdowns",
    deliverables: ["Brand documentary", "4× cutdowns", "Teacher portraits", "Classroom series"],
    tags: ["Education", "NGO", "Africa", "Brand"],
    challenge: "An ed-tech school network expanding across West Africa needed a brand story.",
    solution: "We spent a week inside three schools — filming classrooms, teacher prep sessions, and student moments.",
    outcome: "The film anchored a major expansion fundraising campaign.",
    impact: ["12 schools received film", "Expansion campaign anchor", "Teacher recruitment boost", "International partner presentations"],
    slides: [
      { bg: "linear-gradient(160deg,#1a0d2a 0%,#281040 60%,#100815 100%)", label: "Classroom — Freetown" },
      { bg: "linear-gradient(160deg,#2a1a0d 0%,#3d2810 60%,#1a1008 100%)", label: "Teacher Portrait Series" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#1a0d2a,#281040,#100815)", aspect: "tall" },
    featured: false,
  },
  {
    id: 6,
    title: "TangNest Brand Launch",
    subtitle: "Corporate Identity Film",
    client: "TangNest Real Estate",
    category: "Brand Film",
    year: "2024",
    location: "Kigali, Rwanda",
    duration: "Hero film + social set",
    deliverables: ["90s hero film", "6× social cuts", "Property photography", "Executive portraits"],
    tags: ["Real Estate", "Corporate", "Brand", "Kigali"],
    challenge: "A new premium real estate brand entering Kigali's competitive market needed a launch film.",
    solution: "We built the film around the experience of living in a TangNest property rather than its features.",
    outcome: "The launch film drove their highest single-week website traffic on record.",
    impact: ["Record website traffic week", "#1 sales tool cited", "Premium market positioning", "6 social assets delivered"],
    slides: [
      { bg: "linear-gradient(160deg,#1a1a2a 0%,#252535 60%,#0d0d1a 100%)", label: "Property — Interior Shoot" },
      { bg: "linear-gradient(160deg,#2a2a1a 0%,#353520 60%,#1a1a0a 100%)", label: "Architecture Details" },
    ],
    thumbnail: { bg: "linear-gradient(160deg,#1a1a2a,#252535,#0d0d1a)", aspect: "square" },
    featured: true,
  },
];

const CATEGORIES = ["All", "Documentary", "Photography", "Campaign", "Brand Film", "Event"];

type Project = typeof PROJECTS[number];

const categoryColor = (cat: string) =>
  ({
    Documentary: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    Photography: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    Campaign: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    "Brand Film": "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Event: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  })[cat] ?? "text-gray-400 bg-gray-400/10 border-gray-400/20";

interface ProjectCardProps {
  project: Project;
  onClick: (p: Project) => void;
  index: number;
}

function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const isWide = project.thumbnail.aspect === "wide";
  const isTall = project.thumbnail.aspect === "tall";

  return (
    <div
      onClick={() => onClick(project)}
      className={`card-shimmer group relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.07] bg-[#111827] transition-all duration-500 hover:border-[#E8A020]/30 hover:shadow-2xl hover:shadow-[#E8A020]/5 hover:-translate-y-1 anim-fadeup ${isWide ? "col-span-2" : ""} ${isTall ? "row-span-2" : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="w-full overflow-hidden" style={{ height: isTall ? "520px" : "240px", background: project.thumbnail.bg }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")" }} />
        <div className="absolute top-3 left-3 z-10">
          <span className={`font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${categoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono-cm text-[0.58rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#E8A020]/90 text-[#080a0f]">Featured</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#080a0f]/0 group-hover:bg-[#080a0f]/30 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 bg-[#E8A020] text-[#080a0f] font-body font-semibold text-sm px-5 py-2.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              View Project
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono-cm text-[0.58rem] tracking-[0.18em] uppercase text-[#E8A020]/70">{project.client}</span>
          <span className="w-px h-3 bg-white/10" />
          <span className="font-mono-cm text-[0.58rem] tracking-[0.14em] uppercase text-white/30">{project.year}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-white leading-tight mb-1 group-hover:text-[#E8A020] transition-colors duration-300">{project.title}</h3>
        <p className="font-body text-sm text-white/50 mb-4">{project.subtitle}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="font-mono-cm text-[0.58rem] tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.05] text-white/40 border border-white/[0.06]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slide, setSlide] = useState(0);
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 350);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % project.slides.length);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + project.slides.length) % project.slides.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, close]);

  const next = () => setSlide((s) => (s + 1) % project.slides.length);
  const prev = () => setSlide((s) => (s - 1 + project.slides.length) % project.slides.length);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col ${closing ? "anim-fadein" : "anim-fadein"}`} style={{ animation: closing ? "fadeIn .35s ease reverse both" : undefined }}>
      <div className="absolute inset-0 bg-[#080a0f]/95 backdrop-blur-xl" onClick={close} />
      <div className={`relative z-10 mt-auto w-full max-h-[95vh] overflow-y-auto bg-[#0d1117] border-t border-white/[0.08] rounded-t-2xl anim-slideup hide-scroll`} style={{ animation: closing ? "slideUp .4s cubic-bezier(.22,1,.36,1) reverse both" : undefined }}>
        <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 bg-[#0d1117]/90 backdrop-blur-sm border-b border-white/[0.06]">
          <div className="flex items-center gap-4">
            <span className={`font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${categoryColor(project.category)}`}>{project.category}</span>
            <span className="font-mono-cm text-[0.6rem] tracking-[0.15em] uppercase text-white/30">{project.year} · {project.location}</span>
          </div>
          <button onClick={close} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[60vh]">
          <div className="flex flex-col">
            <div className="relative overflow-hidden" style={{ height: "460px" }}>
              <div key={slide} className="w-full h-full anim-fadein" style={{ background: project.slides[slide].bg }}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")" }} />
              </div>
              <div className="absolute bottom-5 left-6 font-mono-cm text-[0.62rem] tracking-[0.15em] uppercase text-white/60">{project.slides[slide].label}</div>
              {project.slides.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080a0f]/70 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080a0f]/70 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </>
              )}
              <div className="absolute top-5 right-5 font-mono-cm text-[0.6rem] tracking-wider text-white/50 bg-[#080a0f]/60 px-2.5 py-1 rounded backdrop-blur-sm">{slide + 1} / {project.slides.length}</div>
            </div>
            <div className="flex gap-2 p-4 hide-scroll overflow-x-auto border-b border-white/[0.06]">
              {project.slides.map((s, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${i === slide ? "ring-2 ring-[#E8A020] ring-offset-1 ring-offset-[#0d1117]" : "opacity-50 hover:opacity-80"}`} style={{ width: 80, height: 52, background: s.bg }} />
              ))}
            </div>
            <div className="p-8 border-b border-white/[0.06]">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E8A020] mb-4">Deliverables</p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span key={d} className="flex items-center gap-1.5 font-body text-sm text-white/70 bg-white/[0.05] border border-white/[0.07] px-3.5 py-1.5 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] flex-shrink-0" />{d}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E8A020] mb-5">Impact</p>
              <div className="grid grid-cols-2 gap-3">
                {project.impact.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 font-body text-sm text-white/60">
                    <svg className="mt-0.5 flex-shrink-0 text-[#E8A020]" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-l border-white/[0.06] flex flex-col">
            <div className="p-8 flex-1 overflow-y-auto hide-scroll">
              <div className="anim-fadeup">
                <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E8A020]/70 mb-3">{project.client}</p>
                <h2 className="font-display text-3xl font-black text-white leading-tight mb-1">{project.title}</h2>
                <p className="font-body text-base text-white/50 mb-8">{project.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-xl overflow-hidden mb-8 anim-fadeup delay-100">
                {[["Client", project.client], ["Year", project.year], ["Location", project.location], ["Format", project.duration]].map(([k, v]) => (
                  <div key={k} className="bg-[#111827] px-4 py-4">
                    <p className="font-mono-cm text-[0.56rem] tracking-[0.18em] uppercase text-white/30 mb-1">{k}</p>
                    <p className="font-body text-sm text-white/80 font-medium">{v}</p>
                  </div>
                ))}
              </div>
              {[
                { label: "The Challenge", text: project.challenge },
                { label: "Our Approach", text: project.solution },
                { label: "The Outcome", text: project.outcome },
              ].map(({ label, text }, i) => (
                <div key={label} className={`mb-6 anim-fadeup delay-${(i + 1) * 100}`}>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-5 h-px bg-[#E8A020]" />
                    <p className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-[#E8A020]">{label}</p>
                  </div>
                  <p className="font-body text-[0.9rem] text-white/60 leading-relaxed">{text}</p>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.tags.map((t) => (
                  <span key={t} className="font-mono-cm text-[0.58rem] tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.04] text-white/35 border border-white/[0.06]">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-white/[0.06]">
              <a href="#contact" onClick={close} className="flex items-center justify-center gap-2 w-full bg-[#E8A020] hover:bg-[#f5c842] text-[#080a0f] font-body font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Start a Similar Project
              </a>
              <p className="font-mono-cm text-[0.58rem] tracking-[0.12em] text-white/25 text-center mt-3 uppercase">Use ← → keys to navigate slides · Esc to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="min-h-screen font-body" style={{ background: "#080a0f", color: "#f5f0eb" }}>
        <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-14 py-6 transition-all duration-300 ${scrolled ? "bg-[#080a0f]/92 backdrop-blur-xl border-b border-white/[0.07] py-4" : ""}`}>
          <a href="/" className="font-display text-xl font-bold text-white flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <rect x="2" y="2" width="9" height="22" rx="1" fill="#E8A020" />
              <rect x="15" y="2" width="9" height="14" rx="1" fill="rgba(232,160,32,0.38)" />
            </svg>
            Clléver<span className="text-[#E8A020]">motion</span>
          </a>
          <ul className="flex gap-8 list-none">
            {[["/#work", "Work"], ["/work", "Portfolio"], ["/#process", "Process"], ["/#contact", "Contact"]].map(([href, label]) => (
              <li key={label}>
                <a href={href} className={`font-body text-sm transition-colors ${label === "Portfolio" ? "text-[#E8A020]" : "text-white/50 hover:text-white"}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a href="/#contact" className="font-body text-sm font-medium px-5 py-2 rounded border border-white/10 text-white/70 hover:border-[#E8A020]/40 hover:text-white transition-all">Book Consultation</a>
            <a href="/#contact" className="font-body text-sm font-semibold px-5 py-2 rounded bg-[#E8A020] text-[#080a0f] hover:bg-[#f5c842] transition-all">Start a Project →</a>
          </div>
        </nav>

        <div className="relative pt-40 pb-20 px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,160,32,0.05) 0%, transparent 60%)" }} />
          <div className="absolute left-0 top-0 bottom-0 w-12 pattern-border" />
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#E8A020" }} />
              <span className="font-mono-cm text-[0.62rem] tracking-[0.22em] uppercase" style={{ color: "#E8A020" }}>Portfolio</span>
            </div>
            <h1 className="font-display text-6xl font-black leading-[1.04] text-white mb-6 anim-fadeup">
              Stories we've<br /><em className="italic" style={{ color: "#E8A020" }}>designed & produced.</em>
            </h1>
            <p className="font-body text-lg leading-relaxed max-w-xl anim-fadeup delay-100" style={{ color: "rgba(245,240,235,0.55)" }}>
              A selection of documentary, photography, brand, and campaign work for NGOs, development organizations, and corporate teams across Africa.
            </p>
            <div className="flex gap-12 mt-12 pt-10 border-t anim-fadeup delay-200" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              {[["8+", "Projects shown"], ["5+", "Years experience"], ["80+", "Total delivered"], ["12+", "Countries"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold" style={{ color: "#E8A020" }}>{n}</div>
                  <div className="font-mono-cm text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: "rgba(245,240,235,0.4)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky top-[65px] z-30 px-14 py-4 border-b" style={{ background: "rgba(8,10,15,0.95)", backdropFilter: "blur(16px)", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 overflow-x-auto hide-scroll">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`flex-shrink-0 font-mono-cm text-[0.62rem] tracking-[0.16em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${active ? "border-[#E8A020] text-[#080a0f] bg-[#E8A020]" : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"}`}>
                  {cat}
                  <span className={`ml-2 font-mono-cm text-[0.56rem] ${active ? "text-[#080a0f]/60" : "text-white/25"}`}>
                    {cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-14 py-14">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-white/30 font-body">No projects in this category yet.</div>
          ) : (
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gridAutoFlow: "dense" }}>
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} onClick={setSelected} index={i} />
              ))}
            </div>
          )}
        </div>

        <div className="mx-14 mb-20 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0d1117 0%, #131b2e 60%, #0d1117 100%)", border: "1px solid rgba(232,160,32,0.12)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(232,160,32,0.06) 0%, transparent 60%)" }} />
          <div className="relative px-16 py-16 flex items-center justify-between gap-8 flex-wrap">
            <div>
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase mb-3" style={{ color: "#E8A020" }}>Work with us</p>
              <h2 className="font-display text-3xl font-black text-white leading-tight">Ready to turn your<br /><em style={{ color: "#E8A020" }}>impact into a story?</em></h2>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="/#tools" className="font-body text-sm font-medium px-6 py-3 rounded-lg border border-white/10 text-white/70 hover:border-white/25 hover:text-white transition-all">Get Free Story Audit</a>
              <a href="/#contact" className="font-body text-sm font-semibold px-6 py-3 rounded-lg flex items-center gap-2 bg-[#E8A020] text-[#080a0f] hover:bg-[#f5c842] transition-all">Start a Project →</a>
            </div>
          </div>
        </div>

        <footer className="border-t px-14 py-10" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#080a0f" }}>
          <div className="flex items-center justify-between">
            <div className="font-display text-lg font-bold text-white">
              Clléver<span className="text-[#E8A020]">motion</span>
              <span className="font-body text-sm font-normal ml-4" style={{ color: "rgba(245,240,235,0.3)" }}>Creative Production Company</span>
            </div>
            <p className="font-mono-cm text-[0.62rem] tracking-[0.1em] uppercase" style={{ color: "rgba(245,240,235,0.25)" }}>© {new Date().getFullYear()} Cllevermotion. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}