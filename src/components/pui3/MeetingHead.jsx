// components/pui3/MeetingHead.jsx
import React from 'react';

const MeetingHead = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-2 md:mt-0">
      {/* Header Section */}
      <div className="text-center sm:text-left p-2">
        <h2 className="text-3xl font-bold text-blue-600">Meetings & Appoinments</h2>
        <p className= "text-gray-600 mt-1  text-l">Schedule and manage your mentor meetings</p>
      </div>
    </div>
  );
};

export default MeetingHead;
