import { useEffect, useState } from "react";
import { supabase } from "../supabaseBackend";
import { LeadsTable } from "../components/LeadsTable";
import { MessagesTable } from "../components/MessagesTable";
import { StatCard } from "../components/StatCard";

import { FaUsers, FaEnvelopeOpenText, FaEnvelope } from "react-icons/fa";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch leads and messages from Supabase
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: leadsData, error: leadsError } = await supabase
        .from("Leads")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: messagesData, error: messagesError } = await supabase
        .from("Messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!leadsError && leadsData) setLeads(leadsData);
      if (!messagesError && messagesData) setMessages(messagesData);

      setLoading(false);
    };

    fetchData();
  }, []);

  // Update lead status locally after backend update
  const handleLeadStatusChange = (id, newStatus) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  // Mark message as read locally after backend update
  const handleMarkMessageRead = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen max-w-8xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10 text-orange-700 tracking-wide drop-shadow-sm">
        Admin Dashboard
      </h1>

      {/* Stat Cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-14">
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

      {/* Loading Indicator */}
      {loading ? (
        <p className="text-gray-500 text-center text-lg">Loading data...</p>
      ) : (
        <section className="space-y-14">
          <MessagesTable
            messages={messages}
            onMarkRead={handleMarkMessageRead}
          />
          <LeadsTable leads={leads} onStatusChange={handleLeadStatusChange} />
        </section>
      )}
    </main>
  );
}
