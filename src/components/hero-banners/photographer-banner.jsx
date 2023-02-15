import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import shape from "@assets/img/slider/3/slider-camera.jpg";
import bgImg from "@assets/img/slider/3/slider-1.jpg";

const PhotographerBanner = () => {
  return (
    <>
      <section className="slider__area slider__border slider__height-3 d-flex align-items-center p-relative box-plr-245 p-relative fix">
        <div className="slider__shape">
          <Image
            className="slider__shape-camera"
            src={shape}
            alt="shape"
            priority
          />
        </div>
        <div
          className="slider__bg-3 include-bg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-8">
              <div
                className="slider__content-3 p-relative z-index-1 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <span className="slider__title-pre-3">
                  A GOOD PHOTOGRAPH IS
                </span>
                <h3 className="slider__title-3">
                  Capturing <br /> Beauty Photo
                </h3>
                <div className="slider__btn">
                  <Link href="/portfolio" className="tp-btn-border-2">
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographerBanner;
