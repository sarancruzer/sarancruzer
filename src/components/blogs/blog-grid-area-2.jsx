import React from "react";
// internal
import ShapeLine from "@svg/shape-line";
import SingleGridItem from "./single-blog/single-grid-item";
import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import Pagination from "@ui/Pagination";


const BlogGridAreaTwo = ({blog_items,grid_sidebar}) => {
  return (
    <section className={`blog__grid ${grid_sidebar?'grey-bg-4':''} pt-90 pb-100`}>
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
          <div className="col-lg-8">
            <div className="row">
              {blog_items.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-6 col-lg-6 col-md-6"
                >
                  <SingleGridItem {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar style_2={grid_sidebar?false:true} />
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-pagination tp-pagination-style-2 mt-20">
              <Pagination url='blog' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGridAreaTwo;
