import React from 'react';

const activities = [
  // --- First 3 cards ---
  {
    title: 'Develop a detailed study plan',
    description: 'Create a structured schedule that prioritizes chemistry and biostatistics...',
    progress: 40,
    type: 'Short-term',
    status: 'Pending',
    due: '12 May 2025',
  },
  {
    title: 'Seek tutoring or supplemental instruction',
    description: 'Identify resources offered by the college for chemistry...',
    progress: 25,
    type: 'Short-term',
    status: 'In Progress',
    due: '8 May 2025',
  },
  {
    title: 'Limit social media usage',
    description: 'Establish specific times for social media engagement...',
    progress: 40,
    type: 'Short-term',
    status: 'In Progress',
    due: '5 May 2025',
  },

  // --- Newly added 6 cards (from uploaded images) ---
  {
    title: 'Join a study group',
    description: 'Find classmates who are also struggling with chemistry or biostatistics to create a collaborative learning environment.',
    progress: 0,
    type: 'Mid-term',
    status: 'Pending',
    due: '28 May 2025',
  },
  {
    title: 'Enroll in a computer coding course',
    description: 'Tackle your low confidence in computer coding by taking a beginner\'s course. This will help you develop essential skills.',
    progress: 15,
    type: 'Mid-term',
    status: 'In Progress',
    due: '12 Jun 2025',
  },
];

const ActivityGrid1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
      {activities.map((activity, index) => (
        <div key={index} className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
          <p className="text-gray-500 text-sm mt-2">{activity.description}</p>

          {/* Labels */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium 
              ${activity.type === 'Short-term' ? 'bg-orange-100 text-orange-700' :
                activity.type === 'Mid-term' ? 'bg-yellow-100 text-yellow-700' :
                'bg-purple-100 text-purple-700'}
            `}>
              {activity.type}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium 
              ${activity.status === 'Pending' ? 'bg-gray-100 text-gray-600' :
                activity.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-green-100 text-green-700'}
            `}>
              {activity.status}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="text-xs text-gray-400 mb-1">Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full 
                  ${activity.progress >= 40 ? 'bg-green-500' : 'bg-orange-500'}
                `}
                style={{ width: `${activity.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-7 4h4m-9 4h10m-6-4h2"></path>
              </svg>
              Due: {activity.due}
            </div>
            <button className="text-blue-600 hover:underline">Details →</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid1;
