import React from "react";
import classes from "./footer.module.css";
import sendIcon from "../img/sendIcon.png";

function Footer() {
  return (
    <div className={classes["footer-section"]}>
      <ul className={classes["footer-lists"]}>
        <li className={classes["footer-list"]}>
          <h5> About </h5>
          <p> MarketPlace </p>
          <p> Services </p>
          <p> Seller </p>
        </li>
        <li className={classes["footer-list"]}>
          <h5> Categories </h5>
          <p> Phones </p>
          <p> Laptop </p>
          <p> Ear Pods </p>
          <p> HeadPhones </p>
        </li>
        <li className={classes["footer-list"]}>
          <h5> Help </h5>
          <p> Get Help </p>
          <p> Contact US </p>
          <p> FAQs </p>
          <p> Self Help </p>
        </li>
        <li className={classes["newsletter"]}>
          <h5>Newsletter </h5>
          <p> Subscribe to Timbu cloud Newsletter below </p>
          <div className={classes["email-sec"]}>
            <input type="email" name="" id="" placeholder="Email Address" />
            <button className={classes["send-icon"]}>
              <img src={sendIcon} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
