import React from "react";

const VideoNews = ({ title }) => {
  return (
    <div className="flex flex-col my-15">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Video News</h1>
        <hr className="w-25 h-1 bg-blue-600 mt-2 border-0 rounded" />
      </div>
      <div className="border border-gray-600">
        <div className=" text-white p-6 rounded-lg flex flex-col md:flex-row items-center max-w-2xl mx-auto">
          <div className="border-b border-gray-600 text-white p-6  flex flex-col md:flex-row items-center max-w-2xl mx-auto">
            {/* Image Section */}
            <div className="relative w-full md:w-1/3">
              <img
                src="https://via.placeholder.com/200" // Replace with actual image URL
                alt="Blog Thumbnail"
                className="rounded-lg w-full"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-blue-600 text-white p-4 rounded-full opacity-80 hover:opacity-100 transition">
                  ▶
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 md:ml-6 mt-4 md:mt-0">
              <h2 className="text-lg font-bold hover:text-blue-600">
                We provide advanced solution growing your online
              </h2>
              {/* Author Info */}
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <img
                  src="https://via.placeholder.com/30" // Replace with actual avatar
                  alt="Admin"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>By Admin • 25 Dec, 2023</span>
              </div>
              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm">
                You can customize the view Blog post with author simple mouse
                click and immediately see the result of your changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
