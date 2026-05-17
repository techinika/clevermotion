export const HomeHero = () => {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-pattern" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-eyebrow animate-fadeup">
          <span className="label">
            Documentary, Brand Film & Photography Production
          </span>
        </div>

        <h1 className="hero-title animate-fadeup delay-1">
          We help impact-driven organizations
          <br />
          Tell their stories
          <br />
          <em>Change.</em>
        </h1>

        <p className="hero-desc animate-fadeup delay-2">
          Cllevermotion is a full-service media production company based in Rwanda, 
          specializing in documentary films, brand films, photography, and event coverage 
          for NGOs, development organizations, and corporate teams across Africa. 
          We help impact-driven organizations tell their stories in ways that inspire action, 
          build trust, and create lasting change.
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
            style={{
              backgroundImage: "url('/images/a picture of us on video recording.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "rgba(13, 10, 15, 0.6)",
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
              src: '/images/a picture of recording at one acre fund.png',
            },
            {
              label: "Photography",
              src: '/images/a picture of a big camera.png',
            },
            {
              label: "Conference",
              src: '/images/a thumbnail for Africa CEO Forum (ACF), Opening Video.png',
            },
          ].map(({ label, src }) => (
            <div key={label} className="hero-img" style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <div style={{ width: "100%", height: "100%", background: "rgba(13, 10, 15, 0.6)" }} />
              <div className="hero-img-badge">{label}</div>
            </div>
          ))}
        </div>
    </section>
  );
};
