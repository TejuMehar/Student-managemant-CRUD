import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UpdateStudent() {
  const { id } = useParams(); // ✅ Get ID from URL
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll_no: "",
    class: "",
    section: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student info using the ID
    fetch(`http://localhost:5500/students/${id}`)
      .then(res => res.json())
      .then(data => {
        setStudent({
          name: data.name || "",
          roll_no: data.roll_no || "",
          class: data.class || "",
          section: data.section || "",
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5500/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (res.ok) {
        alert("✅ Student updated successfully!");
        navigate("/"); // go back to All Students page
      } else {
        alert("❌ Failed to update student");
      }
    } catch (error) {
      console.error(error);
      alert("⚠ Something went wrong");
    }
  };

  if (loading) return <p>Loading student data...</p>;

  return (
   <div
  style={{
    maxWidth: "450px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f9fafb",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#4f46e5",
      marginBottom: "25px",
      fontSize: "28px",
      fontWeight: "700",
    }}
  >
    Update Student
  </h2>

  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <input
      type="text"
      name="name"
      placeholder={student.name || "Enter Name"}
      value={student.name}
      onChange={handleChange}
      required
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
      onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
    />

    <input
      type="number"
      name="roll_no"
      placeholder={student.roll_no || "Enter Roll No"}
      value={student.roll_no}
      onChange={handleChange}
      required
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
      onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
    />

    <input
      type="number"
      name="class"
      placeholder={student.class || "Enter Class"}
      value={student.class}
      onChange={handleChange}
      required
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
      onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
    />

    <input
      type="text"
      name="section"
      placeholder={student.section || "Enter Section"}
      value={student.section}
      onChange={handleChange}
      required
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
      onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
    />

    <button
      type="submit"
      style={{
        marginTop: "10px",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "linear-gradient(90deg, #4f46e5, #4338ca)",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        transition: "all 0.3s",
      }}
      onMouseOver={(e) => (e.target.style.opacity = "0.85")}
      onMouseOut={(e) => (e.target.style.opacity = "1")}
    >
      Update Student
    </button>
  </form>
</div>

  );
}

export default UpdateStudent;
