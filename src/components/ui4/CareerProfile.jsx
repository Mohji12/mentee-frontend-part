import React from 'react';
import SkillsAssessment from './SkillsAssessment'; // adjust the path if needed
import LearningResources from './LearningResources';

const CareerProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Career Profile - Left Column */}
      <div className="bg-white rounded-2xl shadow-md p-6 lg:w-1/3 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📁 Career Profile
        </h2>

        {/* Career Goals */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-1">Career Goals</h3>
          <p className="text-gray-600 border p-3 rounded-md">
            Become a senior software engineer specializing in AI and machine learning applications within 5 years of graduation.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Experience</h3>

          {/* Research Assistant */}
          <div className="mb-4">
            <h4 className="text-gray-800 font-semibold">Research Assistant</h4>
            <p className="text-sm text-gray-500">University AI Lab • 2023</p>
            <ul className="list-disc ml-5 mt-1 text-gray-600 text-sm">
              <li>Conducted research on machine learning applications</li>
              <li>Co-authored research paper on medical AI</li>
            </ul>
          </div>

          {/* Web Developer Intern */}
          <div>
            <h4 className="text-gray-800 font-semibold">Web Developer Intern</h4>
            <p className="text-sm text-gray-500">TechStart Inc. • 2022</p>
            <ul className="list-disc ml-5 mt-1 text-gray-600 text-sm">
              <li>Developed and maintained web applications</li>
              <li>Implemented responsive designs with React</li>
            </ul>
          </div>
        </div>

        {/* Mentor */}
        <div className="border-t pt-4">
          <h3 className="font-medium text-gray-700 mb-2">Mentor</h3>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold text-gray-800">Dr. Sarah Johnson</p>
              <p className="text-sm text-gray-500">Senior Data Scientist • Weekly Meetings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Assessment - Right Column */}
      <div className="lg:w-2/3 w-full">
        <SkillsAssessment />
        <LearningResources />
      </div>
    </div>
  );
};

export default CareerProfile;
