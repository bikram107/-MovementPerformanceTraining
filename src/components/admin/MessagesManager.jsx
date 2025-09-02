import { useEffect, useState } from "react";
import { supabase } from "../../supabaseBackend";
import { MessagesTable } from "../MessagesTable";

export default function MessagesManager() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("newest"); // NEW
  const [statusFilter, setStatusFilter] = useState("all"); // NEW

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);

      let query = supabase.from("Messages").select("*");

      // Apply status filter
      if (statusFilter === "unread") {
        query = query.eq("read", false);
      } else if (statusFilter === "read") {
        query = query.eq("read", true);
      }

      // Apply sorting
      if (sortOption === "newest") {
        query = query.order("created_at", { ascending: false });
      } else if (sortOption === "oldest") {
        query = query.order("created_at", { ascending: true });
      }

      const { data, error } = await query;

      if (!error && data) setMessages(data);
      setLoading(false);
    };

    fetchMessages();
  }, [sortOption, statusFilter]);

  const handleMarkRead = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-semibold text-orange-600">
          Manage Messages
        </h1>

        <div className="flex gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-orange-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-orange-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading messages...</p>
      ) : (
        <MessagesTable messages={messages} onMarkRead={handleMarkRead} />
      )}
    </div>
  );
}
