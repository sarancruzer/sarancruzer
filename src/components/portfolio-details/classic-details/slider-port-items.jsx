import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import img_1 from "@assets/img/portfolio/details/slider/portfolio-details-slider-1.jpg";
import img_2 from "@assets/img/portfolio/details/slider/portfolio-details-slider-2.jpg";
import img_3 from "@assets/img/portfolio/details/slider/portfolio-details-slider-3.jpg";

// slider setting
const settings = {
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const images = [img_1, img_2, img_3,img_2,];

const ImageStyle = {
  width: "100%",
  height: "100%",
};

const SliderPortItems = ({ element_style = false }) => {
  return (
    <section className={`portfolio__area fix ${element_style ? "pb-60" : ""}`}>
      <div className="container">
        {element_style && (
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-section-wrapper-3 mb-60 text-center">
                <span className="tp-section-subtitle-3">
                  Modern &amp; Clean Design
                </span>
                <h3 className="tp-section-title-3">Carousel With Dots</h3>
              </div>
            </div>
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="portfolio__details-slider pl-50 pr-50">
              <Slider
                {...settings}
                className="portfolio__details-slider-active"
              >
                {images.map((img, i) => (
                  <div key={i} className="portfolio__details-slider-item">
                    <Image src={img} alt="slider img" style={ImageStyle} />
                  </div>
                ))}
              </Slider>
              <div className="portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderPortItems;
