import React from "react";

const AnalyticsDataCard = ({ label, value }) => {
  return (
    <div className="bg-orange-50 p-4 rounded-xl shadow-sm text-sm">
      <div className="text-orange-700 font-medium">{label}</div>
      <div className="text-gray-800 text-lg font-semibold">{value}</div>
    </div>
  );
};

export default AnalyticsDataCard;
