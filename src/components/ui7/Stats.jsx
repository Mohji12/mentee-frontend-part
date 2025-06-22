import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip as PieTooltip, Legend,
  LineChart, Line
} from "recharts";
import SkillsAssessment from "./SkillsAssessment";

// Sample data
const activityData = [
  { month: "Jan", total: 15, completed: 13 },
  { month: "Feb", total: 23, completed: 19 },
  { month: "Mar", total: 20, completed: 17 },
  { month: "Apr", total: 24, completed: 20 },
  { month: "May", total: 25, completed: 23 },
  { month: "Jun", total: 27, completed: 25 },
  { month: "Jul", total: 26, completed: 24 },
  { month: "Aug", total: 28, completed: 27 },
  { month: "Sep", total: 24, completed: 22 },
  { month: "Oct", total: 26, completed: 23 },
  { month: "Nov", total: 25, completed: 21 },
  { month: "Dec", total: 30, completed: 29 },
];

const skillDistribution = [
  { name: "Technical", value: 35 },
  { name: "Soft Skills", value: 25 },
  { name: "Domain", value: 20 },
  { name: "Leadership", value: 20 },
];

const performanceTrend = [
  { week: "W1", score: 65 },
  { week: "W2", score: 70 },
  { week: "W3", score: 68 },
  { week: "W4", score: 73 },
  { week: "W5", score: 76 },
  { week: "W6", score: 79 },
  { week: "W7", score: 83 },
  { week: "W8", score: 86 },
];

const skillGrowth = [
  { name: "Problem Solving", previous: 50, current: 75 },
  { name: "Communication", previous: 65, current: 80 },
  { name: "Technical", previous: 60, current: 85 },
  { name: "Leadership", previous: 45, current: 65 },
];

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

const WidgetCard = ({ title, icon, description, buttonText, buttonIcon }) => (
  <div className="bg-[#f9fbfd] p-4 rounded-xl border border-yellow-100 shadow-sm">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <span className="text-yellow-400">{icon}</span>
    </div>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-yellow-500 border border-yellow-100 rounded-md py-2 hover:bg-yellow-50 transition">
      {buttonIcon}
      {buttonText}
    </button>
  </div>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      {/* LEFT 2/3 COLUMN */}
      <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Completion */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Activity Completion Rate</h3>
          <p className="text-sm text-gray-500 mb-4">Monthly activity completion statistics</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <BarTooltip />
              <Legend />
              <Bar dataKey="total" fill="#cbd5e1" name="Total Activities" />
              <Bar dataKey="completed" fill="#3b82f6" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Distribution */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Skill Distribution</h3>
          <p className="text-sm text-gray-500 mb-4">Your skills by category</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {skillDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Trend */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Performance Trend</h3>
          <p className="text-sm text-gray-500 mb-4">Weekly performance score</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[60, 90]} />
              <BarTooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Growth */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Skill Growth</h3>
          <p className="text-sm text-gray-500 mb-4">Improvement in your skills</p>
          <div className="space-y-4">
            {skillGrowth.map((skill, index) => {
              const change = skill.current - skill.previous;
              const percent = Math.round((change / skill.previous) * 100);
              const isPositive = percent >= 0;
              return (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <span className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                      {percent}% {isPositive ? "📈" : "📉"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Previous</div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-1">
                    <div className="bg-blue-300 h-2 rounded-full" style={{ width: `${skill.previous}%` }} />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Current</div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.current}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two Side-by-Side Cards */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <WidgetCard
            title="Monthly Report"
            description="View your monthly performance report including completed activities and achievements."
            buttonText="Download Report"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-7a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            buttonIcon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
              </svg>
            }
          />
          <WidgetCard
            title="Meeting Notes"
            description="Access all your meeting notes and feedback from mentors."
            buttonText="View All Notes"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            }
            buttonIcon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* RIGHT 1/3 COLUMN */}
      <div className="col-span-1 hidden lg:block">
        <SkillsAssessment />
      </div>
    </div>
  );
};

export default Stats;
