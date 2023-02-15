import React from "react";
// internal
import blog_data from "@data/blog-data";
import FreelancerSingleBlog from "./single-blog/freelancer-single-blog";

// blog_items
const blog_items = blog_data.filter((item) => item.home_freelancer);

const FreelancerBlogs = () => {
  return (
    <>
      <section className="blog__area pb-95 grey-bg-7 pt-175">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-60">
                <span className="section__title-pre-2">Articles & News</span>
                <h3 className="section__title-2">Articles & News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_items.map((item, i) => (
              <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <FreelancerSingleBlog item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelancerBlogs;
