import React from "react";
import Image from "next/image";
import Link from "next/link";

const FreelancerSingleBlog = ({item}) => {
  return (
    <div
      className="blog__item-2 white-bg transition-3 mb-30 wow fadeInUp"
      data-wow-delay={item.delay}
      data-wow-duration="1s"
    >
      <div className="blog__thumb-2 p-relative w-img fix">
        <Link href="/blog-details">
          <Image
            src={item.img}
            alt="blog image"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="blog__meta-2">
          <h4>
            {item.date.split(" ")[0]} <span>{item.date.split(" ")[1]}</span>
          </h4>
        </div>
      </div>
      <div className="blog__content-2">
        <div className="blog__tag-2">
          <a href="#">{item.tag}</a>
        </div>
        <h3 className="blog__title-2">
          <Link href="/blog-details">{item.title}</Link>
        </h3>
        <p>{item.sm_text}</p>
        <div className="blog__btn">
          <Link href="/blog-details" className="tp-btn-border-green-2">
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSingleBlog;
