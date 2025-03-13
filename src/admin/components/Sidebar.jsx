import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  FileText,
  Users,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react"; // Lucide icons

const Sidebar = ({
  activeTab,
  setActiveTab,
  isSideBarCollapsed,
  setIsSideBarCollapsed,
}) => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/admin/dashboard" },
    {
      name: "Posts",
      icon: <FileText size={20} />,
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Manage Posts", path: "/admin/managepost" },
        { name: "Add New Post", path: "/admin/post" },
      ],
    },
    {
      name: "Manage Comments",
      icon: <MessageCircle size={20} />,
      path: "/admin/managecomment",
    },
    { name: "Users", icon: <Users size={20} />, path: "/admin/user" },
    { name: "Setting", icon: <Settings size={20} />, path: "/admin/setting" },
  ];

  const handleDropdownToggle = (itemName) => {
    // Toggle the dropdown of the clicked item
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <div
      className={`bg-[#181824] text-white p-6 flex flex-col h-screen overflow-y-auto transition-all duration-300 scrollbar-hide smooth-scroll sticky top-0 z-10`}
      style={{
        width: isSideBarCollapsed ? "80px" : "260px",
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-8">
        <span className="text-green-600">B</span>
        <span className={`${isSideBarCollapsed ? "hidden" : ""}`}>Admin</span>
      </h1>

      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index} className="flex flex-col">
            {item.hasDropdown ? (
              <div
                className="flex align-center cursor-pointer"
                onClick={() => {
                  setActiveTab(item.name.toLowerCase());
                  handleDropdownToggle(item.name); // Toggle this specific dropdown
                }}
              >
                <div
                  className={`w-1 ${isSideBarCollapsed ? "hidden" : ""} ${
                    activeTab === item.name.toLowerCase() ? "bg-green-600" : ""
                  }`}
                ></div>

                <Link
                  to={item.path}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`flex cursor-pointer gap-2 items-center py-2 px-2 rounded-lg transition-colors duration-100`}
                >
                  <span
                    className={`${
                      isSideBarCollapsed &&
                      activeTab === item.name.toLowerCase()
                        ? "text-green-600"
                        : ""
                    }
                  hover:${
                    isSideBarCollapsed ? "text-green-600" : ""
                  } transition-all duration-300`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      isSideBarCollapsed ? "hidden" : ""
                    } text-center text-green-400`}
                  >
                    {item.name}
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex align-center">
                <div
                  className={`w-1 ${
                    activeTab === item.name.toLowerCase() ? "bg-green-600" : ""
                  }`}
                ></div>
                <Link
                  to={item.path}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`flex cursor-pointer gap-2 items-center py-2 px-2 rounded-lg transition-colors duration-100`}
                >
                  <span
                    className={`${
                      isSideBarCollapsed &&
                      activeTab === item.name.toLowerCase()
                        ? "text-green-600"
                        : ""
                    }  hover:${
                      isSideBarCollapsed ? "text-green-600" : ""
                    } transition-all duration-300`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      isSideBarCollapsed ? "hidden" : ""
                    } text-center text-green-400`}
                  >
                    {item.name}
                  </span>
                </Link>
              </div>
            )}

            {/* Show dropdown items if this menu item is open */}
            {item.hasDropdown && openDropdown === item.name && (
              <ul className="pl-6 space-y-2 mt-2">
                {item.dropdownItems.map((dropdownItem, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex align-center">
                      <div
                        className={`w-1 ${
                          activeTab === dropdownItem.name.toLowerCase()
                            ? "bg-green-600"
                            : ""
                        }`}
                      ></div>
                      <Link
                        to={dropdownItem.path}
                        onClick={() =>
                          setActiveTab(dropdownItem.name.toLowerCase())
                        }
                        className={`block py-2 px-4 rounded-lg transition duration-100`}
                      >
                        <span className="text-green-400">
                          {dropdownItem.name}
                        </span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Logout */}
        <li
          className={`cursor-pointer flex gap-2 items-center py-2 px-2 rounded-lg transition-colors duration-300 hover:${
            isSideBarCollapsed ? "text-green-600" : ""
          } transition-all duration-300`}
          onClick={() => console.log("Logout")}
        >
          <span>
            <LogOut size={20} />
          </span>
          <span className={`${isSideBarCollapsed ? "hidden" : ""} text-center`}>
            Go To Website 
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
