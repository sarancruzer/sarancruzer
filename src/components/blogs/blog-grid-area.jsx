import React from "react";
// internal
import blog_data from "@data/blog-data";
import SingleGridItem from "./single-blog/single-grid-item";
import Pagination from "@ui/Pagination";
import {ShapeLine} from "@svg/index";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid);

const BlogGridArea = () => {
  return (
    <>
      <section className="blog__grid grey-bg-4 pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper section-title-sm mb-60">
                <h3 className="section__title">
                  Our latest
                  <span className="section__title-highlight">
                    articles
                    <ShapeLine />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_items.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
              >
                <SingleGridItem {...item} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-pagination mt-20">
                <Pagination url='blog' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;
