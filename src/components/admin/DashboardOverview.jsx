import { useEffect, useState } from "react";
import { supabase } from "../../supabaseBackend";
import { StatCard } from "../StatCard";
import { FaUsers, FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";

import LeadsOverTimeChart from "./charts/LeadsOverTimeChart";
import MessagesOverTimeChart from "./charts/MessagesOverTimeChart";
import LeadStatusChart from "./charts/LeadStatusChart";

export default function DashboardOverview() {
  const [leads, setLeads] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: leadsData } = await supabase
        .from("Leads")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: messagesData } = await supabase
        .from("Messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (leadsData) setLeads(leadsData);
      if (messagesData) setMessages(messagesData);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-orange-700 mb-2">
        Dashboard Overview
      </h1>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Total Leads"
          value={leads.length}
          icon={<FaUsers className="text-orange-500" size={28} />}
        />
        <StatCard
          title="Unread Messages"
          value={messages.filter((msg) => !msg.read).length}
          icon={<FaEnvelopeOpenText className="text-orange-500" size={28} />}
        />
        <StatCard
          title="Total Messages"
          value={messages.length}
          icon={<FaEnvelope className="text-orange-500" size={28} />}
        />
      </section>

      {/* Recent Activity */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-orange-600 mb-3">
            Recent Leads
          </h2>
          <div className="space-y-2">
            {leads.slice(0, 5).map((lead) => (
              <div
                key={lead.id}
                className="flex justify-between text-sm border-b pb-1 last:border-0"
              >
                <span>{lead.name || "Unnamed"}</span>
                <span className="text-gray-500">{lead.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-orange-600 mb-3">
            Recent Messages
          </h2>
          <div className="space-y-2">
            {messages.slice(0, 5).map((msg) => (
              <div
                key={msg.id}
                className="flex justify-between text-sm border-b pb-1 last:border-0"
              >
                <span className="truncate max-w-[120px]">{msg.email}</span>
                <span className="truncate max-w-[150px] text-gray-500">
                  {msg.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-orange-600 mb-3">
            Leads Over Time
          </h2>
          <LeadsOverTimeChart leads={leads} />
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-orange-600 mb-3">
            Messages Over Time
          </h2>
          <MessagesOverTimeChart messages={messages} />
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-orange-600 mb-3">
            Lead Status Breakdown
          </h2>
          <LeadStatusChart leads={leads} />
        </div>
      </section>
    </div>
  );
}
