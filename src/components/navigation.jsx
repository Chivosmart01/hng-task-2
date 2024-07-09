import React from "react";
import classes from "./navigation.module.css"

const Navigation = ({isActive , setIsActive}) => {

    const closehamburgerHandler = () => {
        setIsActive(false);
    }

  return (
    <div className={classes["nav-section"]}>
        {/* <div className={classes["navigation__background"]}>&nbsp;</div> */}
    <nav  className={classes.nav}>
        <div className={classes["navigation__cancel"]} onClick={closehamburgerHandler} >X</div>
      <ul className={classes["navigation__list"]}>
        <li className={classes["navigation__item"]}>
          <a href="#" class="navigation__link">
            Home
          </a>
        </li>
        <li className={classes["navigation__item"]}>
          <a href="#" className={classes["navigation__link"]}>
            Category
          </a>
        </li>
        <li className={classes["navigation__item"]}>
          <a href="#" className={classes["navigation__link"]}>
            Blog
          </a>
        </li>
        <li className={classes["navigation__item"]}>
          <a href="#" className={classes["navigation__link"]}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navigation;
