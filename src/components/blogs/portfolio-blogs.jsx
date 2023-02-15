import React from "react";
import Link from "next/link";
// internal
import blog_data from "@data/blog-data";
import PortfolioSingleBlog from "./single-blog/portfolio-single-blog";

// blogs
const blog_items = blog_data.filter((blog) => blog.home_portfolio);

const PortfolioBlogs = () => {
  return (
    <>
      <section className="blog__area grey-bg-12 pt-115 pb-90 p-relative z-index-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
              <div className="section__title-wrapper-9 mb-65">
                <span className="section__title-pre-9">Latest blog posts</span>
                <h3 className="section__title-9">
                  What’s new? My blog and news.
                </h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
              <div className="blog__more-9 mb-85 text-md-end">
                <Link href="/blog-grid" className="tp-btn-5 ">
                  VIEW ALL POST
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_items.map((blog) => (
              <div
                key={blog.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
              >
                <PortfolioSingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioBlogs;
