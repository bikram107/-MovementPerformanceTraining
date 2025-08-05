import { useState } from "react";
import { supabase } from "../supabaseBackend";

const statusOptions = [
  { label: "New", color: "bg-orange-200 text-orange-800" },
  { label: "Contacted", color: "bg-yellow-200 text-yellow-800" },
  { label: "Following Up", color: "bg-blue-200 text-blue-800" },
  { label: "Closed", color: "bg-green-200 text-green-800" },
];

export function LeadsTable({ leads, onStatusChange }) {
  const [updatingId, setUpdatingId] = useState(null);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    const { error } = await supabase
      .from("Leads")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      onStatusChange(id, newStatus);
    } else {
      console.error("Failed to update status:", error.message);
    }
    setUpdatingId(null);
  };

  // Helper to get badge color for a status
  const getStatusColor = (status) => {
    const found = statusOptions.find((s) => s.label === status);
    return found ? found.color : "bg-gray-200 text-gray-800";
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
      <h3 className="text-2xl font-semibold text-orange-600 mb-6">
        Email Leads
      </h3>

      {leads.length === 0 ? (
        <p className="text-center italic text-gray-400">No leads available.</p>
      ) : (
        <div className="space-y-5">
          {leads.map(({ id, email, created_at, status }) => (
            <article
              key={id}
              className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Left: Email and date */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-2/3 mb-3 md:mb-0">
                <p className="break-words font-medium text-gray-800">{email}</p>
                <time
                  className="text-sm text-gray-500 mt-1 md:mt-0"
                  dateTime={created_at}
                  title={new Date(created_at).toLocaleString()}
                >
                  {new Date(created_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              {/* Right: Status dropdown */}
              <div className="w-full md:w-auto">
                <select
                  className={`cursor-pointer rounded-lg border px-4 py-2 font-semibold transition
                    focus:outline-none focus:ring-2 focus:ring-orange-400
                    ${getStatusColor(status)} `}
                  value={status || "New"}
                  onChange={(e) => handleStatusChange(id, e.target.value)}
                  disabled={updatingId === id}
                >
                  {statusOptions.map(({ label }) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
