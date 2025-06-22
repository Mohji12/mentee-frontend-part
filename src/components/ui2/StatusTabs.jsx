import React, { useState } from 'react';
import ActivityGrid from './ActivityGrid';
import ActivityGrid1 from './ActivityGrid1'; // Import the ActivityGrid component
import ActivityGrid2 from './ActivityGrid2';
import ActivityGrid3 from './ActivityGrid3';
import { Filter, Bot } from 'lucide-react'; // Import both icons

const StatusTabs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [chatOpen, setChatOpen] = useState(false);

  const tabs = ['All', 'Pending', 'Completed', 'Overdue'];

  return (
    <div className="relative flex flex-col gap-6">

      {/* Tabs */}
      <div className="flex bg-gray-50 p-2 rounded-md space-x-2 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm 
              ${activeTab === tab
                ? 'bg-white font-semibold text-gray-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center p-2 bg-gray-50 rounded-md border border-gray-200 space-x-2 w-full">
        {/* Search Box */}
        <div className="flex items-center flex-1 bg-white rounded-md border border-gray-200 p-2">
          <Filter className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search activities..."
            className="flex-1 text-gray-700 bg-transparent outline-none placeholder-gray-400"
          />
        </div>

        {/* Filter Buttons */}
        <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          <span className="text-sm">Status</span>
        </button>

        <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          <span className="text-sm">Type</span>
        </button>
      </div>

      {/* Activity Cards */}
      {activeTab === 'All' && <ActivityGrid />}
      {activeTab === 'Pending' && <ActivityGrid1 />}
      {activeTab === 'Completed' && <ActivityGrid2 />} {/* Future: Add Completed activities */}
      {activeTab === 'Overdue' && <ActivityGrid3 />} {/* Future: Add Overdue activities */}

      {/* Future: Add conditions for 'Pending', 'Completed', 'Overdue' if needed */}

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
};

export default StatusTabs;
