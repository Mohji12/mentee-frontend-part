import React, { useState } from 'react';
import DashboardSkillsSection from './DashboardSkillsSection'; // Ensure the path is correct

const swotData = {
  Strengths: [
    'Strong programming skills in Python and JavaScript',
    'Good understanding of data structures and algorithms',
    'Experience with web development frameworks',
    'Strong problem-solving abilities',
  ],
  Weaknesses: [
    'Limited experience with database design',
    'Needs improvement in technical documentation',
    'Time management can be improved',
    'Limited exposure to cloud services',
  ],
  Opportunities: [
    'Hackathons and tech meetups',
    'Open source contributions',
    'Time management can be improved',
    'Limited exposure to cloud services',
  ],
  Threats: [
    'Rapidly evolving technology landscape',
    'Competitive job market',
    'Limited time for skill development due to academic commitments',
    'Potential burnout from balancing multiple responsibilities',
  ],
};

const mentorRecommendations = [
  'Focus on database design and cloud computing skills',
  'Participate in more collaborative coding projects',
  'Improve technical documentation skills',
  'Develop a structured approach to time management',
];

const SWOTAnalysisTab = () => {
  const [activeTab, setActiveTab] = useState('Strengths');

  return (
    <div className="flex space-x-6">
      {/* SWOT Section - 2/3 part */}
      <div className="flex-2 bg-white shadow rounded-lg p-4 w-2/3">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800">SWOT Analysis</h2>
          <span className="text-sm text-gray-400">Updated: Oct 15, 2023</span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-3">
          {Object.keys(swotData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm font-medium border rounded-t-md mr-2 ${
                activeTab === tab
                  ? 'bg-white text-black shadow font-bold border-gray-300'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          {swotData[activeTab].map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ul>

        {/* Mentor Recommendations */}
        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
          <h3 className="text-yellow-400 font-semibold mb-2">Mentor Recommendations</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {mentorRecommendations.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills Section - 1/3 part */}
      <div className="w-1/3">
        <DashboardSkillsSection />
      </div>
    </div>
  );
};

export default SWOTAnalysisTab;