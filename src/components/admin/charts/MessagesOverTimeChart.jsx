import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MessagesOverTimeChart({ messages }) {
  const daily = {};
  messages.forEach((msg) => {
    const date = new Date(msg.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    daily[date] = (daily[date] || 0) + 1;
  });

  const data = Object.entries(daily)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ bottom: 40 }}>
        <XAxis dataKey="date" interval={0} angle={-45} textAnchor="end" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#f97316" />
      </BarChart>
    </ResponsiveContainer>
  );
}
