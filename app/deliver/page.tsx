"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeliverProvider } from "./DeliverContext";
import { DeliverSearch } from "./DeliverSearch";
import { DeliverVerify } from "./DeliverVerify";
import { DeliverAsset } from "./DeliverAsset";

function DeliverContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const assetId = searchParams.get("asset");

  return (
    <main className="min-h-screen font-body" style={{ background: "#080a0f", color: "#f5f0eb" }}>
      {!email ? (
        <DeliverSearch />
      ) : !assetId ? (
        <DeliverVerify email={email} />
      ) : (
        <DeliverAsset email={email} assetId={assetId} />
      )}
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="min-h-screen font-body flex items-center justify-center" style={{ background: "#080a0f", color: "#f5f0eb" }}>
      <div className="animate-spin w-8 h-8 border-2 border-[#E8A020] border-t-transparent rounded-full" />
    </main>
  );
}

export default function DeliverPage() {
  return (
    <DeliverProvider>
      <Suspense fallback={<LoadingFallback />}>
        <DeliverContent />
      </Suspense>
    </DeliverProvider>
  );
}