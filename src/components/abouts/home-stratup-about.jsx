import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/about/7/about-shape-1.png";
import aboutImg from "@assets/img/about/7/about-img-1.jpg";
import HighlightShapeThree from "@svg/highlight-shape-3";

// single about list item
function SingleAboutListItem({title,subtitle}) {
  return (
    <div className="about__list-item d-flex align-items-start">
      <div className="about__list-icon">
        <span></span>
      </div>
      <div className="about__list-content">
        <h3 className="about__list-title">
          {title}
        </h3>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

const HomeStartUpAbout = () => {
  return (
    <>
      <section className="about__area p-relative z-index-1 pt-120 pb-140">
        <div className="about__shape">
          <Image className="about__shape-7" src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="about__thumb-wrapper-7 pr-70">
                <div className="about__thumb-7">
                  <Image src={aboutImg} alt="about img" />
                </div>
                <div className="about__analysis">
                  <div className="about__analysis-top">
                    <div className="about__analysis-icon">
                      <span>
                        <i className="fa-solid fa-arrow-trend-up"></i>
                      </span>
                      <p>Data Analysis</p>
                    </div>
                    <div className="about__analysis-content">
                      <div className="about__analysis-item">
                        <h4>$48,662.44</h4>
                        <p>Your monthly saving</p>
                      </div>
                      <div className="about__analysis-item-2">
                        <h4>$2,485,166.42</h4>
                        <p>Your total saving</p>
                      </div>
                      <div className="about__analysis-discount">
                        <span>-32.56%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div className="about__wrapper-7 pt-35">
                <div className="section__title-wrapper-7 mb-40">
                  <span className="section__title-pre-7">Who we Are</span>
                  <h3 className="section__title-7">
                    We know your problem & {" "}
                    <span className="section__title-7-highlight">
                      solution
                      <HighlightShapeThree />
                    </span>
                  </h3>
                  <p>
                    Understand the growth of your product and direct <br /> it
                    better, with Harry.
                  </p>
                </div>
                <div className="about__list about__list-counter">
                  <SingleAboutListItem title='See the action in live' subtitle='Our consultants specialise in one of five practice development.' />
                  <SingleAboutListItem title='See the action in live' subtitle='Our consultants specialise in one of five practice development.' />
                </div>
                <div className="about__btn-7">
                  <Link
                    href="/about"
                    className="tp-btnr-border tp-btn-shine-effect tp-link-btn-3"
                  >
                    More About us
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
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

export default HomeStartUpAbout;
