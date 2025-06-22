import React, { useState } from 'react';
import { Bot } from 'lucide-react';

const CVPreview = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div>
      <div className="mb-4">
        <div className="bg-white p-6 rounded-lg border border-blue-100 text-gray-800 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-yellow-600 mb-1">📄 CV Preview</h2>
          <p className="text-sm text-gray-600 mb-4">Summary of your skills and achievements</p>

          {/* Personal Info */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Personal Information</h3>
            <p>Alex Johnson<br />alex.johnson@university.edu<br />Computer Science, Year 3<br />Student ID: ST12345</p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Education</h3>
            <p>🎓 Bachelor of Science in Computer Science<br />International University, 2022–2026<br />GPA: 3.8/4.0</p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Programming (85%)', 'Data Analysis (70%)', 'Database Design (55%)', 'Web Development (80%)', 'Algorithms (65%)'].map((skill, index) => (
                <span key={index} className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-lg">{skill}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside">
              <li>🟠 Python Certification (ISO 9001)</li>
              <li>🟠 Web Development Project (IEEE Standard)</li>
              <li>🟠 Database Design (ISO 27001)</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Experience</h3>
            <div className="mt-1">
              <p className="font-semibold">Research Assistant</p>
              <p className="text-sm text-gray-600">University AI Lab, 2023</p>
              <ul className="list-disc list-inside text-sm">
                <li>✅ Conducted research on machine learning applications</li>
                <li>✅ Co-authored research paper on medical AI</li>
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Web Developer Intern</p>
              <p className="text-sm text-gray-600">TechStart Inc., 2022</p>
              <ul className="list-disc list-inside text-sm">
                <li>✅ Developed and maintained web applications</li>
                <li>✅ Implemented responsive designs with React</li>
              </ul>
            </div>
          </div>

          {/* Standards */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">International Standards</h3>
            <ul className="list-disc list-inside">
              <li>🔵 ISO/IEC 20000 – IT Service Management</li>
              <li>🟢 IEEE 730 – Software Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot className="text-blue-800 w-6 h-6" />
      </button>

      {/* Chatbot Window */}
    </div>
  );
};

export default CVPreview;
