import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from '@assets/img/slider/9/slider-shape-1.png';
import shape_2 from '@assets/img/slider/9/slider-shape-2.png';
import main_img from '@assets/img/slider/9/slider-1.png';
import {Behance, Dribble, Instagram} from "@svg/index";

const PortfolioBanner = () => {
  return (
    <>
      <section className="slider__area pt-40 p-relative fix">
        <div className="slider__item-9">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6 col-md-7">
                <div className="slider__content-9">
                  <span className="slider__title-pre-9">
                    Hy ! I am Saravanan Nandhan
                  </span>
                  <h3 className="slider__title-5">
                     Full Stack Developer
                  </h3>
                  <p>
                  I have expertise in designing and developing web applications using modern technologies such as  Angular, Node.js, React.js, javascript 
                  </p>
                  <p>
                  I am passionate about developing high-quality applications, and I strive to stay up to date with the latest trends in web development.
                  </p>

                  <div className="slider__btn-9 mb-85">
                    <Link href="/contact" className="tp-btn-5 tp-link-btn-3">
                      Book a call
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>

                  <div className="slider__social-9 d-flex flex-wrap align-items-center">
                    <span>Check out my:</span>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                          <Instagram/>
                        </a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/" target='_blank' rel="noreferrer">
                          <Dribble/>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.behance.net/" target='_blank' rel="noreferrer">
                          <Behance/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-5 order-first order-md-last">
                <div className="slider__thumb-9 p-relative scene">
                  <div className="slider__shape">
                    <div className="slider__shape-20">
                      <Image
                        className="layer"
                        src={shape_1}
                        alt="shape"
                      />
                    </div>
                    <div className="slider__shape-21">
                      <Image
                        className="layer"
                        src={shape_2}
                        alt="shape"
                      />
                    </div>
                  </div>
                  <Image
                    className="slider__thumb-9-main"
                    src={main_img}
                    alt="main image"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioBanner;
