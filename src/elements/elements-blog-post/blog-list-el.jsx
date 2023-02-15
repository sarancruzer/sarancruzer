import React from "react";
// internal
import blog_data from "@data/blog-data";
import SingleListBlog from "@components/blogs/single-blog/single-list-blog";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 2);

const BlogListEl = () => {
  return (
    <div className="blog__area pt-110 pb-90 grey-bg-4">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Blog List Classic</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {blog_items.map((blog, i) => (
              <SingleListBlog key={i} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListEl;
