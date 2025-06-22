import React from 'react';
import { Filter, Calendar, BarChart2 } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row  p-2 justify-between bg-white rounded-md  space-x-4">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search activities..."
        className="flex-1 p-2 text-gray-700 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />

      {/* Grouping Dropdowns */}
      <div className="flex items-center space-x-2">
  <select className="p-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700 focus:outline-none">
    <option>All Status</option>
    <option>Completed</option>
    <option>In Progress</option>
    <option>Pending</option>
  </select>

  <select className="p-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700 focus:outline-none">
    <option>All Priorities</option>
    <option>Low Priority</option>
    <option>Medium Priority</option>
    <option>High Priority</option>
  </select>

  <select className="p-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700 focus:outline-none">
    <option>All Terms</option>
    <option>Short Term</option>
    <option>Mid Term</option>
    <option>Long Term</option>
  </select>
</div>


      {/* Icons */}
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200">
          <Filter className="w-5 h-5 text-gray-700" />
        </button>
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200">
          <Calendar className="w-5 h-5 text-gray-700" />
        </button>
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200">
          <BarChart2 className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
