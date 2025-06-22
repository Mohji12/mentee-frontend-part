import React, { useState } from 'react';

const HeadActivity = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full px-6 py-4 mt-4 relative">
      {/* Left Side: Heading and Subheading */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-blue-600">Activities</h2>
        <p className="text-gray-600 mt-1">Manage and track your assigned activities</p>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-0 relative">
        {/* Filters Dropdown */}
        <div className="relative group">
          <button className="border border-gray-300 rounded-md hover:bg-gray-100 transition px-4 py-2 text-sm sm:text-base flex items-center">
            🛠️ Filters
          </button>
          <div className="absolute hidden group-hover:block top-full mt-1 left-0 w-48 bg-white shadow-lg border rounded-md z-10">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">📅 This Month</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">✅ Completed</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">⏳ In Progress</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🚫 Not Started</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">📊 By Priority</li>
            </ul>
          </div>
        </div>

        {/* Request Activity Button */}
        <button
          className="bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 transition px-5 py-2 text-sm sm:text-base flex items-center"
          onClick={() => setShowModal(true)}
        >
          ➕ Request Activity
        </button>

        {/* Actions Dropdown */}
        <div className="relative group">
          <button className="border border-gray-300 rounded-md hover:bg-gray-100 transition px-4 py-2 text-sm sm:text-base flex items-center">
            ⋯ Actions
          </button>
          <div className="absolute hidden group-hover:block top-full mt-1 left-0 w-48 bg-white shadow-lg border rounded-md z-10">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">⬇️ Export</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">⬆️ Import</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🖨️ Print</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-blue-600 mb-1">Request New Activity</h2>
            <p className="text-gray-600 mb-4">
              Submit a request for a new activity to be assigned to you. Your mentor will review your request.
            </p>

            <input
              type="text"
              placeholder="e.g., Complete Python Programming Course"
              className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring focus:border-blue-400"
            />

            <textarea
              rows="4"
              placeholder="Describe what you want to achieve with this activity…"
              className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>

            <select className="w-full border rounded-md px-3 py-2 mb-3 text-gray-700">
              <option>Select activity type</option>
              <option>Short-term</option>
              <option>Mid-term</option>
              <option>Long-term</option>
            </select>

            <input
              type="date"
              className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-400"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadActivity;
