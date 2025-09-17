import { cn } from "@/lib/utils";
import Navigation from "./navigation";
import { Button } from "./button";
import { Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm",
      className
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold bg-gradient-calm bg-clip-text text-transparent">
            MindCare
          </h1>
          <Navigation className="hidden md:flex" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="rounded-lg" asChild>
            <Link to="/settings">
              <Settings size={16} className="mr-2" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg" asChild>
            <Link to="/profile">
              <User size={16} className="mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <Navigation className="justify-center" />
        </div>
      </div>
    </header>
  );
};

export default Header;