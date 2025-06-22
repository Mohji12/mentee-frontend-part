import React, { useState } from 'react';
import DashboardTabs from './DashboardTabs';
import Stats from './Stats';
import SWOTAnalysisTab from './SWOTAnalysisTab';
import ProgressComparison from './ProgressComparison';
import ReportCards from './ReportCards';

function Analysis_head() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex flex-col w-full gap-4 mt-2 md:mt-0">
      {/* Header */}
      <div className="text-center sm:text-left p-2">
        <h2 className="text-3xl font-bold text-blue-600">Analysis</h2>
        <p className="text-gray-600 mt-1 text-lg">
          Review your performance analysis and recommendations
        </p>
      </div>

      {/* Tabs */}
      <div className="p-2">
        <DashboardTabs onTabChange={setActiveTab} />
      </div>

      {/* Tab Content */}
      <div className="p-2">
        {activeTab === 'Overview' && <Stats />}
        {activeTab === 'Skills' && <SWOTAnalysisTab />} {/* ✅ SWOT content under Skills */}
        {activeTab === 'Comparison' && <ProgressComparison />}
        {activeTab === 'Reports' && <ReportCards />}
        {/* Add other tab content (Comparison, Reports) if needed */}
      </div>
    </div>
  );
}

export default Analysis_head;
