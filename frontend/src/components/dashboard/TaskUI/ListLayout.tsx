import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreVertical, Plus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

export default function TaskList({ tasks, onAddUser }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {tasks.map((task) => (
        <Card key={task.id} className="flex items-center justify-between p-4 w-full">
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`rounded-full ${task.priorityClass} px-2 py-1 text-xs font-medium`}
            >
              {task.priority}
            </div>
            <span className="text-sm font-medium">{task.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">{task.dueDate}</div>
            <TooltipProvider>
              <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={onAddUser} className="text-muted-foreground hover:text-primary-foreground">
                  <Plus className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Add User</TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-muted-foreground hover:text-primary-foreground">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>View</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Card>
      ))}
    </div>
  );
}