import React from 'react';
import { BookOpen } from 'lucide-react'; // or use an emoji/icon

const resources = [
  {
    title: 'Machine Learning Fundamentals',
    description: 'Online course with certification',
    status: 'Recommended',
    rating: 4.8
  },
  {
    title: 'Advanced Database Systems',
    description: 'University workshop series',
    status: 'In Progress',
    rating: 4.5
  },
  {
    title: 'Full-Stack Development',
    description: 'Hands-on project-based learning',
    status: 'Upcoming',
    rating: 4.9
  }
];

const statusColors = {
  Recommended: 'bg-blue-100 text-blue-800',
  'In Progress': 'bg-green-100 text-green-800',
  Upcoming: 'bg-gray-100 text-gray-700'
};

const LearningResources = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full border">
      <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
        📖 Learning Resources
      </h2>

      {resources.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="font-medium text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <span
              className={`text-xs px-2 py-1 rounded-full inline-block mt-2 ${statusColors[item.status]}`}
            >
              {item.status}
            </span>
          </div>
          <div className="text-yellow-600 font-medium text-sm">{item.rating}/5</div>
        </div>
      ))}
    </div>
  );
};

export default LearningResources;
