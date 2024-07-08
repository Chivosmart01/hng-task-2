import React from 'react'
import classes from "./header.module.css"
import main from "../img/main-logo.jpg"
import bell from "../img/bell.svg"
import { IoMdCart } from "react-icons/io";


const Header = () => {
  return (
    <div className={classes.header}>
        <div className= {classes["header-main-logo"]} >
            <img src={main} alt="" />
        </div>
        <ul className= {classes["header-links"]}>
            <li className= {classes["header-link"]}><a href="#">Home</a></li>
            <li className= {classes["header-link"]}><a href="#">Category</a></li>
            <li className= {classes["header-link"]}><a href="#">Blog</a></li>
            <li className= {classes["header-link"]}><a href="#">Contacts</a></li>
        </ul>
        <div className= {classes["header-sub-logo"]}>
            <div className= {classes["header-bell-icon"]} >
                <img src={bell} alt="" />
            </div>
            <IoMdCart className={classes["header-cart-icon"]} />
        </div>
    </div>
  )
}

export default Header