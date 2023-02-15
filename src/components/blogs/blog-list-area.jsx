import React from "react";
// internal
import ShapeLine from "@svg/shape-line";
import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import Pagination from "@ui/Pagination";
import blog_data from "@data/blog-data";
import SingleListBlog from "./single-blog/single-list-blog";

// blog items
const blog_items = blog_data
  .filter((blog) => blog.blog_grid)
  .filter((blog) => !blog.blog_quote)
  .slice(0, 6);

const BlogListArea = () => {
  return (
    <section className="blog__list grey-bg-4 pt-90 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper section-title-sm mb-60">
              <h3 className="section__title">
                Our latest{" "}
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
              <div className="col-xl-12">
                <div className="blog__list-item-wrapper">
                  {blog_items.map((blog) => (
                    <SingleListBlog key={blog.id} {...blog} />
                  ))}
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="tp-pagination mt-30">
                  <Pagination url='blog' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListArea;
