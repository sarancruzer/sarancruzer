import React from "react";
// internal
import blog_data from "@data/blog-data";
import SingleGridItem from "@components/blogs/single-blog/single-grid-item";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 3);

const BlogGridBorderEl = () => {
  return (
    <div className="blog__area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Blog Grid Bordered</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_items.map((blog, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
              <SingleGridItem {...blog} masonry={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGridBorderEl;
