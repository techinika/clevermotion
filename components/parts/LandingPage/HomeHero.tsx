export const HomeHero = () => {
  return (
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
  );
};
