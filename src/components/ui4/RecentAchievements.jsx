import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const achievements = [
  {
    title: "Python Certification",
    date: "Completed on Oct 15, 2023",
    status: "completed",
    tag: "ISO 9001",
  },
  {
    title: "Web Development Project",
    date: "Completed on Sep 22, 2023",
    status: "completed",
    tag: "IEEE Standard",
  },
  {
    title: "Database Design",
    date: "Completed on Aug 10, 2023",
    status: "completed",
    tag: "ISO 27001",
  },
  {
    title: "Advanced Database Systems",
    date: "In progress (80% complete)",
    status: "in-progress",
    tag: "University Workshop",
  },
];

const AchievementCard = ({ title, date, status, tag }) => {
  const isCompleted = status === "completed";

  return (
    <div className="flex items-start gap-3 w-400 md:w-1/2 mb-4">
      <div className="mt-1">
        {isCompleted ? (
          <CheckCircle className="text-green-500 w-5 h-5" />
        ) : (
          <Circle className="text-blue-500 w-5 h-5" />
        )}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{date}</p>
        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-300">
          {tag}
        </span>
      </div>
    </div>
  );
};

const RecentAchievements = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
        <span role="img" aria-label="trophy">🔑</span> Recent Achievements
      </h3>
      <div className="flex flex-wrap justify-between">
        {achievements.map((a, idx) => (
          <AchievementCard key={idx} {...a} />
        ))}
      </div>
    </div>
  );
};

export default RecentAchievements;
