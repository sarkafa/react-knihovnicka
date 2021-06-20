import React, { useState } from 'react';
import './style.css';

const Book = ({ id, title, author, year, read, cover, handleUpdate }) => {
  // cosnt[(precteno, setPrecteno)] = useState(read);
  // const handleClick = () => {
  //   setPrecteno(!precteno);
  // };

  const handleClick = () => {
    handleUpdate(id);
  };
  return (
    <>
      <div className="book">
        <img
          className="book__cover"
          src={`/assets/book-covers/${cover}`}
          alt=""
        />
        <div className="book__details">
          <h2 className="book__title">{title}</h2>
          <p className="book__meta">{year}</p>

          <button className="book__read" onClick={handleClick}>
            {read ? 'Precteno' : 'Neprecteno'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
