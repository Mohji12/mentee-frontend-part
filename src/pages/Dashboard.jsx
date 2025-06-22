import React from 'react';
import ActionButtons from '../components/ui1/ActionButtons';
import Activities from '../components/ui1/Activities';
import GlobalBenchmark from '../components/ui1/GlobalBenchmark';
import KPIOverview from '../components/ui1/KPIOverview';
import Kpi_Stats from '../components/ui1/Kpi_Stats';
import Pathway from '../components/ui1/Pathway';
import Stats from '../components/ui1/Stats';
import SkillsOverviewChart from '../components/ui1/SkillsOverviewChart';
// Add at the bottom
<div className="mt-2 mb-6">
  <Activities />
</div>


const Dashboard = () => {
  return (
    <div className="px-6 pt-0 pb-2 bg-gray-100 min-h-screen">
      {/* Dashboard Top: Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <ActionButtons />
      </div>

      {/* KPI Overview Section */}
      <div className="mt-2 mb-6">
        <KPIOverview />
      </div>

      {/* Detailed KPI Stats Section */}
      <div className="mt-2 mb-6">
        <Kpi_Stats />
      </div>

      {/* Global Benchmark Section */}
      <div className="mt-2 mb-6">
        <GlobalBenchmark />
      </div> 

      {/* Learning Pathway Section */}
      <div className="mt-2 mb-6">
        <Pathway />
      </div>

      {/* 📊 Skill & Activity Stats Section (NEW) */}
      <div className="mt-2 mb-6">
        <Stats />
      </div>

      <div className="mt-2 mb-6">
        <Activities />
      </div>
    </div>
  );
};

export default Dashboard;
