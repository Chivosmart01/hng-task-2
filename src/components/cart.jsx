import React from "react";
import classes from "./cart.module.css";
import img from "../img/prod6.png";
import cartIcon from "../img/cart-icon-2.png";

import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className={classes["cart-section"]}>
      <div className={classes["cart"]}>
        <div className={classes["cart-side-1"]}>
          <Link to="/" onClick={() => history.push("/")} className={classes["back-anchor"]}>
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
            <tr className={classes["cart-item-list"]}>
              <td className={classes["cart-item-img"]}>
                <img src={img} alt="" />
              </td>
              <td className={classes["cart-item-article"]}>
                <h4>Smart Tv Led</h4>
                <p>
                  {" "}
                  <span>Display:</span> 5 inches
                </p>
                <p>
                  <span>Color:</span>Black
                </p>
                <p>
                  {" "}
                  <span>Memory:</span>320gb
                </p>
              </td>
              <td>
                <input
                  className={classes["cart-item-input"]}
                  type="number"
                  value={1}
                  name=""
                  id=""
                />
              </td>
              <td className={classes["cart-item-price"]}>
                {" "}
                $5000 <button>X</button>
              </td>
            </tr>
            {/* <tr className={classes["cart-item-list"]}>
              <td className={classes["cart-item-img"]}>
                <img src={img} alt="" />
              </td>
              <td className={classes["cart-item-article"]}>
                <h4>Smart Tv Led</h4>
                <p>
                  {" "}
                  <span>Display:</span> 5 inches
                </p>
                <p>
                  <span>Color:</span>Black
                </p>
                <p>
                  {" "}
                  <span>Memory:</span>320gb
                </p>
              </td>
              <td>
                <input
                  className={classes["cart-item-input"]}
                  type="number"
                  value={1}
                  name=""
                  id=""
                />
              </td>
              <td className={classes["cart-item-price"]}>
                {" "}
                $5000 <button>X</button>
              </td>
            </tr> */}
          </table>
          <button className={classes["clear-cart-btn"]}>
            {" "}
            <img src={cartIcon} alt="" /> Clear Cart
          </button>
        </div>
        <div className={classes["order-summary"]}>
          <h2>Order Summary</h2>
          <li>
            <p>Subtotal</p>
            <p>$3000</p>
          </li>
          <li>
            <p>Discount</p>
            <p>$3000</p>
          </li>
          <li>
            <p>Shipping</p>
            <p>$3000</p>
          </li>
          <li className={classes.total}>
            <p>Total</p>
            <p>$3000</p>
          </li>

          <button className={classes["checkout-btn"]}>Checkout</button>
        </div>
      </div>

    </section>
  );
};

export default Cart;
