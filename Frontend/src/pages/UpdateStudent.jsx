import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UpdateStudent() {
  const [student, setStudent] = useState({
    name: "",
    roll_no: "",
    class: "",
    section: "",
  });

  const [loading, setLoading] = useState(true);
  const [studentId, setStudentId] = useState(""); // store student id to update
  const navigate = useNavigate();

  useEffect(() => {
    // Example: fetch a student by ID
    // Replace this with actual logic to get the student ID (maybe from a route param or selection)
    const id = "PUT_STUDENT_ID_HERE"; // You can pass this dynamically
    setStudentId(id);

    fetch(`http://localhost:5500/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent({
          name: data.name || "",
          roll_no: data.roll_no || "",
          class: data.class || "",
          section: data.section || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5500/students/${studentId}`, {
        method: "PUT", // update method
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
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={student.name}
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="roll_no"
          placeholder={student.roll_no}
          value={student.roll_no}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="class"
          placeholder={student.class}
          value={student.class}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="section"
          placeholder={student.section}
          value={student.section}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
