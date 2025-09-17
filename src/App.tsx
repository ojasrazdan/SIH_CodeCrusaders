import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AccessibilityProvider } from "@/hooks/AccessibilityContext";

// Core Components
import Header from "@/components/ui/header";
import { Chatbot } from "@/components/ui/chatbot";

// All Page Imports
import Home from "@/pages/Index";
import Profile from "@/pages/Profile";
import Resources from "@/pages/Resources";
import SOS from "@/pages/SOS";
import Assessment from "@/pages/Assessment";
import DailyCheckin from "@/pages/DailyCheckin";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import DisabilityCheck from "@/pages/DisabilityCheck";
import Games from "@/pages/Games";
import Goals from "@/pages/Goals";
import Vault from "@/pages/Vault";
import Rewards from "@/pages/Rewards";
import Community from "@/pages/Community";
import Consultation from "@/pages/Consultation";

const App = () => {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/daily-checkin" element={<DailyCheckin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/disability-check" element={<DisabilityCheck />} />
          <Route path="/games" element={<Games />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/community" element={<Community />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
        <Chatbot />
      </BrowserRouter>
    </AccessibilityProvider>
  );
};

export default App;