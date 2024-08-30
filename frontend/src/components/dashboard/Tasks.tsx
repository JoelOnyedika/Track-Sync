import { useParams, Link } from "react-router-dom";
import { createTaskData } from "@/lib/constants";
import {
  Plus,
  Grid2X2,
  SquareEqual,
} from "lucide-react";
import DashSidebar from "@/components/dashboard/DashSidebar";
import { createSidebarLinks } from "@/lib/constants";

import { useState } from "react";
import ListLayout from "@/components/dashboard/TaskUI/ListLayout";
import GridLayout from "@/components/dashboard/TaskUI/GridLayout";

export default function Tasks() {
  const tasks = createTaskData;
  const { id } = useParams();
  const dashSidebarLinks = createSidebarLinks(id);

  const users = [
    {
      id: 1,
      name: "User 1",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    },
    {
      id: 2,
      name: "User 2",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    },
    {
      id: 3,
      name: "User 3",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    },
    {
      id: 4,
      name: "User 4",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    },
    {
      id: 5,
      name: "User 5",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    },
    { id: 6, name: "User 6", avatar: "/path/to/avatar6.jpg" },
    { id: 7, name: "User 7", avatar: "/path/to/avatar7.jpg" },
  ];
  const [showGrid, setShowGrid] = useState(true);

  const handleAddUser = () => {
    // Logic to add a new user
    console.log("Add user clicked");
  };

  return (
    <div className="md:flex block min-h-screen bg-background text-foreground p-3">
      <div className="flex space-x-3">
        <DashSidebar />
        <div className="flex md:hidden">
          <h1 className="text-xl font-semibold">Tasks</h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <h1 className="text-xl font-semibold px-3 hidden md:flex">Tasks</h1>
        </div>
        <header className="top-0 border-b bg-background py-3 shadow-sm sm:px-6">
          <div className="flex items-center justify-between">
            <div className=" flex space-x-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-primary p-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <Grid2X2
                  className="h-4 w-4 dark:text-slate-300 text-black hover:cursor-pointer"
                  onClick={() => setShowGrid(true)}
                />
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-primary p-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <SquareEqual
                  className="h-4 w-4 dark:text-slate-300 text-dark"
                  onClick={() => setShowGrid(false)}
                />
              </div>
            </div>
            <Link
              to={`/dashboard/4/tasks/new`}
              className="inline-flex items-center gap-2 rounded-md bg-primary p-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-auto py-6 sm:px-6 w-full">
          {showGrid ? (
            <GridLayout tasks={tasks} onAddUser={handleAddUser} users={users} />
          ) : (
            <ListLayout onAddUser={handleAddUser} tasks={tasks}/>
          )}
        </main>
      </div>
    </div>
  );
}
