import React from "react";

const newsItems = [
  {
    id: 1,
    title: "Full Body Dumbbell Workout Results Achieved",
    imgUrl: "https://images7.alphacoders.com/130/1308025.jpg",
    category: "FITNESS",
  },
  {
    id: 2,
    title: "Build Strength with Dumbbell Exercises",
    imgUrl: "https://images7.alphacoders.com/130/1308025.jpg",
    category: "FITNESS",
  },
  {
    id: 3,
    title: "Sculpt Your Body with Intense Workouts",
    imgUrl: "https://images7.alphacoders.com/130/1308025.jpg",
    category: "FITNESS",
  },
];

const FeaturedNews = ({Title}) => {
  return (
    <div className="flex flex-col my-15">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">{Title}</h1>
        <hr className="w-25 h-1 bg-blue-600 mt-2 border-0 rounded" />
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-56">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-md">
                {item.category}
              </span>
            </div>
            <div className="p-4 text-white text-start">
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
