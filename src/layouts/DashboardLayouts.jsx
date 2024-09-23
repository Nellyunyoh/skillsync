import React from "react";
import Sidebar from "../Components/partials/Sidebar";
import Navbar from "../Components/partials/Navbar";

function DashboardLayouts({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayouts;
