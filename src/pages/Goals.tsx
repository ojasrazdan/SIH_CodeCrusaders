import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Award } from "lucide-react"; // Corrected this line

const Goals = () => {
  const completedGoals = 5;
  const totalGoals = 8;
  const completionRate = (completedGoals / totalGoals) * 100;

  const goalCategories = [
    { name: "Digital", description: "Reduce screentime by 20%", progress: 60 },
    { name: "Physical", description: "Walk 10,000 steps daily", progress: 85 },
    { name: "Mindfulness", description: "15 minutes of daily yoga", progress: 40 },
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Goals</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle className="text-success" /> Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{completedGoals}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Target /> Total Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalGoals}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={completionRate} className="w-full" />
              <p className="text-center mt-2">{completionRate.toFixed(0)}%</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Goals completed within their deadlines.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
                <Badge variant="success"><Award className="mr-2"/>Streak Master</Badge>
                <Badge variant="success"><Award className="mr-2"/>Mindfulness Champion</Badge>
                <Badge variant="outline">Early Bird</Badge>
            </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Goal Categories</h2>
          <div className="space-y-4">
            {goalCategories.map((goal) => (
              <Card key={goal.name}>
                <CardHeader>
                  <CardTitle>{goal.name}</CardTitle>
                  <CardDescription>{goal.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={goal.progress} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;