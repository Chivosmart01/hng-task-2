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
    title: "HeadPhones",
  },
  {
    img: img2,
    title: "Earpods",
  },
  {
    img: img3,
    title: "Watches",
  },
  {
    img: img4,
    title: "Cameras",
  },
  {
    img: img5,
    title: "Phones",
  },
];

const BrowseMore = () => {
  return (
    <div className={classes["browse-more-section"]}>
      <div className={classes["browse-more-mobile"]}>
        {/* <ul>
          {datas.map((data, index) => (
            <li key={index} className={classes["browse-more-mobile-card"]}>
              <div className={classes.className}>
                <img src={data.img} alt="" />
              </div>
              <h5>{data.title}</h5>
            </li>
          ))}
        </ul> */}
      </div>

      <div className={classes["browse-more-desktop"]}>
        <h2 className={classes["browse-more-section-title"]}>
          Browse by Category
        </h2>
        <br />
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Ensures autoplay doesn't pause when hovered
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {datas.map((data, index) => (
            <SwiperSlide
              key={index}
              className={classes["browse-more-section-card"]}
            >
              <div>
                <img src={data.img} alt={data.title} />
              </div>
              <h5>{data.title}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrowseMore;

// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// import classes from "./browseMore.module.css";
// import img1 from "../img/browse-img-1.png";
// import img2 from "../img/browse-img-2.png";
// import img3 from "../img/browse-img-3.png";
// import img4 from "../img/browse-img-4.png";
// import img5 from "../img/browse-img-5.png";
// import img6 from "../img/browse-img-6.png";

// const datas = [
//     {
//       img: img1,
//       title: "HeadPhones",
//     },
//     {
//       img: img2,
//       title: "Earpods",
//     },
//     {
//       img: img3,
//       title: "Watches",
//     },
//     {
//       img: img4,
//       title: "Cameras",
//     },
//     {
//       img: img5,
//       title: "Phones",
//     },
//     // {
//     //     img: img6,
//     //     title: "Smart Watches",
//     //     className:'smartWatch'
//     // },
//   ];

// const BrowseMore = () => {
//   return (
//     <div className={classes["browse-more-section"]}>
//       <h2 className={classes["browse-more-section-title"]}>
//         Browse by Category
//       </h2>

//       <br />
//       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
//         {datas.map((data) => (
//           <SwiperSlide className={classes["browse-more-section-card"]}>
//             <div className={classes.className}>
//               <img src={data.img} alt="" />
//             </div>
//             <h5>{data.title}</h5>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BrowseMore;
