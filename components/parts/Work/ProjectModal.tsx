"use client";

import { PROJECTS } from "@/components/data/projects";
import { categoryColor } from "@/components/pages/Portfolio";
import { useCallback, useEffect, useState } from "react";

export type Project = (typeof PROJECTS)[number];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slide, setSlide] = useState(0);
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 350);
  }, [onClose]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight")
        setSlide((s) => (s + 1) % project.slides.length);
      if (e.key === "ArrowLeft")
        setSlide(
          (s) => (s - 1 + project.slides.length) % project.slides.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, close]);

  const next = () => setSlide((s) => (s + 1) % project.slides.length);
  const prev = () =>
    setSlide((s) => (s - 1 + project.slides.length) % project.slides.length);

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col ${closing ? "anim-fadein" : "anim-fadein"}`}
      style={{
        animation: closing ? "fadeIn .35s ease reverse both" : undefined,
      }}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-[#080a0f]/95 backdrop-blur-xl"
        onClick={close}
      />

      {/* drawer panel */}
      <div
        className={`relative z-10 mt-auto w-full max-h-[95vh] overflow-y-auto bg-[#0d1117] border-t border-white/[0.08] rounded-t-2xl anim-slideup hide-scroll`}
        style={{
          animation: closing
            ? "slideUp .4s cubic-bezier(.22,1,.36,1) reverse both"
            : undefined,
        }}
      >
        {/* close row */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 bg-[#0d1117]/90 backdrop-blur-sm border-b border-white/[0.06]">
          <div className="flex items-center gap-4">
            <span
              className={`font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${categoryColor(project.category)}`}
            >
              {project.category}
            </span>
            <span className="font-mono-cm text-[0.6rem] tracking-[0.15em] uppercase text-white/30">
              {project.year} · {project.location}
            </span>
          </div>
          <button
            onClick={close}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2l10 10M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[60vh]">
          {/* LEFT — slides */}
          <div className="flex flex-col">
            {/* main slide */}
            <div
              className="relative overflow-hidden"
              style={{ height: "460px" }}
            >
              <div
                key={slide}
                className="w-full h-full anim-fadein"
                style={{
                  backgroundImage: project.slides[slide].src ? `url('${project.slides[slide].src}')` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* grain */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")",
                  }}
                />
              </div>

              {/* slide label */}
              <div className="absolute bottom-5 left-6 font-mono-cm text-[0.62rem] tracking-[0.15em] uppercase text-white/60">
                {project.slides[slide].label}
              </div>

              {/* nav arrows */}
              {project.slides.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080a0f]/70 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M10 3L5 8l5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080a0f]/70 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* slide counter */}
              <div className="absolute top-5 right-5 font-mono-cm text-[0.6rem] tracking-wider text-white/50 bg-[#080a0f]/60 px-2.5 py-1 rounded backdrop-blur-sm">
                {slide + 1} / {project.slides.length}
              </div>
            </div>

            {/* thumbnail strip */}
            <div className="flex gap-2 p-4 hide-scroll overflow-x-auto border-b border-white/[0.06]">
              {project.slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${i === slide ? "ring-2 ring-[#E50914] ring-offset-1 ring-offset-[#0d1117]" : "opacity-50 hover:opacity-80"}`}
                  style={{ 
                    width: 80, 
                    height: 52, 
                    backgroundImage: s.src ? `url('${s.src}')` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></button>
              ))}
            </div>

            {/* deliverables */}
            <div className="p-8 border-b border-white/[0.06]">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E50914] mb-4">
                Deliverables
              </p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span
                    key={d}
                    className="flex items-center gap-1.5 font-body text-sm text-white/70 bg-white/[0.05] border border-white/[0.07] px-3.5 py-1.5 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] flex-shrink-0" />
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* video section */}
            {project.videoUrl && (
              <div className="p-8 border-b border-white/[0.06]">
                <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E50914] mb-4">
                  Video
                </p>
                <video
                  className="w-full rounded-xl"
                  controls
                  preload="metadata"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* impact row */}
            <div className="p-8">
              <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E50914] mb-5">
                Impact
              </p>
              <div className="grid grid-cols-2 gap-3">
                {project.impact.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 font-body text-sm text-white/60"
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0 text-[#E50914]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2.5 7l3.5 3.5 5.5-6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — details panel */}
          <div className="border-l border-white/[0.06] flex flex-col">
            <div className="p-8 flex-1 overflow-y-auto hide-scroll">
              <div className="anim-fadeup">
                <p className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase text-[#E50914]/70 mb-3">
                  {project.client}
                </p>
                <h2 className="font-display text-3xl font-black text-white leading-tight mb-1">
                  {project.title}
                </h2>
                <p className="font-body text-base text-white/50 mb-8">
                  {project.subtitle}
                </p>
              </div>

              {/* meta grid */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-xl overflow-hidden mb-8 anim-fadeup delay-100">
                {[
                  ["Client", project.client],
                  ["Year", project.year],
                  ["Location", project.location],
                  ["Format", project.duration],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#111827] px-4 py-4">
                    <p className="font-mono-cm text-[0.56rem] tracking-[0.18em] uppercase text-white/30 mb-1">
                      {k}
                    </p>
                    <p className="font-body text-sm text-white/80 font-medium">
                      {v}
                    </p>
                  </div>
                ))}
              </div>

              {/* narrative */}
              {[
                { label: "The Challenge", text: project.challenge },
                { label: "Our Approach", text: project.solution },
                { label: "The Outcome", text: project.outcome },
              ].map(({ label, text }, i) => (
                <div
                  key={label}
                  className={`mb-6 anim-fadeup delay-${(i + 1) * 100}`}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-5 h-px bg-[#E50914]" />
                    <p className="font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase text-[#E50914]">
                      {label}
                    </p>
                  </div>
                  <p className="font-body text-[0.9rem] text-white/60 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}

              {/* tags */}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono-cm text-[0.58rem] tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.04] text-white/35 border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-white/[0.06]">
              <a
                href="#contact"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full bg-[#E50914] hover:bg-[#FF3B3B] text-[#080a0f] font-body font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8h12M8 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Start a Similar Project
              </a>
              <p className="font-mono-cm text-[0.58rem] tracking-[0.12em] text-white/25 text-center mt-3 uppercase">
                Use ← → keys to navigate slides · Esc to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
