import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to highlight active link

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    background: "linear-gradient(90deg, #4f46e5, #4338ca)",
    color: "white",
    borderRadius: "0 0 10px 10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const brandStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#ffd700" : "white", // highlight current page
    fontWeight: location.pathname === path ? "bold" : "normal",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    backgroundColor: location.pathname === path ? "rgba(255,255,255,0.2)" : "transparent",
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>
        🎓 StudentMS
      </Link>

      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle("/")}>
          All Students
        </Link>
        <Link to="/add" style={linkStyle("/add")}>
          Add Student
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
