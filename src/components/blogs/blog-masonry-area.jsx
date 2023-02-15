import LoadMoreBtn from "@components/load-more-btn";
import blog_data from "@data/blog-data";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SingleGridItem from "./single-blog/single-grid-item";

// blog masonry items
const masonry_items = blog_data.filter((blog) => blog.blog_masonry);

const BlogMasonryArea = () => {
  return (
    <section className="blog__masonary pb-120">
      <div className="container-fluid gx-xl-5 gx-3 blog-mas-gap">
        <div className="row">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 2, 1200: 3,1400:5 }}>
            <Masonry gutter="25px">
              {masonry_items.map((blog) => (
                  <SingleGridItem key={blog.id} {...blog} masonry={true} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <LoadMoreBtn df_className={"blog__load-more mt-40"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMasonryArea;
