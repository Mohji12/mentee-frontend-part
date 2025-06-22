// components/SidebarLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      {/* Main content padding adjusted to start after sidebar */}
      <main className="pl-40 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
