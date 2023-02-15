import React from "react";
// internal
import SingleBlogPostbox from "@components/blogs/single-blog/single-blog-postbox";
import blog_data from "@data/blog-data";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_post_box).slice(0, 2);

const BlogStandardEl = () => {
  return (
    <div className="blog__area pt-110 box-plr-55 pb-15">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Blog Standard</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {blog_items.map((blog, i) => (
            <div key={i} className="col-lg-6">
              <SingleBlogPostbox blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStandardEl;
