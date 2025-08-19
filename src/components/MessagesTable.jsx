import { supabase } from "../supabaseBackend";

function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function MessagesTable({ messages, onMarkRead }) {
  const handleMarkReadClick = async (id, e) => {
    e.stopPropagation(); // prevent parent div click if any

    const { data, error } = await supabase
      .from("Messages")
      .update({ read: true })
      .eq("id", id);

    if (error) {
      console.error("❌ Error marking as read:", error.message);
    } else {
      onMarkRead(id);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-10 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-orange-600 mb-6">
        Customer Messages
      </h3>
      <div className="flex flex-col space-y-5">
        {messages.length === 0 && (
          <p className="text-gray-400 italic text-center">No messages yet.</p>
        )}

        {messages.map((msg) => (
          <article
            key={msg.id}
            className={`flex items-start space-x-5 p-4 rounded-xl cursor-pointer transition-shadow duration-300
              ${
                msg.read
                  ? "bg-gray-50 hover:shadow-md"
                  : "bg-orange-50 border-2 border-orange-300 shadow-md"
              }`}
            onClick={() => {
              if (!msg.read)
                handleMarkReadClick(msg.id, { stopPropagation: () => {} });
            }}
          >
            {/* Avatar circle with initials */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold text-white select-none
                ${msg.read ? "bg-gray-400" : "bg-orange-500"}`}
            >
              {getInitials(msg.name)}
            </div>

            {/* Message content */}
            <div className="flex-1 min-w-0">
              <header className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {msg.name}
                </h4>
                <time
                  className="text-sm text-gray-400"
                  dateTime={msg.created_at}
                  title={new Date(msg.created_at).toLocaleString()}
                >
                  {new Date(msg.created_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </header>
              <p className="text-gray-700 text-base mb-1 line-clamp-3">
                {msg.message}
              </p>
              <p className="text-xs text-gray-500">{msg.email}</p>
            </div>

            {/* Mark as Read Button for unread */}
            {!msg.read && (
              <button
                onClick={(e) => handleMarkReadClick(msg.id, e)}
                className="self-start text-orange-600 font-semibold px-3 py-1 border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition"
                aria-label="Mark message as read"
              >
                Mark Read
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
