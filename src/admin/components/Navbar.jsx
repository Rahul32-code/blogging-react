import React, { useState } from "react";
import { User, LogOut, Menu, ArrowRight, UserCircle } from "lucide-react";

const Navbar = ({ isSideBarCollapsed, setIsSideBarCollapsed }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 mb-8 sticky top-0 z-10 shadow-md border-b">
      {/* Button to toggle sidebar */}
      <button
        className="text-black text-2xl hover:bg-gray-200 p-2 rounded-full transition-all duration-300"
        onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
      >
        {isSideBarCollapsed ? (
          <ArrowRight className="w-6 h-6 text-slate-500" />
        ) : (
          <Menu className="w-6 h-6 text-slate-500" />
        )}
      </button>

      <div className="space-x-4 flex items-center mr-5">
        {/* Profile Button with Icon */}
        <button
          className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200"
          onClick={toggleProfile}
        >
          <UserCircle size={18} />
        </button>
      </div>

      {/* User Profile Modal */}
      {isProfileVisible && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20"
          onClick={() => setIsProfileVisible(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-80 md:w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">User Profile</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsProfileVisible(false)}
              >
                <span className="text-xl">×</span>
              </button>
            </div>

            {/* User info */}
            <div className="flex items-center mb-4">
              <UserCircle size={48} className="text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  John Doe
                </h3>
                <p className="text-sm text-gray-500">johndoe@example.com</p>
              </div>
            </div>

            {/* Profile actions */}
            <div className="flex justify-between items-center">
              <button className="flex items-center text-red-600 hover:text-red-800 transition-all duration-200">
                <LogOut size={18} />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
