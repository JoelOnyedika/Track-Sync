import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Frame, Filter, Plus, MoveHorizontal, Copy } from 'lucide-react'
import { users } from '@/lib/constants';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"



const TeamMembersBody = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-1 md:gap-8 md:p-10">
      <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
        <form className="flex-1">
          <Input placeholder="Search team members..." className="bg-background" />
          <Button type="submit" className="sr-only">
            Submit
          </Button>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog>
          <DialogTrigger asChild>
          <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share invite link</DialogTitle>
              <DialogDescription>
    Share your invite link to you team and add them up to the project         </DialogDescription> 
            </DialogHeader>
            <div className="mt-5">
            <div className="flex space-x-3">
              <div className="p-3 rounded-md bg-slate-700 w-full">
              <span>link</span>

              </div>
              <div className="p-3 rounded-md bg-slate-700">
              <Copy />
              </div>
            </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
      <Card className="max-w-6xl w-full mx-auto">
        <CardHeader>
          <CardTitle className='md:flex hidden'>Team Members</CardTitle>
          <CardDescription>Manage your project team members and their roles.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tasks</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                        <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={user.role}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="qa">QA</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`bg-${user.status === 'Active' ? 'green' : user.status === 'Pending' ? 'yellow' : 'red'}-100 text-${user.status === 'Active' ? 'green' : user.status === 'Pending' ? 'yellow' : 'red'}-600`}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">{user.tasks}</div>
                      <div className="text-sm text-muted-foreground">tasks</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoveHorizontal className="w-4 h-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> team members
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

export default TeamMembersBody