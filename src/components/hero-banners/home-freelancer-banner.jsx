// external
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Dot, StarTwo } from "@svg/index";
import shape_1 from "@assets/img/slider/2/shape/slider-shape-1.png";
import shape_2 from "@assets/img/slider/2/shape/slider-shape-2.png";
import shape_3 from "@assets/img/slider/2/shape/slider-shape-3.png";
import client from "@assets/img/slider/2/slider-review.png";
import main_img from "@assets/img/slider/2/slider-1.png";

const contents = {
  shapes: [{ shape: shape_1 }, { shape: shape_2 }, { shape: shape_3 }],
  name: "Douglas Lyphe",
  title: "New Design Creation",
  review_client: client,
  img: main_img,
};
const { shapes, name, title, review_client, img } = contents;

const HomeFreelancerBanner = () => {
  return (
    <section className="slider__area pt-100 slider__overlay-2 slider__overlay-2-2 p-relative z-index-1">
      <div className="slider__shape-2">
        {shapes.map((shape, i) => (
          <Image
            key={i}
            className={`slider__shape-2-${i + 1}`}
            src={shape.shape}
            alt="shape"
          />
        ))}
      </div>
      <div className="slider__portfolio-btn">
        <Link href="/portfolio-masonry" className="slider-portfolio-btn">
          <Dot />
          All Projects
        </Link>
      </div>
      <div className="slider__mouse-scroll smooth d-flex align-items-center">
        <a href="#about" className="mouse-scroll-icon"></a>
        <p>
          <a href="#about">Scroll Down</a>
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div className="slider__content-2">
              <span
                className="slider__title-pre-2 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration=".7s"
              >
                {name}
              </span>
              <h3
                className="slider__title-2 wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration=".9s"
              >
                {title}
              </h3>
              <div
                className="slider__btn-2 wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1.1s"
              >
                <Link href="/contact" className="tp-btn-green">
                  Let’s talk
                </Link>
              </div>
              <div className="slider__review">
                <span className="slider__review-icon">
                  <StarTwo />
                </span>
                <p>
                  <span>Excellent</span> 4.9 out of 5
                </p>
                <span className="slider__review-client">
                  <Image src={review_client} alt="client img" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div
              className="slider__thumb-wrapper-2 pt-20 ml-40 "
              data-overlay="green"
              data-overlay-opacity="3"
            >
              <div
                className="slider__thumb-2 m-img text-center wow fadeInRight"
                data-wow-delay=".8s"
                data-wow-duration="1.2s"
              >
                <Image
                  src={img}
                  alt="main img"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFreelancerBanner;
