import Image from "next/image";
import Link from "next/link";
import React from "react";

const AgencySingleBlog = ({ blog }) => {
  const { id, img, date, tag, comment, delay, sm_text, title } = blog;
  return (
    <div
      className="blog__item-5 mb-30 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-12">
          <div className="blog__thumb-5">
            <Link href="/blog-details">
              <Image src={img} alt="blog image" />
            </Link>
          </div>
        </div>
        <div className="col-xl-7 col-lg-12">
          <div className="blog__content-5">
            <div className="blog__tag-5">
              <a href="#">{tag}</a>
            </div>
            <h3 className="blog__title-5">
              <Link href="/blog-details">{title}</Link>
            </h3>
            <div className="blog__meta-5">
              <span>
                <i className="fa-regular fa-clock"></i>
                {date}
              </span>
              <span>
                <i className="fa-regular fa-comment"></i> {comment} Comment
              </span>
            </div>
            <p>{sm_text}</p>

            <div className="blog__btn-5">
              <Link href="/blog-details" className="tp-link-btn-circle">
                Read More
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySingleBlog;
