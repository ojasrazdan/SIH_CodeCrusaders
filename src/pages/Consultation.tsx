import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Phone, User } from "lucide-react";

const Consultation = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Book a Consultation</h1>
        <p className="text-muted-foreground text-center mb-8">
          Connect with a professional for guidance and support.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Video className="mx-auto h-10 w-10 text-primary mb-2"/>
              <CardTitle>Video Call</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Phone className="mx-auto h-10 w-10 text-primary mb-2"/>
              <CardTitle>Phone Call</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <User className="mx-auto h-10 w-10 text-primary mb-2"/>
              <CardTitle>In-Person</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Consultation;