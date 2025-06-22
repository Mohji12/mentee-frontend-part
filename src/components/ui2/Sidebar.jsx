import React from 'react';
import {
  LayoutDashboard,
  FileEdit,
  FileText,
  ClipboardList,
  Calendar,
  User,
  BarChart2,
  LogOut,
  X
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-[#0c1a3e] text-white h-screen w-40 flex flex-col justify-between fixed top-0 left-0 z-50">
      
      {/* Top Logo + Title */}
      <div>
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
          <img src="https://jgi-menteetracker.s3.ap-south-1.amazonaws.com/black.png" alt="Logo" className="h-8 w-16" /> {/* Replace with actual logo path */}
          <h1 className="text-lg font-bold tracking-wide"></h1>
          <X className="md:hidden cursor-pointer" />
        </div>

        {/* Nav Links */}
        <nav className="mt-6 px-4 flex flex-col gap-2">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <SidebarItem icon={<FileEdit size={18} />} label="SWOT Form" />
          <SidebarItem icon={<FileText size={18} />} label="SWOT Report" />
          <SidebarItem icon={<ClipboardList size={18} />} label="Activities" />
          <SidebarItem icon={<Calendar size={18} />} label="Meetings" />
          <SidebarItem icon={<User size={18} />} label="Profile" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Analysis" />
        </nav>
      </div>

      {/* Logout Button */}
      <div className="px-4 py-5 border-t border-gray-700">
        <button className="flex items-center gap-2 text-sm text-white hover:text-red-400 transition">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#13224c] ${
      active ? 'bg-blue-600' : ''
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Sidebar;
