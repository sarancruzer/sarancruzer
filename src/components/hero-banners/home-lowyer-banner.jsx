// external
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/slider/4/slider-shape-1.png";
import shape_2 from "@assets/img/slider/4/slider-shape-2.png";
import shape_3 from "@assets/img/slider/4/slider-shape-3.png";
import thumb from "@assets/img/slider/4/slider-thumb-1.jpg";

const contents = {
  pre_title: "Since 1975",
  title: "We're Certified Law Professionals",
  text: "We support businesses through periods of expansion, Succession, and all other important transitions.",
  btn_text: "Get In Touch",
  img: thumb,
};

const { pre_title, title, text, btn_text, img } = contents;

const HomeLowyerBanner = () => {
  return (
    <>
      <section
        className="slider__area slider-mt-50 p-relative z-index-1"
        data-bg-color="green-dark"
      >
        <div className="slider__mouse-scroll  slider__mouse-scroll-4 smooth d-flex align-items-center">
          <a
            href="#cases"
            className="mouse-scroll-icon mouse-scroll-icon-4"
          ></a>
          <p>
            <a href="#cases">Scroll Down</a>
          </p>
        </div>
        <div className="slider__shape">
          <Image
            className="slider__shape-4-1"
            src={shape_1}
            priority
            alt="shape"
          />
          <Image
            className="slider__shape-4-2 jarallax"
            src={shape_2}
            alt="shape"
          />
          <Image
            className="slider__shape-4-3 jarallax"
            src={shape_3}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
              <div className="slider__content-4">
                <span className="slider__title-pre-4">{pre_title}</span>
                <h3 className="slider__title-4">{title}</h3>
                <p>{text}</p>
                <div className="slider__btn-4">
                  <Link href="/contact" className="tp-btn-brown">
                    {btn_text}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="slider__thumb-4 m-img ">
                <Image
                  className="wow fadeInUp"
                  style={{ width: "100%", height: "100%" }}
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                  src={img}
                  alt="thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLowyerBanner;
