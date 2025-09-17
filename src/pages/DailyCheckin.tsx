import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Droplets, Smile, Frown, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAccessibility } from "../hooks/AccessibilityContext";

const MOOD_LABELS = ["Very Low", "Low", "Okay", "Good", "Great"];
const ENERGY_LABELS = ["Exhausted", "Tired", "Moderate", "Energetic", "Very Energetic"];

const QUICK_ACTIVITIES = [
  "Spent time outdoors",
  "Exercised or moved my body", 
  "Connected with friends/family",
  "Practiced mindfulness",
  "Got enough sleep",
  "Ate healthy meals",
  "Accomplished a goal",
  "Helped someone else",
  "Learned something new",
  "Took a break when needed"
];

const DailyCheckin = () => {
  const { ttsEnabled, speakText, highContrast, adhdMode } = useAccessibility();
  const containerRef = useRef<HTMLDivElement>(null);

  const [checkinData, setCheckinData] = useState({
    mood: [3],
    energy: [3],
    gratitude: "",
    challenge: "",
    tomorrow: "",
    activities: [] as string[],
    waterIntake: [4], // glasses of water
    sleepHours: [7]
  });

  const { toast } = useToast();

  // Speak content when any relevant state changes
  useEffect(() => {
    if (ttsEnabled && containerRef.current) {
      speakText(containerRef.current.textContent || "");
    }
  }, [ttsEnabled, checkinData, speakText]);

  const handleActivityToggle = (activity: string) => {
    setCheckinData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = () => {
    const moodLevel = MOOD_LABELS[checkinData.mood[0] - 1];
    const energyLevel = ENERGY_LABELS[checkinData.energy[0] - 1];
    
    toast({
      title: "Daily Check-in Complete! 🌟",
      description: `Mood: ${moodLevel}, Energy: ${energyLevel}. Great job taking care of yourself today!`,
    });

    // Reset form
    setCheckinData({
      mood: [3],
      energy: [3], 
      gratitude: "",
      challenge: "",
      tomorrow: "",
      activities: [],
      waterIntake: [4],
      sleepHours: [7]
    });
  };

  const getMoodEmoji = (value: number) => {
    const emojis = ["😢", "😔", "😐", "🙂", "😊"];
    return emojis[value - 1];
  };

  const getEnergyColor = (value: number) => {
    if (value <= 2) return "text-emergency";
    if (value <= 3) return "text-warning";
    return "text-secondary";
  };

  const containerClasses = `min-h-screen p-4 ${highContrast ? "bg-black text-white" : "bg-gradient-soft text-foreground"} ${adhdMode ? "text-lg font-sans" : ""}`;

  return (
    <div ref={containerRef} className={containerClasses}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">Daily Check-in</h1>
          <p className="text-muted-foreground">
            Take a moment to reflect on your day and plan for tomorrow
          </p>
        </div>

        <div className="grid gap-6">
          {/* Mood & Energy */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  How are you feeling today?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{getMoodEmoji(checkinData.mood[0])}</div>
                    <div className="text-lg font-medium">
                      {MOOD_LABELS[checkinData.mood[0] - 1]}
                    </div>
                  </div>
                  <Slider
                    value={checkinData.mood}
                    onValueChange={(value) => setCheckinData(prev => ({ ...prev, mood: value }))}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  Energy Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getEnergyColor(checkinData.energy[0])}`}>
                      {checkinData.energy[0]}/5
                    </div>
                    <div className="text-lg font-medium">
                      {ENERGY_LABELS[checkinData.energy[0] - 1]}
                    </div>
                  </div>
                  <Slider
                    value={checkinData.energy}
                    onValueChange={(value) => setCheckinData(prev => ({ ...prev, energy: value }))}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Wellness Tracking */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  Water Intake
                </CardTitle>
                <CardDescription>How many glasses of water did you drink?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <div className="text-2xl font-bold text-blue-500">{checkinData.waterIntake[0]} glasses</div>
                  <Slider
                    value={checkinData.waterIntake}
                    onValueChange={(value) => setCheckinData(prev => ({ ...prev, waterIntake: value }))}
                    max={12}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Sleep Quality</CardTitle>
                <CardDescription>How many hours did you sleep last night?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <div className="text-2xl font-bold text-wellness">{checkinData.sleepHours[0]} hours</div>
                  <Slider
                    value={checkinData.sleepHours}
                    onValueChange={(value) => setCheckinData(prev => ({ ...prev, sleepHours: value }))}
                    max={12}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activities */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Today's Positive Activities</CardTitle>
              <CardDescription>Select the activities you did today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {QUICK_ACTIVITIES.map((activity) => (
                  <Badge
                    key={activity}
                    variant={checkinData.activities.includes(activity) ? "default" : "outline"}
                    className="p-3 cursor-pointer text-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => handleActivityToggle(activity)}
                  >
                    {activity}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reflections */}
          <div className="grid md:grid-cols-1 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Gratitude & Reflection</CardTitle>
                <CardDescription>What are you grateful for today?</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={checkinData.gratitude}
                  onChange={(e) => setCheckinData(prev => ({ ...prev, gratitude: e.target.value }))}
                  placeholder="I'm grateful for..."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Today's Challenge</CardTitle>
                  <CardDescription>What was difficult about today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={checkinData.challenge}
                    onChange={(e) => setCheckinData(prev => ({ ...prev, challenge: e.target.value }))}
                    placeholder="Today was challenging because..."
                    className="min-h-[80px]"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Tomorrow's Intention</CardTitle>
                  <CardDescription>What do you want to focus on tomorrow?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={checkinData.tomorrow}
                    onChange={(e) => setCheckinData(prev => ({ ...prev, tomorrow: e.target.value }))}
                    placeholder="Tomorrow I will..."
                    className="min-h-[80px]"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-wellness text-wellness-foreground hover:bg-wellness px-8 py-3 text-lg"
              size="lg"
            >
              Complete Check-in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckin;
