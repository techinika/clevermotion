import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clevermotion.com"),
  title: {
    default: "Clevermotion | Strategic Storytelling & Media Production",
    template: "%s | Clevermotion",
  },
  description: "Clevermotion helps NGOs, development organizations, and corporate teams produce powerful documentaries, brand films, and photography that move audiences to action across Africa.",
  keywords: ["documentary production", "brand film", "photography", "media production", "Africa", "Rwanda", "storytelling", "impact storytelling", "corporate video", "social media content"],
  authors: [{ name: "Clevermotion" }],
  creator: "Clevermotion",
  publisher: "Clevermotion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clevermotion.com",
    siteName: "Clevermotion",
    title: "Clevermotion | Strategic Storytelling & Media Production",
    description: "Clevermotion helps NGOs, development organizations, and corporate teams produce powerful documentaries, brand films, and photography that move audiences to action.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clevermotion - Strategic Storytelling & Media Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clevermotion | Strategic Storytelling & Media Production",
    description: "Clevermotion helps NGOs, development organizations, and corporate teams produce powerful documentaries, brand films, and photography.",
    images: ["/og-image.jpg"],
    creator: "@clevermotion",
  },
  alternates: {
    canonical: "https://clevermotion.com",
  },
  category: "business",
  classification: "Media Production, Film, Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}