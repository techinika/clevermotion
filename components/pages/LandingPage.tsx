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

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <HomeHero />

      <Clients />

      <Problem />

      <Solution />

      <Process />

      <FeaturedWork />

      <Gallery />

      <FreeTools />

      <Contact />
      <Footer />
    </>
  );
}
