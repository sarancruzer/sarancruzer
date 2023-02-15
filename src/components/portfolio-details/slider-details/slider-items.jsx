import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import img_1 from "@assets/img/portfolio/details/slider/portfolio-details-slider-1.jpg";
import img_2 from "@assets/img/portfolio/details/slider/portfolio-details-slider-2.jpg";
import img_3 from "@assets/img/portfolio/details/slider/portfolio-details-slider-3.jpg";

// data
const images = [img_1, img_2, img_3];

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
//ImageStyle
const ImageStyle = {
  width: "100%",
  height: "100%",
};

const SliderItems = ({padd='120'}) => {
  const sliderRef = useRef();
  return (
    <section className={`portfolio__area fix pb-${padd}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="portfolio__details-slider-2 p-relative">
              <Slider
                {...settings}
                ref={sliderRef}
                className="portfolio__details-slider-active-2"
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="portfolio__details-slider-item-2 w-img"
                  >
                    <Image src={img} alt="slider img" style={ImageStyle} />
                  </div>
                ))}
              </Slider>

              <div className="portfolio__details-arrow portfolio-details-slider-arrow-2 d-none d-md-block">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  type="button"
                  className="portfolio-details-2-button-prev slick-prev slick-arrow"
                >
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  type="button"
                  className="portfolio-details-2-button-next slick-next slick-arrow"
                >
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderItems;
