import { useState } from "react";
import { supabase } from "../supabaseBackend";
import {
  FaUsers,
  FaEnvelope,
  FaBox,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import DashboardOverview from "../components/admin/DashboardOverview";
import LeadsManager from "../components/admin/LeadsManager";
import MessagesManager from "../components/admin/MessagesManager";
import PackagesManager from "../components/admin/PackagesManager";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen fixed left-0 top-0">
        <div>
          <h2 className="text-2xl font-bold text-orange-600 p-6">Admin</h2>
          <nav className="flex flex-col space-y-2 px-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`text-left px-3 py-2 rounded-lg ${
                activeTab === "dashboard"
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaTachometerAlt className="inline mr-2" /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`text-left px-3 py-2 rounded-lg ${
                activeTab === "leads"
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUsers className="inline mr-2" /> Leads
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`text-left px-3 py-2 rounded-lg ${
                activeTab === "messages"
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaEnvelope className="inline mr-2" /> Messages
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`text-left px-3 py-2 rounded-lg ${
                activeTab === "packages"
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaBox className="inline mr-2" /> Packages
            </button>
          </nav>
        </div>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 w-full bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 ml-64 overflow-y-auto h-screen">
        {activeTab === "dashboard" && <DashboardOverview />}
        {activeTab === "leads" && <LeadsManager />}
        {activeTab === "messages" && <MessagesManager />}
        {activeTab === "packages" && <PackagesManager />}
      </main>
    </div>
  );
}
