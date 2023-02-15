import React from "react";
// internal
import { Dots, NextArrow, PrevArrow } from "@svg/index";
import Link from "next/link";

const MoreNavigationTwo = () => {
  return (
    <div className="postbox__more-navigation postbox__more-navigation-2 grey-bg-7 d-none d-sm-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
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
          </div>
          <div className="col-md-2">
            <div className="postbox__more-menu text-center">
              <Link href="/blog-masonry">
                <span>
                  <Dots />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="postbox__more-right d-flex align-items-center justify-content-end">
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
        </div>
      </div>
    </div>
  );
};

export default MoreNavigationTwo;
