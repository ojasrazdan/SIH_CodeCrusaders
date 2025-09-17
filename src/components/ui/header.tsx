import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAccessibility } from "@/hooks/AccessibilityContext";
import { Button } from "@/components/ui/button";
import Navigation from "./navigation";
import { Settings, User } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { isAccessibleMode, toggleAccessibility } = useAccessibility();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Home link */}
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Navigation links */}
        <Navigation />

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          {/* Accessibility toggle */}
          <Button
            size="sm"
            variant={isAccessibleMode ? "default" : "outline"}
            onClick={toggleAccessibility}
          >
            {isAccessibleMode ? "Accessibility ON" : "Accessibility OFF"}
          </Button>

          {/* Profile and Settings */}
          <Link to="/profile" aria-label="Profile">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/settings" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
