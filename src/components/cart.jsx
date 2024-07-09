import React from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./cart.module.css";
import cartIcon from "../img/cart-icon-2.png";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };



  return (
      <section className={classes["cart-section"]}>
      <div className={classes["cart"]}>
        <div className={classes["cart-side-1"]}>
          <Link to="/" className={classes["back-anchor"]}>
            Back
          </Link>
          <h1 className={classes["cart-title"]}>Checkout</h1>
          <table className={classes["cart-item-lists"]}>
            <tr className={classes["cart-item-list"]}>
              <th className={classes["empty-col"]}></th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>

            {cartCtx.items.map((item) => (
              <tr key={item.id} className={classes["cart-item-list"]}>
                <td className={classes["cart-item-img"]}>
                  <img src={item.img} alt="" />
                </td>
                <td className={classes["cart-item-article"]}>
                  <h4>{item.title}</h4>
                  <p>
                    <span>Display:</span> {item.display}
                  </p>
                  <p>
                    <span>Color:</span>{item.color}
                  </p>
                  <p>
                    {" "}
                    <span>Memory:</span>{item.memory}
                  </p>
                </td>
                <td>
                  <input
                    className={classes["cart-item-input"]}
                    type="number"
                    value={item.amount}
                    name=""
                    id=""
                    />
                </td>
                <td className={classes["cart-item-price"]}>
                  {" "}
                  {item.price} <button onClick={cartItemRemoveHandler.bind(null, item.id)}>X</button>
                </td>
              </tr>
            ))}
          </table>
          <button className={classes["clear-cart-btn"]} onClick={ clearCartHandler}>
            {" "}
            <img src={cartIcon} alt="" /> Clear Cart
          </button>
        </div>
        <div className={classes["order-summary"]}>
          <h2>Order Summary</h2>
          <li>
            <p>Subtotal</p>
            <p>{totalAmount}</p>
          </li>
          <li>
            <p>Discount</p>
            <p>$0</p>
          </li>
          <li>
            <p>Shipping</p>
            <p>$0</p>
          </li>
          <li className={classes.total}>
            <p>Total</p>
            <p>{totalAmount}</p>
          </li>

          <button className={classes["checkout-btn"]}>Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;










