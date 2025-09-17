import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, PlusCircle, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Vault = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl text-center">
        <Lock className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thought Vault</h1>
        <p className="text-muted-foreground mb-8">
          An encrypted, safe space for your thoughts and feelings.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <Card>
                <CardHeader>
                    <CardTitle>New Entry</CardTitle>
                    <CardDescription>Express yourself freely.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button><PlusCircle className="mr-2"/>Write a new entry</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>A summary of your thoughts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p><strong>Total Entries:</strong> 12</p>
                    <p><strong>Total Words:</strong> 1,589</p>
                    <div className="flex gap-2 mt-2">
                        <Badge variant="destructive">Angry: 3</Badge>
                        <Badge variant="secondary">Sad: 5</Badge>
                        <Badge>Anxious: 4</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card className="text-left">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen /> Recent Entries</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="border-b pb-4 mb-4">
                    <p className="font-semibold">My Dream Last Night</p>
                    <p className="text-sm text-muted-foreground">Type: Dream | Mood: Anxious</p>
                </div>
                <div>
                    <p className="font-semibold">Frustrations from today</p>
                    <p className="text-sm text-muted-foreground">Type: Vent | Mood: Angry</p>
                </div>
            </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Vault;