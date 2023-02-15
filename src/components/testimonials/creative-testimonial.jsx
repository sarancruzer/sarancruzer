import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dynamic from "next/dynamic";
// internal
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";
import HighlightShapeFour from "@svg/highlight-shape-4";
import CreativeSingleTesti from "./single-testimonial/creative-single-testi";

// data
export const testimonial_data = [
  {
    id: 1,
    ratings: [1, 2, 3, 4, 5],
    desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
    user: user_1,
    name: "Rodney Artichoke",
    designation: "Manager",
  },
  {
    id: 2,
    ratings: [1, 2, 3, 4, 5],
    desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
    user: user_2,
    name: "Lurch Schpellchek",
    designation: "Developer",
  },
  {
    id: 3,
    ratings: [1, 2, 3, 4],
    desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
    user: user_3,
    name: "Pelican Steve",
    designation: "UI Designer",
  },
  {
    id: 4,
    ratings: [1, 2, 3, 4, 5],
    desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
    user: user_4,
    name: "Nathaneal Down",
    designation: "Supporter",
  },
  {
    id: 5,
    ratings: [1, 2, 3, 4, 5],
    desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
    user: user_2,
    name: "Lurch Schpellchek",
    designation: "Developer",
  },
];


const CreativeTestimonial = () => {
  return (
    <>
      <section className="testimonial__area pt-110 grey-bg-7 fix">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-9 col-lg-9 col-md-9">
              <div className="section__title-wrapper-6 mb-60">
                <h3 className="section__title-6">
                  Excellent Service Obviously Important{" "}
                  <span className="section__title-6-highlight">
                    {" "}
                    Feedback.
                    <HighlightShapeFour />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-3">
              <div className="testimonial__slider-arrow-6 text-md-end  mb-65">
                <button className="testimonial-6-button-prev">
                  <i className="fa-regular fa-chevron-left"></i>
                </button>
                <button className="testimonial-6-button-next">
                  <i className="fa-regular fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="testimonial__slider-6 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <Swiper
                  className="testimonial__slider-active-6 swiper-container"
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  modules={[Navigation]}
                  breakpoints={{
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  navigation={{
                    nextEl: ".testimonial-6-button-next",
                    prevEl: ".testimonial-6-button-prev",
                  }}
                >
                  {testimonial_data.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="testimonial__item-6 transition-3 mb-75"
                    >
                      <CreativeSingleTesti item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(CreativeTestimonial), { ssr: false });
