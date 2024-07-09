import { useContext } from "react";
import CartContext from "../store/cart-context";

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


const datas = [
  {
    id: 1,
    img: img1,
    title: "120 Pro Smart Watch",
    price: 150,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 2,
    img: img2,
    title: "120 Pro Smart Watch",
    price: 1500,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 3,
    img: img3,
    title: "120 Pro Smart Watch",
    price: 100,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 4,
    img: img4,
    title: "120 Pro Smart Watch",
    price: 100,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 5,
    img: img5,
    title: "120 Pro Smart Watch",
    price: 1200,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 6,
    img: img6,
    title: "120 Pro Smart Watch",
    price: 140,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 7,
    img: img7,
    title: "120 Pro Smart Watch",
    price: 250,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 8,
    img: img8,
    title: "120 Pro Smart Watch",
    price: 4000,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 9,
    img: img9,
    title: "120 Pro Smart Watch",
    price: 200,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 10,
    img: img10,
    title: "120 Pro Smart Watch",
    price: 150,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 11,
    img: img11,
    title: "120 Pro Smart Watch",
    price: 200,
  },
  {
    id: 12,
    img: img12,
    title: "120 Pro Smart Watch",
    price: 300,
    display: "5 inches",
    color: "white",
    memory: "32gb"
  },
  {
    id: 13,
    img: img13,
    title: "120 Pro Smart Watch",
    price: 250,
  },
  {
    id: 14,
    img: img14,
    title: "120 Pro Smart Watch",
    price: 500,
  },
  {
    id: 15,
    img: img8,
    title: "120 Pro Smart Watch",
    price: 500,
  },
];

const Products = () => {
  const cartCtx = useContext(CartContext);

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
  };

  return (
    <div className={classes["product-section"]}>
      <h3 className={classes["product-section-title"]}>Featured Products</h3>
      <div className={classes["product-section-main"]}>
        <ul className={classes["products-lists"]}>
          {datas.map((data) => (
            <li key={data.id} className={classes["products-list"]}>
              <div className={classes["products-list-img"]}>
                <img src={data.img} alt={data.title} />
              </div>
              <h6>{data.title}</h6>
              <h6>{data.price}</h6>
              <button onClick={() => addToCartHandler(data)} className={classes["products-list-btn"]}>
                Add To Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;





