import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    roll_no: "",
    class: "",
    section: "",
  });

  
  const navigate = useNavigate(); // ✅ initialize navigate


  // handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5500/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (res.ok) {
        alert("✅ Student added successfully!");
        setStudent({ name: "", roll_no: "", class: "", section: "" }); // clear form
         navigate("/"); // ✅ redirect to home page (All Students)
      } else {
        alert("❌ Failed to add student");
      }
    } catch (error) {
      console.error(error);
      alert("⚠ Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #dbeafe, #e0e7ff, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#4338ca",
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          🎓 Add Student
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #6366f1")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <input
            type="number"
            name="roll_no"
            placeholder="Enter Roll No"
            value={student.roll_no}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #6366f1")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <input
            type="number"
            name="class"
            placeholder="Enter Class"
            value={student.class}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #6366f1")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <input
            type="text"
            name="section"
            placeholder="Enter Section"
            value={student.section}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #6366f1")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          <button
            type="submit"
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#4338ca")}
            onMouseOut={(e) => (e.target.style.background = "#4f46e5")}
          >
            ➕ Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
