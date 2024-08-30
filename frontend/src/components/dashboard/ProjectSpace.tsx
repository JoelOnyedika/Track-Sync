import * as LucideIcons from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { projectData } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function ProjectSpace() {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <main className="flex-1 p-4 md:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="text-center md:text-left space-y-1 mb-4 md:mb-0">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome to your project management dashboard.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Dialog>
                  <DialogTrigger>
                    <Button className="w-full">Create New Project</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Enter project name</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <span className="text-muted-foreground">
                        Enter a name for your new project.
                      </span>{" "}
                    </DialogDescription>
                    <Input
                      placeholder="Project Name"
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                    <small className="text-red-400">
                      {projectName.length < 4 &&
                        "Project name must be at least 4 characters"}
                    </small>
                    <Button
                      className="w-full"
                      variant="default"
                      disabled={projectName.length < 4}
                    >
                      Create Project
                    </Button>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger>
                    <Button variant="outline" className="w-full">
                      Join Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Enter project Link 🔗</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <span className="text-muted-foreground">
                        Enter the URL link for your project.
                      </span>{" "}
                    </DialogDescription>
                    <Input
                      placeholder="Project Link"
                      value={projectLink}
                      onChange={(e) => setProjectLink(e.target.value)}
                    />
                    <small className="text-red-400">
                      {projectLink.length < 4 &&
                        "Project link must be at least 4 characters"}
                    </small>
                    <Button
                      className="w-full"
                      variant="default"
                      disabled={projectLink.length < 4}
                    >
                      Join Project
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectData.map((project, index) => (
                <Link
                  to="/dashboard/7/overview"
                  className="border hover:border-4 hover:border-blue-300 rounded-lg"
                >
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="grid gap-1">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto"
                          >
                            <LucideIcons.MoveHorizontal className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">
                          {project.status}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {project.progress}%
                        </div>
                      </div>
                      <Progress
                        value={project.progress}
                        aria-label="Project progress"
                      />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
