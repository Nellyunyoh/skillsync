// import React from "react";
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login";
import Admin from "./pages/Admin";
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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
