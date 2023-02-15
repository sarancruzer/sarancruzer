import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/counter/7/counter-shape-1.png";
import shape_2 from "@assets/img/counter/7/counter-shape-2.png";
import shape_3 from "@assets/img/counter/7/counter-shape-3.png";
import counter_icon_shape from "@assets/img/counter/7/counter-icon-shape-1.png";
import {
  HighlightShapeThree,
  StartupCounterFour,
  StartupCounterOne,
  StartupCounterThree,
  StartupCounterTwo,
} from "@svg/index";
import CountUpContent from "@components/common/counter";

// data
const counter_data = [
  { icon: <StartupCounterOne />, num: 98, text: "%", title: "Private Office" },
  {
    icon: <StartupCounterTwo />,
    num: 10,
    text: "M+",
    title: "Coworking Desks",
  },
  {
    icon: <StartupCounterThree />,
    num: 16,
    text: "K+",
    title: "Growth in revenue",
  },
  { icon: <StartupCounterFour />, num: 84, text: "%", title: "Cups of coffee" },
];

const StartUpCounter = ({ element_style = false }) => {
  return (
    <>
      <section className="counter__area p-relative z-index-1 green-light-bg-4 pt-145 pb-110 fix">
        <div className="counter__border-animation"></div>
        {!element_style && (
          <div className="counter__shape">
            <Image className="counter__shape-13" src={shape_1} alt="shape" />
            <Image className="counter__shape-14" src={shape_2} alt="shape" />
            <Image className="counter__shape-15" src={shape_3} alt="shape" />
          </div>
        )}
        <div className="container">
          {!element_style && (
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-8 col-lg-9">
                <div className="section__title-wrapper-7 mb-60 text-center">
                  <span className="section__title-pre-7">
                    Join 0ur Community
                  </span>
                  <h3 className="section__title-7">
                    {"Qu'est-ce"} qui est inclus dans
                    <span className="section__title-7-highlight">
                      Startup Harry
                      <HighlightShapeThree />
                    </span>
                    ?
                  </h3>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <div className="row">
              <div className="col-xxl-12">
                <div className="tp-section-wrapper-3 mb-60 text-center">
                  <span className="tp-section-subtitle-3">
                    Minimal &amp; Clean Design
                  </span>
                  <h3 className="tp-section-title-3">Icon Box with counter</h3>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {counter_data.map((item, i) => (
              <div
                key={i}
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
              >
                <div className="counter__item-7 white-bg mb-30 text-center">
                  <div className="counter__icon-7">
                    <span>
                      <Image
                        className="counter__icon-7-shape"
                        src={counter_icon_shape}
                        alt="shape"
                      />
                      {item.icon}
                    </span>
                  </div>
                  <div className="counter__content-7">
                    <h4>
                      <span className="counter">
                        <CountUpContent number={item.num} text={item.text} />
                      </span>
                    </h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpCounter;
