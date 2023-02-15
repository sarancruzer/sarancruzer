import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import slider_img_1 from "@assets/img/portfolio/metro/portfolio-metro-1.jpg";
import slider_img_2 from "@assets/img/portfolio/metro/portfolio-metro-2.jpg";
import slider_img_3 from "@assets/img/portfolio/metro/portfolio-metro-3.jpg";
import slider_img_4 from "@assets/img/portfolio/metro/portfolio-metro-4.jpg";
import slider_img_5 from "@assets/img/portfolio/metro/portfolio-metro-5.jpg";

// carousel_images
const carousel_images = [
  slider_img_1,
  slider_img_2,
  slider_img_3,
  slider_img_4,
  slider_img_5,
];

// carousel nav setting
const nav_setting = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  fade: false,
  arrows: false,
  centeredSlides: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// carousel dot setting
const dot_setting = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: true,
  fade: false,
  arrows: false,
  centeredSlides: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselWithControls = () => {
  const sliderRef = useRef();
  return (
    <section className="elements__carousel-area pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Modern & Clean Design
              </span>
              <h3 className="tp-section-title-3">Carousel With Controls</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="elements__carousel elements__carousel-img p-relative fix">
              <Slider
                {...nav_setting}
                ref={sliderRef}
                className="elements__carousel-img-active"
              >
                {carousel_images.map((img, i) => (
                  <div key={i} className="elements__carousel-item w-img">
                    <Image
                      src={img}
                      alt="img"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))}
              </Slider>

              <div className="elements-img-arrow">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="elements-img-button-prev slick-prev slick-arrow"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="elements-img-button-next slick-next slick-arrow"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="elements__carousel elements__carousel-img-dot p-relative fix">
              <Slider
                {...dot_setting}
                className="elements__carousel-img-dot-active"
              >
                {carousel_images.map((img, i) => (
                  <div key={i} className="elements__carousel-item w-img">
                    <Image
                      src={img}
                      alt="img"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselWithControls;
