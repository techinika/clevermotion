import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Our Work",
  description: "View our documentary, photography, brand film, and campaign work for NGOs, development organizations, and corporate teams across Africa.",
  alternates: {
    canonical: "/work",
  },
};

export default function Home() {
  return <PortfolioPage />;
}