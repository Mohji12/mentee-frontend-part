import React from 'react';
import HeadActivity from '../components/ui2/HeadActivity';
import SearchBar from '../components/ui2/SearchBar';
import StatusTabs from '../components/ui2/StatusTabs'; // <-- import the StatusTabs component


const Activities = () => {
  return (
    <div className="px-4 pt-0 pb-4 bg-gray-100 min-h-screen w-full">
      {/* Activities Top: HeadActivity component */}
      <div className="mb-4">
        <HeadActivity />
      </div>

      {/* Activities SearchBar below the HeadActivity */}
      <div className="mb-4">
        <SearchBar />
      </div>

      {/* StatusTabs below SearchBar */}
      <div className="mb-4">
        <StatusTabs />
      </div>

      {/* Add rest of Activities content here */}
    </div>
  );
};

export default Activities;
