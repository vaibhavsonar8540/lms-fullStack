import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadBook = () => {

    const initialState = {
        title : "",
        author :"",
        category:"",
        content:"",
        status:"",
    }

    const navigate = useNavigate()
    const[form,setform]=useState(initialState)

    const handleChange = e => setform({ ...form, [e.target.name]: e.target.value });

    const handleSubmit=async(e)=>{
      e.preventDefault();

      try {
         await axios.post("http://localhost:3000/api/lms/create",form)
        alert("Book uploaded")
          navigate("/books")
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // full screen height
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>📚 Upload Book</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
             onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
               onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
             onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
             onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <textarea
            placeholder="Content"
            name="content"
           onChange={handleChange}
            rows="4"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
              resize: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;
