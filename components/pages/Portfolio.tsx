"use client";

import { useState, useEffect, useCallback } from "react";
import { Footer } from "../parts/Footer";
import Navbar from "../parts/Navbar";
import { WorkCTA } from "../parts/Work/CTA";
import { Project, ProjectModal } from "../parts/Work/ProjectModal";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../parts/Work/ProjectCard";

const CATEGORIES = [
  "All",
  "Documentary",
  "Photography",
  "Campaign",
  "Brand Film",
  "Event",
];

export const categoryColor = (cat: string) =>
  ({
    Documentary: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    Photography: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    Campaign: "text-sky-400   bg-sky-400/10   border-sky-400/20",
    "Brand Film": "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Event: "text-rose-400  bg-rose-400/10  border-rose-400/20",
  })[cat] ?? "text-gray-400 bg-gray-400/10 border-gray-400/20";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <div
        className="min-h-screen font-body"
        style={{ background: "#080a0f", color: "#f5f0eb" }}
      >
        {/* ── NAV ── */}
        <Navbar scrolled={scrolled} />

        {/* ── HERO ── */}
        <div className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-14 overflow-hidden">
          {/* bg glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(229,9,20,0.15) 0%, transparent 60%)",
            }}
          />
          {/* pattern strip */}
          <div className="absolute left-0 top-0 bottom-0 w-12 pattern-border" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#E50914" }}
              />
              <span
                className="font-mono-cm text-[0.62rem] tracking-[0.22em] uppercase"
                style={{ color: "#E50914" }}
              >
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-6xl font-black leading-[1.04] text-white mb-6 anim-fadeup">
              Stories we've
              <br />
              <em className="italic" style={{ color: "#E50914" }}>
                designed & produced.
              </em>
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-xl anim-fadeup delay-100"
              style={{ color: "rgba(245,240,235,0.55)" }}
            >
              A selection of documentary, photography, brand, and campaign work
              for NGOs, development organizations, and corporate teams across
              Africa.
            </p>

            {/* stat strip */}
            <div
              className="flex gap-12 mt-12 pt-10 border-t anim-fadeup delay-200"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {[
                ["8+", "Projects shown"],
                ["5+", "Years experience"],
                ["80+", "Total delivered"],
                ["12+", "Countries"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    className="font-display text-2xl font-bold"
                    style={{ color: "#E50914" }}
                  >
                    {n}
                  </div>
                  <div
                    className="font-mono-cm text-[0.62rem] tracking-[0.14em] uppercase mt-1"
                    style={{ color: "rgba(245,240,235,0.4)" }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        <div
          className="sticky top-[73px] z-30 px-6 md:px-14 py-4 border-b"
          style={{
            background: "rgba(8,10,15,0.95)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-4 overflow-x-auto hide-scroll pb-2">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 font-mono-cm text-[0.62rem] tracking-[0.16em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                    active
                      ? "border-[#E50914] text-[#080a0f] bg-[#E50914]"
                      : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2 font-mono-cm text-[0.56rem] ${active ? "text-[#080a0f]/60" : "text-white/25"}`}
                  >
                    {cat === "All"
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── PROJECT GRID ── */}
        <div className="px-6 md:px-14 py-14">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-white/30 font-body">
              No projects in this category yet.
            </div>
          ) : (
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gridAutoFlow: "dense",
              }}
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelected}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>

        <WorkCTA />
        <Footer />
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
