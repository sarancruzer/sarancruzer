import Link from "next/link";
import React from "react";

const HomeSinglePort = ({item}) => {
  return (
    <div
      className="portfolio__item mb-30 fix transition-3 wow fadeInUp"
      data-wow-delay={item.delay}
      data-wow-duration="1s"
    >
      <div
        className="portfolio__thumb include-bg"
        style={{ backgroundImage: `url(${item.bg.src})` }}
      ></div>
      <div className="portfolio__content">
        <div className="portfolio__tag">
          <span>
            <a href="#">{item.tag}</a>
          </span>
        </div>
        <h3 className="portfolio__title">
          <Link href="/portfolio-details">{item.title}</Link>
        </h3>
      </div>
      <div className="portfolio__text">
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default HomeSinglePort;
