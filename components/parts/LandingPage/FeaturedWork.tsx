export const FeaturedWork = () => {
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
      src: '/images/a picture of recording at one acre fund.png',
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
      src: '/images/Recording Prof SAM YALA from AIMS.png',
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
      src: '/images/a picture of a big camera.png',
    },
  ];

  return (
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
                style={{
                  backgroundImage: `url('${w.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
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
  );
};
