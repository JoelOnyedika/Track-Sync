import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import DashboardSidebar from "@/components/dashboard/DashSidebar";
import { NOTIFICATION_PREFERENCES, USER_ROLES } from "@/lib/constants";

export default function ProjectSettings() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <header className="flex items-center h-16 md:h-[0px] px-4 border-b">
        <nav className="font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
          <DashboardSidebar />
          <h1 className="font-semibold text-3xl">Settings</h1>
        </nav>
      </header>
      <main className="flex mx-0 flex-1 flex-col gap-4 md:gap-8 md:p-0">
        <div className="w-full grid gap-2" />
        <div className="grid md:grid-cols-[1fr] lg:grid-cols-[1fr] items-start gap-6">
          <div className="grid gap-6 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
                <CardDescription>
                  Update your project details and settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Project Name</Label>
                    <Input id="name" type="text" defaultValue="Acme Web App" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="A web application for managing Acme's operations."
                      className="min-h-32"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="grid gap-3">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="document-management">
                        Document Management
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="document-management"
                          aria-label="Select document management"
                        >
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google-drive">
                            Google Drive
                          </SelectItem>
                          <SelectItem value="dropbox">Dropbox</SelectItem>
                          <SelectItem value="onedrive">OneDrive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Roles</CardTitle>
                <CardDescription>
                  Manage user permissions and invite new team members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {USER_ROLES.map((data) => (
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={data.avatar} />
                            <AvatarFallback>{data.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{data.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {data.email}
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveVerticalIcon className="h-5 w-5" />
                              <span className="sr-only">User options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <FilePenIcon className="h-4 w-4 mr-2" />
                              Edit Role
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrashIcon className="h-4 w-4 mr-2" />
                              Remove User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{data.role}</Badge>
                        <div className="text-sm text-muted-foreground">
                          {data.description}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Sarah Miller</div>
                            <div className="text-sm text-muted-foreground">
                              sarah@example.com
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveVerticalIcon className="h-5 w-5" />
                              <span className="sr-only">User options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <FilePenIcon className="h-4 w-4 mr-2" />
                              Edit Role
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrashIcon className="h-4 w-4 mr-2" />
                              Remove User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Editor</Badge>
                        <div className="text-sm text-muted-foreground">
                          Can view and edit project details.
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <PlusIcon className="h-4 w-4" />
                    Invite User
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integration Settings</CardTitle>
                <CardDescription>
                  Connect your project to third-party tools and services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="github-api-key">GitHub API Key</Label>
                    <Input id="github-api-key" type="text" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="trello-api-key">Trello API Key</Label>
                    <Input id="trello-api-key" type="text" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="slack-webhook">Slack Webhook</Label>
                    <Input id="slack-webhook" type="text" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Save Integrations</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}

function MoveVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
