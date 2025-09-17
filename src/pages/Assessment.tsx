import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAccessibility } from "../hooks/AccessibilityContext";

const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure",
  "Trouble concentrating on things",
  "Moving or speaking slowly or being restless",
  "Thoughts that you would be better off dead"
];

const GAD7_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen"
];

const RESPONSE_OPTIONS = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

const Assessment = () => {
  const { ttsEnabled, speakText, highContrast, adhdMode } = useAccessibility();
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentQuiz, setCurrentQuiz] = useState<"select" | "phq9" | "gad7">("select");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const { toast } = useToast();

  // Speak content when page or question changes
  useEffect(() => {
    if (ttsEnabled && containerRef.current) {
      speakText(containerRef.current.textContent || "");
    }
  }, [ttsEnabled, currentQuiz, currentQuestion, speakText]);

  const getCurrentQuestions = () => currentQuiz === "phq9" ? PHQ9_QUESTIONS : GAD7_QUESTIONS;

  const handleResponse = (value: string) => {
    setResponses(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
    const questions = getCurrentQuestions();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  const calculateResults = () => {
    const total = Object.values(responses).reduce((sum, val) => sum + parseInt(val), 0);
    const quizType = currentQuiz === "phq9" ? "Depression (PHQ-9)" : "Anxiety (GAD-7)";
    
    let severity = "";
    let recommendations = "";

    if (currentQuiz === "phq9") {
      if (total <= 4) {
        severity = "Minimal";
        recommendations = "Great job maintaining your mental health! Continue with daily check-ins and self-care.";
      } else if (total <= 9) {
        severity = "Mild";
        recommendations = "Consider exploring our breathing exercises and wellness resources to support your mood.";
      } else if (total <= 14) {
        severity = "Moderate";
        recommendations = "Daily check-ins and professional support could be beneficial. Visit our SOS page for immediate resources.";
      } else if (total <= 19) {
        severity = "Moderately Severe";
        recommendations = "Professional support is recommended. Please reach out to campus counseling services.";
      } else {
        severity = "Severe";
        recommendations = "Please seek immediate professional help. Visit our SOS page or contact emergency services if needed.";
      }
    } else {
      if (total <= 4) {
        severity = "Minimal";
        recommendations = "Your anxiety levels appear manageable. Keep up with regular wellness activities!";
      } else if (total <= 9) {
        severity = "Mild";
        recommendations = "Try our breathing exercises and stress management resources to help manage anxiety.";
      } else if (total <= 14) {
        severity = "Moderate";
        recommendations = "Consider professional support and explore our anxiety management resources.";
      } else {
        severity = "Severe";
        recommendations = "Professional support is strongly recommended. Please contact campus counseling services.";
      }
    }

    toast({
      title: `${quizType} Assessment Complete`,
      description: `Score: ${total} - ${severity} level. ${recommendations}`,
      duration: 8000,
    });

    setTimeout(() => {
      toast({
        title: "Next Steps",
        description: "Visit Resources for helpful articles and Daily Check-in to track your progress.",
        action: (
          <div className="flex gap-2">
            <button 
              onClick={() => window.location.href = '/resources'}
              className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded"
            >
              Resources
            </button>
            <button 
              onClick={() => window.location.href = '/daily-checkin'}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
            >
              Daily Check-in
            </button>
          </div>
        ),
        duration: 10000,
      });
    }, 2000);

    setCurrentQuiz("select");
    setCurrentQuestion(0);
    setResponses({});
  };

  const progress = currentQuiz !== "select" 
    ? ((currentQuestion + 1) / getCurrentQuestions().length) * 100 
    : 0;

  const containerClasses = `min-h-screen p-4 ${highContrast ? "bg-black text-white" : "bg-gradient-soft text-foreground"} ${adhdMode ? "text-lg font-sans" : ""}`;

  if (currentQuiz === "select") {
    return (
      <div ref={containerRef} className={containerClasses}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Brain className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-3xl font-bold mb-2">Mental Health Assessment</h1>
            <p className="text-muted-foreground">
              Take a confidential assessment to better understand your mental health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-wellness transition-smooth cursor-pointer" 
                  onClick={() => setCurrentQuiz("phq9")}>
              <CardHeader>
                <CardTitle className="text-primary">PHQ-9 Depression Assessment</CardTitle>
                <CardDescription>
                  A 9-question screening tool to assess depression symptoms over the past 2 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  Start PHQ-9 Assessment
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-wellness transition-smooth cursor-pointer"
                  onClick={() => setCurrentQuiz("gad7")}>
              <CardHeader>
                <CardTitle className="text-secondary">GAD-7 Anxiety Assessment</CardTitle>
                <CardDescription>
                  A 7-question screening tool to assess anxiety symptoms over the past 2 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary hover:bg-secondary-dark">
                  Start GAD-7 Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Privacy & Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Your responses are completely anonymous and stored securely. 
                This assessment is for informational purposes and not a substitute for professional diagnosis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const questions = getCurrentQuestions();
  const currentQuestionText = questions[currentQuestion];

  return (
    <div ref={containerRef} className={containerClasses}>
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">
              {currentQuiz === "phq9" ? "PHQ-9 Depression Assessment" : "GAD-7 Anxiety Assessment"}
            </h1>
            <Button 
              variant="outline" 
              onClick={() => {
                setCurrentQuiz("select");
                setCurrentQuestion(0);
                setResponses({});
              }}
            >
              Exit Assessment
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">
              Over the last 2 weeks, how often have you been bothered by...
            </CardTitle>
            <CardDescription className="text-base font-medium">
              {currentQuestionText}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={responses[currentQuestion] || ""} 
              onValueChange={handleResponse}
              className="space-y-3"
            >
              {RESPONSE_OPTIONS.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft size={16} className="mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!responses[currentQuestion]}
                className="bg-primary hover:bg-primary-dark"
              >
                {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
