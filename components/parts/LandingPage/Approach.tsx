"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const APPROACH_STEPS = [
  {
    label: "Step 01",
    title: "Pre-Production",
    content: "We partner with you to find the core message. We develop concepts, write scripts, and plan every detail before the camera rolls.",
    image: "/images/a picture of our cameraman before taking pictures.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    label: "Step 02",
    title: "Cinematic Capture",
    content: "Our crew steps in with industry-standard equipment to capture stunning visuals and authentic moments that align with your vision.",
    image: "/images/a picture showing us putting a mic on the customer before going on camera.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    label: "Step 03",
    title: "Post-Production",
    content: "This is where the magic happens. We cut, color grade, and sound design the footage into a masterpiece that hooks your audience.",
    image: "/images/a thumbnail for one acre fund video.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  {
    label: "Step 04",
    title: "Final Delivery",
    content: "We provide you with the final deliverables formatted for every platform you need, ensuring your story drives real impact.",
    image: "/images/Photo of someone giving a speech on the stage.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  }
];

export const Approach = ({ onZoom }: { onZoom?: (item: any) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % APPROACH_STEPS.length);
    }, 4500); // Loops every 4.5 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="approach" className="py-32 bg-[#080a0f] text-white overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center mb-16 relative z-20">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4 uppercase tracking-wide anim-fadeup">
          Our Services
        </h2>
        <p className="font-body text-white/60 max-w-2xl mx-auto text-lg anim-fadeup delay-100">
          We work across film, advertising, corporate content, and digital media, 
          delivering professional and impactful visual solutions step by step.
        </p>
      </div>
      
      <div 
        className="relative max-w-[1400px] mx-auto h-[450px] md:h-[550px] flex items-center justify-center anim-fadeup delay-200"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {APPROACH_STEPS.map((step, index) => {
          const N = APPROACH_STEPS.length;
          let offset = index - activeIndex;
          
          // Wrap-around logic for infinite visual looping
          if (offset < -Math.floor(N / 2)) offset += N;
          if (offset > Math.floor(N / 2)) offset -= N;
          
          const isActive = offset === 0;
          
          let translate = 0;
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          
          if (offset === 0) {
            translate = 0;
            scale = 1;
            zIndex = 20;
            opacity = 1;
          } else if (offset === 1 || offset === -1) {
            translate = offset * 60; // percentage
            scale = 0.85;
            zIndex = 10;
            opacity = 0.5;
          } else {
            translate = offset * 90;
            scale = 0.7;
            zIndex = 5;
            opacity = 0;
          }

          return (
            <div
              key={index}
              onClick={() => {
                if (isActive) {
                  onZoom?.({ type: "video", src: step.video, alt: step.title });
                } else {
                  setActiveIndex(index);
                }
              }}
              className="absolute top-0 w-[75vw] max-w-[280px] md:w-full md:max-w-[420px] h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
              style={{
                transform: `translateX(${translate}%) scale(${scale})`,
                zIndex,
                opacity,
                pointerEvents: opacity === 0 ? 'none' : 'auto'
              }}
            >
              <div className={`w-full h-full rounded-2xl overflow-hidden relative border-2 transition-colors duration-500 ${isActive ? 'border-[#E50914] shadow-[0_0_40px_rgba(229,9,20,0.3)]' : 'border-transparent'}`}>
                {/* Background Image as Thumbnail */}
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                
                {/* Overlays */}
                <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-[#080a0f]/10' : 'bg-[#080a0f]/70'}`} />
                
                {/* Play Button Overlay (Visible only on active card) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-10 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}>
                   <div className="w-16 h-16 rounded-full bg-[#E50914]/90 flex items-center justify-center text-[#080a0f] backdrop-blur-md shadow-[0_0_40px_rgba(229,9,20,0.5)] transform transition-transform hover:scale-110">
                     <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M8 5v14l11-7z" />
                     </svg>
                   </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-20 pointer-events-none">
                  <div className={`transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50'}`}>
                    <span className="inline-block px-3 py-1 bg-[#080a0f]/60 backdrop-blur-md rounded border border-white/10 text-white font-mono-cm text-[0.7rem] tracking-widest uppercase mb-4">
                      {step.label}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className={`font-body text-sm md:text-base text-white/80 leading-relaxed transition-all duration-500 drop-shadow-md ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {step.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div 
        className="flex justify-center items-center gap-3 mt-12 relative z-20 anim-fadeup delay-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {APPROACH_STEPS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? 'w-8 h-2 bg-[#E50914]' 
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
