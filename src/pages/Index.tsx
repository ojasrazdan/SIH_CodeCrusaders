import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  FileText,
  Calendar,
  Gamepad2,
  AlertTriangle,
  Target,
  Lock,
  Award,
  Users,
  Briefcase,
  Droplets,
  Plus,
  Minus,
  Accessibility, // Icon for the new card
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// --- THIS ARRAY IS NOW RESTORED ---
const features = [
  {
    to: "/goals",
    icon: Target,
    title: "Goals",
    description: "Set and track your personal goals.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    to: "/vault",
    icon: Lock,
    title: "Vault",
    description: "A safe space for your thoughts and feelings.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    to: "/games",
    icon: Gamepad2,
    title: "Games",
    description: "Mindful games to relax and focus.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    to: "/community",
    icon: Users,
    title: "Community",
    description: "Connect with others in a safe space.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    to: "/assessment",
    icon: Brain,
    title: "Assessment",
    description: "Understand your mental well-being.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    to: "/rewards",
    icon: Award,
    title: "Rewards",
    description: "Earn points and unlock achievements.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    to: "/consultation",
    icon: Briefcase,
    title: "Consultation",
    description: "Book a session with a professional.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    to: "/resources",
    icon: FileText,
    title: "Resources",
    description: "Articles, videos, and more.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    to: "/daily-checkin",
    icon: Calendar,
    title: "Daily Check-in",
    description: "Log your mood and track your progress.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    to: "/sos",
    icon: AlertTriangle,
    title: "SOS",
    description: "Immediate help in an emergency.",
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
  },
];

const Home = () => {
  const [waterCount, setWaterCount] = useState(2);

  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome to MindCare</h1>
          <p className="text-lg text-muted-foreground">
            Your digital companion for mental well-being, built for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Accessibility Hub Card */}
          <Link to="/settings" className="xl:col-span-2 flex">
            <Card className="shadow-card bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth group w-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <Accessibility className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Accessibility Hub</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Personalize your experience with high-contrast mode, ADHD-friendly fonts, and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="group-hover:underline">
                  Customize Your Settings
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Hydration Tracker */}
          <Card className="shadow-card xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Hydration Tracker</span>
                <Droplets className="text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold mb-4">
                {waterCount} / 8 glasses
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setWaterCount(Math.max(0, waterCount - 1))}
                >
                  <Minus />
                </Button>
                <Button size="icon" onClick={() => setWaterCount(waterCount + 1)}>
                  <Plus />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Other features are mapped here */}
          {features.map((feature) => (
            <Link to={feature.to} key={feature.to} className="flex">
              <Card className="shadow-card hover:shadow-wellness transition-smooth group w-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-primary group-hover:underline">
                    Go to {feature.title}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;