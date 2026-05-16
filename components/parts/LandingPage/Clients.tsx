export const Clients = () => {
  const logos = [
    { src: "/logos/mckinsey.org.png", alt: "McKinsey" },
    { src: "/logos/one acre fund.png", alt: "One Acre Fund" },
    {
      src: "/logos/african-institute-for-mathematical-sciences-aims-rwanda-308247 1.png",
      alt: "AIMS Rwanda",
    },
    {
      src: "/logos/clean cooking networking.png",
      alt: "Clean Cooking Networking",
    },
    {
      src: "/logos/compassion international.png",
      alt: "Compassion International",
    },
    { src: "/logos/ifdc.png", alt: "IFDC" },
    { src: "/logos/images 1@2x.png", alt: "Images" },
    { src: "/logos/izko.png", alt: "Izko" },
    { src: "/logos/Oracle_logo.svg 1.png", alt: "Oracle" },
    { src: "/logos/silverback-Tea-logo 1.png", alt: "Silverback Tea" },
    { src: "/logos/sinapis.png", alt: "Sinapis" },
    { src: "/logos/SORWATHE_LOGO_0001-removebg (1) 1.png", alt: "Sorwathe" },
  ];

  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="clients-section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 40px",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--ff-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            whiteSpace: "nowrap",
          }}
        >
          Trusted by organizations across the Globe
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div className="clients-inner">
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-10 bg-white mx-3 py-4 rounded-md"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: 56, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
