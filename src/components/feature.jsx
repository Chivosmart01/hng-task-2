import React from 'react'

const datas = [
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
    {
        img: img1,
        title: "120 Pro Smart Watch",
        price: "150:00",
    },
]

const Feature = () => {
  return (
    <div>
        <h1>Featured Products</h1>
        <div>
            <div>

            </div>
            <ul>
                {datas.map(data => {
                        <li>
                            <div>
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