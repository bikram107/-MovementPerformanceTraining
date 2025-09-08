import { useState } from "react";
import { supabase } from "../supabaseBackend";
import {
  FaUsers,
  FaEnvelope,
  FaBox,
  FaTachometerAlt,
  FaSignOutAlt,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

import DashboardOverview from "../components/admin/DashboardOverview";
import LeadsManager from "../components/admin/LeadsManager";
import MessagesManager from "../components/admin/MessagesManager";
import PackagesManager from "../components/admin/PackagesManager";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // External admin shortcuts (env-driven with safe fallbacks)
  const GA_URL =
    import.meta.env.VITE_GA_URL ||
    "https://analytics.google.com/analytics/web/";
  const DB_URL =
    import.meta.env.VITE_DB_URL || "https://app.supabase.com/projects";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  const baseBtn =
    "flex items-center gap-2 md:px-3 px-0 md:py-2 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 justify-center md:justify-start";
  const activeBtn = "bg-orange-100 text-orange-600 font-semibold";

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md fixed inset-y-0 left-0 transition-all duration-300
        w-16 md:w-64`}
      >
        <div className="flex h-full flex-col justify-between">
          {/* Top section */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center justify-center md:justify-start p-4 md:p-6">
              <h2 className="hidden md:block text-2xl font-bold text-orange-600">
                Admin
              </h2>
            </div>

            <nav className="flex flex-col space-y-2 px-2 pb-4">
              {/* Internal tabs */}
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`${baseBtn} ${
                  activeTab === "dashboard" ? activeBtn : ""
                }`}
                aria-label="Dashboard"
                title="Dashboard"
              >
                <FaTachometerAlt className="text-xl" />
                <span className="hidden md:inline">Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab("leads")}
                className={`${baseBtn} ${
                  activeTab === "leads" ? activeBtn : ""
                }`}
                aria-label="Leads"
                title="Leads"
              >
                <FaUsers className="text-xl" />
                <span className="hidden md:inline">Leads</span>
              </button>

              <button
                onClick={() => setActiveTab("messages")}
                className={`${baseBtn} ${
                  activeTab === "messages" ? activeBtn : ""
                }`}
                aria-label="Messages"
                title="Messages"
              >
                <FaEnvelope className="text-xl" />
                <span className="hidden md:inline">Messages</span>
              </button>

              <button
                onClick={() => setActiveTab("packages")}
                className={`${baseBtn} ${
                  activeTab === "packages" ? activeBtn : ""
                }`}
                aria-label="Packages"
                title="Packages"
              >
                <FaBox className="text-xl" />
                <span className="hidden md:inline">Packages</span>
              </button>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-2 mx-1" />

              {/* External shortcuts */}
              <a
                href={GA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={baseBtn}
                title="Analytics"
                aria-label="Analytics"
              >
                <FaChartLine className="text-xl" />
                <span className="hidden md:inline">Analytics</span>
              </a>

              <a
                href={DB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={baseBtn}
                title="Database"
                aria-label="Database"
              >
                <FaDatabase className="text-xl" />
                <span className="hidden md:inline">Database</span>
              </a>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-3 md:p-4 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-0 md:px-4 py-2 w-full bg-gray-200 hover:bg-gray-300 rounded-lg justify-center md:justify-start"
              aria-label="Logout"
              title="Logout"
            >
              <FaSignOutAlt className="text-xl" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`ml-16 md:ml-64 min-h-screen transition-all duration-300 px-2 sm:px-4 lg:px-6 py-4 md:py-8 min-w-0`}
      >
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="w-full overflow-x-auto">
            <div className="space-y-8">
              {activeTab === "dashboard" && <DashboardOverview />}
              {activeTab === "leads" && <LeadsManager />}
              {activeTab === "messages" && <MessagesManager />}
              {activeTab === "packages" && <PackagesManager />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
