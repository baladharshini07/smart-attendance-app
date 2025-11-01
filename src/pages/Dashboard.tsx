import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Calendar, Users, TrendingUp, BookOpen, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Total Students", value: "245", icon: Users, color: "text-primary" },
    { label: "Attendance Rate", value: "94.5%", icon: TrendingUp, color: "text-secondary" },
    { label: "Active Courses", value: "12", icon: BookOpen, color: "text-accent" },
    { label: "AI Insights", value: "8", icon: Brain, color: "text-primary" },
  ];

  const recentActivities = [
    { title: "Mathematics 101", time: "2 hours ago", attendance: "92%" },
    { title: "Physics Lab", time: "4 hours ago", attendance: "88%" },
    { title: "Chemistry Theory", time: "1 day ago", attendance: "95%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's your overview</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/attendance">
                <Calendar className="mr-2 h-4 w-4" />
                Mark Attendance
              </Link>
            </Button>
            <Button className="gradient-primary" asChild>
              <Link to="/activities">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Activities
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Insights */}
          <Card className="shadow-card border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI-Powered Insights
              </CardTitle>
              <CardDescription>
                Neural network predictions and patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold mb-2 text-primary">Attendance Prediction</h4>
                <p className="text-sm text-muted-foreground">
                  Expected 96% attendance for next week based on historical patterns
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold mb-2 text-secondary">Risk Alert</h4>
                <p className="text-sm text-muted-foreground">
                  3 students showing declining attendance trends - early intervention recommended
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold mb-2 text-accent">Engagement Pattern</h4>
                <p className="text-sm text-muted-foreground">
                  Tuesday morning classes have highest engagement rates
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="shadow-card border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:border-primary transition-smooth"
                  >
                    <div>
                      <h4 className="font-semibold">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{activity.attendance}</div>
                      <div className="text-xs text-muted-foreground">Attendance</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
