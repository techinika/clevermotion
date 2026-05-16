import type { Metadata } from "next";
import LandingPage from "@/components/pages/LandingPage";

export const metadata: Metadata = {
  title: "Strategic Storytelling & Media Production",
  description: "Clevermotion helps NGOs, development organizations, and corporate teams produce powerful documentaries, brand films, and photography that move audiences to action.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage />;
}