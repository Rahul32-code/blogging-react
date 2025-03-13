import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import FeaturedNews from "../components/FeaturedNews";
import VideoNews from "../components/VideoNews";
import SponseredNews from "../components/SponseredNews";
import Advertisement from "../components/Advertisement";

const Home = () => {
  return (
    <>
    <Advertisement />
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full flex flex-col md:flex-row mt-4">
        <main className="flex-1 md:w-[70%] px-2 space-y-6">
          {/* Left Section */}
          <div className="w-full space-y-6">
            <div className="bg-[url('https://bloggar-react.wpocean.com/static/media/slide-1.3a7a1afcc1e8f7416e0a.jpg')] bg-cover bg-no-repeat bg-center h-[400px] relative">
              <div className="absolute bottom-0 left-0 w-full text-white pl-4 pb-10">
                <h2 className="font-bold text-2xl mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, assumenda?
                </h2>
                <p className="font-semibold text-[15px] text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  necessitatibus.
                </p>
              </div>
            </div>
            <FeaturedNews Title={"Features News"} />
            <VideoNews title={"Video News"} />
          </div>
        </main>

        {/* Right Section */}
        <aside className="md:w-[30%] mt-4 md:mt-0 sticky top-20 self-start">
          <div className="bg-[#2c2c32] px-8 py-6 flex flex-col items-center justify-center shadow-lg mb-10 rounded-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/animation-character-portrait-woman-crossing-arms-pose-flat-design_40876-2331.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-4">
              <p className="text-center text-2xl font-medium text-white">
                John Doe
              </p>
            </div>
            <div className="mb-4">
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                neque veritatis totam sunt.
              </p>
            </div>
            <div className="flex justify-center gap-4 text-white">
              <Facebook />
              <Twitter />
              <Linkedin />
              <Youtube />
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="border border-[#2c2c32] px-6 py-4 flex flex-col items-start justify-start rounded-lg shadow-lg mb-10">
            <div className="text-start text-2xl font-semibold text-white">
              News Letter
            </div>
            <hr className="w-16 h-1 bg-blue-600 mt-2 border-0 rounded mb-4" />
            <div className="mb-4 text-start text-lg text-[#cbcbcb]">
              Join 20000+ subscribers!
            </div>
            <div className="mb-4 text-start text-lg text-[#cbcbcb]">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-black px-4 py-3 rounded-2xl w-full"
              />
            </div>
            <div className="mb-4 text-start text-lg w-full">
              <button className="bg-blue-700 border-none rounded-2xl px-4 py-3 w-full">
                Sign Up
              </button>
            </div>
            <div className="flex justify-start gap-4 text-[#cbcbcb] mb-4">
              <p>
                By signing up you agree to our{" "}
                <span className="text-blue-500">Privacy Policy</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
      {/* Sponsored News */}
      <Advertisement/>
      <SponseredNews />
    </>
  );
};

export default Home;
