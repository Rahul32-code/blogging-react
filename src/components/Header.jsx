import { useState } from "react";
import { Menu, Search, SearchIcon, X } from "lucide-react";
import logo from "../assets/img/logo.png";
import { menuList, Navigation } from "../../public/header.Related";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="px-4 h-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full bg-[#202026] text-white py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        {Navigation.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-x-2">
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

      {/* Search and Hamburger Icons */}
      <div className="flex items-center space-x-4 relative">
        {/* Search Icon */}
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

        {/* Hamburger Menu Icon (Visible on mobile) */}
        <div className="md:hidden cursor-pointer">
          <Menu
            className="hover:text-gray-400"
            size={24}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Search Input Field (For All Devices) */}
      <div
        className={`absolute top-20 md:top-16 p-5 rounded-lg transition-all duration-600 ease-in-out ${
          searchVisible
            ? "opacity-100 translate-x-0 scale-100 right-10 md:right-15 lg:right-20 xl:right-40"
            : "opacity-0 translate-x-[50%] scale-0 right-10"
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
          className={`relative bg-transparent border rounded-full p-2 pl-8 focus:outline-none w-40 transition-all duration-500 ease-in-out ${
            searchVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-[-100%] scale-0"
          }`}
          style={{
            transitionProperty: "opacity, transform",
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

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 h-[100vh] w-[75%] sm:w-1/2 bg-[#202026] text-white flex flex-col items-start space-y-4 py-4 md:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer border rounded-full bg-[#292932] hover:bg-red-600">
          <X
            className="cursor-pointer text-white hover:text-gray-400"
            size={24}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center w-full p-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col items-center space-y-4 w-full">
          {menuList.map((item, index) => (
            <div key={index}>
              <a href="#" className="hover:text-gray-400">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
