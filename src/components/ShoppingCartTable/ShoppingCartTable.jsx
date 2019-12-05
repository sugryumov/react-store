import React from "react";
import { connect } from "react-redux";

import "./ShoppingCartTable.css";

import {
  bookAddedToCart,
  bookRemovedToCart,
  allBooksRemovedToCart
} from "../../actions";

const ShoppingCartTable = ({ items, onIncrease, onDecrease, onDelete }) => {
  const totalPrice = () => {
    let sum = 0;
    items.map(item => (sum += item.total));

    return sum;
  };

  const renderRow = (item, index) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="shopping-cart__button"
          >
            +
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="shopping-cart__button"
          >
            -
          </button>
          <button
            onClick={() => onDelete(id)}
            className="shopping-cart__button"
          >
            del
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart__title">Your Order</h2>

      <table className="shopping-cart__table">
        <thead className="table__header">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="table__body">{items.map(renderRow)}</tbody>
      </table>

      <p className="shopping-cart__total">Total: ${totalPrice()}</p>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedToCart,
  onDelete: allBooksRemovedToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
