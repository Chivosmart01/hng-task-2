import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Pagination } from "@mui/material";
import { useState } from "react";

import img1 from "../img/prod1.png";
import img2 from "../img/prod2.png";
import img3 from "../img/prod3.png";
import img4 from "../img/prod4.png";
import img5 from "../img/prod5.png";
import img6 from "../img/prod6.png";
import img7 from "../img/prod7.png";
import img8 from "../img/prod8.png";
import img9 from "../img/prod9.png";
import img10 from "../img/prod10.png";
import img11 from "../img/prod11.png";
import img12 from "../img/prod12.png";
import img13 from "../img/prod13.png";
import img14 from "../img/prod14.png";
import classes from "./products.module.css";
import PopUp from "../layout/popUp";

const datas = [
  {
    id: 1,
    img: img1,
    title: "120 Pro Smart Watch",
    price: 250,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 2,
    img: img2,
    title: "Iphone 13 pro max ",
    price: 1500,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 3,
    img: img3,
    title: "Garmin watch",
    price: 300,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 4,
    img: img4,
    title: "Y60 smart airpods",
    price: 200,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 5,
    img: img5,
    title: "Ipad",
    price: 900,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 6,
    img: img6,
    title: "3D security Camera",
    price: 600,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 7,
    img: img7,
    title: "Camera",
    price: 3000,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 8,
    img: img8,
    title: " CCTV Camera",
    price: 100,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 9,
    img: img9,
    title: "Game Pad",
    price: 250,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 10,
    img: img10,
    title: "Excel game pads",
    price: 300,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 11,
    img: img11,
    title: "Smart Tv",
    price: 15000,
  },
  {
    id: 12,
    img: img12,
    title: " Washing Machine ",
    price: 150,
    display: "5 inches",
    color: "white",
    memory: "32gb",
  },
  {
    id: 13,
    img: img13,
    title: "Ring Light",
    price: 300,
  },
  {
    id: 14,
    img: img14,
    title: "Ear pods",
    price: 500,
  },
  {
    id: 15,
    img: img12,
    title: " Washing Machine ",
    price: 150,
    display: "7 inches",
    color: "Black",
    memory: "32gb",
  },
  {  id: 16,
    img: img10,
    title: "Excel game pads",
    price: 300,
    display: "2 inches",
    color: "Black",
    memory: "32gb",
  },
];

const itemsPerPage = 8;

const Products = () => {
  const cartCtx = useContext(CartContext);
  const [page, setPage] = useState(1);
  const [isprodSelected, setIsProdSelected] = useState(false);

  const productselectedHandler = () => {
    setIsProdSelected(true);

    // Perform some action after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setIsProdSelected(false);
    }, 1000);
  };

  const handlePageChange = (e, p) => {
    setPage(p);
  };

  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      img: item.img,
      price: item.price,
      display: item.display,
      color: item.color,
      memory: item.memory,
      amount: 1, // You might want to add an amount field
    });

    productselectedHandler()
  };

  return (
    <div className={classes["product-section"]}>
      {/* {isprodSelected && <PopUp />} */}
      <h3 className={classes["product-section-title"]}>Featured Products</h3>
      <div className={classes["product-section-main"]}>
        <ul className={classes["products-lists"]}>
          {datas
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((data) => (
              <li key={data.id} className={classes["products-list"]}>
                 {isprodSelected && <PopUp />}
                <div className={classes["products-list-img"]}>
                  <img src={data.img} alt={data.title} />
                </div>
                <h6>{data.title}</h6>
                <h6>${data.price}</h6>
                <button
                  onClick={() => {
                    addToCartHandler(data);
                  }}
                  className={classes["products-list-btn"]}
                >
                  Add To Cart
                </button>
              </li>
            ))}
        </ul>
        <Pagination
          count={2}
          color="success"
          onChange={handlePageChange}
          variant="outlined"
        ></Pagination>
      </div>
    </div>
  );
};

export default Products;
