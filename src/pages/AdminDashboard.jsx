import { StatCard } from "../components/StatCard";
import { DataTable } from "../components/DataTable";
import { AnalyticsSection } from "../components/Analyticsection";
import { useEffect, useState } from "react";
import { FaEnvelope, FaUser, FaChartBar } from "react-icons/fa";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Replace with real API calls
    setMessages([
      {
        name: "Alice",
        email: "alice@example.com",
        message: "Interested",
        date: "2025-08-01",
      },
      {
        name: "Alok",
        email: "alok@example.com",
        message: "Need help",
        date: "2025-08-02",
      },
    ]);

    setLeads([
      { email: "lead1@example.com", date: "2025-08-01" },
      { email: "lead2@example.com", date: "2025-08-03" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-700">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Messages"
          value={messages.length}
          icon={<FaEnvelope />}
        />
        <StatCard title="Total Leads" value={leads.length} icon={<FaUser />} />
        <StatCard title="Visitors Today" value="123" icon={<FaChartBar />} />
      </div>

      {/* Messages Table */}
      <div className="mb-8">
        <DataTable
          title="Customer Messages"
          columns={["Name", "Email", "Message", "Date"]}
          data={messages.map((m) => ({
            name: m.name,
            email: m.email,
            message: m.message,
            date: m.date,
          }))}
          highlight={true}
        />
      </div>

      {/* Leads Table */}
      <div className="mb-8">
        <DataTable
          title="Email Leads"
          columns={["Email", "Date"]}
          data={leads.map((l) => ({ email: l.email, date: l.date }))}
        />
      </div>

      {/* Google Analytics Section */}
      <AnalyticsSection />
    </div>
  );
}
