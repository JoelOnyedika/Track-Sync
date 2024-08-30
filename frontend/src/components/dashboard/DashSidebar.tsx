import { Link, useParams } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import { createSidebarLinks } from "@/lib/constants";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function DashSidebar() {
  const id = 4;
  const dashSidebarLinks = createSidebarLinks(id);

  const SidebarContent = ({ mobile = false }) => (
    <nav className={`grid gap-6 text-lg font-medium ${mobile ? '' : 'px-2 py-5'}`}>
      {dashSidebarLinks.map((link, index) => (
        <SidebarItem key={index} link={link} mobile={mobile} />
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <Menu className="h-5 w-5 text-black dark:text-white" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SidebarContent mobile={true} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="inset-y-0 left-0 hidden w-64 flex-col border-r bg-background sm:flex">
        <TooltipProvider>
          <SidebarContent />
        </TooltipProvider>
      </aside>
    </>
  );
}

function SidebarItem({ link, mobile }) {
  if (mobile) {
    return (
      <Link
        to={link.href}
        className="flex items-center gap-4 px-2.5 text-foreground"
      >
        <link.icon className="h-5 w-5" />
        {link.label}
      </Link>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={link.href}
          className="flex items-center gap-4 px-2.5 py-2 rounded-lg text-black dark:text-white transition-colors hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <link.icon className="h-5 w-5" />
          <span>{link.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{link.label}</TooltipContent>
    </Tooltip>
  );
}