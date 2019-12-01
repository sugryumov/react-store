import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import BookListItem from "../BookListItem";

import "./BookList.css";

const BookList = props => {
  useEffect(() => {
    const { bookstoreService, booksLoaded } = props;
    const data = bookstoreService.getBooks();

    booksLoaded(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { books } = props;

  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ books }) => {
  return {
    books
  };
};

const mapDispatchToProps = {
  booksLoaded
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
