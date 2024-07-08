import React from "react";

import classes from "./feature.module.css"

import img1 from "../img/feature1.png"
import img2 from "../img/feature2.png"
import img3 from "../img/feature3.png"

function Feature() {
  return (
    <section className={classes["feature-section"]}>
      <div className={classes["feature-section-cards"]}>
        <div className={classes["feature-section-card"]}>
          <div className={classes["card-img"]}>
            <img src={img1} alt="" />
          </div>
          <article className={classes["card-article"]}>
            <h3>Free Shipping</h3>
            <p>Enjoy free shipping on all orders from our company</p>
          </article>
        </div>
        <div className={classes["feature-section-card"]}>
          <div className={classes["card-img"]}>
            <img src={img2} alt="" />
          </div>
          <article className={classes["card-article"]}>
            <h3>Secure Payment</h3>
            <p>Benefit from secure payment options with our company</p>
          </article>
        </div>
        <div className={classes["feature-section-card"]}>
          <div className={classes["card-img"]}>
            <img src={img3} alt="" />
          </div>
          <article className={classes["card-article"]}>
            <h3>24 hours support</h3>
            <p>We offer 24-hour customer support for our company</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Feature;
