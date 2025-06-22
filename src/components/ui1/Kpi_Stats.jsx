import React, { useState } from 'react';
import {
  FaBookOpen, FaBullseye, FaClock, FaUsers,
  FaMedal, FaCertificate, FaChartBar, FaChartLine
} from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const kpiData = [
  [
    {
      title: 'Learning Hours',
      value: '128 hrs',
      change: '+12%',
      changeColor: 'text-green-500',
      updated: 'Today, 2:30 PM',
      icon: <FaClock className="text-blue-500 text-base" />,
      weeks: [70, 80, 70, 90],
    },
    {
      title: 'Skills Acquired',
      value: 14,
      change: '+5%',
      changeColor: 'text-green-500',
      updated: 'Today, 11:00 AM',
      icon: <FaBookOpen className="text-green-500 text-base" />,
      weeks: [60, 65, 60, 70],
    },
    {
      title: 'Goal Completion',
      value: '72%',
      change: '+8%',
      changeColor: 'text-green-500',
      updated: 'Weekly summary',
      icon: <FaBullseye className="text-purple-500 text-base" />,
      weeks: [50, 60, 75, 90],
    },
    {
      title: 'Global Rank',
      value: '#287',
      change: '+24%',
      changeColor: 'text-green-500',
      updated: 'Yesterday, 6:00 PM',
      icon: <FaMedal className="text-yellow-500 text-base" />,
      weeks: [70, 70, 60, 85],
    },
  ],
  [
    {
      title: 'Peer Collaboration',
      value: 8,
      change: '+2%',
      changeColor: 'text-green-500',
      updated: 'Today, 10:00 AM',
      icon: <FaUsers className="text-indigo-500 text-base" />,
      weeks: [40, 55, 70, 80],
    },
    {
      title: 'Certifications',
      value: 3,
      change: '+1%',
      changeColor: 'text-green-500',
      updated: 'Weekly update',
      icon: <FaCertificate className="text-teal-500 text-base" />,
      weeks: [60, 70, 60, 70],
    },
    {
      title: 'Industry Projects',
      value: 4,
      change: '+0%',
      changeColor: 'text-green-500',
      updated: 'Monthly report',
      icon: <FaChartBar className="text-pink-500 text-base" />,
      weeks: [50, 55, 65, 65],
    },
    {
      title: 'Growth Index',
      value: '84%',
      change: '+6%',
      changeColor: 'text-green-500',
      updated: 'Weekly index',
      icon: <FaChartLine className="text-sky-500 text-base" />,
      weeks: [50, 60, 70, 80],
    },
  ]
];

const WeeklyBarChart = ({ weeks }) => (
  <div className="mt-1 flex justify-between items-end gap-1 h-14">
    {weeks.map((value, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-[9px] text-gray-500"
        title={`Week ${idx + 1}: ${value}%`}
      >
        <div
          className="w-4 rounded bg-blue-400"
          style={{ height: `${value * 0.6}px` }}
        />
        <span className="mt-0.5">W{idx + 1}</span>
      </div>
    ))}
  </div>
);

const KpiCard = ({ title, value, change, changeColor, updated, icon, weeks }) => (
  <div className="bg-white rounded-lg shadow p-2 w-full text-xs relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:z-10 hover:shadow-lg">
    <div className="flex items-center gap-2 mb-1 text-gray-700 text-xs">
      <div title={title}>{icon}</div>
      <h4 className="font-medium">{title}</h4>
    </div>
    <div className="text-lg font-semibold text-gray-900 leading-tight" title={`Current Value: ${value}`}>
      {value}
    </div>
    <div className={`${changeColor} font-medium`} title={`Change: ${change}`}>
      {change}
    </div>
    <div className="text-[10px] text-gray-500 mt-0.5">Last updated: {updated}</div>
    <WeeklyBarChart weeks={weeks} />
    <div className="text-xs text-blue-600 font-medium mt-1 cursor-pointer hover:underline">Show Details</div>
  </div>
);

const Kpi_Stats = () => {
  const [page, setPage] = useState(0);
  const totalPages = kpiData.length;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Key Performance Indicators</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            className="bg-white border border-gray-300 rounded-md p-1 hover:bg-gray-100"
            disabled={page === 0}
            title="Previous Page"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-xs text-gray-600">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(totalPages - 1, prev + 1))}
            className="bg-white border border-gray-300 rounded-md p-1 hover:bg-gray-100"
            disabled={page === totalPages - 1}
            title="Next Page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {kpiData[page].map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>
    </div>
  );
};

export default Kpi_Stats;
