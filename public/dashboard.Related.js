export const posts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "2025-03-10",
    author: "John Doe",
    status: "Published",
  },
  {
    id: 2,
    title: "Tailwind CSS for Beginners",
    date: "2025-02-25",
    author: "Jane Smith",
    status: "Draft",
  },
  {
    id: 3,
    title: "Node.js vs Deno: What's the Difference?",
    date: "2025-01-15",
    author: "Alice Johnson",
    status: "Published",
  },
];

export const comments = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "2025-03-10",
    content: "This is a very insightful post! I learned so much.",
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "2025-03-09",
    content: "I completely agree! Great points.",
  },
  {
    id: 3,
    user: "Sam Green",
    avatar: "https://i.pravatar.cc/150?img=9",
    date: "2025-03-08",
    content: "Fantastic write-up! Keep it up!",
  },
];

// Predefined linear gradient colors
export const gradients = [
  "bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600",
  "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
  "bg-gradient-to-r from-teal-400 via-green-500 to-blue-500",
  "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500",
  "bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600",
];

export const getRandomGradient = () =>
  gradients[Math.floor(Math.random() * gradients.length)];

export const users = [
  {
    id: 1,
    name: "John Doe",
    role: "Admin",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "Active",
    joinedDate: "Jan 5, 2020",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Moderator",
    email: "jane.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    status: "Inactive",
    joinedDate: "Mar 22, 2021",
  },
  // Add more users here
];

export const settingCard = [
  {
    id: "1",
    heading: "General Settings",
    paragraph:
      "Manage app-wide settings such as language, region, and preferences.",
    buttonName: "Configure",
  },
  {
    id: "2",
    heading: "Profile Settings",
    paragraph: "Change your profile picture, name, and other personal details.",
    buttonName: "Edit Profile",
  },
  {
    id: "3",
    heading: "Security Settings",
    paragraph:
      "Set up two-factor authentication and manage your security preferences.",
    buttonName: "Security Options",
  },
  {
    id: "4",
    heading: "Notification Settings",
    paragraph: "Customize your notification preferences for better control.",
    buttonName: "Manage Notifications",
  },
  {
    id: "5",
    heading: "Account Settings",
    paragraph: "Edit your email, password, and other account-related details.",
    buttonName: "Change Account",
  },
];
