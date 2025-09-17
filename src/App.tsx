import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AccessibilityProvider } from "@/hooks/AccessibilityContext";

import Header from "@/components/ui/header";
import Home from "@/pages/Index.tsx";
import Profile from "@/pages/Profile";
import Resources from "@/pages/Resources";
import SOS from "@/pages/SOS";
import Assessment from "@/pages/Assessment";
import DailyCheckin from "@/pages/DailyCheckin";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import DisabilityCheck from "@/pages/DisabilityCheck"; // ✅ import the page
const App = () => {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        {/* Header is always visible */}
        <Header />

        {/* Main routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/daily-checkin" element={<DailyCheckin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/disability-check" element={<DisabilityCheck />} />
        </Routes>

        {/* Toast notifications */}
        <Toaster position="top-right" />
      </BrowserRouter>
    </AccessibilityProvider>
  );
};

export default App;
