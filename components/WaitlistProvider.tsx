"use client";

import { createContext, useContext, ReactNode } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import { useWaitlistModal } from "@/hooks/useWaitlistModal";

interface WaitlistContextType {
  openWaitlistModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(
  undefined
);

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
};

interface WaitlistProviderProps {
  children: ReactNode;
}

export const WaitlistProvider = ({ children }: WaitlistProviderProps) => {
  const { isOpen, openModal, closeModal } = useWaitlistModal();

  return (
    <WaitlistContext.Provider value={{ openWaitlistModal: openModal }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </WaitlistContext.Provider>
  );
};
