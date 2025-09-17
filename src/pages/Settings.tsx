import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAccessibility } from "@/hooks/AccessibilityContext";
import { Contrast, BrainCircuit, Mic, User, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Settings = () => {
  // --- CORRECTED DESTRUCTURING ---
  const {
    highContrast,
    toggleHighContrast,
    adhdMode,
    toggleADHDMode, // Corrected: Was toggleAdhdMode
    ttsEnabled,       // Corrected: Was tts
    toggleTTS,        // Corrected: Was toggleTts
  } = useAccessibility();

  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>

        {/* --- ACCESSIBILITY SETTINGS (HIGHLIGHTED) --- */}
        <Card className="mb-8 border-primary border-2 shadow-lg">
          <CardHeader>
            <CardTitle>Accessibility Hub</CardTitle>
            <CardDescription>
              Customize the app's appearance and behavior to suit your needs. Your comfort is our priority.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-start space-x-4">
              <Contrast className="h-6 w-6 mt-1 text-primary" />
              <div className="flex-1">
                <Label htmlFor="high-contrast-mode" className="text-lg font-medium">
                  High Contrast Mode
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Increases text readability and reduces eye strain. Ideal for users with visual impairments.
                </p>
              </div>
              <Switch
                id="high-contrast-mode"
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
              />
            </div>

            <div className="flex items-start space-x-4">
              <BrainCircuit className="h-6 w-6 mt-1 text-primary" />
              <div className="flex-1">
                <Label htmlFor="adhd-mode" className="text-lg font-medium">
                  ADHD-Friendly Mode
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Uses larger, simpler fonts to improve focus and make reading feel less overwhelming.
                </p>
              </div>
              <Switch
                id="adhd-mode"
                checked={adhdMode}
                onCheckedChange={toggleADHDMode} // Corrected function call
              />
            </div>

            <div className="flex items-start space-x-4">
              <Mic className="h-6 w-6 mt-1 text-primary" />
              <div className="flex-1">
                <Label htmlFor="tts-mode" className="text-lg font-medium">
                  Enable Text-to-Speech
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Allows the app to read on-screen text aloud. Useful for users with visual impairments or reading difficulties.
                </p>
              </div>
              <Switch
                id="tts-mode"
                checked={ttsEnabled} // Corrected variable
                onCheckedChange={toggleTTS} // Corrected function call
              />
            </div>
          </CardContent>
        </Card>

        {/* --- ORIGINAL SETTINGS (RESTORED) --- */}
        <div className="space-y-8">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User /> Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Alex Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex.doe@example.com" />
              </div>
              <Button>Update Profile</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bell /> Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch id="email-notifications" />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield /> Security</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;