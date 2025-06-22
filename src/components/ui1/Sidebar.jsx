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
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#0c1a3e] text-white h-screen w-50 flex flex-col justify-between fixed top-0 left-0 z-50">
      
      {/* Top Logo + Title */}
      <div>
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-700">
          <img src="src/assets/Blue_Modern_Air_Coditioner_Promotion_Facebook_Post__1_-removebg-preview.png" alt="Logo" className="h-16 w-32 justify-center" />
          <h1 className="text-lg font-bold tracking-wide"></h1>
          <X className="md:hidden cursor-pointer" />
        </div>

        {/* Nav Links */}
        <nav className="mt-6 px-4 flex flex-col gap-2">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/" />
          <SidebarItem icon={<FileEdit size={18} />} label="SWOT Form" to="/swot-form" />
          <SidebarItem icon={<FileText size={18} />} label="SWOT Report" to="/swot-report" />
          <SidebarItem icon={<ClipboardList size={18} />} label="Activities" to="/activities" />
          <SidebarItem icon={<Calendar size={18} />} label="Meetings" to="/meetings" />
          <SidebarItem icon={<User size={18} />} label="Profile" to="/profile" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Analysis" to="/analysis" />
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

const SidebarItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#13224c] ${
        isActive ? 'bg-blue-600' : ''
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default Sidebar;
