import Link from "next/link";

export const WorkCTA = () => {
  return (
    <div
      className="mx-14 mb-20 rounded-2xl overflow-hidden relative"
      style={{
        background:
          "linear-gradient(135deg, #0d1117 0%, #131b2e 60%, #0d1117 100%)",
        border: "1px solid rgba(229,9,20,0.12)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(229,9,20,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="relative px-16 py-16 flex items-center justify-between gap-8 flex-wrap">
        <div>
          <p
            className="font-mono-cm text-[0.6rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "#E50914" }}
          >
            Work with us
          </p>
          <h2 className="font-display text-3xl font-black text-white leading-tight">
            Ready to turn your
            <br />
            <em style={{ color: "#E50914" }}>impact into a story?</em>
          </h2>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/#tools"
            className="font-body text-sm font-medium px-6 py-3 rounded-lg border border-white/10 text-white/70 hover:border-white/25 hover:text-white transition-all"
          >
            Get Free Story Audit
          </Link>
          <Link
            href="/#contact"
            className="font-body text-sm font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
            style={{ background: "#E50914", color: "#080a0f" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FF3B3B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E50914")}
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </div>
  );
};
