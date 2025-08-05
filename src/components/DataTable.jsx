export function DataTable({ title, columns, data, highlight }) {
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
              {Object.values(row).map((val, i) => (
                <td key={i} className="p-3 whitespace-nowrap text-gray-700">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
