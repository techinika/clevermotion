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

export default function Problem() {
  return (
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
  );
}
