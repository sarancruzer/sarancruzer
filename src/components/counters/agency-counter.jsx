import Image from "next/image";
import React from "react";
// internal
import shape_1 from "@assets/img/counter/5/counter-shape-1.png";
import shape_2 from "@assets/img/counter/5/counter-shape-2.png";
import { HeartTwo, StarThree, Worker } from "@svg/index";
import CountUpContent from "../common/counter";

// counter data
const counter_data = [
  {
    delay: ".3s",
    icon: <HeartTwo />,
    title: (
      <>
        Our Global <br />
        Customer
      </>
    ),
    num: 26,
    text: "k",
    bg:'green',
  },
  {
    delay: ".5s",
    icon: <StarThree />,
    title: (
      <>
        Our Completed <br />
        Projects
      </>
    ),
    num: 10,
    text: "k",
    bg:'brown',
  },
  {
    delay: ".7s",
    icon: <Worker />,
    title: (
      <>
        Our Expert <br />
        Worker
      </>
    ),
    num: 15,
    text: "k",
    bg:'purple',
  },
];

const AgencyCounter = ({spacing='100'}) => {
  return (
    <>
      <section className={`counter__area counter__border-radius pb-${spacing} p-relative z-index-1`}>
        <div className="counter__shape">
          <Image className="counter__shape-11" src={shape_1} alt="shape" />
          <Image className="counter__shape-12" src={shape_2} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="counter__info-5 text-center mb-30">
                <p>
                  We completed <span>1500+</span> projects yearly successfully &
                  counting
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-2">
            {counter_data.map((counter, i) => {
              const { delay, icon, num, text, title,bg } = counter;
              return (
                <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    className={`counter__item-5 counter__${bg} mb-30 wow zoomIn`}
                    data-wow-delay={delay}
                    data-wow-duration="1s"
                  >
                    <div className="counter__icon-5">
                      <span>{icon}</span>
                    </div>
                    <div className="counter__content-5">
                      <h3 className="counter__title-5">{title}</h3>
                    </div>
                    <div className="counter__no">
                      <h4>
                        <span className="counter">
                          <CountUpContent number={num} text={text} />
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyCounter;
