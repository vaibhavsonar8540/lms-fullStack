import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStatus = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    status:""
  });

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/lms/getbyid/${bookId}`
        );
        setBook(res.data.book); // assuming backend sends {book: {...}}
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [bookId]);

  // Handle input changes
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/lms/update/${bookId}`,
        book
      );
      alert("Book updated successfully!");
      navigate("/books");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Book</h2>
      <form
        className="p-4 shadow rounded-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          className="form-control mb-3"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          className="form-control mb-3"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          className="form-control mb-3"
          placeholder="Content"
          rows="4"
          value={book.content}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="bookImage"
          className="form-control mb-3"
          placeholder="Image URL"
          value={book.bookImage}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-dark w-100">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateStatus;
