import React from "react";
import Link from "next/link";
// internal
import { NextArrow, PrevArrow } from "@svg/index";

const PostNavigation = () => {
  return (
    <div className="postbox__more-navigation white-bg d-none d-md-flex justify-content-between flex-wrap mb-40 ">
      <div className="postbox__more-left d-flex align-items-center">
        <div className="postbox__more-icon">
          <Link href="/blog-details">
            <PrevArrow />
          </Link>
        </div>
        <div className="postbox__more-content">
          <p>Previous Article</p>
          <h4>
            <Link href="/blog-details">Traveling Solo Is Awesome</Link>
          </h4>
        </div>
      </div>
      <div className="postbox__more-right d-flex align-items-center">
        <div className="postbox__more-content">
          <p>Next Article</p>
          <h4>
            <Link href="/blog-details">A Beautiful Sunday Morning</Link>
          </h4>
        </div>
        <div className="postbox__more-icon">
          <Link href="/blog-details">
            <NextArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;
