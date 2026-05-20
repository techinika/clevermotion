"use client";

import { useState, useEffect } from "react";
import { Footer } from "../parts/Footer";
import Navbar from "../parts/Navbar";
import { Contact } from "../parts/LandingPage/Contact";
import { FreeTools } from "../parts/LandingPage/FreeTools";
import { Gallery } from "../parts/LandingPage/Gallery";
import { Process } from "../parts/LandingPage/Process";
import { Solution } from "../parts/LandingPage/Solution";
import Problem from "../parts/LandingPage/Problem";
import { Clients } from "../parts/LandingPage/Clients";
import { HomeHero } from "../parts/LandingPage/HomeHero";
import { FeaturedWork } from "../parts/LandingPage/FeaturedWork";
import { WorkGallery } from "../parts/LandingPage/WorkGallery";
import { Approach } from "../parts/LandingPage/Approach";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [zoomedItem, setZoomedItem] = useState<{ type: string; src: string; alt: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <HomeHero onZoom={setZoomedItem} />

      <WorkGallery onZoom={setZoomedItem} />

      <Approach onZoom={setZoomedItem} />

      <Clients />
      {/* 
      <Problem />
      <Solution />
      <Process />
      <FeaturedWork />
      <Gallery />
      <FreeTools />
      */}

      <Contact />
      <Footer />

      {/* Zoom Modal */}
      {zoomedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080a0f]/95 backdrop-blur-xl p-4 sm:p-10 cursor-zoom-out anim-fadein"
          onClick={() => setZoomedItem(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedItem(null);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div
            className="relative w-full max-w-6xl max-h-full flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {zoomedItem.type === "image" ? (
              <img
                src={zoomedItem.src}
                alt={zoomedItem.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={zoomedItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
