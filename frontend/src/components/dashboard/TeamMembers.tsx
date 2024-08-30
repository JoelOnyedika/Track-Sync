import DashSidebar from "@/components/dashboard/DashSidebar"
import TeamMembersBody from "@/components/dashboard/TmUI/TeamMembersBody"

export default function TeamMembers() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Sidebar and Content on Desktop */}
      <aside className="hidden md:flex md:w-1/4">
        <DashSidebar />
      </aside>
      
      <main className="flex flex-col w-full p-1 md:flex-1">
        <header className="flex items-center h-16 px-1 border-b md:hidden">
          <DashSidebar />
          <h1 className="text-xl font-semibold md:hidden">Team Members</h1>
        </header>
        <div className="flex flex-col ml-0 md:ml-10">
          
          <TeamMembersBody />
          {/* Add more content here if needed */}
        </div>
      </main>      
      </div>
  )
}