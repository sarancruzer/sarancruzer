import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import bg from '@assets/img/slider/10/slider-1.jpg';
import slider_img from '@assets/img/slider/10/slider-2.png';

const PoliticianBanner = () => {
  return (
    <>
      <section className="slider__area fix">
        <div className="slider__item-10 slider__height-10 d-flex align-items-center black-bg-17 p-relative z-index-1">
          <div
            className="slider__bg-10 include-bg jarallax"
            style={{backgroundImage:`url(${bg.src})`}}
          ></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-8">
                <div className="slider__content-10 mb-60">
                  <span className="slider__title-pre-10">
                    Hello, I’m Justin Case
                  </span>
                  <h3 className="slider__title-10">
                    How plan <br /> form the party.
                  </h3>
                  <p>Become a part of our team, sign up for updates.</p>
                  <div className="slider__btn-10">
                    <Link href="/about" className="tp-btn-7">
                      About Our Strategy{" "}
                      <i className="fa-regular fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-4 order-first order-sm-last">
                <div className="slider__thumb-10 text-end">
                  <span className="thumb-border"></span>
                  <Image src={slider_img} alt="slider image" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianBanner;
