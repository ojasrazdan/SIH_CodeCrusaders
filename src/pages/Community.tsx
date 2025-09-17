import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Rss } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Community Forum</h1>
        <p className="text-muted-foreground text-center mb-8">
          A safe and anonymous space to share and connect.
        </p>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Rss/> Recent Posts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="border-b pb-4">
                    <p className="font-semibold mb-2">Feeling overwhelmed with exams. Any tips?</p>
                    <p className="text-sm text-muted-foreground">Posted by Anonymous | 2 hours ago</p>
                    <Button variant="link" className="p-0 h-auto mt-2">View 5 replies</Button>
                </div>
                <div className="border-b pb-4">
                    <p className="font-semibold mb-2">I started practicing mindfulness and it's helping!</p>
                    <p className="text-sm text-muted-foreground">Posted by Anonymous | 1 day ago</p>
                    <Button variant="link" className="p-0 h-auto mt-2">View 12 replies</Button>
                </div>
                 <div>
                    <Button><MessageSquare className="mr-2"/>Start a new discussion</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;