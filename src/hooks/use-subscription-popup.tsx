
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type SubscriptionPopupContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const SubscriptionPopupContext = createContext<SubscriptionPopupContextType | undefined>(undefined);

export function SubscriptionPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SubscriptionPopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SubscriptionPopupContext.Provider>
  );
}

export function useSubscriptionPopup() {
  const context = useContext(SubscriptionPopupContext);
  if (context === undefined) {
    throw new Error('useSubscriptionPopup must be used within a SubscriptionPopupProvider');
  }
  return context;
}
