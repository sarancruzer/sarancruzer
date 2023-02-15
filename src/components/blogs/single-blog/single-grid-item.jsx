import React from "react";
import Image from "next/image";
// internal
import { QuoteTwo, EyeTwo, CommentThree, DateTwo } from "@svg/index";
import Link from "next/link";

const SingleGridItem = ({
  id,
  img,
  tag,
  date,
  title,
  sm_desc,
  author_img,
  author_name,
  comments,
  watch,
  blog_quote,
  masonry = false,
}) => {
  return (
    <React.Fragment>
      {!blog_quote && (
        <div
          className={`blog__grid-item ${masonry ? "blog__masonary" : ""} ${
            !img ? "no-img" : ""
          }`}
        >
          <div className="blog__item-10 white-bg transition-3 mb-30 fix">
            <div className="blog__thumb-10 w-img fix">
              {img && (
                <Link href={`blog-details/${id}`}>
                  <Image
                    src={img}
                    alt="blog img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Link>
              )}
              <div className="blog__tag-10">
                <a href="#">{tag}</a>
              </div>
            </div>
            <div className="blog__content-10">
              <div className="blog__content-10-top">
                <div className="blog__meta-10-wrapper d-flex align-items-center">
                  <div className="blog__meta-10 has-date">
                    <span>
                      <DateTwo /> {date}
                    </span>
                  </div>
                </div>
                <h3 className="blog__title-10">
                  <Link href={`blog-details/${id}`}>{title}</Link>
                </h3>

                <p>{sm_desc}...</p>
              </div>
              <div className="blog__content-10-bottom d-flex align-items-center justify-content-between">
                <div className="blog__meta-author-10 d-flex align-items-center">
                  <div className="blog__meta-author-thumb-10">
                    <a href="#">
                      <Image src={author_img} alt="author" />
                    </a>
                  </div>
                  <div className="blog__meta-author-content-10">
                    <span>
                      By <a href="#">{author_name}</a>
                    </span>
                  </div>
                </div>
                <div className="blog__meta-10 blog-meta-10-2">
                  <span>
                    <CommentThree /> {comments}
                  </span>
                  <span>
                    <EyeTwo /> {watch}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {blog_quote && (
        <div className={`${masonry ? "blog__grid-item blog__masonary" : ""}`}>
          <div className="blog__grid-quote mb-30">
            <div className="blog__grid-quote-icon">
              <span>
                <QuoteTwo />
              </span>
            </div>
            <div className="blog__grid-quote-content">
              <span>{title}</span>
              <p>{sm_desc}...</p>
              <cite>{author_name}</cite>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleGridItem;
