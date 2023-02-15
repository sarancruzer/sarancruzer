import Image from "next/image";
import React from "react";
import Link from "next/link";
// internal
import Calender from "@svg/calender";
import Comment from "@svg/comment";

const LawyerSingleBlog = ({ blog }) => {
  const {
    id,
    tag,
    img,
    title,
    date,
    author_img,
    author_name,
    sm_text,
    comment,
  } = blog || {};

  return (
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-6">
        <div className="blog__thumb-4 m-img">
          <Link href="/blog-details">
            <Image
              src={img}
              alt="blog image"
              priority
            />
          </Link>
        </div>
      </div>
      <div className="col-lg-7 col-md-7 col-sm-6">
        <div className="blog__content-4">
          <div className="blog__tag-4">
            <a href="#">{tag}</a>
          </div>
          <h3 className="blog__title-4">
            <Link href="/blog-details">{title}</Link>
          </h3>
          <p>{sm_text}</p>

          <div className="blog__author d-flex align-items-center mb-30">
            <div className="blog__author-thumb">
              <a href="#">
                <Image src={author_img} alt="user" />
              </a>
            </div>
            <div className="blog__author-content">
              <h3 className="blog__author-title">
                <a href="#">{author_name}</a>
              </h3>
            </div>
          </div>

          <div className="blog__meta-4 d-flex align-items-center justify-content-between">
            <span>
              <Calender /> {date}
            </span>
            <span>
              <Comment /> {comment} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSingleBlog;
