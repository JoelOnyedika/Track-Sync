import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import DashboardSidebar from "@/components/dashboard/DashSidebar";
import "../../index.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Overview() {
  const activityData = {
    today: [
      {
        user: "DS",
        name: "Darika Samak",
        action: "marked as done Listing on Product Hunt",
      },
      {
        user: "ES",
        name: "Emilee Simchenko",
        action: "commented on Account for teams and personal in bottom style",
      },
      {
        user: "DS",
        name: "Darika Samak",
        action:
          "uploaded 4 files on An option to search in current projects or in all projects",
      },
    ],
    yesterday: [
      {
        user: "DS",
        name: "Darika Samak",
        action:
          "uploaded 4 files on An option to search in current projects or in all projects",
      },
      {
        user: "DS",
        name: "Darika Samak",
        action: "edited Listing on Product Hunt to include new features",
      },
    ],
  };
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="md:flex sm:gap-4 sm:py-4">
        <div className="">
          <DashboardSidebar />
        </div>

        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>
                  Key metrics and progress for the current project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Progress</div>
                    <Progress value={75} className="w-1/2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Tasks Completed</div>
                    <div className="text-2xl font-bold">42/60</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Overdue Tasks</div>
                    <div className="text-2xl font-bold text-red-500">8</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Team Members</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  A summary of the latest project updates and changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "John Doe",
                      action: 'Completed task "Implement new feature"',
                      time: "2h ago",
                    },
                    {
                      name: "Jane Smith",
                      action: "Uploaded a new design file",
                      time: "1d ago",
                    },
                    {
                      name: "Michael Johnson",
                      action: 'Commented on task "Refactor codebase"',
                      time: "3d ago",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.time}
                          </div>
                        </div>
                        <p>{item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Milestones</CardTitle>
                <CardDescription>
                  Key project milestones and their due dates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Phase 1 Release",
                      date: "June 15, 2024",
                      status: "In Progress",
                    },
                    {
                      title: "User Testing",
                      date: "July 1, 2024",
                      status: "Upcoming",
                    },
                    {
                      title: "Phase 2 Release",
                      date: "August 1, 2024",
                      status: "Upcoming",
                    },
                  ].map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{milestone.title}</div>
                        <div className="text-xs text-muted-foreground">
                          Due: {milestone.date}
                        </div>
                      </div>
                      <Badge
                        variant={
                          milestone.status === "In Progress"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1">
              <CardHeader>
                <CardTitle>Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(activityData).map(([day, activities]) => (
                    <div key={day}>
                      <h2 className="text-sm font-semibold mb-2">
                        {day.toUpperCase()}
                      </h2>
                      <div className="space-y-4">
                        {activities.map((activity, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage
                                src="/placeholder-user.jpg"
                                alt="User"
                              />
                              <AvatarFallback>{activity.user}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>
                                <span className="font-medium">
                                  {activity.name}
                                </span>{" "}
                                {activity.action}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
