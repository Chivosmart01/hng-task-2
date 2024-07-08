import React from 'react'
import watch from "../img/ellipse-watch.png"
import ellipse from "../img/ellipse.png"
import classes from "./about.module.css"

const About = () => {
  return (
    <section  className= {classes["about-section"]}>
        <div className= {classes["about-section-title"]}>
            <h1>Stay Connected, Stay Fit, Stay Stylish with <br /> <span>Timbu Cloud</span> Smart watches</h1>
            <button>Explore Products</button>
        </div>
        <div className= {classes["about-section-main"]}>
            <article className= {classes["about-section-main-article"]}>
                <h3>T5 Mini Smart Watch</h3>
                <p>Stay Connected and healthy with our latest smartwatch! Track your workouts, and receive notifications o he go.</p>
                <button>Explore Products</button>
            </article>
            <div className= {classes["about-section-img"]}>
                <div className= {classes["ellipse-empty"]}>
                    <img  src={ellipse} alt="" />
                </div>
                <div className= {classes["ellipse-watch"]}>
                    <img  src={watch} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About