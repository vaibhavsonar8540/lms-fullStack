import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    author: "",
    category: "",
  });
  const navigate = useNavigate();

  // Fetch Books
  const getBooks = async () => {
    try {
      if (filters.search) {
        const res = await axios.get(
          `http://localhost:3000/api/lms/search?q=${filters.search}`
        );
        setBooks(res.data);
      } else {
        const res = await axios.post("http://localhost:3000/api/lms/filter", {
          status: filters.status,
          author: filters.author,
          category: filters.category,
        });
        setBooks(res.data.books);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, [filters]);

  // Delete Book
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this book?")) {
      try {
        await axios.delete(`http://localhost:3000/api/lms/delete/${id}`);
        alert("Book deleted successfully!");
        getBooks();
      } catch (error) {
        alert("Error deleting book");
      }
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Internal CSS */}
      <style>
        {`
          .filters {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 25px;
            justify-content: center;
          }
          .input, .select {
            padding: 10px 14px;
            font-size: 1rem;
            border-radius: 8px;
            border: 2px solid #333;
            outline: none;
            transition: 0.3s ease;
          }
          .input:focus, .select:focus {
            border-color: #007bff;
            box-shadow: 0px 0px 6px rgba(0, 123, 255, 0.5);
          }
          .grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center; /* ✅ center aligned */
          }
          .card {
            width: 300px;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            background: #fff;
            box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
            text-align: center;
          }
          .card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 6px;
          }
          .buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
          }
          .btn {
            flex: 1; /* ✅ equal width for both buttons */
            padding: 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            color: white;
            font-size: 1rem;
          }
          .btn-update { background: #007bff; }
          .btn-update:hover { background: #0056b3; }
          .btn-delete { background: #dc3545; }
          .btn-delete:hover { background: #a71d2a; }
        `}
      </style>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>All Books</h2>

      {/* 🔍 Filters in one line */}
      <div className="filters">
        <input
          type="text"
          name="search"
          placeholder="🔍 Search by Title"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="input"
        />

        <select
          value={filters.status}
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value, search: "" })
          }
          className="select"
        >
          <option value="">All Status</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <input
          type="text"
          placeholder="✍️ Author name..."
          value={filters.author}
          onChange={(e) =>
            setFilters({ ...filters, author: e.target.value, search: "" })
          }
          className="input"
        />

        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value, search: "" })
          }
          className="select"
        >
          <option value="">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Emotions">Emotions</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      {/* 📚 Books Grid */}
      <div className="grid">
        {books && books.length > 0 ? (
          books.map((el) => (
            <div key={el._id} className="card">
              <img
                src={el.bookImage || "https://via.placeholder.com/300"}
                alt={el.title}
              />
              <h3>{el.title}</h3>
              <p><b>Author:</b> {el.author}</p>
              <p><b>Category:</b> {el.category}</p>
              <p><b>Status:</b> {el.status}</p>
              <div className="buttons">
                <button
                  className="btn btn-update"
                  onClick={() => navigate(`/update/${el._id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(el._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "30px" }}>
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
