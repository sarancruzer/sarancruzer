import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import shape from "@assets/img/portfolio/3/portfolio-shape-1.png";
import portfolio_data from "@data/portfolio-data";
import { CalenderTwo, Camera, LocationThree } from "@svg/index";

// portfolio items
const port_items = portfolio_data.filter((item) => item.home_photographer);
// slider_settings
const settings = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  fade: false,
  arrows: false,
  centeredSlides: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// portfolio slider items
export function PhotographyGallerySlider() {
  return (
    <div className="portfolio__slider">
      <Slider {...settings} className="portfolio__slider-active">
        {port_items.map((item) => {
          const { id, tag, title, img, camera, city, date } = item || {};
          return (
            <div
              key={id}
              className="portfolio__item-3 transition-3 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div
                className="portfolio__thumb-3 w-img"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
              <div className="portfolio__content-3 transition-3">
                <div className="portfolio__tag-3">
                  <a href="#">{tag}</a>
                </div>
                <h3 className="portfolio__title-3">
                  <Link href="/portfolio-details">{title}</Link>
                </h3>
                <div className="portfolio__meta-3 transition-3">
                  <span>
                    <Camera />
                    {camera}
                  </span>
                  <span>
                    <LocationThree />
                    {city}
                  </span>
                  <span>
                    <CalenderTwo />
                    {date}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const PhotographerPortfolio = () => {
  return (
    <>
      <section className="portfolio__area p-relative black-bg-5 portfolio__overlay pt-110 pb-90 fix">
        <div className="portfolio__shape">
          <Image
            className="portfolio__shape-5"
            src={shape}
            alt="shape"
            priority
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-5 col-xl-6 col-md-8">
              <div className="section__title-wrapper-3 mb-60">
                <span className="section__title-pre-3">02 . SHOWCASE</span>
                <h3 className="section__title-3 has-gradient">
                  Our Most <br />
                  Recent <span> Projects.</span>
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-md-4">
              <div className="portfolio__more text-md-end mb-60">
                <Link href="/portfolio" className="tp-btn-3 --hover-style-2">
                  browse more
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <PhotographyGallerySlider/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographerPortfolio;
