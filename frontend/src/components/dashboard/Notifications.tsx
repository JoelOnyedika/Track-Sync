import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Settings,
  Bell,
  Mail,
  Archive,
  Filter,
  Timer,
  Replace,
  BookMinus,
  Book,
  Check,
  Plus,
  Trash,
  MoreVertical,
} from "lucide-react";
import { notifications } from "@/lib/constants";
import DashSidebar from "@/components/dashboard/DashSidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Notifications() {
  return (
    <div className="w-full max-w-full overflow-x-hidden md:ml-12">
      <div className="flex space-between">
        <div className="inline-flex items-center space-x-3 border-b w-full p-2">
          <DashSidebar />
          <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex">
            Notifications
          </h2>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Settings className="w-5 h-5 text-black dark:text-white" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Notification Preferences</DialogTitle>
              <DialogDescription>
                Customize how you receive notifications.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-notifications" />
                <Label htmlFor="push-notifications">Push Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="sms-notifications" />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="border-0 shadow-lg">
        <CardContent className="">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuCheckboxItem checked>
                    <Timer className="w-4 h-4 mr-2" />
                    Tasks
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked>
                    <Replace className="w-4 h-4 mr-2" />
                    Updates
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    <BookMinus className="w-4 h-4 mr-2" />
                    Unread
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked>
                    <Book className="w-4 h-4 mr-2" />
                    Read
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm">
                <Trash className="w-4 h-4 mr-2" />
                Delete All
              </Button>
              <Button variant="outline" size="sm">
                <Check className="w-4 h-4 mr-2" />
                Mark All as Read
              </Button>
            </div>
          </div>
          <ScrollArea className="max-h-[500px]">
            <div className="grid gap-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[25px_1fr] sm:grid-cols-[25px_1fr_100px] items-start gap-2 sm:gap-4 p-3 sm:p-4 rounded-md hover:border-blue-500 hover:border border-2 transition-colors w-full"
                >
                  <div className="flex h-2 w-2 rounded-full bg-blue-500 translate-y-1.5" />
                  <div className="grid gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-medium">{notification.title}</div>
                      <Badge variant="secondary" className="text-xs">
                        {notification.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                    <div className="text-xs text-muted-foreground sm:hidden">
                      <time dateTime={notification.dateTime}>
                        {notification.time}
                      </time>
                    </div>
                  </div>
                  <div className="hidden sm:block text-sm text-muted-foreground">
                    <time dateTime={notification.dateTime}>
                      {notification.time}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
