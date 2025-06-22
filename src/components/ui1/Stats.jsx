import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, Tooltip as PieTooltip,
  LineChart, Line
} from "recharts";

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

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

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
  {
    name: "Problem Solving",
    previous: 50,
    current: 75,
  },
  {
    name: "Communication",
    previous: 65,
    current: 80,
  },
  {
    name: "Technical",
    previous: 60,
    current: 85,
  },
  {
    name: "Leadership",
    previous: 45,
    current: 65,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Activity Completion + Skill Distribution */}
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

      {/* Performance Trend + Skill Growth */}
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
    </div>
  );
};

export default Stats;
