import React from "react";
import { useAuth } from "../context/authContext.jsx";
import AdminSidebar from "../components/dashboard/adminSidebar.jsx";
import Navbar from "../components/dashboard/navbar.jsx";
import AdminSummary from "../components/dashboard/adminSummary.jsx";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const {user, loading} = useAuth()

  return (
    <div>
      <AdminSidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;