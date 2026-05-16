export const FreeTools = () => {
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

  return (
    <section id="tools">
      <div className="tools-grid">
        <div>
          <div className="label">Free Tools</div>
          <h2 className="tools-title">Free resources to sharpen your story</h2>
          <p className="tools-desc">
            Use these before investing in production. Clarify your message, know
            your audience, and come to the brief ready.
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
  );
};
