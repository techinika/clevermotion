import Link from "next/link";

export const Gallery = () => {
  const galleryItems = [
    {
      label: "Documentary — Field Interviews",
      wide: false,
      tall: true,
      src: '/images/a thumbnail for Documentary Film - CLECAM EJO HEZA.png',
    },
    {
      label: "Conference — REMA Climate Summit",
      wide: true,
      tall: false,
      src: '/images/a thumbnail for Africa CEO Forum (ACF), Opening Video.png',
    },
    {
      label: "Portrait — Community Leaders",
      wide: false,
      tall: false,
      src: '/images/a picture of us on video recording.png',
    },
    {
      label: "Corporate — Leadership Session",
      wide: false,
      tall: false,
      src: '/images/Recording Prof SAM YALA from AIMS.png',
    },
    {
      label: "Event — Youth Entrepreneurship",
      wide: false,
      tall: true,
      src: '/images/a thumbnail for Aces Vaccine Symposium 2025.png',
    },
    {
      label: "Field — Agricultural Stories",
      wide: true,
      tall: false,
      src: '/images/a picture of recording at one acre fund.png',
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
              style={{
                backgroundImage: `url('${item.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
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
