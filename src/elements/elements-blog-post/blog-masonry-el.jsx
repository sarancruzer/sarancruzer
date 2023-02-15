import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import SingleGridItem from "@components/blogs/single-blog/single-grid-item";
import blog_data from "@data/blog-data";

// blog masonry items
const masonry_items = blog_data.filter((blog) => blog.blog_masonry).slice(0,10);

const BlogMasonryEl = () => {
  return (
    <div className="blog__masonary blog__area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Blog Masonary</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid gx-xl-5 gx-3 blog-mas-gap">
        <div className="row">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 2, 1200: 3, 1400: 5 }}
          >
            <Masonry gutter="25px">
              {masonry_items.map((blog) => (
                <SingleGridItem key={blog.id} {...blog} masonry={true} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default BlogMasonryEl;
