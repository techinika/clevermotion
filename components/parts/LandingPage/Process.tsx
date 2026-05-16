export const Process = () => {
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

  return (
    <section id="process">
      <div className="process-header">
        <div>
          <div className="label">How It Works</div>
          <h2 className="process-title">Understand → Strategy → Production</h2>
        </div>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--muted)" }}>
          A simple production system that keeps the story clear and intentional
          before cameras ever roll.
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
  );
};
