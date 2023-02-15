import Image from "next/image";
import Link from "next/link";
import React from "react";
// internal
import icon from "@assets/img/services/9/services-icon-shape.png";

const SinglePersonalPortSerItem = ({ item, style_2 }) => {
  return (
    <div
      className={`services__item-9 ${
        style_2 ? "services__item-style-2" : ""
      } mb-30 transition-3`}
    >
      <div className="services__item-9-top d-flex align-items-start justify-content-between">
        <div className="services__icon-9">
          <span>
            {item.icon}
            <Image src={icon} alt="icon" />
          </span>
        </div>
        <div className="services__btn-9">
          <Link href="/service-details">
            <i className="fa-light fa-arrow-up-right"></i>
          </Link>
        </div>
      </div>
      <div className="services__content-9">
        <span className="services-project">{item.project} Projects</span>
        <h3 className="services__title-9">
          <Link href="/service-details">{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SinglePersonalPortSerItem;
