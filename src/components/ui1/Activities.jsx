import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BadgeCheck,
  RefreshCcw,
  CheckCheck,
  Bot,
} from "lucide-react";
import SkillsOverviewChart from "./SkillsOverviewChart"; // ✅ Import the chart component

const barData = [
  { month: "Aug", total: 3, completed: 2 },
  { month: "Sep", total: 5, completed: 3 },
  { month: "Oct", total: 4, completed: 2 },
  { month: "Nov", total: 3, completed: 1 },
];

const activityData = [
  {
    title: "Research Paper on Machine Learning",
    description: "Complete a research paper on the applications of machine learning in healthcare.",
    tags: ["Long-term", "In Progress"],
    dueDate: "15 Dec 2023",
    progress: 65,
    icon: <RefreshCcw className="w-4 h-4 text-blue-500" />,
    remarks: null,
  },
  {
    title: "Python Programming Course",
    description: "Complete the Python for Data Science course on Coursera.",
    tags: ["Mid-term", "Completed"],
    dueDate: "30 Nov 2023",
    progress: 80,
    icon: <CheckCheck className="w-4 h-4 text-green-500" />,
    remarks: "Excellent work on the final project. Consider exploring more advanced topics.",
  },
  {
    title: "Database Design Assignment",
    description: "Create an ER diagram and implement a relational database for a library management system.",
    tags: ["Short-term", "Reviewed"],
    dueDate: "10 Nov 2023",
    progress: 75,
    icon: <BadgeCheck className="w-4 h-4 text-purple-600" />,
    remarks: "Good work on the normalization. The design can be optimized further.",
  },
];

const Tag = ({ text, color }) => (
  <span className={`text-xs px-2 py-1 rounded-full font-medium ${color}`}>
    {text}
  </span>
);

const ActivityCard = ({ activity }) => {
  const tagColors = {
    "Long-term": "bg-purple-100 text-purple-600",
    "In Progress": "bg-blue-100 text-blue-600",
    "Mid-term": "bg-yellow-100 text-yellow-700",
    "Completed": "bg-green-100 text-green-700",
    "Short-term": "bg-orange-100 text-orange-700",
    "Reviewed": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border text-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-base font-semibold leading-tight">{activity.title}</h2>
          <p className="text-xs text-gray-600 mt-0.5">{activity.description}</p>
        </div>
        <div>{activity.icon}</div>
      </div>

      <div className="flex gap-1 mt-2 flex-wrap">
        {activity.tags.map((tag, i) => (
          <Tag key={i} text={tag} color={tagColors[tag]} />
        ))}
      </div>

      <div className="mt-2">
        <p className="text-xs font-medium mb-1">Progress</p>
        <div className="w-full bg-gray-100 h-1.5 rounded-full">
          <div
            className={`h-1.5 rounded-full ${activity.progress < 100 ? "bg-green-400" : "bg-green-600"}`}
            style={{ width: `${activity.progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-700 mt-1">{activity.progress}%</div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-600 mt-2">
        <p>📅 {activity.dueDate}</p>
        <button className="text-blue-500 hover:underline flex items-center gap-0.5">Details →</button>
      </div>

      {activity.remarks && (
        <div className="mt-2 text-xs text-gray-700 border-t pt-2">
          <span className="font-medium">Mentor Remarks:</span> {activity.remarks}
        </div>
      )}
    </div>
  );
};

const ReminderCard = () => (
  <div className="bg-white rounded-xl p-4 text-center shadow-sm border text-sm flex flex-col justify-center items-center">
    <div className="text-blue-600 text-2xl mb-2">🔔</div>
    <h2 className="text-base font-semibold">Reminders</h2>
    <p className="text-xs text-gray-600 mb-2">
      3 meetings & 3 pending activities
    </p>
    <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
      Set Reminders
    </button>
  </div>
);

const Activities = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredActivities = activityData.filter((activity) => {
    const matchesFilter = filter === "All" || activity.tags.includes(filter);
    const matchesSearch =
      activity.title.toLowerCase().includes(search.toLowerCase()) ||
      activity.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative min-h-screen p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-xl font-bold">Recent Activities</h1>
  
          {/* Filter & Search Controls */}
          <div className="flex flex-col md:flex-row justify-between gap-2 mb-2">
            <input
              type="text"
              placeholder="Search activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded px-3 py-1 text-sm w-full md:w-1/2"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-3 py-1 text-sm w-full md:w-1/3"
            >
              <option value="All">All</option>
              <option value="Short-term">Short-term</option>
              <option value="Mid-term">Mid-term</option>
              <option value="Long-term">Long-term</option>
            </select>
          </div>
  
          {/* Activity Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredActivities.map((activity, i) => (
              <ActivityCard key={i} activity={activity} />
            ))}
            <ReminderCard />
          </div>
  
          {/* Activity Progress + Meetings */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Activity Progress */}
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h2 className="text-lg font-semibold mb-4">Activity Progress</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#d1d5db" />
                  <Bar dataKey="completed" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
  
            {/* Upcoming Meetings */}
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h2 className="text-lg font-semibold mb-4">Upcoming Meetings</h2>
              <div className="text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></div> Upcoming
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div> Completed
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></div> Cancelled
                </div>
                <div className="border-t pt-2 mt-2 text-center">
                  <p className="text-gray-700 text-xs">No meetings scheduled for today</p>
                  <div className="flex justify-center gap-6 mt-4">
                    <div>
                      <p className="font-bold text-lg">3</p>
                      <p className="text-xs text-gray-500">Upcoming</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg">2</p>
                      <p className="text-xs text-gray-500">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Column: Skills Overview */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Skills Overview</h2>
            <SkillsOverviewChart />
          </div>
        </div>
      </div>
  
      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot className="text-blue-800 w-6 h-6" />
      </button>
  
      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col">
          <div className="bg-yellow-400 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Support Assistant</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
            <div className="bg-gray-100 p-2 rounded">
              Hello! How can I help you today with the Mentee Tracker?
            </div>
            <div className="text-right text-white bg-blue-500 p-2 rounded">
              I need help with submitting my activity proof.
            </div>
            <div className="bg-gray-100 p-2 rounded">
              To submit proof for an activity, please go to the Activities page,
              find your activity, and click on "View Details". Then you'll see
              an option to "Submit Proof" where you can upload files or add links.
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-3 rounded text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Activities;
