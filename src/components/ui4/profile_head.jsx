import React, { useState } from 'react';
import { FileText, Bot } from 'lucide-react';
import ProfileDashboardPage from './ProfileDashboardPage';
import AcademicTabContent from './AcademicTabContent';
import CareerProfile from './CareerProfile';
import DocumentActions from './DocumentActions'; // ✅ Import DocumentActions

function ProfileHead() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [chatOpen, setChatOpen] = useState(false); // ✅ Chatbot state

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <ProfileDashboardPage />
            </div>
          </div>
        );
      case 'Academic':
        return (
          <div className="mt-4">
            <AcademicTabContent />
          </div>
        );
      case 'Career':
        return (
          <div className="mt-4">
            <CareerProfile />
          </div>
        );
      case 'Documents':
        return (
          <div className="mt-4">
            <DocumentActions />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="text-left space-y-1">
          <h2 className="text-3xl font-bold text-blue-600">Profile Dashboard</h2>
          <p className="text-gray-600 text-base">
            View and manage your personal information and academic progress
          </p>
        </div>
        <button className="mt-3 md:mt-0 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
          <FileText className="w-5 h-5" />
          Generate CV
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border border-gray-200 rounded-lg overflow-hidden">
        {['Overview', 'Academic', 'Career', 'Documents'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/4 py-2 text-sm font-semibold ${
              activeTab === tab
                ? 'text-yellow-600 bg-yellow-50'
                : 'text-gray-600 hover:bg-gray-100'
            } focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>

      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot className="text-blue-800 w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col">
          <div className="bg-yellow-400 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Support Assistant</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
            <div className="bg-gray-100 p-2 rounded">
              Hello! How can I assist you today with the Mentee Tracker?
            </div>
            <div className="text-right text-white bg-blue-500 p-2 rounded">
              I need help with finding my activities.
            </div>
            <div className="bg-gray-100 p-2 rounded">
              You can use the search bar or filters above to find your activities by status, type, or keywords!
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-3 rounded text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileHead;
