import React, { useState } from "react";
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  BarChart2,
  LineChart as LineIcon,
  PieChart as PieIcon,
  Activity
} from "lucide-react";

// Skill Assessment Data
const skillData = [
  { name: "Programming", value: 85 },
  { name: "Data Analysis", value: 70 },
  { name: "Database Design", value: 55 },
  { name: "Web Development", value: 80 },
  { name: "Algorithms", value: 65 }
];

// Key Metrics
const metrics = [
  { label: "Activity Completion Rate", value: 75 },
  { label: "Meeting Attendance", value: 90 },
  { label: "Activity Quality Score", value: 82 },
  { label: "Feedback Implementation", value: 68 }
];

// Chart Colors
const COLORS = ["#3182ce", "#63b3ed", "#4299e1", "#90cdf4", "#2b6cb0"];

export default function DashboardSkillsSection() {
  const [chartType, setChartType] = useState("bar");

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={skillData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3182ce"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {skillData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      case "radar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart outerRadius={90} data={skillData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="#3182ce"
                fill="#3182ce"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        );
      case "bar":
      default:
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart layout="vertical" data={skillData}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip
                formatter={(value) => [`Proficiency : ${value}%`, ""]} 
                labelFormatter={(label) => `${label}`} 
              />
              <Bar dataKey="value" fill="#3182ce" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Section */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="space-y-3">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-medium">
                <span>{metric.label}</span>
                <span>{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-2 mt-1">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Recommendations</h2>
        <div className="bg-blue-100 text-blue-900 p-3 rounded-lg text-sm">
          Focus on improving database design skills by taking additional online courses.
        </div>
      </div>

      {/* Skills Overview Chart */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Skills Overview</h2>
            <p className="text-sm text-gray-500">Skills Assessment</p>
          </div>
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded ${chartType === "bar" ? "bg-blue-500 text-white" : "border"}`}
              onClick={() => setChartType("bar")}
            >
              <BarChart2 className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded ${chartType === "line" ? "bg-blue-500 text-white" : "border"}`}
              onClick={() => setChartType("line")}
            >
              <LineIcon className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded ${chartType === "pie" ? "bg-blue-500 text-white" : "border"}`}
              onClick={() => setChartType("pie")}
            >
              <PieIcon className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded ${chartType === "radar" ? "bg-blue-500 text-white" : "border"}`}
              onClick={() => setChartType("radar")}
            >
              <Activity className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="h-64">{renderChart()}</div>
      </div>
    </div>
  );
}
