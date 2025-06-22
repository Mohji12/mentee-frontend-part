import React from 'react';
import { FileText, Download, ClipboardList } from 'lucide-react';
import CVPreview from './CVPreview';

const recentDocuments = [
  {
    name: 'Last CV',
    date: 'Oct 25, 2023',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Academic Transcript',
    date: 'Sep 15, 2023',
    iconColor: 'text-purple-500',
  },
];

const DocumentActions = () => {
  return (
    <div className="flex">
      {/* Left Section: Document Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-6 w-1/3 border">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          📂 Document Actions
        </h2>

        {/* Generate & Download Section */}
        <div className="bg-yellow-50 rounded-md p-4 mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Generate & Download Documents</h3>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium w-full py-2 px-4 rounded flex items-center justify-center gap-2 mb-3">
            <ClipboardList className="w-4 h-4" />
            Generate CV
          </button>

          <button className="bg-white border border-yellow-300 text-yellow-700 w-full py-2 px-4 rounded flex items-center justify-center gap-2 mb-2">
            <Download className="w-4 h-4" />
            Download Transcript
          </button>

          <button className="bg-yellow-100 text-yellow-800 w-full py-2 px-4 rounded flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Certificates
          </button>
        </div>

        {/* Recent Documents */}
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Recent Documents</h3>
          {recentDocuments.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg flex items-center justify-between mb-2"
            >
              <div className="flex items-center gap-3">
                <FileText className={`w-5 h-5 ${doc.iconColor}`} />
                <div>
                  <p className="font-medium text-gray-800">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.date}</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: CV Preview */}
      <div className="w-2/3 ">
        <CVPreview />
      </div>
    </div>
  );
};

export default DocumentActions;
