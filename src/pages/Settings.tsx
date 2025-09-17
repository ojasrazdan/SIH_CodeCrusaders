import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Bell, Moon, Sun, Volume2, VolumeX, Globe, Lock, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [dataCollection, setDataCollection] = useState(true);
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export",
      description: "Your data export will be sent to your email shortly.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Please contact support to delete your account.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your preferences and account settings
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications and reminders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="flex-1">
                  Push Notifications
                  <span className="block text-sm text-muted-foreground">
                    Receive reminders for daily check-ins and assessments
                  </span>
                </Label>
                <Switch
                  id="push-notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="sound" className="flex-1">
                  Sound Effects
                  <span className="block text-sm text-muted-foreground">
                    Play sounds for breathing exercises and notifications
                  </span>
                </Label>
                <Switch
                  id="sound"
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of the app
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="flex-1">
                  Dark Mode
                  <span className="block text-sm text-muted-foreground">
                    Switch to dark theme for better viewing in low light
                  </span>
                </Label>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Data */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Privacy & Data
              </CardTitle>
              <CardDescription>
                Control how your data is collected and used
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-collection" className="flex-1">
                  Analytics Data Collection
                  <span className="block text-sm text-muted-foreground">
                    Help improve the app by sharing anonymous usage data
                  </span>
                </Label>
                <Switch
                  id="data-collection"
                  checked={dataCollection}
                  onCheckedChange={setDataCollection}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Button
                  variant="outline"
                  onClick={handleExportData}
                  className="w-full justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Export My Data
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  className="w-full justify-start"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSaveSettings}
              className="bg-primary hover:bg-primary-dark"
            >
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;