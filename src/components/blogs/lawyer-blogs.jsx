// external
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import dynamic from "next/dynamic";
// internal
import blog_data from "@data/blog-data";
import LawyerSingleBlog from "./single-blog/lawyer-single-blog";

// data
const blog_items = blog_data.filter((blog) => blog.home_lawyer);

// blog nav
function BlogNav() {
  return (
    <div className="blog__nav text-sm-end d-none d-sm-block">
      <button className="blog-slider-button-prev">
        <i className="fa-light fa-angle-left"></i>
      </button>
      <button className="blog-slider-button-next">
        <i className="fa-light fa-angle-right"></i>
      </button>
    </div>
  );
}

const LawyerBlogs = ({ style_2 = false }) => {

  return (
    <>
      <section
        className={`blog__area fix pb-70 ${
          style_2 ? "blog__style-2 pt-90" : "pt-100"
        }`}
      >
        <div className="container">
          {!style_2 && (
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-8">
                <div className="section__title-wrapper-4 mb-60">
                  <span className="section__title-pre-4">OUR archive</span>
                  <h3 className="section__title-4">
                    Our latest news and update.
                  </h3>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-4">
                <BlogNav />
              </div>
            </div>
          )}
          {style_2 && (
            <div className="row align-items-center">
              <div className="col-xxl-8 col-xl-8 col-lg-5 col-md-7 col-sm-8">
                <div className="tp-section-title-wrapper-4 mb-60">
                  <span className="tp-section-subtitle-2 is-uppercase subtitle-mb-2">
                    OUR archive
                  </span>
                  <h3 className="tp-section-title-2">
                    Moira baxter’s blog posts
                  </h3>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-7 col-md-5 col-sm-4">
                <BlogNav />
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog__slider">
                <div>
                  <Swiper
                    slidesPerView={3}
                    className="blog__slider-active swiper-container"
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    modules={[Navigation, Autoplay,Pagination]}
                    autoplay={{
                      delay: 3000,
                    }}
                    pagination={{
                      el:".blog-slider-4"
                    }}
                    // Navigation arrows
                    navigation={{
                      nextEl: ".blog-slider-button-next",
                      prevEl: ".blog-slider-button-prev",
                    }}
                    breakpoints={{
                      1400: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 2,
                        centeredSlides: false,
                      },
                      992: {
                        slidesPerView: 2,
                        centeredSlides: false,
                      },
                      768: {
                        slidesPerView: 2,
                        centeredSlides: false,
                      },
                      576: {
                        slidesPerView: 1,
                        centeredSlides: false,
                      },
                      0: {
                        slidesPerView: 1,
                        centeredSlides: false,
                      },
                    }}
                  >
                    {blog_items.map((blog) => (
                      <SwiperSlide key={blog.id} className="blog__item-4">
                        <LawyerSingleBlog blog={blog} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="blog-slider-4 tp-swiper-dot text-center d-sm-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(LawyerBlogs), {
  ssr: false,
});
