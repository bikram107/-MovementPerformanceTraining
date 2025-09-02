import { useEffect, useState } from "react";
import { supabase } from "../../supabaseBackend";
import { LeadsTable } from "../LeadsTable";

export default function LeadsManager() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("newest");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);

      let query = supabase.from("Leads").select("*");

      // Apply status filter
      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      // Apply sort
      if (sortOption === "newest") {
        query = query.order("created_at", { ascending: false });
      } else if (sortOption === "oldest") {
        query = query.order("created_at", { ascending: true });
      } else if (sortOption === "status") {
        query = query.order("status", { ascending: true });
      }

      const { data, error } = await query;

      if (!error && data) setLeads(data);
      setLoading(false);
    };

    fetchLeads();
  }, [sortOption, statusFilter]);

  const handleLeadStatusChange = (id, newStatus) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  return (
    <div className="p-4">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-semibold text-orange-600">Manage Leads</h1>

        <div className="flex gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-orange-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-orange-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="status">By Status</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="border border-orange-200 rounded-lg p-4 bg-white shadow-sm">
        {loading ? (
          <p className="text-gray-500">Loading leads...</p>
        ) : (
          <LeadsTable leads={leads} onStatusChange={handleLeadStatusChange} />
        )}
      </div>
    </div>
  );
}
