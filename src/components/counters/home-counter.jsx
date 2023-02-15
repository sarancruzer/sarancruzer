import React from "react";
import Image from "next/image";
// shapes
import shape_1 from "@assets/img/counter/counter-shape-1.png";
import shape_2 from "@assets/img/counter/counter-shape-2.png";
import shape_3 from "@assets/img/counter/counter-shape-3.png";
import shape_4 from "@assets/img/counter/counter-shape-4.png";
import shape_circle_1 from "@assets/img/counter/counter-shape-circle-1.png";
import shape_circle_2 from "@assets/img/counter/counter-shape-circle-2.png";
import shape_line_1 from "@assets/img/counter/counter-shape-line-1.png";
import shape_line_2 from "@assets/img/counter/counter-shape-line-2.png";
import shape_line_3 from "@assets/img/counter/counter-shape-line-3.png";
import CountUpContent from "../common/counter";

const counter_data = [
  { title: "Cups of Coffee", number: 914, text: "K" },
  { title: "Happy Clients", number: 123, text: "K" },
  { title: "Review", number: 76, text: "K" },
];

const HomeCounter = () => {
  return (
    <>
      <section className="counter__area counter__border pb-110">
        <div className="container">
          <div className="counter__inner black-bg fix">
            <div className="counter__shape">
              <Image
                className="counter__shape-1 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                src={shape_1}
                alt="shape"
              />
              <Image
                className="counter__shape-2 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".7s"
                src={shape_2}
                alt="shape"
              />
              <Image
                className="counter__shape-3 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
                src={shape_3}
                alt="shape"
              />
              <Image
                className="counter__shape-4 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.2s"
                src={shape_4}
                alt="shape"
              />
              <Image
                className="counter__shape-5 wow fadeInLeft"
                data-wow-duration="1s"
                src={shape_circle_1}
                alt="shape"
              />
              <Image
                className="counter__shape-6 wow fadeInRight"
                data-wow-duration="1s"
                src={shape_circle_2}
                alt="shape"
              />
              <Image
                className="counter__shape-7 wow fadeInUp"
                data-wow-duration="1s"
                src={shape_line_1}
                alt="shape"
              />
              <Image
                className="counter__shape-8 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                src={shape_line_2}
                alt="shape"
              />
              <Image
                className="counter__shape-9 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
                src={shape_line_3}
                alt="shape"
              />
            </div>
            <div className="row justify-content-center">
              {counter_data.map((counter, i) => (
                <div key={i} className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="counter__item">
                    <div className="counter__content">
                      <p>{counter.title}</p>
                      <h3 className="counter__title d-flex align-items-center justify-content-center">
                        +
                        <span className="counter">
                          <CountUpContent
                            number={counter.number}
                            text={counter.text}
                          />
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCounter;
