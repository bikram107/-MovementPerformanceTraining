import AnalyticsDataCard from "./AnalyticsDataCard";

export function AnalyticsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-orange-600">
        Google Analytics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnalyticsDataCard label="Active Users" value="45" />
        <AnalyticsDataCard label="Sessions" value="90" />
        <AnalyticsDataCard label="Bounce Rate" value="32%" />

        <AnalyticsDataCard label="Avg. Session Duration" value="3m 24s" />
        <AnalyticsDataCard label="Traffic Source" value="Google" />
      </div>
    </div>
  );
}
