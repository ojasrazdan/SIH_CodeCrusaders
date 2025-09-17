import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, FileText, Calendar, AlertTriangle, Shield, Users, CheckCircle, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import { useAccessibility } from "../hooks/AccessibilityContext";

const FEATURES = [
  {
    icon: Brain,
    title: "Mental Health Assessment",
    description: "Take confidential PHQ-9 and GAD-7 assessments to understand your mental health",
    link: "/assessment",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: FileText,
    title: "Support Resources",
    description: "Access evidence-based articles and guided breathing exercises",
    link: "/resources", 
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Calendar,
    title: "Daily Check-in",
    description: "Track your mood, energy, and daily wellness activities",
    link: "/daily-checkin",
    color: "text-wellness",
    bgColor: "bg-wellness/10"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Support",
    description: "Immediate access to crisis resources and campus counseling",
    link: "/sos",
    color: "text-emergency",
    bgColor: "bg-emergency/10"
  },
  {
    icon: Accessibility,
    title: "Disability Check",
    description: "Enable accessibility features like text-to-speech, ADHD-friendly UI, and more",
    link: "/disability-check",
    color: "text-green-600",
    bgColor: "bg-green-100"
  }
];

const STATS = [
  { number: "1 in 5", label: "Students experience mental health challenges" },
  { number: "24/7", label: "Crisis support available" },
  { number: "100%", label: "Anonymous and confidential" },
  { number: "Evidence-based", label: "Clinically validated tools" }
];

const Index = () => {
  const { ttsEnabled, speakText, highContrast, adhdMode } = useAccessibility();

  const handleSpeak = (text: string) => {
    if (ttsEnabled && speakText) speakText(text);
  };

  return (
    <div
      className={`min-h-screen ${
        highContrast ? "bg-black text-white" : "bg-gradient-soft"
      } ${adhdMode ? "text-lg font-sans" : ""}`}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Shield className="mr-2 h-4 w-4" />
              Confidential & Anonymous
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-calm bg-clip-text text-transparent">
              MindCare
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your digital companion for mental health and psychological support designed specifically for students in higher education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark shadow-gentle"
                onClick={() => handleSpeak("Navigating to Mental Health Assessment")}
              >
                <Link to="/assessment">
                  <Brain className="mr-2 h-5 w-5" />
                  Take Assessment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="shadow-card"
                onClick={() => handleSpeak("Navigating to Support Resources")}
              >
                <Link to="/resources">
                  <FileText className="mr-2 h-5 w-5" />
                  Browse Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access professional-grade tools and resources designed to support your mental wellbeing throughout your academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="shadow-card hover:shadow-wellness transition-smooth group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    onClick={() => handleSpeak(`Navigating to ${feature.title}`)}
                  >
                    <Link to={feature.link}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Accessibility Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-primary" />
                Privacy First
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>Complete anonymity - no personal information required</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>End-to-end encryption for all data</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>No tracking or data sharing with third parties</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="mr-3 h-6 w-6 text-secondary" />
                Accessibility
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>Text-to-speech support for visually impaired students</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>ADHD-friendly interface with clear, simple design</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>Audio and visual learning resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to prioritize your mental health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are taking control of their mental wellbeing with evidence-based tools and compassionate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-wellness text-wellness-foreground hover:bg-wellness shadow-wellness"
              onClick={() => handleSpeak("Starting Daily Check-in")}
            >
              <Link to="/daily-checkin">
                <Calendar className="mr-2 h-5 w-5" />
                Start Daily Check-in
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-card"
              onClick={() => handleSpeak("Accessing Emergency Support")}
            >
              <Link to="/sos">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Access Emergency Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
