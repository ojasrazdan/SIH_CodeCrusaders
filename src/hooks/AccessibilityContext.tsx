// src/hooks/AccessibilityContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextProps {
  isAccessibleMode: boolean;
  toggleAccessibility: () => void;

  ttsEnabled: boolean;
  toggleTTS: () => void;

  highContrast: boolean;
  toggleHighContrast: () => void;

  adhdMode: boolean;
  toggleADHDMode: () => void;

  speakText: (text: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isAccessibleMode, setIsAccessibleMode] = useState(false);
  const [ttsEnabled, setTTSEnabled] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [adhdMode, setADHDMode] = useState(false);

  const toggleAccessibility = () => setIsAccessibleMode(prev => !prev);
  const toggleTTS = () => setTTSEnabled(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleADHDMode = () => setADHDMode(prev => !prev);

  const speakText = (text: string) => {
    if (ttsEnabled && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AccessibilityContext.Provider value={{
      isAccessibleMode,
      toggleAccessibility,
      ttsEnabled,
      toggleTTS,
      highContrast,
      toggleHighContrast,
      adhdMode,
      toggleADHDMode,
      speakText
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
};
