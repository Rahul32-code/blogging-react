import { Edit, Trash } from "lucide-react";
import React from "react";
import { getRandomGradient } from "../../../public/dashboard.Related";

const UserCard = ({ user }) => {
  return (
    <div
      className={`bg-white hover:${getRandomGradient()} p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {/* User Header */}
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-slate-600 hover:border-gray-200 transition-all duration-300"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-white">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600 hover:text-white">{user.role}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-4 space-y-2">
        <p className="text-gray-600 hover:text-white transition-all duration-300">
          <strong className="text-slate-600 hover:text-black">Email: </strong>
          {user.email}
        </p>
        <p className="text-gray-600 hover:text-white transition-all duration-300">
          <strong className="text-slate-600 hover:text-black">Joined: </strong>
          {user.joinedDate}
        </p>
        <p className="text-gray-600 hover:text-white transition-all duration-300">
          <strong className="text-slate-600 hover:text-black">Status: </strong>
          <span
            className={`${
              user.status === "Active"
                ? "text-green-500 hover:text-green-600"
                : "text-yellow-500 hover:text-yellow-600"
            } transition-all duration-300`}
          >
            {user.status}
          </span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mt-6">
        <button
          className="flex items-center text-red-600 hover:text-red-800 transition duration-200"
          onClick={() => alert("Delete user")}
        >
          <Trash size={18} />
          <span className="ml-2">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
