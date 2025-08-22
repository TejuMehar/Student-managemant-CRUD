import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import UpdateStudent from "./pages/UpdateStudent.jsx";
import DeleteStudent from "./pages/DeleteStudent.jsx";
import GetAllStudents from "./pages/GetAllStudents.jsx";

import "./App.css";




function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Main page content */}
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<GetAllStudents />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/delete" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
