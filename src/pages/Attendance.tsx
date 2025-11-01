import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, CheckCircle2, XCircle, User } from "lucide-react";

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const students = [
    { id: 1, name: "Alice Johnson", rollNo: "CS001", status: null },
    { id: 2, name: "Bob Smith", rollNo: "CS002", status: null },
    { id: 3, name: "Charlie Brown", rollNo: "CS003", status: null },
    { id: 4, name: "Diana Prince", rollNo: "CS004", status: null },
    { id: 5, name: "Ethan Hunt", rollNo: "CS005", status: null },
  ];

  const [attendanceList, setAttendanceList] = useState(students);

  const markAttendance = (id: number, status: "present" | "absent") => {
    setAttendanceList(prev =>
      prev.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const filteredStudents = attendanceList.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mark Attendance
          </h1>
          <p className="text-muted-foreground mt-1">Track student presence efficiently</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-card border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{attendanceList.length}</div>
            </CardContent>
          </Card>
          <Card className="shadow-card border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Present
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {attendanceList.filter(s => s.status === "present").length}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Absent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {attendanceList.filter(s => s.status === "absent").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Card */}
        <Card className="shadow-card border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Student List
            </CardTitle>
            <CardDescription>Mark attendance for today's session</CardDescription>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or roll number..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:border-primary transition-smooth"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.rollNo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {student.status ? (
                      <Badge
                        variant={student.status === "present" ? "default" : "destructive"}
                        className="min-w-[80px] justify-center"
                      >
                        {student.status === "present" ? "Present" : "Absent"}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="min-w-[80px] justify-center">
                        Not Marked
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => markAttendance(student.id, "present")}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-destructive hover:bg-destructive hover:text-white"
                      onClick={() => markAttendance(student.id, "absent")}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
