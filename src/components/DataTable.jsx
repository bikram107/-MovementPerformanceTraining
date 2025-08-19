export function DataTable({ title, columns, data, highlight, onStatusChange }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4 text-orange-600">{title}</h3>
      <table className="min-w-full text-sm">
        <thead className="bg-orange-100 text-orange-800">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="p-3 text-left whitespace-nowrap font-medium"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-t hover:bg-orange-50 transition ${
                highlight ? "hover:scale-[1.01]" : ""
              }`}
            >
              {columns.map((col, i) => {
                const key = col.toLowerCase();
                if (col === "Status") {
                  return (
                    <td key={i} className="p-3 whitespace-nowrap text-gray-700">
                      <select
                        value={row.status}
                        onChange={(e) =>
                          onStatusChange &&
                          onStatusChange(row.id, e.target.value)
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option value="Pending">New</option>
                        <option value="In Progress">Contacted</option>
                        <option value="Resolved">Follwing up</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  );
                } else {
                  return (
                    <td key={i} className="p-3 whitespace-nowrap text-gray-700">
                      {row[key]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
