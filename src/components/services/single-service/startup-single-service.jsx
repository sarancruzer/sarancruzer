import Link from "next/link";
import React from "react";

const StartupSingleService = ({ item }) => {
  const { delay, icon, title, subtitle } = item || {};
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div
        className="services__item-7 text-center mb-60 wow fadeInUp"
        data-wow-delay={delay}
        data-wow-duration="1s"
      >
        <div className="services__icon-7">
          <span>{icon}</span>
        </div>
        <div className="services__content-7">
          <h3 className="services__title-7">
            <Link href="/service-details">{title}</Link>
          </h3>
          <p>{subtitle}</p>

          <div className="services__btn-7">
            <Link href="/service-details" className="tp-link-btn-3">
              Learn More
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupSingleService;
