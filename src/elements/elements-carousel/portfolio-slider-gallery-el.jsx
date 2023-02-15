import React, { useRef } from "react";
// internal
import portfolio_data from "@data/portfolio-data";
import Slider from "react-slick";
import Image from "next/image";

// portfolio items
const portfolio_items = portfolio_data.filter((item) => item.home_agency);

// carousel setting
const settings = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: true,
  fade: false,
  arrows: false,
  centeredSlides: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PortfolioSliderGalleryEl = () => {
  const sliderRef = useRef();
  return (
    <section className="elements__carousel-area pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Modern & Clean Design
              </span>
              <h3 className="tp-section-title-3">
                Carousel Grid With Controls
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="elements__carousel p-relative">
              <Slider
                {...settings}
                ref={sliderRef}
                className="elements__carousel-active"
              >
                {portfolio_items.map((item, i) => (
                  <div key={i} className="elements__carousel-item w-img">
                    <Image
                      src={item.img}
                      alt="image"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))}
              </Slider>
              <div className="elements-arrow">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="elements-button-prev slick-prev slick-arrow"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="elements-button-next slick-next slick-arrow"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSliderGalleryEl;
