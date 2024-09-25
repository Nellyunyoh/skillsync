// import React from "react";
import ForgotPassword from "./pages/dashboard/ForgotPassword";
import Login from "./pages/auth/Login";
import Admin from "./pages/dashboard/Admin";
import Mentors from "./pages/dashboard/Mentors";
import Tasks from "./pages/dashboard/Tasks";
import Interns from "./pages/dashboard/Interns";
import Projects from "./pages/dashboard/Projects";
import Evaluation from "./pages/dashboard/Evaluation";
import Attestation from "./pages/dashboard/Attestation";
import Messaging from "./pages/dashboard/Messaging";
import Settings from "./pages/dashboard/Settings";
import Attendance from "./pages/dashboard/Attendance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/interns" element={<Interns />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/attestation" element={<Attestation />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
