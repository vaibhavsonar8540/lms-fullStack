import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../component/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({ search: "" });

  const getBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/lms/allBooks");
      setBooks(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleChange = async (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });

    try {
      const res = await axios.get(
        `http://localhost:3000/api/lms/search?q=${value}`
      );
      setBooks(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "flex-start",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "2px solid #333",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "300px",
  };

  const noBooksStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "1.2rem",
    color: "#777",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>All Books</h2>

      {/* Search Input */}
      <input
        type="text"
        name="search"
        placeholder="Search by Title"
        value={filters.search}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* Books Grid */}
      <div style={gridStyle}>
        {books.length > 0 ? (
          books.map((el) => (
            <BookCard
              key={el._id}
              bookId={el._id}
              title={el.title}
              author={el.author}
              category={el.category}
              bookImage={el.bookImage}
              status={el.status}
              cardStyle={{ width: "300px" }} // pass custom width
            />
          ))
        ) : (
          <p style={noBooksStyle}>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
