import React from 'react';
import { Download, FileText, LineChart, Award, Activity } from 'lucide-react';

const reports = [
  {
    title: 'SWOT Analysis Report',
    description: 'Complete SWOT report with detailed analysis',
    color: 'bg-yellow-400',
    iconBg: 'bg-yellow-100',
    icon: <FileText className="text-yellow-500" />,
  },
  {
    title: 'Progress Report',
    description: 'Detailed progress tracking over time',
    color: 'bg-blue-500',
    iconBg: 'bg-blue-100',
    icon: <LineChart className="text-blue-500" />,
  },
  {
    title: 'Academic Performance',
    description: 'Academic progress and grade analysis',
    color: 'bg-purple-500',
    iconBg: 'bg-purple-100',
    icon: <Award className="text-purple-500" />,
  },
  {
    title: 'Skills Assessment',
    description: 'Comprehensive skills evaluation',
    color: 'bg-green-500',
    iconBg: 'bg-green-100',
    icon: <Activity className="text-green-500" />,
  },
];

const ReportCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-8xl mx-auto">
      {reports.map((report, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between rounded-xl p-4 shadow border ${
            report.color === 'bg-green-500' ? 'border-green-200' :
            report.color === 'bg-purple-500' ? 'border-purple-200' :
            report.color === 'bg-blue-500' ? 'border-blue-200' :
            'border-yellow-200'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.description}</p>
            </div>
            <div className={`p-2 rounded-full ${report.iconBg}`}>
              {report.icon}
            </div>
          </div>
          <button
            className={`mt-4 flex items-center justify-center gap-2 text-white py-2 rounded ${report.color}`}
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;
