import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiBell,
  FiUser,
  FiBarChart2,    // Dashboard
  FiShoppingCart, // Manage IPO
  FiMessageSquare, // IPO Subscription
  FiCheckSquare,  // IPO Allotment
  FiSettings,     // Settings
  FiCode,         // API Manager
  FiUsers,        // Accounts
  FiHelpCircle,   // Help
  FiLogOut
} from "react-icons/fi";
import { useAuthContext } from "../../context/authContext";

const navLinkClasses = ({ isActive }) =>
  isActive
    ? "block py-2 px-3 rounded flex items-center gap-2 bg-gray-200 text-[#6e6dd5]"
    : "block py-2 px-3 rounded flex items-center gap-2 text-gray-500 hover:bg-gray-100";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userData, Logout } = useAuthContext();
  const navigate = useNavigate()
  const performLogOut = ()=>{
    Logout()
    navigate('/')
  }

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar (large screens) */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
        {/* Brand / Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 gap-2">
          {/* Circle with BF */}
          <span
            className="font-bold text-white px-2 py-1 rounded-full"
            style={{ backgroundColor: "#8382de" }}
          >
            BF
          </span>
          <span className="text-md font-bold text-[#6e6dd5]">Bluestock Fintech</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-4 text-sm">
          {/* IPO Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 px-3 mb-2">IPO</p>
            <NavLink to="/dashboard" className={navLinkClasses}>
              <FiBarChart2 size={16} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/dashboard/manage-ipo" className={navLinkClasses}>
              <FiShoppingCart size={16} />
              <span>Manage IPO</span>
            </NavLink>
            <NavLink to="/ipo-subscription" className={navLinkClasses}>
              <FiMessageSquare size={16} />
              <span>IPO Subscription</span>
            </NavLink>
            <NavLink to="/ipo-allotment" className={navLinkClasses}>
              <FiCheckSquare size={16} />
              <span>IPO Allotment</span>
            </NavLink>
          </div>

          {/* Others Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 px-3 mb-2">OTHERS</p>
            <NavLink to="/settings" className={navLinkClasses}>
              <FiSettings size={16} />
              <span>Settings</span>
            </NavLink>
            <NavLink to="/api-manager" className={navLinkClasses}>
              <FiCode size={16} />
              <span>API Manager</span>
            </NavLink>
            <NavLink to="/accounts" className={navLinkClasses}>
              <FiUsers size={16} />
              <span>Accounts</span>
            </NavLink>
            <NavLink to="/help" className={navLinkClasses}>
              <FiHelpCircle size={16} />
              <span>Help</span>
            </NavLink>
            <button onClick={performLogOut} className="py-2 px-3 rounded flex items-center gap-2 text-gray-500 hover:bg-gray-100">
              <FiLogOut size={20} />
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar (small screens) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:hidden`}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-200 justify-between">
          <span className="text-xl font-bold text-[#6e6dd5]">Bluestock Fintech</span>
          <button className="text-gray-600 lg:hidden" onClick={handleToggleSidebar}>
            <FiX size={20} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="px-4 py-6 space-y-4 text-sm">
          {/* IPO Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 px-3 mb-2">IPO</p>
            <NavLink
              to="/dashboard"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiBarChart2 size={16} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/dashboard/manage-ipo"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiShoppingCart size={16} />
              <span>Manage IPO</span>
            </NavLink>
            <NavLink
              to="/ipo-subscription"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiMessageSquare size={16} />
              <span>IPO Subscription</span>
            </NavLink>
            <NavLink
              to="/ipo-allotment"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiCheckSquare size={16} />
              <span>IPO Allotment</span>
            </NavLink>
          </div>

          {/* Others Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 px-3 mb-2">OTHERS</p>
            <NavLink
              to="/settings"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiSettings size={16} />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to="/api-manager"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiCode size={16} />
              <span>API Manager</span>
            </NavLink>
            <NavLink
              to="/accounts"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiUsers size={16} />
              <span>Accounts</span>
            </NavLink>
            <NavLink
              to="/help"
              className={navLinkClasses}
              onClick={handleToggleSidebar}
            >
              <FiHelpCircle size={16} />
              <span>Help</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
          {/* Left side: Mobile menu button + Search */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button className="lg:hidden text-gray-600" onClick={handleToggleSidebar}>
              <FiMenu size={20} />
            </button>
            {/* Search bar */}
            <div className="relative">
              <FiSearch
                size={16}
                className="absolute top-2.5 left-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6e6dd5]"
              />
            </div>
          </div>

          {/* Right side: Notification + User info */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#6e6dd5]">
              <FiBell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Hi, {userData.fullName}</span>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <FiUser className="text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Outlet for the rest of the dashboard pages */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
