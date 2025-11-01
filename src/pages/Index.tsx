import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Brain, Calendar, BarChart3, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Neural network predictions for attendance patterns and student engagement",
    },
    {
      icon: Calendar,
      title: "Smart Attendance",
      description: "Efficient attendance tracking with real-time analytics",
    },
    {
      icon: BarChart3,
      title: "Activity Management",
      description: "Comprehensive curriculum and course activity tracking",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Data-driven insights to improve student outcomes",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full gradient-primary shadow-elegant">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            NeuralAttend
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Smart Curriculum Activity & Attendance Management powered by Artificial Neural Networks
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-primary text-lg px-8 shadow-elegant" asChild>
              <Link to="/auth">
                <Users className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border-2 border-border shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 rounded-2xl bg-card border-2 border-border shadow-card">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose NeuralAttend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">94.5%</div>
              <div className="text-muted-foreground">Average Attendance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
              <div className="text-muted-foreground">Students Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">AI Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
