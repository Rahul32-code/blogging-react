import React from "react";
import { MessageCircle, Trash, Edit } from "lucide-react";
import { comments, getRandomGradient } from "../../../public/dashboard.Related"; // ✅ Importing data

const Comments = () => {
  return (
    <div className="px-6 space-y-6">
      <h2 className="text-3xl font-semibold text-slate-700">
        Comments
      </h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`hover:${getRandomGradient()} bg-white p-6 rounded-lg shadow-2xl transform hover:scale-102 transition-all duration-300 ease-in-out`}
          >
            {/* User Information */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={comment.avatar}
                alt={comment.user}
                className="w-12 h-12 rounded-full border-2 border-slate-600 hover:border-gray-300 transition-all duration-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 hover:text-white transition-all duration-300">
                  {comment.user}
                </h3>
                <p className="text-sm text-gray-500 hover:text-white transition-all duration-300">
                  Posted on {comment.date}
                </p>
              </div>
            </div>

            {/* Comment Content */}
            <p className="text-lg text-gray-800 hover:text-white transition-all duration-300">
              {comment.content}
            </p>

            {/* Comment Actions */}
            <div className="flex items-center space-x-4 mt-4">
              <button className="flex items-center text-black hover:text-blue-400 transition-all duration-200">
                <MessageCircle size={20} />
                <span className="ml-2">Reply</span>
              </button>
              <button className="flex items-center text-red-500 hover:text-red-400 transition-all duration-200">
                <Trash size={20} />
                <span className="ml-2">Delete</span>
              </button>
              <button className="flex items-center text-black hover:text-green-400 transition-all duration-200">
                <Edit size={20} />
                <span className="ml-2">Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
