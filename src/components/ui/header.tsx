import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAccessibility } from "@/hooks/AccessibilityContext";
import { Button } from "@/components/ui/button";
import Navigation from "./navigation";
import { Settings, User, Accessibility } from "lucide-react"; // you can use Accessibility icon or any icon you like

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
        {/* Logo / App name */}
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Navigation menu */}
        <Navigation />

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
          {/* Accessibility toggle */}
          <Button
            size="sm"
            variant={isAccessibleMode ? "default" : "outline"}
            onClick={toggleAccessibility}
          >
            {isAccessibleMode ? "Accessibility ON" : "Accessibility OFF"}
          </Button>

          {/* DisabilityCheck page link */}
          <Link
            to="/disability-check"
            className="flex items-center gap-1 text-primary hover:underline"
          >
            <Accessibility className="h-5 w-5" />
            Check Accessibility
          </Link>

          {/* Profile & Settings */}
          <Link to="/profile">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/settings">
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
