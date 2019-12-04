import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_TO_CART,
  ALL_BOOKS_REMOVED_TO_CART
} from "../constants";

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

const booksLoaded = newBooks => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const booksError = error => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());

  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)));
};

const bookAddedToCart = bookId => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId
  };
};

const bookRemovedToCart = bookId => {
  return {
    type: BOOK_REMOVED_TO_CART,
    payload: bookId
  };
};

const allBooksRemovedToCart = bookId => {
  return {
    type: ALL_BOOKS_REMOVED_TO_CART,
    payload: bookId
  };
};

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedToCart,
  allBooksRemovedToCart
};
