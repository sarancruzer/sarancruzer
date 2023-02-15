import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { EyeTwo, CommentThree, DateTwo } from "@svg/index";

const SingleListBlog = ({
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
}) => {
  return (
    <div className="blog__list-item">
      <div className="blog__item-10 white-bg transition-3 fix">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-6">
            <div className="blog__thumb-10 w-img fix">
              <Link href={`blog-details/${id}`}>
                <Image src={img} alt="blog img" />
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-6">
            <div className="blog__content-10">
              <div className="blog__content-10-top">
                <div className="blog__meta-10-wrapper d-flex align-items-center">
                  <div className="blog__tag-10">
                    <a href="#">{tag}</a>
                  </div>
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
              <div className="blog__content-10-bottom d-flex align-items-center flex-wrap">
                <div className="blog__meta-author-10 d-flex align-items-center">
                  <div className="blog__meta-author-thumb-10">
                    <a href="#">
                      <Image src={author_img} alt="author img" />
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
      </div>
    </div>
  );
};

export default SingleListBlog;
