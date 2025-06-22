import React from 'react';
import ProfileHead from '../components/ui4/profile_head'; // ✅ Use PascalCase for both import and component
import ProfileDashboardPage from '../components/ui4/ProfileDashboardPage';

function Profile() {
  return (
    <div className=" pt-0 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-4">
        <ProfileHead />
      </div>

      {/* Main Profile Dashboard */}
      
    </div>
  );
}

export default Profile;
