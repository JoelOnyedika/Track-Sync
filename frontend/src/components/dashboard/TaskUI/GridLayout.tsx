import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  FilePen,
  Trash,
  MoveVertical,
  Calendar as CalendarIcon,
} from "lucide-react";
import StackedAvatars from "@/components/customs/StackedAvatars";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const GridLayout = ({ tasks, onAddUser, users }: any) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map((task: any) => (
        <Card key={task.id} className="group py-5">
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-full ${task.priorityClass} px-2 py-1 text-xs font-medium`}
                >
                  {task.priority}
                </div>
                <p className="text-sm font-medium">{task.title}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoveVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <FilePen className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-muted-foreground">{task.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <StackedAvatars users={users} onAddClick={onAddUser} />
              </div>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </PopoverTrigger>
                  <PopoverContent side="right">
                    <Calendar
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>

                <p className="text-sm text-muted-foreground">{task.dueDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GridLayout;
