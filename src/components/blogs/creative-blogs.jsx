import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import HighlightShapeFour from "@svg/highlight-shape-4";
import blog_data from "@data/blog-data";
import CreativeSingleBlog from "./single-blog/creative-single-blog";
// data
const blog_items = blog_data.filter((blog) => blog.home_creative);

const CreativeBlogs = () => {
  return (
    <>
      <section className="blog__area pt-45 pb-140">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7">
              <div className="section__title-wrapper-6 mb-60">
                <h3 className="section__title-6">
                  New and Latest <br />
                  <span className="section__title-6-highlight">
                    {" "}
                    insights.
                    <HighlightShapeFour />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-5">
              <div className="blog__more-6 text-md-end mb-70">
                <Link
                  href="blog-grid-2"
                  className="tp-btn-blue-2 tp-link-btn-3"
                >
                  See all
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              {blog_items.map((blog) => (
                <CreativeSingleBlog key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeBlogs;
