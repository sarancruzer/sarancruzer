import React from "react";
import Link from "next/link";
// internal
import { ArrowRightLong } from "@svg/index";

const CreativeSingleFeature = ({ service }) => {
  const { id, title, delay, subtitle, icon, color } = service || {};
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div
        className={`features__item ${color} transition-3 mb-30 wow fadeInUp`}
        data-wow-delay={delay}
        data-wow-duration="1s"
      >
        <div className="features__icon">
          <span>{icon}</span>
        </div>
        <div className="features__content">
          <h3 className="features__title">{title}</h3>
          <p>{subtitle}</p>
          <div className="features__btn">
            <Link href="/service-details">
              <ArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSingleFeature;
