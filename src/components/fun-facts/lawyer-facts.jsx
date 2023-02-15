import React from "react";
import { Heart, Star } from "@svg/index";

const fact_data = [
  {
    delay: ".3s",
    icon: <Heart />,
    fact: "7628",
    title: "Trusted Clients",
    text: "Number Of Clients",
  },
  {
    delay: ".5s",
    icon: <Star />,
    fact: "95%",
    title: "Successful Cases",
    text: "Largest Winning Value",
  },
  {
    delay: ".7s",
    fact_banner: true,
    fact_bg: "/assets/img/counter/fact/fact-banner-bg.jpg",
    title: "17,642+",
    text: (
      <>
        Criminal Cases and <br /> Defense
      </>
    ),
  },
];

const LawyerFacts = () => {
  return (
    <>
      <section className="fact__area fact__translate">
        <div className="container">
          <div className="row gx-2 gy-2 gy-lg-0">
            {fact_data.map((item, i) => (
              <div key={i} className="col-xxl-4 col-lg-4 col-md-6">
                {!item.fact_banner && (
                  <div
                    className="fact__item white-bg d-flex align-items-center wow fadeInDown"
                    data-wow-delay={item.delay}
                    data-wow-duration="1s"
                  >
                    <div className="fact__icon">
                      <p>
                        {item.icon}
                        <span>{item.fact}</span>
                      </p>
                    </div>
                    <div className="fact__content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )}
                {item.fact_banner && (
                  <div
                    className="fact__banner fact__banner-overlay p-relative z-index-1 wow fadeInDown"
                    data-wow-delay={item.delay}
                    data-wow-duration="1s"
                  >
                    <div
                      className="fact__banner-bg include-bg"
                      style={{ backgroundImage: `url(${item.fact_bg})` }}
                    ></div>
                    <div className="fact__banner-content">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerFacts;
