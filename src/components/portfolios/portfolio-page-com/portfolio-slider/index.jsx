import React from "react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// internal
import slider_port_data from "./port-slider-data";
import SliderSinglePort from "@components/portfolios/single-item/slider-single-port";

const PortfolioSliderArea = () => {
  return (
    <>
      <section className="portfolio__horizontal p-relative">
        <div className="portfolio__horizontal-slider">
          <Swiper
            className="portfolio__horizontal-active swiper-container"
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel]}
            pagination={{
              el: ".portfolio-horizontal-dot",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class=${className}>
                <button>${index < 9 ? "0" : ""}${index + 1}</button>
               </span>`;
              },
            }}
            // Navigation arrows
            navigation={{
              nextEl: ".portfolio-horizontal-button-next",
              prevEl: ".portfolio-horizontal-button-prev",
            }}
          >
            {slider_port_data.map((item, i) => (
              <SwiperSlide key={i} className="portfolio__horizontal-item">
                <SliderSinglePort item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="portfolio-horizontal-dot d-none d-sm-flex"></div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSliderArea;
