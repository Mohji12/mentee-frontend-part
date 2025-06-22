import React from 'react';
import { FaTasks, FaUsers, FaChartLine, FaClock } from 'react-icons/fa';

const kpis = [
  {
    title: 'Completed Activities',
    value: 24,
    delta: '+12%',
    updated: 'Today, 2:30 PM',
    progress: 72,
    icon: <FaTasks className="text-blue-500 text-xl" />,
  },
  {
    title: 'Meetings Attended',
    value: 18,
    delta: '+8%',
    updated: 'Yesterday, 5:15 PM',
    progress: 82,
    icon: <FaUsers className="text-green-500 text-xl" />,
  },
  {
    title: 'Performance Score',
    value: 85.7,
    delta: '+5%',
    updated: 'Weekly calculation',
    progress: 89,
    icon: <FaChartLine className="text-purple-500 text-xl" />,
  },
  {
    title: 'Avg. Learning Hours',
    value: 32,
    delta: '-6%',
    updated: 'Weekly aggregate',
    progress: 65,
    icon: <FaClock className="text-yellow-500 text-xl" />,
  },
];

const KPIOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-3 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(147,197,253,0.5)] hover:scale-105"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                {kpi.icon}
                <p className="text-xs text-gray-500 font-medium">{kpi.title}</p>
              </div>
              <div className="text-xl font-semibold text-gray-800 mt-1">{kpi.value}</div>
              <p
                className={`text-xs mt-1 ${
                  kpi.delta.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {kpi.delta}
              </p>
              <p className="text-[10px] text-gray-400 mt-1">Last updated: {kpi.updated}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="h-1.5 bg-gray-200 rounded-full">
              <div
                className="h-1.5 bg-blue-600 rounded-full"
                style={{ width: `${kpi.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">{kpi.progress}%</p>
          </div>
          <div className="mt-1 text-blue-600 text-xs hover:underline cursor-pointer">
            Show Details
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPIOverview;
