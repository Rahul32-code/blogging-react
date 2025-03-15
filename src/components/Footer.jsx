import React from "react";
import logo from "../assets/img/logo.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#191a1f] pt-8 pb-25">
        <div className=" md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full px-4">
          <div className="flex flex-wrap -mx-2">
            {/* card 1 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-18 md:mb-18">
              <div className="">
                <div className="mb-5">
                  <img src={logo} alt="Logo" className="h-8" />
                </div>
                <p className="text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <div className="pl-0 mb-18 md:pl-0 lg:pl-20">
                <div className="mb-5">
                  <h5 className="text-2xl">Important Link</h5>
                </div>
                <div className="mb-2">
                  <p className="font-bold">Home</p>
                </div>
                <div className="mb-2">
                  <p className="font-bold">About</p>
                </div>
                <div className="mb-2">
                  <p className="font-bold">Blog</p>
                </div>
                <div className="mb-2">
                  <p className="font-bold">Contact up</p>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <div className="pl-0 mb-18 sm:mb-0">
                <div className="mb-5">
                  <h5 className="text-2xl">Brouser by Tag</h5>
                </div>
                <div className="flex flex-wrap list-none w-full">
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5 mb-2.5 px-2 py-3">
                    <a href="#" className="">
                      Travel
                    </a>
                  </li>
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5  mb-2.5  px-2 py-3">
                    <a href="#" className="">
                      Business
                    </a>
                  </li>
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5  mb-2.5  px-2 py-3">
                    <a href="#" className="">
                      Lifestyle
                    </a>
                  </li>
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5  mb-2.5  px-2 py-3">
                    <a href="#" className="">
                      Marketing
                    </a>
                  </li>
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5  mb-2.5  px-2 py-3">
                    <a href="#" className="">
                      Medical
                    </a>
                  </li>
                  <li className="bg-[#ffffff1a] rounded text-white mr-2.5  mb-2.5  px-2 py-3">
                    <a href="#" className="">
                      Sports
                    </a>
                  </li>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <div className="">
                <div className="mb-5">
                  <h5 className="text-2xl">Social Media</h5>
                </div>
                <div className="flex flex-col list-none w-full gap-2">
                  <li className=" text-white pl-1">
                    <a href="#" className="flex items-center gap-2">
                      <div className="bg-blue-600 pt-1 pr-1 pl-1 rounded">
                        <Facebook size={18}  />
                      </div>
                      Facebook
                    </a>
                  </li>
                  <li className=" text-white p-1">
                    <a href="#" className="flex items-center gap-2">
                      <div className="bg-blue-600 p-1 rounded">
                        <Twitter  size={18}/>
                      </div>
                      Twitter
                    </a>
                  </li>
                  <li className=" text-white p-1">
                    <a href="#" className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded">
                        <Instagram size={18}/>
                      </div>
                      Instagram
                    </a>
                  </li>
                  <li className=" text-white p-1">
                    <a href="#" className="flex items-center gap-2">
                      <div className="bg-red-600 p-1 rounded">
                        <Youtube size={18} />
                      </div>
                      Youtube
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copywrite section */}
      <div className="bg-[#101010]">
        <div className="text-center  px-2 sm:px-2 md:px-10 py-5 ">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            &copy; 2025 By Rahul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
