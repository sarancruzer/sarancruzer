import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import dynamic from "next/dynamic";
import Link from "next/link";
// internal
import portfolio_data from "@data/portfolio-data";

// items
const portfolio_items = portfolio_data.filter((item) => item.home_portfolio);

// portfolio slider items
export function PortfolioSliderItems() {
  return (
    <div className="portfolio__slider-9 has-scrollbar p-relative">
      <Swiper
        className="portfolio__slider-active-9 swiper-container"
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        loop={true}
        navigation={{
          nextEl: ".portfolio-button-next-9",
          prevEl: ".portfolio-button-prev-9",
        }}
        scrollbar={{
          el: ".tp-scrollbar",
          clickable: true,
        }}
        breakpoints={{
          1601: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {portfolio_items.map((item) => {
          const { id, img, tag, title } = item;
          return (
            <SwiperSlide
              key={id}
              className="portfolio__item-9 w-img wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div
                className="portfolio__thumb-9"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
              <div className="portfolio__content-9">
                <div className="portfolio__tag-9">
                  <span>
                    <a href="#">{tag}</a>
                  </span>
                </div>
                <h3 className="portfolio__title-9">
                  <Link href="/portfolio-details">{title}</Link>
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="portfolio__nav-9 d-none d-sm-block">
        <button type="button" className="portfolio-button-prev-9">
          <i className="fa-regular fa-chevron-left"></i>
        </button>
        <button type="button" className="portfolio-button-next-9">
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </div>
      <div className="tp-scrollbar mt-70 mb-50 grey-bg-12"></div>
    </div>
  );
}

const HomePersonalPortfolioArea = () => {
  return (
    <>
      <section className="portfolio__area portfolio__overlay-9 fix">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-8">
              <div className="section__title-wrapper-9 mb-65">
                <span className="section__title-pre-9">Past Projects</span>
                <h3 className="section__title-9">The work I did for client.</h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-4 col-md-4">
              <div className="portfolio__more-9 mb-85 text-md-end">
                <Link href="/portfolio-masonry" className="tp-btn-5 ">
                  all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-xxl-12">
              <PortfolioSliderItems />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePersonalPortfolioArea), { ssr: false });
