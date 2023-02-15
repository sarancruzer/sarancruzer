import Image from "next/image";
import Link from "next/link";
import React from "react";

const LawyerSinglePortfolio = ({item}) => {
  const {delay,bg,price,title,text} = item || {};
  return (
    <div
      className="case__item mb-50 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="case__thumb w-img fix">
        <Image src={bg} alt="img" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="case__content transition-3">
        <div className="case__price">
          <span>${price}</span>
        </div>
        <h3 className="case__title">
          <Link href="/portfolio-details">{title}</Link>
        </h3>
        <p>{text}</p>
        <div className="case__btn">
          <Link href="/portfolio-details" className="tp-btn-border-brown-sm">
            Read More
            <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyerSinglePortfolio;
