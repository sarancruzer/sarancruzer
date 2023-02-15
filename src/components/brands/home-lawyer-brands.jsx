import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// internal
import img_1 from "@assets/img/award/4/award-icon-1.png";
import img_2 from "@assets/img/award/4/award-icon-2.png";
import img_3 from "@assets/img/award/4/award-icon-3.png";
import img_4 from "@assets/img/award/4/award-icon-4.png";

// const award data
const award_data = [
  { award_img: img_1 },
  { award_img: img_2 },
  { award_img: img_3 },
  { award_img: img_4 },
  { award_img: img_2 },
];

const HomeLawyerBrands = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[]);
  return (
    <div className="award__slider-active swiper-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="award__item-wrapper"
        loop={loop}
        breakpoints={{
          576: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 3,
          },
        }}
      >
        {award_data.map((award, i) => (
          <SwiperSlide key={i} className="award__item-4 mr-30">
            <Image src={award.award_img} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeLawyerBrands;
