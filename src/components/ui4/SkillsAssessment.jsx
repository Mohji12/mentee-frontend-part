import React from 'react';

const skills = [
  { name: 'Programming', percent: 85 },
  { name: 'Data Analysis', percent: 70 },
  { name: 'Database Design', percent: 55 },
  { name: 'Web Development', percent: 80 },
  { name: 'Algorithms', percent: 65 },
];

const indicators = [
  { label: 'Top 10% in Department', color: 'bg-green-100 text-green-700' },
  { label: '85% Activity Completion', color: 'bg-blue-100 text-blue-700' },
  { label: '92% Meeting Attendance', color: 'bg-purple-100 text-purple-700' },
  { label: '3 Certifications', color: 'bg-orange-100 text-orange-700' },
];

const achievements = [
  { title: 'Research Paper Submission', status: 'Completed' },
  { title: 'Python Certification', status: 'Completed' },
  { title: 'Web Development Project', status: 'In Progress' },
];

const SkillsAssessment = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
        🧠 Skills Assessment
      </h2>

      {/* Analytics Report */}
      <div className="border p-4 rounded-lg bg-gray-50 mb-6">
        <h3 className="font-semibold text-gray-700 mb-1">📊 Analytics Report</h3>
        <p className="text-sm text-gray-500 mb-4">Summary of your performance metrics</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-xl font-bold text-blue-600">8/15</h4>
            <p className="text-sm text-gray-600">Activities</p>
            <p className="text-green-600 text-xs">+3 this month</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-600">6/10</h4>
            <p className="text-sm text-gray-600">Meetings</p>
            <p className="text-green-600 text-xs">+2 this month</p>
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">📈 Skill Breakdown</h4>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Indicators */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">📌 Performance Indicators</h4>
          <div className="flex flex-wrap gap-2">
            {indicators.map((item, i) => (
              <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full ${item.color}`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">🏅 Achievements This Semester</h4>
          {achievements.map((achieve, i) => (
            <div key={i} className="flex justify-between text-sm py-1 border-b last:border-none">
              <span>{achieve.title}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  achieve.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {achieve.status}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">🕒 Recent Activity</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>
              <strong>✔ Progress Meeting Attended</strong> <span className="text-gray-500">• Today, 10:30 AM</span>
            </div>
            <div>
              <strong>✔ Project Milestone Completed</strong> <span className="text-gray-500">• Yesterday, 2:15 PM</span>
            </div>
          </div>
        </div>

        {/* Growth Analysis */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            <p className="text-sm text-gray-500">Technical Growth</p>
            <h4 className="text-xl font-bold text-green-600">+42% ↑</h4>
          </div>
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            <p className="text-sm text-gray-500">Soft Skills</p>
            <h4 className="text-xl font-bold text-green-600">+23% ↑</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessment;
