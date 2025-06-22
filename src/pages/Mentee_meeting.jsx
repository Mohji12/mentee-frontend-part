// pages/MenteeMeeting.jsx
import React from 'react';
import MeetingHead from '../components/pui3/MeetingHead'; // ✅ Capitalized
import MeetingsSection from '../components/pui3/MeetingSection';

const MenteeMeeting = () => {
  return (
    <div className="px-6 pt-0 pb-2 bg-gray-100 min-h-screen">
      {/* Mentee Meeting Header */}
      <div className="mb-4">
        <MeetingHead /> {/* ✅ Capitalized usage */}
      </div>
      <div className='mb-4'>
        <MeetingsSection /> {/* ✅ Capitalized usage */}
      </div>
    </div>
  );
};

export default MenteeMeeting;
