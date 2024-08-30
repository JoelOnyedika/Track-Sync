// components/StackedAvatars.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const StackedAvatars = ({ users, maxAvatars = 3, onAddClick }: any) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const displayUsers = users.slice(0, maxAvatars);
  const remainingUsers = Math.max(users.length - maxAvatars, 0);

  const handleUserSelect = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId) 
        : [...prev, userId]
    );
  };

  const handleConfirm = () => {
    onAddClick(selectedUsers);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center -space-x-3">
      {displayUsers.map((user: any, index: number) => (
        <img
          key={user.id}
          src={user.avatar}
          alt={user.name}
          className={`w-10 h-10 rounded-full border-2 border-background ${
            index === 0 ? '' : '-ml-3'
          }`}
          title={user.name}
        />
      ))}
      {remainingUsers > 0 && (
        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-background flex items-center justify-center text-sm font-medium text-gray-600 -ml-3">
          +{remainingUsers}
        </div>
      )}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 -ml-3"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add user</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Users</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map((user: any) => (
              <div key={user.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`user-${user.id}`}
                  checked={selectedUsers.includes(user.id)}
                  onCheckedChange={() => handleUserSelect(user.id)}
                />
                <label htmlFor={`user-${user.id}`} className="flex items-center space-x-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                </label>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={handleConfirm}>Confirm Selection</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StackedAvatars;