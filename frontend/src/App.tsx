import Hero from "./components/landing/Hero"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectSpace from "@/components/dashboard/ProjectSpace";
import Overview from "@/components/dashboard/Overview";
import TeamMembers from "@/components/dashboard/TeamMembers";
import Tasks from "@/components/dashboard/Tasks";
import ProjectSettings from "@/components/dashboard/ProjectSettings";
import Notifications from "@/components/dashboard/Notifications";
import TaskCreationForm from "@/components/dashboard/TaskUI/TaskCreationForm"
import './index.css'
import { ThemeProvider } from "@/components/customs/ThemeProvider";

function App() {
  return (
    <>

<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
        <Routes>
          <Route path="/project-space" element={<ProjectSpace />} />
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard/:id/overview" element={<Overview />} />
          <Route path="/dashboard/:id/tasks" element={<Tasks />} />
          <Route path="/dashboard/:id/tasks/new" element={<TaskCreationForm/>} />
          <Route path="/dashboard/:id/settings" element={<ProjectSettings/>} />
          <Route path="/dashboard/:id/team-members" element={<TeamMembers />} />
          <Route path="/dashboard/:id/notifications" element={<Notifications/>} />
        </Routes>
      </Router>
  </ThemeProvider>
      
    </>
  )
}

export default App
