import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import BookListItem from "../BookListItem";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./BookList.css";

const BookList = props => {
  useEffect(() => {
    const { bookstoreService, booksLoaded, booksRequested, booksError } = props;

    booksRequested();

    bookstoreService
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(error => booksError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { books, loading, error } = props;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ul className="book__list">
      {books.map(book => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </ul>
  );
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
