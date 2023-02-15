import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// internal
import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import blog_data from "@data/blog-data";
import {CommentThree, DateTwo, NextArrowTwo, PrevArrowTwo, QuoteTwo, UserTwo} from "@svg/index";
import SingleBlogPostbox from "./single-blog/single-blog-postbox";
import Pagination from "@ui/Pagination";

// blog item
const blog_items = blog_data.filter((blog) => blog.blog_post_box);

const BlogPostboxArea = () => {
  return (
    <>
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                {blog_items.map((blog) => (
                  <SingleBlogPostbox key={blog.id} blog={blog} />
                ))}
                <div className="tp-pagination tp-pagination-style-2 mt-20">
                  <Pagination url='blog'/>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              {/* sidebar start */}
              <BlogSidebar />
              {/* sidebar end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostboxArea;
