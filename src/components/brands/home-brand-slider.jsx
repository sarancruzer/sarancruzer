import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// brands 
import brand_1 from '@assets/img/brand/brand-2.png';
import brand_2 from '@assets/img/brand/brand-3.png';
import brand_3 from '@assets/img/brand/brand-4.png';
import brand_4 from '@assets/img/brand/brand-5.png';
import brand_5 from '@assets/img/brand/brand-6.png';


const HomeBrandSlider = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[]);
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={loop}
        className="brand__slider-active swiper-container"
        pagination={{
          el: ".brand-slider-dot",
          clickable: true,
        }}
        breakpoints={{
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 3,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="brand__thumb">
          <Image src={brand_1} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="brand__thumb">
          <Image src={brand_2} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="brand__thumb">
          <Image src={brand_3} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="brand__thumb">
          <Image src={brand_4} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="brand__thumb">
          <Image src={brand_5} alt="brand" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBrandSlider;