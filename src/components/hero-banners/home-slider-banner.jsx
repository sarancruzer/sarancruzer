import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import SliderForm from "../forms/slider-form";

const slider_data = [
  {
    id: 1,
    pre_title: "Hello! Consulting",
    title: "Workshops Business Consulting",
    bg: "/assets/img/slider/slider-1.jpg",
  },
  {
    id: 2,
    pre_title: "Hello! Consulting",
    title: "To This Template Than What You Can See",
    bg: "/assets/img/slider/slider-2.jpg",
  },
  {
    id: 3,
    pre_title: "Hello! Consulting",
    title: (
      <>
        Digital Age Adventure <br /> In Marketing
      </>
    ),
    bg: "/assets/img/slider/slider-3.jpg",
  },
];

const HomeSliderBanner = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <>
      <section className="slider__area p-relative">
        <Swiper
          slidesPerView={1}
          loop={loop}
          className="slider__active swiper-container"
          effect="fade"
          modules={[EffectFade, Navigation, Pagination]}
          pagination={{
            el: ".main-slider-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
            },
          }}
        >
          {slider_data.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center"
            >
              <div
                className="slider__bg p-relative include-bg"
                style={{ backgroundImage: `url(${item.bg})`,width:'100%',height:'100%' }}
              ></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xxl-102">
                    <div className="slider__content text-center">
                      <span className="slider__title-pre">
                        {item.pre_title}
                      </span>
                      <h3 className="slider__title">{item.title}</h3>
                      <div className="slider__form">
                        <SliderForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="main-slider-dot d-none d-lg-flex"></div>
        </Swiper>
        <div className="mouse-scroll">
          <a href="#tpabout" className="mouse-scroll-btn"></a>
        </div>
      </section>
    </>
  );
};

export default HomeSliderBanner;
