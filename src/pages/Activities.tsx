import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Plus, Brain } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Mathematics 101",
      instructor: "Dr. Sarah Johnson",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      students: 45,
      completion: 78,
      aiScore: 94,
    },
    {
      id: 2,
      title: "Physics Laboratory",
      instructor: "Prof. Michael Chen",
      schedule: "Tue, Thu - 2:00 PM",
      students: 38,
      completion: 85,
      aiScore: 91,
    },
    {
      id: 3,
      title: "Computer Science",
      instructor: "Dr. Emily Brown",
      schedule: "Mon, Wed - 11:00 AM",
      students: 52,
      completion: 92,
      aiScore: 96,
    },
    {
      id: 4,
      title: "Chemistry Theory",
      instructor: "Prof. David Lee",
      schedule: "Tue, Thu - 10:00 AM",
      students: 41,
      completion: 88,
      aiScore: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Curriculum Activities
            </h1>
            <p className="text-muted-foreground mt-1">Manage courses and track progress</p>
          </div>
          <Button className="gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <Card key={activity.id} className="shadow-card hover:shadow-elegant transition-smooth border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                      <CardDescription className="mt-1">{activity.instructor}</CardDescription>
                    </div>
                  </div>
                  <Badge className="gradient-secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Schedule */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{activity.schedule}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50 border border-border">
                    <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <div className="text-2xl font-bold">{activity.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50 border border-border">
                    <BookOpen className="h-4 w-4 mx-auto mb-1 text-secondary" />
                    <div className="text-2xl font-bold">{activity.completion}%</div>
                    <div className="text-xs text-muted-foreground">Complete</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50 border border-border">
                    <Brain className="h-4 w-4 mx-auto mb-1 text-accent" />
                    <div className="text-2xl font-bold">{activity.aiScore}</div>
                    <div className="text-xs text-muted-foreground">AI Score</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Course Progress</span>
                    <span className="font-semibold">{activity.completion}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary transition-all duration-500"
                      style={{ width: `${activity.completion}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1">View Details</Button>
                  <Button className="flex-1 gradient-primary">Manage</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
