import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dynamic from "next/dynamic";
import Image from "next/image";
// internal
import { testimonial_data } from "./creative-testimonial";
import CreativeSingleTesti from "./single-testimonial/creative-single-testi";
import brand_1 from "@assets/img/brand/7/brand-1.png";
import brand_2 from "@assets/img/brand/7/brand-2.png";
import brand_3 from "@assets/img/brand/7/brand-3.png";
import brand_4 from "@assets/img/brand/7/brand-4.png";
import brand_5 from "@assets/img/brand/7/brand-5.png";

// brand images
const brand_images = [brand_1, brand_2, brand_3, brand_4, brand_5];

// slider settings
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".testimonial-15-button-next",
    prevEl: ".testimonial-15-button-prev",
  },
};

// brand slider setting
const brand_slider_setting = {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
};

const PricingTestimonial = () => {
  return (
    <section className="testimonial__area pt-110 pb-115 grey-bg-15 fix">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-7 col-xl-9 col-lg-9 col-md-9">
            <div className="tp-section-wrapper-2 mb-55">
              <span className="tp-section-subtitle-2">
                Some of Our Customer Words
              </span>
              <h3 className="tp-section-title-2">
                Customers love the ease and simplicity
              </h3>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-3 col-lg-3 col-md-3">
            <div className="testimonial__slider-arrow-15 text-md-end  mb-65">
              <button className="testimonial-15-button-prev">
                <i className="fa-regular fa-chevron-left"></i>
              </button>
              <button className="testimonial-15-button-next">
                <i className="fa-regular fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div
              className="testimonial__slider-15 testimonial__style-3 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="testimonial__slider-active-15 swiper-container"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="testimonial__item-6 transition-3 mb-60"
                  >
                    <CreativeSingleTesti item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="brand__slider-7">
              <span>TRUSTED BY GLOBAL BRANDS:</span>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="brand__slider-7">
              <Swiper
                {...brand_slider_setting}
                className="brand__slider-active-7 swiper-container"
              >
                {brand_images.map((brand, i) => (
                  <SwiperSlide key={i} className="brand__item-7 text-center">
                    <Image src={brand} alt="image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(PricingTestimonial), {
  ssr: false,
});

