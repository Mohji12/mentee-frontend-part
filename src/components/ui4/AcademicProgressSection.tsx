import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Medal, ShieldCheck, Star, BadgeCheck } from 'lucide-react';

const gpaData = [
  { semester: 'Fall 2021', gpa: 3.6 },
  { semester: 'Spring 2022', gpa: 3.8 },
  { semester: 'Fall 2022', gpa: 3.7 },
  { semester: 'Spring 2023', gpa: 3.9 },
  { semester: 'Fall 2023', gpa: 3.8 },
];

const AcademicProgressSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm  w-full">
      {/* Header */}
      <h2 className="text-xl font-semibold text-yellow-600 flex items-center gap-2 mb-2">
        <span>🕒</span> Academic Progress
      </h2>

      {/* GPA Trend Chart */}
      <p className="text-gray-600 text-sm mb-2">Semester GPA Trend</p>
      <div className="bg-white p-4 rounded-lg border mb-4">
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={gpaData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis domain={[0, 4]} />
            <Tooltip />
            <Bar dataKey="gpa" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Credit Progress */}
      <div className="mb-4 space-y-2">
        <div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Required Credits</span>
            <span className="text-gray-700">65/100</span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded">
            <div className="bg-orange-400 h-1 rounded" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Elective Credits</span>
            <span className="text-gray-700">21/30</span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded">
            <div className="bg-purple-400 h-1 rounded" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>

      {/* Honors Section */}
      <div className="border-t pt-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Academic Honors & Recognition
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <Medal className="w-4 h-4 text-yellow-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Dean's List</span>
              <div className="text-xs">Spring 2023 Semester</div>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <Medal className="w-4 h-4 text-yellow-500 mt-1" />
            <div>
              <span className="font-semibold text-gray-800">Outstanding Project Award</span>
              <div className="text-xs">Database Design Competition</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Competency Rating Section */}
      <div className="bg-gray-50 border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <ShieldCheck className="w-4 h-4 text-yellow-500" />
            Competency Rating
          </div>
          <div className="text-sm font-bold text-gray-800">4.8/5.0</div>
        </div>

        <div className="space-y-2 text-xs text-gray-700 mb-4">
          {[
            { skill: 'Technical Proficiency', score: 4.7 },
            { skill: 'Problem Solving', score: 4.9 },
            { skill: 'Communication', score: 4.2 },
            { skill: 'Leadership', score: 4.5 },
          ].map(({ skill, score }) => (
            <div key={skill}>
              <div className="flex justify-between">
                <span>{skill}</span>
                <span>{score.toFixed(1)}/5.0</span>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded">
                <div className="bg-blue-600 h-1 rounded" style={{ width: `${(score / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          Competency Badges
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="border rounded-lg p-2 text-center text-xs text-gray-600 bg-white shadow-sm">
            <div className="text-blue-500 mb-1">🏅</div>
            Expert
          </div>
          <div className="border rounded-lg p-2 text-center text-xs text-gray-600 bg-white shadow-sm">
            <div className="text-green-500 mb-1">✅</div>
            Verified
          </div>
          <div className="border rounded-lg p-2 text-center text-xs text-gray-600 bg-white shadow-sm">
            <div className="text-purple-500 mb-1">🌟</div>
            Mentor
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="text-yellow-600 text-sm underline hover:text-yellow-700">
            View Detailed Assessment
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcademicProgressSection;
