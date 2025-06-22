import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Legend, Tooltip, ResponsiveContainer
} from "recharts";

const radarData = [
  { subject: "Technical Skills", A: 78, B: 72, C: 74 },
  { subject: "Problem Solving", A: 85, B: 65, C: 75 },
  { subject: "Communication", A: 65, B: 77, C: 80 },
  { subject: "Professional Network", A: 62, B: 70, C: 68 },
  { subject: "Leadership", A: 70, B: 72, C: 73 },
  { subject: "Time Management", A: 76, B: 74, C: 76 },
  { subject: "Industry Knowledge", A: 74, B: 70, C: 78 },
];

const performanceInsights = [
  {
    title: "Technical Proficiency",
    score: 78,
    avg: 74,
    change: "+4%",
    positive: true,
    description:
      "Your technical skills are 5% above global averages, showing strong command of core technologies.",
  },
  {
    title: "Problem Solving",
    score: 85,
    avg: 75,
    change: "+13%",
    positive: true,
    description:
      "Exceptional problem-solving abilities, placing you in the top 15% globally.",
  },
  {
    title: "Communication",
    score: 65,
    avg: 80,
    change: "-18%",
    positive: false,
    description:
      "Communication skills need improvement to meet global standards. Consider our advanced courses.",
  },
  {
    title: "Professional Network",
    score: 62,
    avg: 68,
    change: "-8%",
    positive: false,
    description:
      "Building a stronger professional network will enhance your career opportunities.",
  },
];

const GlobalBenchmark = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-full">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-800">
        🌐 Global Benchmark
      </h2>

      {/* Chart and Analysis Side by Side */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Radar Chart */}
        <div className="w-full lg:w-3/5 mx-auto lg:mx-0">
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Your Score" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
              <Radar name="Regional Average" dataKey="B" stroke="#16a34a" fill="#16a34a" fillOpacity={0.3} />
              <Radar name="Global Average" dataKey="C" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
              <Tooltip
                formatter={(value, name) => {
                  const labelMap = {
                    A: "Your Score",
                    B: "Regional Average",
                    C: "Global Average",
                  };
                  return [`${value}`, labelMap[name]];
                }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Cards */}
        <div className="w-full lg:w-2/5 space-y-4">
          {performanceInsights.map((item, index) => (
            <div key={index} className="p-4 border rounded-xl shadow-sm bg-gray-50">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <span
                  className={`font-semibold ${item.positive ? "text-green-600" : "text-red-600"}`}
                >
                  {item.change} {item.positive ? "↑" : "↓"}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                {item.score} / 100 <span className="ml-2">Global Avg: {item.avg}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-2 ${item.positive ? "bg-green-500" : "bg-red-500"}`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalBenchmark;
