import React from "react";

import classes from "./browseMoreMobile.module.css";
import img1 from "../img/slid1.png";
import img2 from "../img/slid2.png";
import img3 from "../img/slid3.png";
import img4 from "../img/slid5.png";
import img5 from "../img/slid6.png";
import img6 from "../img/phones.png";

const datas = [
  {
    img: img1,
    title: "HeadPhones",
  },
  {
    img: img2,
    title: "Earpods",
  },
//   {
//     img: img3,
//     title: "Watches",
//   },
//   {
//     img: img4,
//     title: "Cameras",
//   },
//   {
//     img: img5,
//     title: "Phones",
//   },
//   {
//     img: img6,
//     title: "Smart Watches",
//     className: "smartWatch",
//   },
];

const BrowseMoreMobile = () => {
  return (
    <div className={classes["browse-more-mobile"]}>
      <ul>
        {datas.map((data) => (
          <li className={classes["browse-more-mobile-card"]}>
            <div className={classes.className}>
              <img src={data.img} alt="" />
            </div>
            <h5>{data.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseMoreMobile;
