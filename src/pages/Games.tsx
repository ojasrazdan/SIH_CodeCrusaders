import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplet, Wind } from "lucide-react"; // Example icons
import { useAccessibility } from "@/hooks/AccessibilityContext";

const GAMES = [
  {
    icon: Leaf,
    title: "Zen Garden",
    description: "For quiet meditation and calm.",
    tag: "#Relaxation",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Droplet,
    title: "Focus Flow",
    description: "Guide a stream through obstacles with mindful attention.",
    tag: "#Focus",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Wind,
    title: "Breathing Orb",
    description: "Sync your breath with a calming visual guide.",
    tag: "#Breathing",
    color: "text-wellness",
    bgColor: "bg-wellness/10"
  },
];

const Games = () => {
  const { highContrast, adhdMode } = useAccessibility();

  return (
    <div
      className={`min-h-screen p-4 ${
        highContrast ? "bg-black text-white" : "bg-gradient-soft"
      } ${adhdMode ? "text-lg font-sans" : ""}`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Mindful Activities</h1>
          <p className="text-muted-foreground">
            Take a break to relax, refocus, and build resilience through play.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES.map((game) => (
            <Card
              key={game.title}
              className="shadow-card hover:shadow-wellness transition-smooth group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${game.bgColor} flex items-center justify-center mb-4`}
                >
                  <game.icon className={`h-6 w-6 ${game.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{game.title}</CardTitle>
                <CardDescription className="text-base">
                  {game.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  Play
                </Button>
                <Badge variant="outline">{game.tag}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;