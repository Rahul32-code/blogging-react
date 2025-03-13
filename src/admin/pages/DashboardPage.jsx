import { FileText, MessageCircle, UserIcon } from "lucide-react";
import React from "react";
import { getRandomGradient } from "../../../public/dashboard.Related";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 bg-[#f0f1f6]">
      {/* Card 1 - Total Posts */}
      <div
        className={` bg-white p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${getRandomGradient()}`}
      >
        <div className="flex items-center space-x-3">
          <FileText size={32} className="text-gray-600" />
          <h3 className="text-xl font-semibold text-gray-800 hover:text-white transition-all duration-300">Total Posts</h3>
        </div>
        <p className="text-3xl text-gray-800 font-bold mt-2 hover:text-white transition-all duration-300">150</p>
      </div>

      {/* Card 2 - Total Comments */}
      <div className={`bg-white p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${getRandomGradient()}`}>
        <div className="flex items-center space-x-3">
          <MessageCircle size={32} className="text-gray-600 hover:text-white transition-all duration-300" />
          <h3 className="text-xl font-semibold text-black hover:text-white transition-all duration-300">Total Comments</h3>
        </div>
        <p className="text-3xl text-black hover:text-white transition-all duration-300 font-bold mt-2">320</p>
      </div>

      {/* Card 3 - Users */}
      <div className={`bg-white p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${getRandomGradient()}`}>
        <div className="flex items-center space-x-3">
          <UserIcon size={32} className="text-gray-600 hover:text-white transition-all duration-300" />
          <h3 className="text-xl font-semibold text-black hover:text-white transition-all duration-300">Users</h3>
        </div>
        <p className="text-3xl text-black hover:text-white transition-all duration-300 font-bold mt-2">500</p>
      </div>
    </div>
  );
};

export default DashboardPage;
