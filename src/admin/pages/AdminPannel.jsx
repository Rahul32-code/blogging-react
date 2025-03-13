import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";


import DashboardPage from "./DashboardPage";
import CommentsPage from "./ManageCommentPage";
import SettingPage from "./SettingPage";
import UserPage from "./UserPage";
import ManagePost from "./ManagePostPage";
import Post from "./PostsPage";

const AdminPannel = ({
  activeTab,
  setActiveTab,
  isSideBarCollapsed,
  setIsSideBarCollapsed,
}) => {
  return (
    <div className="flex bg-[#f0f1f6] w-full ">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSideBarCollapsed={isSideBarCollapsed}
        setIsSideBarCollapsed={setIsSideBarCollapsed}
      />

      <div
        className={`flex-1 ${
          isSideBarCollapsed ? "ml-0" : "ml-0"
        } transaction-all ease-in-out duration-300 `}
      >
        {/* navbar  */}
        <Navbar
          isSideBarCollapsed={isSideBarCollapsed}
          setIsSideBarCollapsed={setIsSideBarCollapsed}
        />
        {/* adminpanel */}
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/managecomment" element={<CommentsPage />} />
          <Route path="/managepost" element={<ManagePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPannel;
