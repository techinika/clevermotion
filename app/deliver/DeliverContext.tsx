"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DeliverContextType {
  verifiedEmail: string | null;
  setVerifiedEmail: (email: string | null) => void;
}

const DeliverContext = createContext<DeliverContextType | undefined>(undefined);

export function DeliverProvider({ children }: { children: ReactNode }) {
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);

  return (
    <DeliverContext.Provider value={{ verifiedEmail, setVerifiedEmail }}>
      {children}
    </DeliverContext.Provider>
  );
}

export function useDeliver() {
  const context = useContext(DeliverContext);
  if (!context) {
    throw new Error("useDeliver must be used within DeliverProvider");
  }
  return context;
}