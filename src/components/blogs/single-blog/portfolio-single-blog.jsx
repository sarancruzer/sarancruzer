import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioSingleBlog = ({ blog }) => {
  const { delay, img, date, tag, title } = blog || {};
  return (
    <div
      className="blog__item-9 mb-30 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="blog__thumb-9 w-img fix">
        <Link href="/blog-details">
          <Image src={img} alt="image" style={{width:'100%',height:'100%'}} />
        </Link>
      </div>
      <div className="blog__content-9">
        <div className="blog__meta-9">
          <span>
            <a href="#">{date}</a>
          </span>
          <span>
            <a href="#">{tag}</a>
          </span>
        </div>
        <h3 className="blog__title-9">
          <Link href="/blog-details">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default PortfolioSingleBlog;
