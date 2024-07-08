import React from 'react'
import img1 from "../img/prod1.png"
import img2 from "../img/prod2.png"
import img3 from "../img/prod3.png"
import img4 from "../img/prod4.png"
import img5 from "../img/prod5.png"
import img6 from "../img/prod6.png"
import img7 from "../img/prod7.png"
import img8 from "../img/prod8.png"
import img9 from "../img/prod9.png"
import img10 from "../img/prod10.png"
import img11 from "../img/prod11.png"
import img12 from "../img/prod12.png"
import img13 from "../img/prod13.png"
import img14 from "../img/prod14.png"


const datas = [
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img2,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img3,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img4,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img5,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img6,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img7,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img2,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img8,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img9,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img3,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },

    {
        img: img10,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img8,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img5,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    // {
    //     img: img11,
    //     title: "120 Pro Smart Watch",
    //     price: "150:00",
    // },
    // {
    //     img: img12,
    //     title: "120 Pro Smart Watch",
    //     price: "150:00",
    // },
    // {
    //     img: img13,
    //     title: "120 Pro Smart Watch",
    //     price: "150:00",
    // },
    // {
    //     img: img6,
    //     title: "120 Pro Smart Watch",
    //     price: "150:00",
    // },
    // {
    //     img: img14,
    //     title: "120 Pro Smart Watch",
    //     price: "150:00",
    // },
]

const Feature = () => {
  return (
    <div className= {classes["product-section"]}>
            <h3 className= {classes["product-section-title"]}>Featured Products</h3>
        <div className= {classes["product-section-main"]}>
            <ul className= {classes["products-lists"]}>
                {datas.map(data => {
                        <li className= {classes["products-list"]}>
                            <div className= {classes["products-list-img"]}>
                                <img src={data.img} alt="" />
                            </div>
                            <h6>{data.title}</h6>
                            <h6>{data.price}</h6>
                        </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Feature