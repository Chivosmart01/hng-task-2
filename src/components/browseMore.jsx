import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./browseMore.module.css";
import img1 from "../img/slid1.png";
import img2 from "../img/slid2.png";
import img3 from "../img/slid3.png";
import img4 from "../img/slid5.png";
import img5 from "../img/slid6.png";
import img6 from "../img/phones.png";


const datas = [
  {
    img: img1,
    title: "Smart Watches",
  },
  {
    img: img2,
    title: "Phones",
  },
  {
    img: img3,
    title: "Camera",
  },
  {
    img: img4,
    title: "Watches",
  },
  {
    img: img5,
    title: "Ear Pods",
  },
  {
    img: img6,
    title: "Phones",
  },
];

const BrowseMore = () => {
  return (
    <section className={classes.section}>
      <div className={classes["browse-more-section"]}>
        <h2 className={classes["browse-more-section-title"]}>
          Browse by Category
        </h2>

        <br />
        <Swiper
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Ensures autoplay doesn't pause when hovered
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {datas.map((data) => (
            <SwiperSlide className={classes["browse-more-section-card"]}>
              <div className={classes.className}>
                <img src={data.img} alt="" />
              </div>
              <h5>{data.title}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrowseMore;
