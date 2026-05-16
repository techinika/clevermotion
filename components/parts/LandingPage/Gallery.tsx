import Link from "next/link";

export const Gallery = () => {
  const galleryItems = [
    {
      label: "Documentary — Field Interviews",
      wide: false,
      tall: true,
      bg: "linear-gradient(160deg,#1a2a3a,#0d1b2a)",
    },
    {
      label: "Conference — REMA Climate Summit",
      wide: true,
      tall: false,
      bg: "linear-gradient(160deg,#2a1a1a,#3d0f0f)",
    },
    {
      label: "Portrait — Community Leaders",
      wide: false,
      tall: false,
      bg: "linear-gradient(160deg,#1a2a1a,#0d2a10)",
    },
    {
      label: "Corporate — Leadership Session",
      wide: false,
      tall: false,
      bg: "linear-gradient(160deg,#2a2010,#3d2d00)",
    },
    {
      label: "Event — Youth Entrepreneurship",
      wide: false,
      tall: true,
      bg: "linear-gradient(160deg,#1a1a2a,#0d0d3d)",
    },
    {
      label: "Field — Agricultural Stories",
      wide: true,
      tall: false,
      bg: "linear-gradient(160deg,#1a2a10,#2a3d00)",
    },
  ];

  return (
    <section id="gallery">
      <div className="label">Featured Work</div>
      <h2 className="gallery-title">Real stories from real organizations</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-item${item.tall ? " tall" : ""}${item.wide ? " wide" : ""}`}
          >
            <div
              className="gallery-item-inner"
              style={{ background: item.bg }}
            />
            <div className="gallery-item-label">{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Link href="/work" className="btn-outline">
          Explore Our Work →
        </Link>
      </div>
    </section>
  );
};
