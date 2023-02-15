import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";
// internal
import blog_data from "@data/blog-data";
import HighlightShapeSix from "@svg/highlight-shape-6";
import ArchSingleBlog from "./single-blog/arch-single-blog";

// blog items
const blog_items = blog_data.filter((blog) => blog.home_architecture);

const ArchBlogs = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <>
      <section className="blog__area black-bg-12 pt-110 pb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="section__title-wrapper-8 mb-70">
                <span className="section__title-pre-8">Blog & Updates</span>
                <h3 className="section__title-8">
                  Latest{" "}
                  <span className="section__title-highlight-8">
                    Articles
                    <HighlightShapeSix />
                  </span>
                  & Tips
                </h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog__more-8 text-lg-end mb-80">
                <Link href="/blog-list-sidebar" className="tp-btn-border-7">
                  View all Articles{" "}
                  <i className="fa-regular fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="blog__slider-8 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <Swiper
                  className="blog__slider-active-8 swiper-container"
                  loop={loop}
                  slidesPerView={2}
                  centeredSlides={false}
                  spaceBetween={0}
                  slidesPerGroup={2}
                  modules={[Pagination]}
                  pagination={{
                    el: ".blog-slider-dot-8",
                    clickable: true,
                  }}
                  breakpoints={{
                    992: {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    768: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    576: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                  }}
                >
                  {blog_items.map((blog) => (
                    <SwiperSlide key={blog.id}>
                      <ArchSingleBlog blog={blog} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="blog-slider-dot-8 mt-40 tp-swiper-dot tp-swiper-dot-2 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchBlogs;
