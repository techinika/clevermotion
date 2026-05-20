"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontLoader } from "../parts/DeliverPage/FontLoader";
import { StepSearch } from "../parts/DeliverPage/StepSearch";
import { StepVerify } from "../parts/DeliverPage/StepVerify";
import { StepUnlocked } from "../parts/DeliverPage/StepUnlocked";

type Step = "search" | "verify" | "unlocked";

export default function DeliverPage() {
  const [step, setStep] = useState<Step>("search");
  const [email, setEmail] = useState("");
  const [asset, setAsset] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = ({
    email: e,
    asset: a,
  }: {
    email: string;
    asset: any;
  }) => {
    setEmail(e);
    setAsset(a);
    setStep("verify");
  };

  const handleVerified = () => {
    setStep("unlocked");
  };

  if (!isClient) return null;

  return (
    <>
      <FontLoader />
      <div
        className="min-h-screen py-16 px-4"
        style={{ background: "#0a0c10" }}
      >
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-sm font-body"
            style={{ color: "rgba(245,240,235,.4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E50914")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,235,.4)")
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M8 14l-6-6m0 0l6-6m-6 6h12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Homepage</span>
          </Link>
        </div>
        {step === "search" && (
          <StepSearch initialEmail="" initialAsset="" onFound={handleSearch} />
        )}
        {step === "verify" && asset && (
          <StepVerify
            email={email}
            asset={asset}
            onVerified={handleVerified}
            onBack={() => setStep("search")}
          />
        )}
        {step === "unlocked" && asset && (
          <StepUnlocked asset={asset} email={email} />
        )}
      </div>
    </>
  );
}
