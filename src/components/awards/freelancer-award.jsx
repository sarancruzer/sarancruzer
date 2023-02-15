import React from "react";
import Link from "next/link";
// internal
import { AwardFour, AwardOne, AwardThree, AwardTwo } from "@svg/index";

const award_data = [
  {
    delay: ".3s",
    icon: <AwardOne />,
    title: "Dribbble design of the week",
    subtitle: "Cartier / 2022",
  },
  {
    delay: ".5s",
    icon: <AwardTwo />,
    title: "Awwwards site of the day",
    subtitle: "Cartier / 2022",
  },
  {
    delay: ".7s",
    icon: <AwardThree />,
    title: "Envato market of the week",
    subtitle: "Cartier / 2022",
  },
  {
    delay: ".9s",
    icon: <AwardFour />,
    title: "Dribbble design of the day",
    subtitle: "Cartier / 2022",
  },
];

const FreelancerAward = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`award__area ${
          element_style ? "pt-110 pb-90" : "pt-145 pb-160"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              {!element_style && (
                <div className="section__title-wrapper-2 text-center mb-60">
                  <span className="section__title-pre-2">My Awards</span>
                  <h3 className="section__title-2">My Awards</h3>
                  <p>At vero eos censes aut reiciendis voluptatibus maiores.</p>
                </div>
              )}
              {element_style && (
                <div className="tp-section-wrapper-3 mb-60 text-center">
                  <span className="tp-section-subtitle-3">
                    Minimal &amp; Clean Design
                  </span>
                  <h3 className="tp-section-title-3">Bordered Icon Box 2</h3>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            {award_data.map((award, i) => (
              <div key={i} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div
                  className="award__item white-bg p-relative mb-30 transition-3 wow fadeInUp"
                  data-wow-delay={award.delay}
                  data-wow-duration="1s"
                >
                  <div className="award__icon">
                    <span>{award.icon}</span>
                  </div>
                  <div className="award__content">
                    <h3 className="award__title">
                      <Link href="/portfolio-details-list">{award.title}</Link>
                    </h3>
                    <p>{award.subtitle}</p>
                    <div className="award__btn">
                      <Link
                        href="/portfolio-details-list"
                        className="tp-btn-border-green"
                      >
                        View Project
                      </Link>
                    </div>
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

export default FreelancerAward;
