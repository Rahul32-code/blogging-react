import { Edit, Trash } from "lucide-react";
import React from "react";
import { getRandomGradient } from "../../../public/dashboard.Related";

const PostCard = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className={`bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:${getRandomGradient()} transition-all duration-300 `}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-white transition-all duration-300 ">
              {post.title}
            </h3>
            <span
              className={`text-sm border p-1 rounded ${
                post.status === "Published"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {post.status}
            </span>
          </div>
          <p className="text-gray-700 mt-2 hover:text-slate-300">By {post.author}</p>
          <p className="text-gray-500 text-sm mt-1 hover:text-slate-300">Published on {post.date}</p>

          <div className="flex justify-between items-center mt-4">
            {/* Action buttons */}
            <button className="flex items-center text-blue-600 hover:text-purple-800 transition-all duration-300">
              <Edit size={18} />
              <span className="ml-2">Edit</span>
            </button>
            <button className="flex items-center text-red-600 hover:text-red-800 transition-all duration-200">
              <Trash size={18} />
              <span className="ml-2">Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
