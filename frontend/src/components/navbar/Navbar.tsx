import { Link } from "react-router-dom";
import { Home, User, Briefcase, Mail, Menu, Mountain } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { navItems } from '@/lib/constants';
import { ModeToggle} from "@/components/customs/ModeToggle";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 sm:px-6">
      <Link to="#" className="flex items-center gap-2">
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      
      {/* Hamburger Menu - Visible only on small screens */}
      <div className="lg:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-4 px-4 py-6 text-lg font-medium">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={`${item.href}`} 
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Avatar with Dropdown - Always visible */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Nav Links - Visible only on large screens */}
      <nav className="hidden lg:flex gap-6 text-lg font-medium">
        {navItems.map((item, index) => (
          <Link 
            key={item.name}
            to={`${item.href}`} 
            className={`flex items-center gap-2 ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}