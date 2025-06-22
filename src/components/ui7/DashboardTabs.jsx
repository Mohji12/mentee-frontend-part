import React, { useState } from "react";
import { BarChart2, Activity, TrendingUp, FileText } from "lucide-react";

const tabs = [
  { label: "Overview", icon: <BarChart2 className="w-4 h-4" /> },
  { label: "Skills", icon: <Activity className="w-4 h-4" /> },
  { label: "Comparison", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Reports", icon: <FileText className="w-4 h-4" /> },
];

const DashboardTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (label) => {
    setActiveTab(label);
    if (onTabChange) onTabChange(label);
  };

  return (
    <div className="flex gap-8 p-2 bg-gray-50 rounded-md w-130 shadow-sm">
      {tabs.map(({ label, icon }) => (
        <button
          key={label}
          onClick={() => handleTabClick(label)}
          className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded transition-all ${
            activeTab === label
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;
