import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Calendar, FileText, AlertTriangle, Brain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ className }: { className?: string }) => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: Heart, label: "Home" },
    { to: "/assessment", icon: Brain, label: "Assessment" },
    { to: "/resources", icon: FileText, label: "Resources" },
    { to: "/daily-checkin", icon: Calendar, label: "Daily Check-in" },
    { to: "/sos", icon: AlertTriangle, label: "SOS" },
  ];

  return (
    <nav className={cn("flex items-center space-x-1", className)}>
      {navItems.map(({ to, icon: Icon, label }) => {
        const isActive = location.pathname === to;
        return (
          <Button
            key={to}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            asChild
            className={cn(
              "h-9 px-3 rounded-lg transition-smooth",
              isActive 
                ? "bg-primary text-primary-foreground shadow-gentle" 
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Link to={to} className="flex items-center gap-2">
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};

export default Navigation;