import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination } from "swiper";
// internal
import VerticalSliderItemOne from "./slider-item-1";
import VerticalSliderItemTwo from "./slider-item-2";
import VerticalSliderItemThree from "./slider-item-3";
import VerticalSliderItemFour from "./slider-item-4";
import VerticalSliderItemFive from "./slider-item-5";
// internal

const index = ({ setActive, active }) => {
  // handle dark active class
  const handleDarkActive = (index) => {
    if (index === 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <main>
      {/* <!-- slider area start --> */}
      <section className="slider__area p-relative">
        <Swiper
          className="slider__active-11 slider__height-11 swiper-container"
          direction="vertical"
          slidesPerView={1}
          onSlideChange={(swiper) => handleDarkActive(swiper.activeIndex)}
          spaceBetween={0}
          modules={[Pagination, EffectFade, Mousewheel]}
          effect="fade"
          loop={false}
          mousewheel={true}
          pagination={{
            el: ".slider-pagination-11",
            clickable: true,
          }}
        >
          {/* slider one */}
          <SwiperSlide className="slider__item-11 d-flex align-items-end p-relative green-bg-6">
            <VerticalSliderItemOne />
          </SwiperSlide>

          {/* slider two */}
          <SwiperSlide className="slider__item-11 d-flex align-items-center p-relative slider__item-11-dark is-dark gradient-bg-dark">
            <VerticalSliderItemTwo />
          </SwiperSlide>

          {/* slider three */}
          <SwiperSlide className="slider__item-11 d-flex align-items-center p-relative is-pink">
            <VerticalSliderItemThree />
          </SwiperSlide>

          {/* slider four */}
          <SwiperSlide className="slider__item-11 d-flex align-items-center p-relative align-items-sm-end is-khaki">
            <VerticalSliderItemFour />
          </SwiperSlide>

          {/* slider five */}
          <SwiperSlide className="slider__item-11 d-flex align-items-center p-relative is-white">
            <VerticalSliderItemFive />
          </SwiperSlide>

          {/* swiper dot */}
          <div
            className={`tp-swiper-dot slider-pagination-11 swiper-pagination-clickable swiper-pagination-bullets ${
              active && "header__white-slider slider-pagination-11-white"
            }`}
          ></div>
        </Swiper>
      </section>
      {/* <!-- slider area end --> */}
    </main>
  );
};

export default index;
