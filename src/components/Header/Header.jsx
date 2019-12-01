import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ numItems, total }) => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Shop
      </Link>
      <Link to="/cart" href="#" className="header__cart">
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default Header;
