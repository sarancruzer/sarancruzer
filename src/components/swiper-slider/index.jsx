import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper";
// internal
import slider_img_1 from "@assets/img/slider/12/slider-1.jpg";
import slider_img_2 from "@assets/img/slider/12/slider-2.jpg";
import slider_img_3 from "@assets/img/slider/12/slider-3.jpg";
import slider_img_4 from "@assets/img/slider/12/slider-4.jpg";
import slider_img_5 from "@assets/img/slider/12/slider-5.jpg";
import slider_img_6 from "@assets/img/slider/12/slider-6.jpg";
import {SliderThumbShapeTwo,SliderThumbShapeOne} from "@svg/index";
import SocialLinks from "@components/social";

// slider data
const slider_data = [
  {
    id: 1,
    img: slider_img_1,
    title: "Aristide",
    bg: "",
  },
  {
    id: 2,
    img: slider_img_2,
    title: "Rise",
    bg: "has-yellow-gradient",
  },
  {
    id: 3,
    img: slider_img_3,
    title: "Karcher",
    bg: "has-red-gradient",
  },
  {
    id: 4,
    img: slider_img_4,
    title: "Fashion",
    bg: "has-blue-gradient",
  },
  {
    id: 5,
    img: slider_img_5,
    title: "Design",
    bg: "has-purple-gradient",
  },
  {
    id: 6,
    img: slider_img_6,
    title: "Creative",
    bg: "slider__item-12-dark has-black-gradient",
  },
];

const SwiperSliderArea = () => {
  return (
    <React.Fragment>
      <section className="slider__area p-relative">
        <Swiper
          direction="vertical"
          className="slider__active-12 slider__height-12 swiper-container"
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          loop={true}
          mousewheel={true}
          modules={[Navigation, Mousewheel, EffectFade, Pagination]}
          pagination={{
            el: ".slider-pagination-12",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return `<span class="${currentClass}"></span> 
              <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
            },
          }}
          navigation={{
            nextEl: ".slider-button-12-next",
            prevEl: ".slider-button-12-prev",
          }}
        >
          {slider_data.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className={`slider__item-12 slider__bg-12 ${item.bg} d-flex align-items-center`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="slider__content-12-wrapper p-relative z-index-1">
                      <div className="slider__thumb-12 p-relative">
                        <div className="slider__thumb-12-shape">
                          <SliderThumbShapeOne />
                          <SliderThumbShapeTwo />
                        </div>
                        <Image src={item.img} alt="slider img" />
                      </div>
                      <div className="slider__content-12 tp-slider-content-position-4">
                        <h3 className="slider__title-12">{item.title}</h3>
                      </div>
                      <div className="slider__content-12-branding">
                        <p>BRANDING <br /> 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider__social-12">
                <span>Follow: </span>
                <SocialLinks/>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-pagination-12 tp-swiper-fraction"></div>
          <div className="slider__nav-arrow-12 d-flex flex-column d-none d-md-block">
            <button className="slider-button-12-next">
              <i className="fa-regular fa-chevron-right"></i>
            </button>
            <button className="slider-button-12-prev">
              <i className="fa-regular fa-chevron-left"></i>
            </button>
          </div>
        </Swiper>
      </section>
    </React.Fragment>
  );
};

export default SwiperSliderArea;
