// import React from "react";
import ForgotPassword from "./pages/Screens/ForgotPassword";
import Login from "./pages/Screens/Login";
import Admin from "./pages/Screens/Admin";
import Mentors from "./pages/Screens/Mentors";
import Tasks from "./pages/Screens/Tasks";
import Interns from "./pages/Screens/Interns";
import Projects from "./pages/Screens/Projects";
import Evaluation from "./pages/Screens/Evaluation";
import Attestation from "./pages/Screens/Attestation";
import Messaging from "./pages/Screens/Messaging";
import Settings from "./pages/Screens/Settings";
import Attendance from "./pages/Screens/Attendance";
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
