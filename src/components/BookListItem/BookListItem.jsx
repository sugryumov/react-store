import React from "react";

import "./BookListItem.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;

  return (
    <li className="book__item">
      <div className="book__wrap-img">
        <img className="book__img" src={coverImage} alt={title} />
      </div>
      <div className="book__details">
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
        <p className="book__price">${price}</p>

        <button onClick={onAddedToCart} className="book__button">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookListItem;
