import React from "react";

// internal
import bg from "@assets/img/counter/10/counter-shape-1.png";
import CountUpContent from "@components/common/counter";

// counter_data
const counter_data = [
  {
    delay: ".3s",
    num: 623,
    text: "k",
    title: "People lived in our city",
  },
  {
    delay: ".5s",
    num: 1820,
    text: "+",
    title: "Square kilometers region covers",
  },
  {
    delay: ".7s",
    num: 24,
    text: "%",
    title: "Private & domestic garden land",
  },
];

const PoliticianCounter = () => {
  return (
    <>
      <section className="counter__area counter__overlay-10">
        <div className="container">
          <div className="counter__inner-10">
            <div
              className="counter__inner-10-shape include-bg"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <div className="row">
              {counter_data.map((item, i) => (
                <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="counter__item-10 text-center mb-30 wow fadeInUp"
                    data-wow-delay={item.delay}
                    data-wow-duration="1s"
                  >
                    <div className="counter__content-10">
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
        </div>
      </section>
    </>
  );
};

export default PoliticianCounter;
