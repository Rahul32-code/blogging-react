import React from "react";
import { User, MessageSquare, Calendar } from "lucide-react";

const Single = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full bg-[#202026] text-white py-4 flex flex-col">
      <div className="p-4 max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="mb-4">
          <img
            src="https://bloggar-react.wpocean.com/static/media/img-10.89681ea81ae216d993a5.jpg"
            alt="Blog Post"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap sm:flex-nowrap items-center text-gray-600 text-sm space-x-2 sm:space-x-4 mb-4">
          {/* Author */}
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span className="text-xs sm:text-sm">BY</span>
            <a
              href="#"
              className="text-blue-600 font-semibold underline text-xs sm:text-sm"
            >
              SINEOR CONSULTANT
            </a>
          </div>

          {/* Separator */}
          <span className="text-blue-500 hidden sm:inline">●</span>

          {/* Comments */}
          <div className="flex items-center space-x-1">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs sm:text-sm">COMMENTS 35</span>
          </div>

          {/* Separator */}
          <span className="text-blue-500 hidden sm:inline">●</span>

          {/* Date */}
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs sm:text-sm">25 DEC, 2023</span>
          </div>
        </div>

        {/* Blog Content */}
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold mb-4">
            Visiting Bethany Beyond the Jordan: Where Jesus was Baptized
          </h1>
          <p className="text-sm sm:text-base mb-4">
            Law is a great career path if you want to build a broad skill set
            that includes everything from critical thinking and strategic
            planning to communications. If you love rising to a challenge.
          </p>
          <span className="text-blue-600 underline cursor-pointer">
            Read More...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Single;
