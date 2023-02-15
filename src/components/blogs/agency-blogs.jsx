import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/blog/5/shape/shape-1.png";
import shape_2 from "@assets/img/blog/5/shape/shape-2.png";
import shape_3 from "@assets/img/blog/5/shape/shape-3.png";
import shape_4 from "@assets/img/blog/5/shape/shape-4.png";
import blog_data from "@data/blog-data";
import AgencySingleBlog from "./single-blog/agency-single-blog";

// blog items
const blog_items = blog_data.filter((item) => item.home_agency);

const AgencyBlogs = () => {
  return (
    <>
      <section className="blog__area p-relative z-index-1 pt-150 pb-130">
        <div className="blog__shape">
          <Image className="blog__shape-1" src={shape_1} alt="shape" />
          <Image className="blog__shape-2" src={shape_2} alt="shape" />
          <Image className="blog__shape-3" src={shape_3} alt="shape" />
          <Image className="blog__shape-4" src={shape_4} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-5 mb-50 text-center">
                <span className="section__title-pre-5">Our Blogs</span>
                <h3 className="section__title-5">Read the latest news.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_items.map((blog, i) => (
              <div
                key={blog.id}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
              >
                <AgencySingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div
                className="blog__more-5 mt-30 text-center wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <Link href="/blog-grid" className="tp-btn-round">
                  View our all News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyBlogs;
