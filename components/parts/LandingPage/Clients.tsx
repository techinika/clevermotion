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
    <div className="py-12 md:py-20 border-y border-white/5 bg-[#080a0f] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#080a0f] via-transparent to-[#080a0f] z-10 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 mb-8 md:mb-12">
        <div className="flex items-center gap-2 anim-fadeup">
          <span className="w-8 h-[1px] bg-[#E50914]" />
          <span className="font-mono-cm text-[0.6rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-white/50">
            Trusted by organizations globally
          </span>
        </div>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex gap-6 md:gap-10 w-max px-4" style={{ animation: 'marquee 40s linear infinite' }}>
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 md:px-10 py-5 bg-white rounded-xl group transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1"
              style={{ minWidth: '180px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
