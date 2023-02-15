import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// internal
import inst_1 from "@assets/img/instagram/instagram-1.jpg";
import inst_2 from "@assets/img/instagram/instagram-2.jpg";
import inst_3 from "@assets/img/instagram/instagram-3.jpg";
import inst_4 from "@assets/img/instagram/instagram-4.jpg";
import inst_5 from "@assets/img/instagram/instagram-5.jpg";
import inst_6 from "@assets/img/instagram/instagram-6.jpg";
import inst_7 from "@assets/img/instagram/instagram-7.jpg";
import inst_8 from "@assets/img/instagram/instagram-8.jpg";

// data
export const instagram_items = [
  { img: inst_1, link: "https://www.instagram.com/" },
  { img: inst_2, link: "https://www.instagram.com/" },
  { img: inst_3, link: "https://www.instagram.com/" },
  { img: inst_4, link: "https://www.instagram.com/" },
  { img: inst_5, link: "https://www.instagram.com/" },
  { img: inst_6, link: "https://www.instagram.com/" },
  { img: inst_7, link: "https://www.instagram.com/" },
  { img: inst_8, link: "https://www.instagram.com/" },
];

// slider instagram items
export function SliderInstagramItems() {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[]);
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={12}
      className="instagram__slider-active swiper-container"
      loop={loop}
      breakpoints={{
        1400: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {instagram_items.map((item, i) => (
        <SwiperSlide
          key={i}
          className="instagram__item w-img wow slideInDown"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <Image
            src={item.img}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="instagram__btn">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="tp-instagram-btn popup-image"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const PhotographyInstagram = () => {
  return (
    <>
      <div className="instagram__slider black-bg-5 pb-30 box-plr-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              {/* SliderInstagramItems */}
              <SliderInstagramItems />
              {/* SliderInstagramItems */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyInstagram;
