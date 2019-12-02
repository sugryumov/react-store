import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { fetchBooks } from "../../actions";
import BookListItem from "../BookListItem";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./BookList.css";

const BookList = ({ books }) => {
  return (
    <ul className="book__list">
      {books.map(book => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </ul>
  );
};

const BookListContainer = props => {
  useEffect(() => {
    props.fetchBooks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { books, loading, error } = props;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} />;
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
