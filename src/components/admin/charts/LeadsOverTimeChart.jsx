import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LeadsOverTimeChart({ leads }) {
  // Aggregate by week
  const weekly = {};
  leads.forEach((lead) => {
    const week = new Date(lead.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    weekly[week] = (weekly[week] || 0) + 1;
  });

  const data = Object.entries(weekly)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // ascending

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#f97316"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
