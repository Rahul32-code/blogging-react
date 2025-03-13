import React from "react";

const Write = () => {
  return (
    <div className="flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full mt-4">
      {/* Left Side (70% width) */}
      <div className="w-full md:w-[70%] p-6  rounded-lg shadow-lg">
        {/* Title input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter title"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        {/* Content textarea */}
        <div className="mb-4">
          <textarea
            placeholder="Write your content here..."
            rows={6}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="">
          <button className="rounded-md border border-gray-30 p-2">Submit</button>
        </div>
      </div>

      {/* Right Side (30% width) */}
      <div className="w-[30%] p-4">
        <div>
          <div className="mb-2 p-4 border border-gray-300">
            <h2 className="text-white font-semibold ">Publish</h2>
            <hr className="w-10 h-1 bg-blue-600 mb-2 border-0 rounded" />
            <div className="text-slate-300 text-sm mb-2">
              <span className="text-white font-semibold">Status:</span> Draft
            </div>
            <div className="text-slate-300 text-sm mb-2">
              <span className="text-white font-semibold">Visibility:</span>{" "}
              Public
            </div>
            <div className="mb-4">
              <a href="#" className="text-blue-400 text-[13px]">
                Upload Image
              </a>
            </div>
            <div className="w-full flex justify-between">
              <button className="border border-gray-300 rounded text-white w-auto p-1 text-[13px">
                save as a draft
              </button>
              <button className="bg-white text-black font-semibold rounded p-1 text-[13px] border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-black transition-all duration-200">
                Upload
              </button>
            </div>
          </div>
          <div className="mb-2 p-4 border border-gray-300">
            <h2 className="text-white font-semibold mb-1">Category</h2>
            <hr className="w-10 h-1 bg-blue-600 mb-2 border-0 rounded" />
            <div>
              <div className=" flex gap-2 p-1">
                <input type="radio" name="" id="" />
                <span>Art</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
