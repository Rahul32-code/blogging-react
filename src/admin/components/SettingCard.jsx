import React from "react";
import { settingCard } from "../../../public/dashboard.Related";
import {getRandomGradient} from "../../../public/dashboard.Related.js"

const SettingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {settingCard.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 transform hover:shadow-2xl hover:${getRandomGradient()}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-white transition-all duration-300">
              {item.heading}
            </h3>
            <p className="text-gray-700 text-sm hover:text-white transition-all">{item.paragraph}</p>
            <button className={`mt-4 py-2 px-4 rounded-full text-white ${getRandomGradient()} hover:scale-105 transition duration-200 ease-in-out`}>
              {item.buttonName}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SettingCard;
