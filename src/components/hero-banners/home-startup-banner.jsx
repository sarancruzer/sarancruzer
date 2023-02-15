import React from 'react';
import Image from 'next/image';
// internal
import shape_1 from '@assets/img/slider/7/shape/slider-shape-4.png';
import shape_2 from '@assets/img/slider/7/shape/slider-shape-1.png';
import shape_3 from '@assets/img/slider/7/shape/slider-shape-2.png';
import shape_4 from '@assets/img/slider/7/shape/slider-shape-3.png';
import { HighlightShape, Email } from '@svg/index';
import mainImg from '@assets/img/slider/7/slider-1.png';

const HomeStartupBanner = () => {
  return (
    <>
      <section className="slider__area pt-180 z-index-1 p-relative fix" data-bg-color="green-light-3">
        <div className="slider__shape">
          <Image className="slider__shape-19" src={shape_1} alt="shape" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="slider__content-7">
                <h3 className="slider__title-7">It’s time to <br /> join the {' '}
                  <span className="slider-highlight">
                    startup {" "}
                    <HighlightShape />
                  </span>
                  business
                </h3>
                <p>Elementum ipsum donec usodales porttitor mauris augue fermentum sagittis elementum.</p>

                <div className="slider__subscribe">
                  <form action="#">
                    <div className="slider__subscribe-input-box">
                      <div className="slider__subscribe-input">
                        <span>
                          <Email />
                        </span>
                        <input type="email" placeholder="Your Email Address" />
                      </div>
                      <button type="submit" className="tp-btnr-yellow tp-btn-shine-effect">Get Started</button>
                    </div>
                  </form>

                  <div className="slider__subscribe-list">
                    <ul>
                      <li><i className="fa-regular fa-check"></i> No credit card necessary</li>
                      <li><i className="fa-regular fa-check"></i> Cancel anytime</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="slider__thumb-wrapper-7">
                <Image className="slider__thumb-7-shape-1" src={shape_2} alt="shape" />
                <Image className="slider__thumb-7-shape-2" src={shape_3} alt="shape" />
                <Image className="slider__thumb-7-shape-3" src={shape_4} alt="shape" />
                <div className="slider__thumb-7">
                  <Image src={mainImg} alt="main img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeStartupBanner;