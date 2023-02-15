// external
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Thumbs,
  Controller,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// internal
import { SliderHighlight } from "@svg/index";
import slider_bg_1 from "@assets/img/slider/8/slider-1.jpg";
import slider_bg_2 from "@assets/img/slider/8/slider-2.jpg";
import slider_bg_3 from "@assets/img/slider/8/slider-3.jpg";
import slider_bg_4 from "@assets/img/slider/8/slider-4.jpg";
import slider_nav_1 from "@assets/img/slider/8/nav/slider-nav-1.jpg";
import slider_nav_2 from "@assets/img/slider/8/nav/slider-nav-2.jpg";
import slider_nav_3 from "@assets/img/slider/8/nav/slider-nav-3.jpg";
import slider_nav_4 from "@assets/img/slider/8/nav/slider-nav-4.jpg";
import { HeaderSocial } from "@components/social";

// slider items
const slider_items = [
  {
    bg: slider_bg_1,
    title: (
      <>
        We are a fine{" "}
        <span className="slider-highlight">
          Architecture {" "}
          <SliderHighlight />
        </span>
        firm in New York
      </>
    ),
    subtitle:
      "Through a unique combination of engineering, construction and design disciplines and expertise.",
  },
  {
    bg: slider_bg_2,
    title: (
      <>
        Commercial{" "}
        <span className="slider-highlight">
          building {" "}
          <SliderHighlight />
        </span>
        Concept in village
      </>
    ),
    subtitle:
      "Through a unique combination of engineering, construction and design disciplines and expertise.",
  },
  {
    bg: slider_bg_3,
    title: (
      <>
        Premium{" "}
        <span className="slider-highlight">
          Real State {" "}
          <SliderHighlight />
        </span>
        Developers
      </>
    ),
    subtitle:
      "Through a unique combination of engineering, construction and design disciplines and expertise.",
  },
  {
    bg: slider_bg_4,
    title: (
      <>
        Preparing for{" "}
        <span className="slider-highlight">
          Sustainable {" "}
          <SliderHighlight />
        </span>
        Future Architecture
      </>
    ),
    subtitle:
      "Through a unique combination of engineering, construction and design disciplines and expertise.",
  },
];
// slider_nav_items
const slider_nav_items = [
  {
    id: 1,
    title: (
      <>
        We are a fine Architecture <br /> firm in New York
      </>
    ),
    img: slider_nav_1,
  },
  {
    id: 2,
    title: (
      <>
        Commercial building <br /> Concept in village
      </>
    ),
    img: slider_nav_2,
  },
  {
    id: 3,
    title: (
      <>
        Commercial building <br /> Concept in village
      </>
    ),
    img: slider_nav_3,
  },
  {
    id: 4,
    title: (
      <>
        We are a fine Architecture <br /> firm in New York
      </>
    ),
    img: slider_nav_4,
  },
];

const ArchitectureBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="slider__area p-relative">
        <div className="slider__social d-none d-lg-block">
          <ul>
            <HeaderSocial />
          </ul>
          <span>Follow Us</span>
        </div>
        {/* main slider */}
        <Swiper
          className="slider__active swiper-container"
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop={true}
          effect="fade"
          modules={[
            Pagination,
            EffectFade,
            Controller,
            FreeMode,
            EffectFade,
            Thumbs,
            Navigation,
          ]}
          // If we need pagination
          pagination={{
            el: ".main-slider-dot, .main-slider-dot-8",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=${className}>
                <button>${index < 9 ? "0" : ""}${index + 1}</button>
               </span>`;
            },
          }}
          // Navigation arrows
          navigation={{
            nextEl: ".slider-button-next, .slider-button-8-next",
            prevEl: ".slider-button-prev, .slider-button-8-prev",
          }}
          a11y={false}
        >
          {slider_items.map((item, i) => (
            <SwiperSlide
              key={i}
              className="slider__item-8 p-relative z-index-1 slider__height-8 d-flex align-items-center"
            >
              <div
                className="slider__bg-8 include-bg"
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xxl-10 col-xl-8 col-lg-9">
                    <div className="slider__content-8">
                      <h3 className="slider__title-8">{item.title}</h3>
                      <p>{item.subtitle}</p>

                      <div className="slider__btn-8">
                        <Link
                          href="portfolio-details-list"
                          className="tp-btn-4 tp-style-border"
                        >
                          See Project{" "}
                          <i className="fa-regular fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="main-slider-dot-8 d-none d-sm-flex"></div>
        </Swiper>

        {/*  slider__nav */}
        <div className="slider__nav d-none d-sm-block">
          <Swiper
            className="slider__nav-active swiper-container"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            freeMode={false}
            onSwiper={setThumbsSwiper}
            modules={[Controller, FreeMode, Thumbs, Navigation]}
            watchSlidesProgress={true}
            effect="fade"
            allowTouchMove={false}
            navigation={{
              nextEl: ".slider-8-button-next",
              prevEl: ".slider-8-button-prev",
            }}
          >
            {slider_nav_items.map((item, i) => (
              <SwiperSlide
                key={i}
                className="slider__nav-item d-flex align-items-center"
              >
                <div className="slider__nav-content">
                  <span>{item.id <=9 ? '0':''}{item.id}.</span>
                  <h3 className="slider-nav-title">{item.title}</h3>
                </div>
                <div className="slider__nav-thumb">
                  <Image src={item.img} alt="image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider__nav-arrow d-flex flex-column">
            <button className="slider-button-8-next">
              <i className="fa-regular fa-chevron-right"></i>
            </button>
            <button className="slider-button-8-prev">
              <i className="fa-regular fa-chevron-left"></i>
            </button>
          </div>
        </div>
        <div className="mouse-scroll mouse-scroll-8">
          <a href="#tpabout" className="mouse-scroll-btn"></a>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(ArchitectureBanner), { ssr: false });
