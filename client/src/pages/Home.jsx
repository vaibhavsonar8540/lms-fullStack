import React from 'react'

const Home = () => {
  return (
    <div>
         {/* Information about Library Management System */}
      <div style={{ marginTop: "40px", textAlign: "center", padding: "20px" }}>
        <h2>📚 Library Management System</h2>
        <p style={{ maxWidth: "600px", margin: "auto", fontSize: "16px" }}>
          This Library Management System helps in organizing, managing, and 
          tracking books efficiently. It allows users to upload new books, 
          view available books, and update their status. The system is designed 
          to make library operations simpler and faster for both students and librarians.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/29/29302.png" 
          alt="Library Illustration"
          style={{ marginTop: "20px", width: "200px", borderRadius: "10px" }}
        />
      </div>
    </div>
  )
}

export default Home