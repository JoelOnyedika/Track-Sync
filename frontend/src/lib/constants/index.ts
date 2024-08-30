import {
  Clock,
  ArrowRight,
  BarChart,
  Calendar,
  DollarSign,
  Group,
  Laptop,
  Star,
  Home,
  Mail,
  Briefcase,
  User,
  Layers,
  BookOpen,
  LayoutPanelLeft,
  LayoutGrid, 
  View, 
  Workflow, 
  Settings, 
  Users, 
  Check, 
  Bell 
} from "lucide-react";

export const CONSTANTS = {
  APP_NAME: "Time Tracker",
  NAV_ITEMS: ["Features", "Pricing", "About", "Contact"],
  HERO: {
    TITLE: "Take control of your time with our powerful time tracking app",
    DESCRIPTION: "Automated time tracking, project management, client billing, detailed reporting, and Microsoft Teams integration - all in one place.",
    CTA_PRIMARY: {
      TEXT: "Try for Free",
      HREF: "#"
    },
    CTA_SECONDARY: {
      TEXT: "Learn More",
      HREF: "#"
    },
    IMAGE: {
      SRC: "/placeholder.svg",
      ALT: "Hero"
    }
  },
  FEATURES: {
    SUBTITLE: "Key Features",
    TITLE: "Streamline your workflow with our powerful features",
    DESCRIPTION: "Automate your time tracking, manage projects, bill clients, generate detailed reports, and integrate with Microsoft Teams - all in one intuitive platform.",
    LIST: [
      {
        icon: Clock,
        title: "Automated Time Tracking",
        description: "Never forget to track your time again. Our app automatically logs your work hours."
      },
      {
        icon: Calendar,
        title: "Project Management",
        description: "Manage your projects, tasks, and deadlines all in one place."
      },
      {
        icon: DollarSign,
        title: "Client Billing",
        description: "Easily bill your clients based on the time you've tracked."
      },
      {
        icon: BarChart,
        title: "Detailed Reporting",
        description: "Generate comprehensive reports to analyze your team's productivity."
      },
      {
        icon: Group,
        title: "Microsoft Teams Integration",
        description: "Seamlessly integrate our app with Microsoft Teams for a streamlined workflow."
      },
      {
        icon: Laptop,
        title: "Intuitive User Experience",
        description: "Our app is designed with simplicity and ease of use in mind."
      }
    ]
  },
  TESTIMONIALS: {
    SUBTITLE: "Testimonials",
    TITLE: "What our customers are saying",
    DESCRIPTION: "Our time tracking app has helped businesses of all sizes streamline their workflows and boost productivity.",
    LIST: [
      {
        avatar: "/placeholder-user.jpg",
        name: "John Doe",
        position: "CEO, Acme Inc.",
        rating: 5,
        comment: "This time tracking app has been a game-changer for our business. It's easy to use, and the reporting features have helped us make more informed decisions."
      },
      // ... other testimonials
    ]
  },
  CTA: {
    TITLE: "Start tracking your time today",
    DESCRIPTION: "Sign up for a free trial and experience the power of our time tracking app.",
    EMAIL_PLACEHOLDER: "Enter your email",
    BUTTON_TEXT: "Start Free Trial",
    DISCLAIMER: "No credit card required.",
    TERMS_CONDITIONS: {
      TEXT: "Terms & Conditions",
      HREF: "#"
    }
  }
};

// src/constants/projectConstants.js

export const projectData = [
  {
    title: "Project A",
    description: "Website Redesign",
    icon: Home,
    status: "In Progress",
    progress: 75
  },
  {
    title: "Project B",
    description: "Documentation Site",
    icon: BookOpen,
    status: "Completed",
    progress: 100
  },
  {
    title: "Project C",
    description: "Mobile App Development",
    icon: LayoutPanelLeft,
    status: "In Review",
    progress: 90
  },
  {
    title: "Project D",
    description: "CRM System",
    icon: Briefcase,
    status: "Pending",
    progress: 25
  },
  {
    title: "Project E",
    description: "Marketing Campaign",
    icon: Clipboard,
    status: "Completed",
    progress: 100
  },
  {
    title: "Project F",
    description: "Product Design",
    icon: Layers,
    status: "In Progress",
    progress: 60
  }
];

export const navItems = [
  { name: "Home", icon: Home },
  { name: "Dashboard", icon: Home, href: "/project-space" },
  { name: "About", icon: User },
  { name: "Services", icon: Briefcase },
  { name: "Contact", icon: Mail },
];

export const createSidebarLinks = (projectId: any) => [
  {
    href: `/dashboard/${projectId}`,
    icon: LayoutGrid,
    label: "Acme Inc",
    className: "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
  },
  {
    href: `/dashboard/${projectId}/overview`,
    icon: View,
    label: "Overview",
    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  },
  {
    href: `/dashboard/${projectId}/tasks`,
    icon: Workflow,
    label: "Tasks",
    className: "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  },
  {
    href: `/dashboard/${projectId}/settings`,
    icon: Settings,
    label: "Project Settings",
    className: "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  },
  {
    href: `/dashboard/${projectId}/team-members`,
    icon: Users,
    label: "Team Members",
    className: "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  },
  {
    href: `/dashboard/${projectId}/reports`,
    icon: Check,
    label: "Reports",
    className: "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  },
  {
    href: `/dashboard/${projectId}/notifications`,
    icon: Bell,
    label: "Notifications",
    className: "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  }
];


export const createTaskData = [
  {
    id: 1,
    title: "Finish quarterly report",
    priority: "High",
    description: "Prepare the quarterly financial report for the board meeting.",
    assignee: "John Doe",
    dueDate: "Apr 30",
    priorityClass: "bg-primary text-primary-foreground"
  },
  {
    id: 2,
    title: "Redesign website",
    priority: "Medium",
    description: "Update the company website with the new branding and design.",
    assignee: "Sarah Adams",
    dueDate: "May 15",
    priorityClass: "bg-yellow-500 text-secondary-foreground"
  },
  {
    id: 3,
    title: "Update team handbook",
    priority: "Low",
    description: "Review and update the team handbook with the latest policies and procedures.",
    assignee: "John Doe",
    dueDate: "Jun 1",
    priorityClass: "bg-green-500 text-muted-foreground"
  },
  {
    id: 4,
    title: "Prepare for client meeting",
    priority: "High",
    description: "Gather all the necessary materials and prepare for the upcoming client meeting.",
    assignee: "Sarah Adams",
    dueDate: "May 5",
    priorityClass: "bg-red-500 text-primary-foreground"
  },
  {
    id: 5,
    title: "Conduct user research",
    priority: "Medium",
    description: "Gather user feedback and insights to inform the product development process.",
    assignee: "John Doe",
    dueDate: "May 20",
    priorityClass: "bg-secondary text-secondary-foreground"
  },
  {
    id: 6,
    title: "Organize team outing",
    priority: "Low",
    description: "Plan a fun team outing to boost morale and team bonding.",
    assignee: "Sarah Adams",
    dueDate: "Jun 15",
    priorityClass: "bg-muted text-muted-foreground"
  }
];

export const USER_ROLES = [
  {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder-user.jpg",
    initials: "JD",
    role: "Admin",
    description: "Can manage users, settings, and project details."
  },
  {
    name: "Sarah Miller",
    email: "sarah@example.com",
    avatar: "/placeholder-user.jpg",
    initials: "SM",
    role: "Editor",
    description: "Can view and edit project details."
  }
];

export const NOTIFICATION_PREFERENCES = [
  {
    id: "task-assignments",
    label: "Task Assignments",
    description: "Receive notifications when tasks are assigned to you."
  },
  {
    id: "due-dates",
    label: "Due Dates",
    description: "Receive notifications for upcoming due dates."
  },
  {
    id: "project-updates",
    label: "Project Updates",
    description: "Receive notifications for important project updates."
  }
];

export const INTEGRATION_SETTINGS = [
  {
    id: "github-api-key",
    label: "GitHub API Key"
  },
  {
    id: "trello-api-key",
    label: "Trello API Key"
  },
  {
    id: "slack-webhook",
    label: "Slack Webhook"
  }
];

// userData.js

export const users = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@example.com",
    role: "developer",
    status: "Active",
    tasks: 12,
    avatarFallback: "OM"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@example.com",
    role: "designer",
    status: "Pending",
    tasks: 5,
    avatarFallback: "JL"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@example.com",
    role: "manager",
    status: "Active",
    tasks: 20,
    avatarFallback: "SD"
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "qa",
    status: "Inactive",
    tasks: 8,
    avatarFallback: "JD"
  }
];

// notificationData.js

export const notifications = [
  {
    type: "Task",
    title: "New Task Assigned",
    description: "You have been assigned a new task: \"Implement new feature for dashboard\".",
    time: "2 hours ago",
    dateTime: "2023-08-04"
  },
  {
    type: "Update",
    title: "Project Update",
    description: "The project timeline has been updated. Please review the new deadlines.",
    time: "1 day ago",
    dateTime: "2023-08-03"
  },
  {
    type: "Task",
    title: "Due Date Reminder",
    description: "The \"Finalize marketing campaign\" task is due tomorrow.",
    time: "2 days ago",
    dateTime: "2023-08-02"
  },
  {
    type: "Update",
    title: "New Team Member",
    description: "Welcome Sarah to the team! She will be joining the design department.",
    time: "3 days ago",
    dateTime: "2023-08-01"
  }
];