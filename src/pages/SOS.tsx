import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, MessageCircle, Mail, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CRISIS_RESOURCES = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7 crisis support",
    type: "call"
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 text support",
    type: "text"
  },
  {
    name: "Campus Emergency",
    number: "(555) 123-HELP",
    description: "Campus security & counseling",
    type: "call"
  },
  {
    name: "Emergency Services",
    number: "911",
    description: "Medical emergency",
    type: "emergency"
  }
];

const CAMPUS_RESOURCES = [
  {
    name: "Counseling & Psychological Services",
    hours: "Mon-Fri: 8AM-5PM",
    phone: "(555) 123-4567",
    email: "counseling@university.edu",
    location: "Student Health Center, Room 200"
  },
  {
    name: "Dean of Students Office",
    hours: "Mon-Fri: 9AM-4PM", 
    phone: "(555) 123-4568",
    email: "deanofstudents@university.edu",
    location: "Administration Building, Room 150"
  },
  {
    name: "Campus Health Services",
    hours: "24/7 Emergency, Mon-Fri: 8AM-6PM Regular",
    phone: "(555) 123-4569",
    email: "health@university.edu",
    location: "Student Health Center"
  }
];

const SOS = () => {
  const { toast } = useToast();

  const handleEmergencyCall = (number: string, name: string) => {
    toast({
      title: `Connecting to ${name}`,
      description: `Calling ${number}... Stay on the line, help is coming.`,
      variant: "destructive",
    });
    // In a real app, this would initiate a call
    window.open(`tel:${number.replace(/[^0-9]/g, '')}`);
  };

  const handleEmergencyText = () => {
    toast({
      title: "Opening Text Message",
      description: "Text HOME to 741741 for immediate support",
    });
    // In a real app, this would open SMS
    window.open("sms:741741?body=HOME");
  };

  const notifyEmergencyContact = () => {
    toast({
      title: "Emergency Contact Notified",
      description: "Your emergency contact has been sent your location and a request for help.",
      variant: "destructive",
    });
    // In a real app, this would send notifications to emergency contacts
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <AlertTriangle className="mx-auto h-16 w-16 text-emergency mb-4" />
          <h1 className="text-3xl font-bold text-emergency mb-2">Emergency Support</h1>
          <p className="text-muted-foreground">
            Immediate help and resources when you need them most
          </p>
        </div>

        {/* Immediate Crisis Support */}
        <Card className="mb-8 shadow-wellness border-emergency/20">
          <CardHeader className="bg-emergency/5">
            <CardTitle className="text-emergency flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Immediate Crisis Support
            </CardTitle>
            <CardDescription>
              If you're in immediate danger or having thoughts of self-harm, please reach out now
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {CRISIS_RESOURCES.map((resource) => (
                <Card key={resource.name} className="border-emergency/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{resource.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <Button
                      className="w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground"
                      onClick={() => {
                        if (resource.type === "text") {
                          handleEmergencyText();
                        } else {
                          handleEmergencyCall(resource.number, resource.name);
                        }
                      }}
                    >
                      {resource.type === "text" ? (
                        <MessageCircle className="mr-2 h-4 w-4" />
                      ) : (
                        <Phone className="mr-2 h-4 w-4" />
                      )}
                      {resource.number}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact Notification */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-warning flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Notify Emergency Contact
            </CardTitle>
            <CardDescription>
              Send an immediate alert to your emergency contact with your location
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={notifyEmergencyContact}
              className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
              size="lg"
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              Send Emergency Alert
            </Button>
          </CardContent>
        </Card>

        {/* Campus Resources */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Campus Support Resources
            </CardTitle>
            <CardDescription>
              Professional mental health support available on campus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {CAMPUS_RESOURCES.map((resource) => (
                <div key={resource.name} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">{resource.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${resource.phone}`} className="text-primary hover:underline">
                        {resource.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${resource.email}`} className="text-primary hover:underline">
                        {resource.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-4 w-4 text-muted-foreground">📍</span>
                      <span>{resource.location}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`tel:${resource.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${resource.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Information */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-center">Remember</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              You are not alone. Seeking help is a sign of strength, not weakness.
              These resources are confidential and here to support you.
            </p>
            <p className="text-sm text-muted-foreground">
              If you're not in immediate crisis but need support, consider visiting our 
              <a href="/resources" className="text-primary hover:underline ml-1">Resources page</a> or 
              <a href="/daily-checkin" className="text-primary hover:underline ml-1">Daily Check-in</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SOS;