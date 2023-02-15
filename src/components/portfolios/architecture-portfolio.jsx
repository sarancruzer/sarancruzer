import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import dynamic from "next/dynamic";
// internal
import portfolio_bg_1 from "@assets/img/portfolio/8/portfolio-1.jpg";
import portfolio_bg_2 from "@assets/img/portfolio/8/portfolio-2.jpg";
import portfolio_bg_3 from "@assets/img/portfolio/8/portfolio-3.jpg";
import portfolio_bg_4 from "@assets/img/portfolio/8/portfolio-4.jpg";
import portfolio_bg_5 from "@assets/img/portfolio/8/portfolio-5.jpg";
import portfolio_bg_6 from "@assets/img/portfolio/8/portfolio-6.jpg";
import { HighlightShapeFive } from "@svg/index";

// data
const slider_data = [
  {
    id: 1,
    year: 2022,
    meta: "Kiev, Ukraine",
    title: "Cubic Blockes Hotel",
  },
  {
    id: 2,
    year: 2022,
    meta: "Dawsbury, Hungery",
    title: "Spring Castle Hotel",
  },
  {
    id: 3,
    year: 2022,
    meta: "Drumchapel, New Town",
    title: "Tranquil Orb Resort",
  },
  {
    id: 4,
    year: 2022,
    meta: "Cape Town, China",
    title: "Pova Hotel & Spa",
  },
  {
    id: 5,
    year: 2022,
    meta: "Antertic, South Asia",
    title: "Nebula Resort",
  },
  {
    id: 6,
    year: 2022,
    meta: "City, America",
    title: "Sapphire Court Motel",
  },
];

// arc portfolio slider items
export function ArcPortfolioSliderItems() {
  const [activeBg, setActiveBg] = useState("portfolio-img-2");
  // handleActiveBg
  const handleActiveBg = (id) => {
    setActiveBg(`portfolio-img-${id}`);
  };
  return (
    <div className="portfolio__slider-8 p-relative fix">
      <div id="portfolio-bg-img" className={activeBg}>
        <div
          className="portfolio-bg portfolio-img-1"
          style={{ backgroundImage: `url(${portfolio_bg_1.src})` }}
        ></div>
        <div
          className="portfolio-bg portfolio-img-2"
          style={{ backgroundImage: `url(${portfolio_bg_2.src})` }}
        ></div>
        <div
          className="portfolio-bg portfolio-img-3"
          style={{ backgroundImage: `url(${portfolio_bg_3.src})` }}
        ></div>
        <div
          className="portfolio-bg portfolio-img-4"
          style={{ backgroundImage: `url(${portfolio_bg_4.src})` }}
        ></div>
        <div
          className="portfolio-bg portfolio-img-5"
          style={{ backgroundImage: `url(${portfolio_bg_5.src})` }}
        ></div>
        <div
          className="portfolio-bg portfolio-img-6"
          style={{ backgroundImage: `url(${portfolio_bg_6.src})` }}
        ></div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        className="portfolio__slider-active-8 swiper-container"
        loop={true}
        modules={[Navigation]}
        // Navigation arrows
        navigation={{
          nextEl: ".portfolio-button-next-8",
          prevEl: ".portfolio-button-prev-8",
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
            spaceBetween: 0,
          },
        }}
      >
        {slider_data.map((item, i) => (
          <SwiperSlide
            key={i}
            onMouseEnter={() => handleActiveBg(item.id)}
            className={`portfolio__item-8 ${
              activeBg === `portfolio-img-${item.id}` ? "active" : ""
            }`}
            rel="portfolio-img-1"
          >
            <div className="portfolio__content-8">
              <div className="portfolio__meta-8">
                <span>{item.year}</span>
                <span>{item.meta}</span>
              </div>
              <h3 className="portfolio__title-8">
                <Link href="/portfolio-details">{item.title}</Link>
              </h3>
            </div>
          </SwiperSlide>
        ))}
        <div className="portfolio__nav-8">
          <button type="button" className="portfolio-button-prev-8">
            <i className="fa-regular fa-chevron-left"></i>
          </button>
          <button type="button" className="portfolio-button-next-8">
            <i className="fa-regular fa-chevron-right"></i>
          </button>
        </div>
      </Swiper>
    </div>
  );
}

const ArchitecturePortfolio = () => {
  return (
    <>
      <section className="portfolio_area pt-110 black-bg-13">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8 col-md-7">
              <div className="section__title-wrapper-8 mb-60">
                <span className="section__title-pre-8">Our projects</span>
                <h3 className="section__title-8">
                  latest{" "}
                  <span className="section__title-highlight-8">
                    projects
                    <HighlightShapeFive />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-5">
              <div className="portfolio__more-8 text-md-end mb-70">
                <Link href="/portfolio-gallery" className="tp-btn-border-7">
                  View all Projects{" "}
                  <i className="fa-regular fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-xxl-12">
              <ArcPortfolioSliderItems/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(ArchitecturePortfolio), { ssr: false });
