"use client";

import Image from "next/image";

const MEDIA_ITEMS = [
  { type: "image", src: "/images/a thumbnail for one acre fund video.png", alt: "One Acre Fund Video", size: "large", label: "Agriculture" },
  { type: "video", src: "/videos/Introducing Agaseke 1.0 for Content Creators in Rwanda.mp4", alt: "Agaseke 1.0", size: "tall", label: "Creators" },
  { type: "image", src: "/images/a picture of a drone before taking pictures.png", alt: "Drone taking pictures", size: "wide", label: "Aerial" },
  { type: "image", src: "/images/Photo of someone giving a speech on the stage.png", alt: "Speech on stage", size: "normal", label: "Events" },
  { type: "image", src: "/images/a thumbnail for Africa CEO Forum (ACF), Opening Video.png", alt: "Africa CEO Forum", size: "normal", label: "Conference" },
  { type: "image", src: "/images/a picture showing us putting a mic on the customer before going on camera.png", alt: "Putting mic on customer", size: "wide", label: "Behind the Scenes" },
  { type: "image", src: "/images/a thumbnail of silverback tea video - picture of someone picking tea leaves.png", alt: "Silverback tea", size: "normal", label: "Documentary" },
  { type: "image", src: "/images/Recording Prof SAM YALA from AIMS.png", alt: "Prof SAM YALA", size: "normal", label: "Education" },
  { type: "image", src: "/images/a picture of our cameraman before taking pictures.png", alt: "Our cameraman", size: "normal", label: "Production" },
];

export const WorkGallery = ({ onZoom }: { onZoom?: (item: any) => void }) => {
  return (
    <section id="work-gallery" className="relative py-32 bg-[#080a0f] text-white overflow-hidden">
      {/* Background decorations for surprise factor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#E50914]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#E50914]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 anim-fadeup">
              <span className="w-8 h-[1px] bg-[#E50914]" />
              <span className="font-mono-cm text-[0.7rem] tracking-[0.2em] uppercase text-[#E50914]">Featured Work</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-tight anim-fadeup delay-100">
              Moments <br />
              <em className="text-white/40 font-normal italic">captured in time.</em>
            </h2>
          </div>
          <p className="font-body text-white/50 max-w-sm text-lg anim-fadeup delay-200">
            A visual mosaic of the stories we've told. Click to immerse yourself in the full experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
          {MEDIA_ITEMS.map((item, index) => {
            const delayClass = `delay-${(index % 3 + 1) * 100}`;
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden cursor-zoom-in group border border-white/5 hover:border-[#E50914]/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(229,9,20,0.15)] anim-fadeup ${delayClass}
                  ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${item.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                  ${item.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                  ${item.size === 'normal' ? 'md:col-span-1 md:row-span-1' : ''}
                `}
                onClick={() => onZoom?.(item)}
              >
                {/* Image/Video Layer */}
                <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/90 via-[#080a0f]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Badge Surprise */}
                <div className="absolute top-5 left-5 z-20 px-4 py-1.5 bg-[#080a0f]/60 backdrop-blur-md rounded border border-white/10 text-white font-mono-cm text-[0.65rem] tracking-widest uppercase transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {item.label}
                </div>

                {/* Center Icon Surprise */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#E50914]/90 flex items-center justify-center text-[#080a0f] backdrop-blur-md shadow-[0_0_30px_rgba(229,9,20,0.4)] transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    {item.type === "video" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-5 left-5 right-5 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                  <h3 className="font-body font-medium text-white/90 truncate text-lg">
                    {item.alt}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center anim-fadeup delay-300">
          <a href="/work" className="font-body text-sm font-medium px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-[#E50914]/50 transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
