export const Solution = () => {
  const solutions = [
    {
      icon: "🎬",
      title: "Documentary Production",
      desc: "Cinematic field documentaries that turn your program's work into powerful human stories donors and stakeholders can't ignore.",
    },
    {
      icon: "📸",
      title: "Photography Stories",
      desc: "Editorial-grade photography that captures authentic moments — from rural communities to high-stakes conferences.",
    },
    {
      icon: "✂️",
      title: "Social Media Campaigns",
      desc: "Multi-format content packages built for every platform your audience uses — reels, stills, stories, and hero films.",
    },
    {
      icon: "🎙️",
      title: "Corporate Video",
      desc: "Leadership interviews, brand films, and launch content that makes your organization's voice credible and memorable.",
    },
    {
      icon: "📋",
      title: "Story Strategy",
      desc: "We map your goals, audiences, and key blockers before a camera rolls — so every asset earns its place.",
    },
    {
      icon: "🗂️",
      title: "Impact Packages",
      desc: "Audit-ready story packages combining film, photography, and written narrative for grant reporting and partner updates.",
    },
  ];

  return (
    <section id="solution">
      <div className="label" style={{ justifyContent: "center" }}>
        The Solution
      </div>
      <h2 className="solution-title">
        We don't just create content. We design stories.
      </h2>
      <div className="solution-grid">
        {solutions.map((s) => (
          <div key={s.title} className="solution-card">
            <div className="solution-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
