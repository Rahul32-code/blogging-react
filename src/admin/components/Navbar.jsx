import React from "react";
import { User, LogOut, Menu, ArrowRight, UserCircle } from "lucide-react";

const Navbar = ({ isSideBarCollapsed, setIsSideBarCollapsed }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-8 sticky top-0 z-10">
      {/* Button to toggle sidebar */}
      <button
        className="text-black text-2xl hover:bg-gray-200 p-2 rounded-full transition-all duration-300"
        onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
      >
        {isSideBarCollapsed ? <ArrowRight className="w-6 h-6 text-slate-500" /> : <Menu className="w-6 h-6 text-slate-500" />} {/* Arrow to toggle sidebar */}
      </button>

      <div className="space-x-4 flex items-center">
        {/* Profile Button with Icon */}
        <button className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200">
          <UserCircle size={18} />
        </button>

        {/* Logout Button with Icon */}
        <button className="flex items-center text-red-600 hover:text-red-800 transition-all duration-200">
          <LogOut size={18} />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
