import React from "react";
import SettingCard from "../components/SettingCard";

const SettingPage = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header with gradient text */}
      <h1 className="text-4xl font-semibold text-slate-600 mb-8">
        Settings
      </h1>

      {/* Settings Cards Grid */}
        <SettingCard />
    </div>
  );
};

export default SettingPage;
