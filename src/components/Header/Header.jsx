import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ items }) => {
  const totalPrice = () => {
    let sum = 0;
    items.map(item => (sum += item.total));

    return sum;
  };

  const totalCount = () => {
    let count = 0;
    items.map(item => (count += item.count));

    return count;
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Shop
      </Link>
      <Link to="/cart" href="#" className="header__cart">
        Cart: {totalCount()} items (${totalPrice()})
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems
  };
};

export default connect(mapStateToProps)(Header);
