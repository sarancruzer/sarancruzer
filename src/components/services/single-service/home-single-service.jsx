import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import service_shape_1 from "@assets/img/services/shape/services-shape-1.png";
import service_shape_2 from "@assets/img/services/shape/services-shape-2.png";

const HomeSingleService = ({ item }) => {
  return (
    <div
      className="services__item transition-3 mb-30 fix wow fadeInUp"
      data-wow-delay=".3s"
      data-wow-duration="1s"
    >
      <div className="services__shape">
        <Image
          className="services__shape-1"
          src={service_shape_1}
          alt="shape"
        />
        <Image
          className="services__shape-2"
          src={service_shape_2}
          alt="shape"
        />
      </div>
      <div className="services__item-inner">
        <div className="services__icon">
          <span>{item.icon}</span>
        </div>
        <div className="services__content">
          <h3 className="services__title">
            <Link href="/service-details">{item.title}</Link>
          </h3>
          <p>{item.subtitle}</p>
          <div className="services__btn">
            <Link href="/service-details" className="tp-btn-border">
              Explore Section <i className="fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleService;
