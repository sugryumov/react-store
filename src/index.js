import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import ErrorBoudry from "./components/ErrorBoundry";
import BookstoreService from "./services/bookstoreService";
import { BookstoreServiceProvider } from "./components/BookstoreServeceContext";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoudry>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoudry>
  </Provider>,
  document.getElementById("root")
);
