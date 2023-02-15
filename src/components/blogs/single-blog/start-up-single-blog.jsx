import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartUpSingleBlog = ({ blog }) => {
  const {
    id,
    img,
    date,
    comment,
    title,
    sm_text,
    author_img,
    author_name,
    tag,
    see,
  } = blog || {};
  return (
    <div className="blog__item-7 transition-3 white-bg mb-30">
      <div className="blog__thumb-7 w-img mb-25">
        <Link href={`blog-details`}>
          <Image
            src={img}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
      </div>
      <div className="blog__content-7">
        <div className="blog__content-top-7 d-flex align-items-center">
          <div className="blog__tag-7">
            <a href="#">{tag}</a>
          </div>
          <div className="blog__meta-7">
            <span>
              <i className="fa-regular fa-clock"></i> {date}{" "}
            </span>
          </div>
        </div>
        <h3 className="blog__title-7">
          <Link href={`blog-details`}>{title}</Link>
        </h3>
        <p>{sm_text}</p>
        <div className="blog__content-bottom-7 d-flex align-items-center justify-content-between">
          <div className="blog__meta-author d-flex align-items-center">
            <div className="blog__meta-author-thumb">
              <a href="#">
                <Image src={author_img} alt="user" />
              </a>
            </div>
            <div className="blog__meta-author-content">
              <span>
                By<a href="#"> {author_name}</a>
              </span>
            </div>
          </div>
          <div className="blog__meta-7">
            <span>
              <i className="fa-regular fa-comment"></i> {comment}
            </span>
            <span>
              <i className="fa-light fa-eye"></i> {see}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpSingleBlog;
