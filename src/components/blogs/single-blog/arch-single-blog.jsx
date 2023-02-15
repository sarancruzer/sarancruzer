import Link from "next/link";
import React from "react";

const ArchSingleBlog = ({ blog }) => {
  const { img, tag, category, date, title } = blog || {};
  return (
    <div className="blog__item-8 transition-3 p-relative fix">
      <div
        className="blog__thumb-8 transition-3"
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>
      <div className="blog__tag-8">
        <span>
          <a href="#">{tag}</a>
        </span>
      </div>
      <div className="blog__content-8">
        <div className="blog__meta-8">
          <span className="blog-category">
            <a href="#">{category}</a>
          </span>
          <span>{date}</span>
        </div>
        <h3 className="blog__title-8">
          <Link href="/blog-details">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default ArchSingleBlog;
