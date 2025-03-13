import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MainBlog from "./Pages/Home.jsx";
import Write from "./Pages/Write.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Single from "./components/Single.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import AdminPannel from "./admin/pages/AdminPannel.jsx";
import { useState } from "react";


// import Home from "./page/Home.jsx";

const App = () => {
  const location = useLocation(); // Get the current route location
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="">
      {
        !isAdminRoute && <Header />
      }

      <Routes>
        <Route path="/" element={<MainBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Admin routes - Wrap admin-related routes */}
        <Route path="/admin/*" element={<AdminPannel activeTab={activeTab} setActiveTab={setActiveTab} isSideBarCollapsed={isSideBarCollapsed} setIsSideBarCollapsed={setIsSideBarCollapsed} />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
