import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    status: "Available",
  });

  // 🔹 Book data fetch on mount
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/lms/getbyid/${bookId}`);
        setFormData(res.data.book);
      } catch (error) {
        alert("Error fetching book: " + error.message);
      }
    };
    fetchBook();
  }, [bookId]);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Update book API call
  const handleUpdate = async () => {
    try {
      await axios.patch(`http://localhost:3000/api/lms/update/${bookId}`, {
        status: formData.status, // ✅ always string
      });
      alert("Book updated successfully ✅");
      navigate("/books");
    } catch (error) {
      alert("Failed to update book ❌ " + error.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Book</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

        {/* 🔹 Status dropdown (only available/unavailable) */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "2px solid #555",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        {/* 🔹 Update Button */}
        <button
          onClick={handleUpdate}
          style={{
            padding: "12px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            width: "100%", // ✅ full width button
          }}
        >
          Update Book
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
