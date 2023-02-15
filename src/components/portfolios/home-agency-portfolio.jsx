import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import dynamic from "next/dynamic";
// internal
import shape_1 from "@assets/img/portfolio/5/shape/shape-1.png";
import shape_2 from "@assets/img/portfolio/5/shape/shape-2.png";
import portfolio_data from "@data/portfolio-data";
import ImageLightBox from "@components/common/modals/image-lightbox";
import AgencySinglePort from "./single-item/agency-single-port";

// portfolio items
const portfolio_items = portfolio_data.filter((item) => item.home_agency);

// agency portfolio slider items
export function AgencyPortfolioSliderItems() {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };
  //  images
  const images = portfolio_items.map((item) => item.img.src);
  return (
    <>
      <div className="portfolio__slider-5 p-relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          modules={[Navigation,Pagination]}
          className="portfolio__slider-active-5 swiper-container"
          navigation={{
            nextEl: ".portfolio-button-next-5",
            prevEl: ".portfolio-button-prev-5",
          }}
          pagination={{
            el: ".portfolio-slider-dot-5",
            clickable: true,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 2,
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
          }}
        >
          {portfolio_items.map((item, i) => (
            <SwiperSlide key={item.id}>
              <AgencySinglePort
                item={item}
                index={i}
                handleImagePopup={handleImagePopup}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="portfolio__nav-5 d-none d-sm-block">
          <button type="button" className="portfolio-button-prev-5">
            <i className="fa-regular fa-arrow-left"></i>
          </button>
          <button type="button" className="portfolio-button-next-5">
            <i className="fa-regular fa-arrow-right"></i>
          </button>
        </div>
        <div className="portfolio-slider-dot-5 tp-swiper-dot d-sm-none"></div>
      </div>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
}

const HomeAgencyPortfolio = () => {
  return (
    <section className="portfolio__area portfolio__overlay-5 pt-110 pb-120 p-relative z-index-1">
      <div className="portfolio__shape">
        <Image className="portfolio__shape-6" src={shape_1} alt="shape" />
        <Image className="portfolio__shape-7" src={shape_2} alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-5 mb-60 text-center">
              <span className="section__title-pre-5">SELECTED PROJECTS</span>
              <h3 className="section__title-5">Digital Case Studies.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-xxl-12">
            {/* Agency Portfolio Slider Items */}
            <AgencyPortfolioSliderItems />
            {/* Agency Portfolio Slider Items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(HomeAgencyPortfolio), {
  ssr: false,
});

