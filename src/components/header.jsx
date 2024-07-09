
import { useState } from 'react'
import classes from "./header.module.css"
import logo from "../img/header-logo.svg"
import hamburger from "../img/hamburger.svg"
// import { IoMdCart } from "react-icons/io";
import cartIcon from "../img/cart-icon-1.svg"
import Navigation from './navigation'


const Header = () => {
    const [openNav, setOpenNav] = useState(false)

    const openNavHandler = () => {
        setOpenNav(true)
    }

    console.log(openNav)

  return (
    <div className={classes.header}>
        <div className= {classes["header-main-logo"]} >
            <img src={logo} alt="" />
        </div>
        <ul className= {classes["header-links"]}>
            <li className= {classes["header-link"]}><a href="#">Home</a></li>
            <li className= {classes["header-link"]}><a href="#">Category</a></li>
            <li className= {classes["header-link"]}><a href="#">Blog</a></li>
            <li className= {classes["header-link"]}><a href="#">Contacts</a></li>
        </ul>
        <div className= {classes["header-sub-logo"]}>
            <div className= {classes["header-cart-icon"]}>
            <img src={cartIcon} alt="" />
            </div>
            <div className= {classes["header-hamburger-icon"]} onClick={openNavHandler} >
                <img src={hamburger} alt="" />
            </div>
            {/* <IoMdCart className={classes["header-cart-icon"]} /> */}
        {/* <Navigation isActive = {openNav} /> */}
        {openNav && <Navigation  isActive = {openNav}  setIsActive={setOpenNav} />}
        </div>
    </div>
  )
}

export default Header