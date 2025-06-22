import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-2 md:mt-0">
      {/* Header Section */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-blue-600">Dashboard</h2>
        <p className="text-gray-600 mt-1">Welcome back, Alex! Here’s your progress overview.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-0">
        <button className="bg-blue-600 text-center text-white rounded-md shadow hover:bg-blue-500 transition px-4 py-2 text-sm sm:text-base">
          📅 Schedule
        </button>
        <button className="border border-gray-300 rounded-md hover:bg-gray-100 transition px-4 py-2 text-sm sm:text-base">
          🕒 Time Log
        </button>
        <button className="border border-gray-300 rounded-md hover:bg-gray-100 transition px-4 py-2 text-sm sm:text-base">
          👥 Connect
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
