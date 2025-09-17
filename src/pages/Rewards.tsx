import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Star, ShoppingCart, ShieldCheck } from "lucide-react";

const Rewards = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Rewards & Progress</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-xl font-bold">Level 5</p>
              <p className="text-muted-foreground">XP: 250 / 500</p>
            </div>
            <div>
              <p className="text-xl font-bold">1,200</p>
              <p className="text-muted-foreground">Calm Points (CP)</p>
            </div>
            <Button variant="outline"><ShoppingCart className="mr-2"/>Redeem in Shop</Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Award /> Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>✅ 7-Day Meditation Streak</p>
              <p>✅ First Goal Completed</p>
              <p>⬜️ Drink 8 glasses of water for 3 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ShieldCheck /> Daily Challenges</CardTitle>
              <CardDescription>Earn XP by completing challenges.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="font-semibold">Write a journal entry (+50 XP)</p>
                    <Button size="sm" className="mt-1">Complete</Button>
                </div>
                <div>
                    <p className="font-semibold">Read a book for 15 minutes (+30 XP)</p>
                     <Button size="sm" variant="outline" className="mt-1">Completed</Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rewards;