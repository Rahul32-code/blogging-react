import { useState } from "react";
import { Menu, Search, SearchIcon, X } from "lucide-react";
import logo from "../assets/img/logo.png";
import { menuList, Navigation } from "../../public/header.Related";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="px-4 h-25 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full bg-[#202026] text-white py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {/* Navigation */}
        {Navigation.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-x-2">
            {/* Blue background for each navigation item */}
            {/* <div className="h-1 w-full bg-blue-600 rounded-2xl"></div> */}
            <div>
              <Link
                to={item.to}
                className="hover:text-gray-400 font-medium text-xl p-4"
              >
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 relative">
        {/* If search is visible, show Close icon, else show Search icon */}
        {searchVisible ? (
          <X
            className="cursor-pointer hover:text-gray-400 transition-all duration-300 ease-in-out absolute right-4 top-1/2 transform -translate-y-1/2"
            size={20}
            onClick={() => setSearchVisible(false)}
          />
        ) : (
          <Search
            className="cursor-pointer hover:text-gray-400 transition-all duration-300 ease-in-out absolute right-4 top-1/2 transform -translate-y-1/2"
            size={20}
            onClick={() => setSearchVisible(true)}
          />
        )}
      </div>
      {/* Search input field */}
      <div
        className={`absolute top-25 p-5 rounded-lg transition-all duration-600 ease-in-out ${
          searchVisible
            ? "opacity-100 translate-x-0 scale-100 right-70"
            : "opacity-0 translate-x-[50%] scale-0 right-60"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          className={` relative bg-transparent border rounded-full p-2 pl-8 focus:outline-none w-40 md:w-64 transition-all duration-500 ease-in-out ${
            searchVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-[-100%] scale-0"
          }`}
          style={{
            transitionProperty: "opacity, transform", // Ensure only opacity and transform are animated
          }}
        />
        <button
          className={`absolute top-8 right-10 cursor-pointer transition-all duration-500 ease-in-out  ${
            searchVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-[-100%] scale-0"
          }`}
        >
          <SearchIcon size={20} />
        </button>
      </div>

      {/* overlay mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-0 left-0 h-[100vh] w-full transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 -left-4 h-[100vh] w-[85%] sm:w-1/2 bg-[#202026] text-white flex flex-col items-start space-y-4 py-4 md:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          opacity: menuOpen ? 1 : 0,
          maxWidth: "100vw",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-[-.8rem] cursor-pointer border rounded-full bg-[#292932] hover:bg-red-600">
          <X
            className="cursor-pointer text-white hover:text-gray-400"
            size={24}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center w-full p-4">
          <img src={logo} alt="Logo" size={20} className="h-10" />
        </div>
        <div className="flex flex-col items-center space-y-4 w-full ">
          {menuList.map((item) => (
            <div className="">
              <a key={item} href="#" className="hover:text-gray-400">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
