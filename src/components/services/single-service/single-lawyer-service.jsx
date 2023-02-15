import Link from "next/link";
import React from "react";

const SingleLawyerService = ({ item }) => {
  const { id, icon, subtitle, title, bg, delay } = item || {};
  return (
    <div className="col-xxl-4 col-lg-4 col-md-6">
      <div
        className="services__item-4 mb-30 transition-3 fix wow fadeInUp"
        data-wow-delay={delay}
        data-wow-duration="1s"
      >
        <div
          className="services__thumb-4 include-bg transition-3"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="services__icon-4 mb-30 transition-3">
          <span>{icon}</span>
        </div>
        <div className="services__content-4 transition-3">
          <h4 className="services__title-4">
            <Link href="/service-details">{title}</Link>
          </h4>
          <p>{subtitle}</p>
        </div>
        <Link href="/service-details" className="services-link-btn">
          Learn More <i className="fa-regular fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default SingleLawyerService;
