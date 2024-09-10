// import React from "react";
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Mentors from "./pages/Mentors";
import Interns from "./pages/Interns";
import Projects from "./pages/Projects";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/interns" element={<Interns />} />
        <Route path="/projects" element={<Projects />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
