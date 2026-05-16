export const Clients = () => {
  const clients = [
    "McKinsey",
    "REMA Rwanda",
    "Rising Academies",
    "PSF",
    "TangNest",
    "EstatesRW",
    "Umurava",
    "ACES Africa",
    "RYIA",
    "Heriot-Watt",
  ];

  const marqueeClients = [...clients, ...clients];

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
          Trusted by organizations across Africa
        </span>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div className="clients-inner">
          {marqueeClients.map((c, i) => (
            <div key={i} className="client-item">
              <span className="client-dot" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
