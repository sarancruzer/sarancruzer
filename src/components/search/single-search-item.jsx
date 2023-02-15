import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { EyeTwo, CommentThree, DateTwo, ArrowRightTwo } from "@svg/index";

const SingleSearchItem = ({
  tag,
  date,
  title,
  sm_desc,
  author_img,
  author_name,
  comments,
  watch,
}) => {
  return (
    <div className="search__blog-item mb-30">
      <div className="search__blog-content">
        <div className="search__blog-meta-wrapper d-flex flex-wrap align-items-center">
          <div className="search__blog-tag mr-15">
            <a href="#">{tag}</a>
          </div>
          <div className="search__blog-meta">
            <span>
              <DateTwo /> {date}
            </span>
          </div>
        </div>
        <h3 className="search__blog-title">
          <Link href="/blog-details">{title}</Link>
        </h3>
        <p>{sm_desc}</p>

        <div className="search__blog-bottom d-flex flex-wrap align-items-center mb-20">
          <div className="search__blog-meta-author d-flex align-items-center mr-45">
            <div className="search__blog-meta-author-thumb">
              <a href="#">
                <Image src={author_img} alt="author" />
              </a>
            </div>
            <div className="search__blog-meta-author-content">
              By <a href="#">{author_name}</a>
            </div>
          </div>
          <div className="search__blog-meta">
            <span>
              <CommentThree /> {comments}
            </span>
            <span>
              <EyeTwo /> {watch}
            </span>
          </div>
        </div>
        <div className="search__blog-btn">
          <Link href="/blog-details" className="tp-btn-border">
            Read More
            <span>
              <ArrowRightTwo />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSearchItem;
