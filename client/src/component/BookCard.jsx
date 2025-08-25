import React from "react";

const BookCard = ({ title, author, category, bookImage, status, cardStyle }) => {
  const defaultCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.3s",
    backgroundColor: "#fff",
    cursor: "pointer",
    marginBottom: "20px",
    ...cardStyle, // allow custom width
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const bodyStyle = {
    padding: "15px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "0.95rem",
    marginBottom: "5px",
    color: "#555",
  };

  return (
    <div style={defaultCardStyle}>
      {bookImage && <img src={bookImage} alt={title} style={imgStyle} />}
      <div style={bodyStyle}>
        <h5 style={titleStyle}>{title}</h5>
        <p style={textStyle}>Author: {author}</p>
        <p style={textStyle}>Category: {category}</p>
        <p style={textStyle}>Status: {status}</p>
      </div>
    </div>
  );
};

export default BookCard;
