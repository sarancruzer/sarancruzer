import React from 'react';
import Image from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Link from "next/link";
// internal
import shape_1 from '@assets/img/slider/6/shape/slider-shape-1.png';
import shape_2 from '@assets/img/slider/6/shape/slider-shape-2.png';
import shape_3 from '@assets/img/slider/6/shape/slider-shape-3.png';
import shape_4 from '@assets/img/slider/6/shape/slider-shape-4.png';
import shape_5 from '@assets/img/slider/6/shape/slider-shape-5.png';
import shape_6 from '@assets/img/slider/6/shape/slider-shape-6.png';
import shape_7 from '@assets/img/slider/6/shape/slider-shape-7.png';
import shape_8 from '@assets/img/slider/6/shape/slider-shape-8.png';
import shape_9 from '@assets/img/slider/6/shape/slider-shape-9.png';
import shape_10 from '@assets/img/slider/6/shape/slider-shape-10.png';
import user_1 from '@assets/img/slider/6/user/slider-user-1.jpg';
import user_2 from '@assets/img/slider/6/user/slider-user-2.jpg';
import user_3 from '@assets/img/slider/6/user/slider-user-3.jpg';
import thumb_1 from '@assets/img/slider/6/slider-1.jpg';
import thumb_2 from '@assets/img/slider/6/slider-2.jpg';
import thumb_3 from '@assets/img/slider/6/slider-3.jpg';


const CreativeBanner = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <section className="slider__area slider__height-6 p-relative box-plr-6-245 d-flex align-items-center fix">
        <div className="slider__shape">
          <Image className="slider__shape-9" src={shape_1} alt="shape" />
          <Image className="slider__shape-10" src={shape_2} alt="shape" />
          <Image className="slider__shape-11" src={shape_3} alt="shape" />
          <Image className="slider__shape-12" src={shape_4} alt="shape" />
          <Image className="slider__shape-13" src={shape_5} alt="shape" />
          <Image className="slider__shape-14" src={shape_6} alt="shape" />
          <Image className="slider__shape-15" src={shape_7} alt="shape" />
          <Image className="slider__shape-16" src={shape_8} alt="shape" />
          <Image className="slider__shape-17" src={shape_9} alt="shape" />
          <Image className="slider__shape-18" src={shape_10} alt="shape" priority />
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="slider__content-6">
                <span className="slider__title-pre-6">WELCOME TO STARTUP.</span>
                <h3 className="slider__title-6">We Build Good Startups.</h3>
                <p>Elementum ipsum donec usodales porttitor mauris augue fermentum sagittis elementum.</p>

                <div className="slider__btn-6">
                  <Link href="/contact" className="tp-btn-border-5 tp-link-btn-3">
                    Get Started
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>

                <div className="slider__user">
                  <ul>
                    <li>
                      <a href="#">
                        <Image src={user_1} alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={user_2} alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image src={user_3} alt="user" />
                      </a>
                    </li>
                  </ul>
                  <p>Connect <br />More People</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
              <div className="slider__thumb-wrapper-6 mb-10 pl-40 pr-30 scene">
                
                <div className="slider__thumb-6 pl-20 one">
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                  <Image className="layer" src={thumb_1} alt="thumb image" />
                  </MouseParallaxChild>
                </div>
                
                <div className="slider__thumb-6 two">
                <MouseParallaxChild factorX={0.3} factorY={0.4}>
                  <Image className="layer" src={thumb_2} alt="thumb image" />
                  </MouseParallaxChild>
                </div>

                <div className="slider__thumb-6 three">
                <MouseParallaxChild factorX={0.5} factorY={0.6}>
                  <Image className="layer" src={thumb_3} alt="thumb image" />
                  </MouseParallaxChild>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </MouseParallaxContainer>
  );
};

export default CreativeBanner;