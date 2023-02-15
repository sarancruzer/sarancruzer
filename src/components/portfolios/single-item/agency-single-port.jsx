import Link from "next/link";
import React from "react";

const AgencySinglePort = ({item,index,handleImagePopup}) => {
  return (
    <div
      className="portfolio__item-5 wow slideInDown"
      data-wow-delay={item.delay}
      data-wow-duration="1s"
    >
      <div
        className="portfolio__thumb-5"
        style={{ backgroundImage: `url(${item.img.src})` }}
      ></div>
      <div className="portfolio__content-5">
        <h3 className="portfolio__title-5">
          <Link href="/portfolio-details">{item.title}</Link>
        </h3>
        <div className="portfolio__tag-5">
          <a href="#">{item.tag}</a>
        </div>
      </div>
      <div className="portfolio__view-5">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => handleImagePopup(index)}
          className="portfolio-plus-btn popup-image"
        >
          <i className="fa-solid fa-plus"></i>
        </a>
      </div>
    </div>
  );
};

export default AgencySinglePort;
