import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GetAllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:5500/students");
        const data = await res.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);



    const handleUpdate = (id) => {
    navigate(`/update/${id}`);
     };

  return (
   
   <>
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2 style={{ textAlign: "center", color: "#4338ca" }}>All Students 📚</h2>

    {loading ? (
      <p style={{ textAlign: "center" }}>Loading students...</p>
    ) : students.length === 0 ? (
      <p style={{ textAlign: "center" }}>No students found.</p>
    ) : (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4f46e5", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Sr No:</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Roll No</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Class</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Section</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student._id}
              style={{ backgroundColor: index % 2 === 0 ? "#f3f4f6" : "white" }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.roll_no}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.class}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.section}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
               <button
                   style={{
                             marginRight: "10px",
                             padding: "5px 10px",
                              backgroundColor: "#f59e0b",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                             transition: "0.3s",
                             }}
                             onClick={() => handleUpdate(student._id)}
                             onMouseOver={(e) => (e.target.style.backgroundColor = "#d97706")} // darken on hover
                              onMouseOut={(e) => (e.target.style.backgroundColor = "#f59e0b")} // revert color
                             >
                             Update
                </button>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</>

  );
}

export default GetAllStudents;
