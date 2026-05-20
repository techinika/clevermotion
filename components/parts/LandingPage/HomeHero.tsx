export const HomeHero = ({ onZoom }: { onZoom?: (item: any) => void }) => {
  const HERO_VIDEOS = [
    { src: "/images/a thumbnail for one acre fund video.png", label: "One Acre Fund", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/a picture of us on video recording.png", label: "Showreel 2025", span: "md:col-span-2 md:row-span-1" },
    { src: "/images/a thumbnail for Africa CEO Forum (ACF), Opening Video.png", label: "Africa CEO Forum", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/a picture of recording at one acre fund.png", label: "Documentary", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center bg-[#080a0f] overflow-hidden pt-20">
      {/* Immersive Background Mosaic */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 h-full gap-1 opacity-40 p-1">
        {HERO_VIDEOS.map((video, idx) => (
          <div 
            key={idx} 
            className={`relative overflow-hidden cursor-zoom-in group border border-white/5 rounded-xl ${video.span}`}
            onClick={() => onZoom?.({ type: "image", src: video.src, alt: video.label })}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${video.src}')` }}
            />
            <div className="absolute inset-0 bg-[#080a0f]/50 group-hover:bg-[#080a0f]/20 transition-colors duration-700 ease-out" />
            
            {/* Surprise Hover Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
               <div className="w-20 h-20 rounded-full bg-[#E50914]/90 flex items-center justify-center text-[#080a0f] backdrop-blur-md shadow-[0_0_40px_rgba(229,9,20,0.5)]">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M8 5v14l11-7z" />
                 </svg>
               </div>
            </div>

            <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-[#080a0f]/60 backdrop-blur-md rounded border border-white/10 text-white font-mono-cm text-[0.7rem] tracking-widest uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              {video.label}
            </div>
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-14 pointer-events-none flex flex-col items-center justify-center text-center mt-12">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 anim-fadeup">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span className="font-mono-cm text-[0.65rem] tracking-[0.2em] uppercase text-white/80">
            Documentary & Brand Films
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-[6.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 anim-fadeup delay-100 drop-shadow-2xl">
          Stories told <br />
          <em className="italic font-light text-[#E50914]">for results.</em>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mb-12 anim-fadeup delay-200 drop-shadow-lg font-light">
          A full-service media production company based in Rwanda, creating visual narratives that inspire action and build trust.
        </p>
        
        <div className="flex gap-4 anim-fadeup delay-300 pointer-events-auto">
           <a href="#contact" className="font-body text-sm font-semibold px-8 py-4 rounded-full bg-[#E50914] text-[#080a0f] hover:bg-[#FF3B3B] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(229,9,20,0.3)]">
             Start a Project
           </a>
           <a href="#work-gallery" className="font-body text-sm font-medium px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
             View Our Work
           </a>
        </div>
      </div>

      {/* Decorative gradient overlay to blend seamlessly into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/80 to-transparent z-0 pointer-events-none" />
    </section>
  );
};
