import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, CartPage } from "../pages";
import Header from '../Header'

import "./App.css";

const App = () => {
  return (
    <main className="container">
      <Header numItems={5} total={220}/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
