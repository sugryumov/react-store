import React from "react";

import "./ShoppingCartTable.css";

const ShoppingCartTable = () => {
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

        <tbody className="table__body">
          <tr>
            <td>1</td>
            <td>sara</td>
            <td>2</td>
            <td>40$</td>
            <td>
              <button className="shopping-cart__button">+</button>
              <button className="shopping-cart__button">-</button>
              <button className="shopping-cart__button">del</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="shopping-cart__total">Total: $150</p>
    </div>
  );
};

export default ShoppingCartTable;
