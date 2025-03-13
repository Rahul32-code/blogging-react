import React, { useState } from "react";
import { Edit, Trash, Upload } from "lucide-react"; // Icons from lucide-react

const Post = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [status, setStatus] = useState("Draft");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Add your post submission logic here
    console.log("Post submitted:", { postTitle, postContent, status });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 animate-gradient-text text-center">
        Upload New Post
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <form onSubmit={handlePostSubmit} className="space-y-6">
          {/* Post Title */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="postTitle"
              className="text-lg font-medium text-gray-700"
            >
              Post Title
            </label>
            <input
              id="postTitle"
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              placeholder="Enter your post title"
              required
            />
          </div>

          {/* Post Content */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="postContent"
              className="text-lg font-medium text-gray-700"
            >
              Post Content
            </label>
            <textarea
              id="postContent"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              rows="6"
              placeholder="Write the content of your post here"
              required
            />
          </div>

          {/* Post Status */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="status"
              className="text-lg font-medium text-gray-700"
            >
              Status
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStatus("Published")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  status === "Published"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Published
              </button>
              <button
                type="button"
                onClick={() => setStatus("Draft")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  status === "Draft"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Draft
              </button>
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="image"
              className="text-lg font-medium text-gray-700"
            >
              Upload Image (Optional)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="image"
                accept="image/*"
                className="file-input border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200"
              >
                <Upload size={20} />
                <span className="ml-2">Upload</span>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
