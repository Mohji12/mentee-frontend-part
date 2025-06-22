import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GlobalBenchmark from "./GlobalBenchmark";
import ActivityProgress from "./ActivityProgress";  

// Activity Progress Data
const activityData = [
  { month: "Aug", total: 3, completed: 2 },
  { month: "Sep", total: 5, completed: 3 },
  { month: "Oct", total: 4, completed: 2 },
  { month: "Nov", total: 3, completed: 1 },
];

// All time-based data sets
const timeRangeData = {
  "1M": [
    { name: "Technical", previous: 70, current: 85 },
    { name: "Communication", previous: 60, current: 75 },
    { name: "Problem Solving", previous: 75, current: 90 },
    { name: "Leadership", previous: 55, current: 65 },
    { name: "Domain Knowledge", previous: 60, current: 80 },
  ],
  "3M": [
    { name: "Technical", previous: 60, current: 82 },
    { name: "Communication", previous: 50, current: 72 },
    { name: "Problem Solving", previous: 65, current: 85 },
    { name: "Leadership", previous: 50, current: 63 },
    { name: "Domain Knowledge", previous: 55, current: 78 },
  ],
  "6M": [
    { name: "Technical", previous: 55, current: 80 },
    { name: "Communication", previous: 45, current: 70 },
    { name: "Problem Solving", previous: 60, current: 82 },
    { name: "Leadership", previous: 48, current: 60 },
    { name: "Domain Knowledge", previous: 50, current: 75 },
  ],
  "1Y": [
    { name: "Technical", previous: 50, current: 78 },
    { name: "Communication", previous: 40, current: 68 },
    { name: "Problem Solving", previous: 55, current: 80 },
    { name: "Leadership", previous: 42, current: 58 },
    { name: "Domain Knowledge", previous: 45, current: 72 },
  ],
};

const getChange = (prev, curr) =>
  `${(((curr - prev) / prev) * 100).toFixed(1)}%`;

// New component for the uploaded design

const ProgressComparison = () => {
  const [activeTab, setActiveTab] = useState("visual");
  const [activeRange, setActiveRange] = useState("1M");

  const comparisonData = timeRangeData[activeRange];

  const TabButton = ({ label, value }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-lg text-sm font-medium ${
        activeTab === value
          ? "bg-white text-black shadow"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      {label}
    </button>
  );

  const ComparisonBar = ({ label, previous, current }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="text-green-600">{getChange(previous, current)} ↑</span>
      </div>
      <div className="text-xs text-gray-500 mb-1">
        Previous: {previous}% — Current: {current}%
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${current}%` }}
        ></div>
      </div>
    </div>
  );

  const sortedData = [...comparisonData].sort(
    (a, b) =>
      ((b.current - b.previous) / b.previous) * 100 -
      ((a.current - a.previous) / a.previous) * 100
  );

  return (
    <div className="flex space-x-6">
      {/* Left 2/3 Panel */}
      <div className="w-2/3 bg-white shadow rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">📈 Progress Comparison</h2>
          <div className="flex space-x-2">
            {["1M", "3M", "6M", "1Y"].map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className={`px-3 py-1 text-sm rounded ${
                  activeRange === range
                    ? "bg-blue-500 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1 w-full md:w-80">
          <TabButton label="Visual Comparison" value="visual" />
          <TabButton label="Data Comparison" value="data" />
        </div>

        {activeTab === "visual" ? (
          <>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                📅 Comparing current data with {activeRange} ago
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={comparisonData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload, label }) =>
                        active && payload ? (
                          <div className="bg-white shadow-md p-2 rounded text-sm">
                            <strong>{label}</strong>
                            <p>Previous : {payload[0]?.value}</p>
                            <p className="text-blue-600">
                              Current : {payload[1]?.value}
                            </p>
                          </div>
                        ) : null
                      }
                    />
                    <Bar dataKey="previous" fill="#cbd5e1" name="Previous" />
                    <Bar dataKey="current" fill="#3b82f6" name="Current" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-sm mb-2">
                  Biggest Improvements
                </h3>
                {sortedData.slice(0, 2).map((item) => (
                  <ComparisonBar
                    key={item.name}
                    label={item.name}
                    previous={item.previous}
                    current={item.current}
                  />
                ))}
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-sm mb-2">
                  Areas Needing Focus
                </h3>
                {sortedData
                  .slice(-2)
                  .reverse()
                  .map((item) => (
                    <ComparisonBar
                      key={item.name}
                      label={item.name}
                      previous={item.previous}
                      current={item.current}
                    />
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              📅 Comparing with {activeRange} ago
            </p>
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-slate-600 rounded-xl p-4 text-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium flex items-center space-x-2">
                      <span className="text-sm bg-slate-500 px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                      <span className="text-base">{item.name}</span>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">
                      {getChange(item.previous, item.current)} ↑
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Previous: {item.previous}%</span>
                    <span>Current: {item.current}%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-400 rounded-full relative">
                    <div
                      className="absolute h-3 bg-black-700 rounded-full"
                      style={{ width: `${item.previous}%` }}
                    />
                    <div
                      className="absolute h-3 bg-green-400 rounded-full"
                      style={{ width: `${item.current}%`, opacity: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <GlobalBenchmark />
      </div>

      {/* Right 1/3 Panel */}
      <div className="w-1/3">
        <ActivityProgress />
      </div>
    </div>
  );
};

export default ProgressComparison;
