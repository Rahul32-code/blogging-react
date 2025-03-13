import React from "react";

const Advertisement = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full flex flex-col md:flex-row mt-4">
      <div className="flex justify-center md:justify-start w-full h-28 bg-slate-600 rounded">
        <img
          src="https://st2.depositphotos.com/1831459/11889/v/950/depositphotos_118893066-stock-illustration-healthy-lifestyle-banner-concept.jpg"
          alt="Advertisement"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Advertisement;
