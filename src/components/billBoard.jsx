import React from "react";
import classes from "./billboard.module.css";
import greenCircle from "../img/green-circle.png";
import greenStar from "../img/green-star.svg";
import multiple from "../img/multiple.png";

const BillBoard = () => {
  return (
    <div className={classes["best-seller"]}>
      <section className={classes["best-seller-section"]}>
        <article className={classes["best-seller-article"]}>
          <h1>Best Sellers</h1>
          <p>Take a look at our top-selling product of the week</p>
          <button className={classes["shop-now-btn"]}>Shop Now</button>
        </article>
        <div className={classes["best-seller-images"]}>
          <div className={classes["green-circle"]}>
            <img src={greenCircle} alt="Green Circle" />
          </div>
          <div className={classes.multiple}>
            <img src={multiple} alt="Multiple Items" />
          </div>
          <div className={classes["green-star"]}>
            <img src={greenStar} alt="Green Star" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillBoard;
