import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "12px 24px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>📚 BookStore</h1>

        {/* Nav Links */}
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            <Link
              to="/upload"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "yellow")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Upload Book
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "yellow")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              All Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
