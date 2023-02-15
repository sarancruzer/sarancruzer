// external
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import dynamic from "next/dynamic";
// internal
import bg from "@assets/img/testimonial/4/testimonial-bg.jpg";
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import Quete from "@svg/quete";

const testimonial_data = [
  {
    userImg: user_1,
    ratings: [1, 2, 3, 4, 5],
    desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
    name: "Joss Sticks",
    title: "CEO at Fast Ventures",
  },
  {
    userImg: user_2,
    ratings: [1, 2, 3, 4],
    desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
    name: "Naim Ahmed",
    title: "Developer ThemePure",
  },
  {
    userImg: user_3,
    ratings: [1, 2, 3, 4, 5],
    desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
    name: "Steven Smith",
    title: "MD at Stark Ltd.",
  },
];

const LawyerTestimonial = () => {
  return (
    <>
      <section
        className="testimonial__area pt-110 pb-120 black-bg include-bg p-relative z-index-1 jarallax"
        data-overlay="dark"
        data-overlay-opacity="6"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="section__title-wrapper-4 mb-50">
                <span className="section__title-pre-4 section__title-pre-4-white">
                  TESTIMONIALS
                </span>
                <h3 className="section__title-4 section__title-4-white">
                  What our client say about Us
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="testimonial__slider-4">
                <div className="testimonial__slider-active-4 swiper-container">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  navigation={{
                    nextEl:".testimonial-4-button-next",
                    prevEl:".testimonial-4-button-prev",
                  }}
                  modules={[Navigation]}
                >
                  {testimonial_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="testimonial__item-4 d-sm-flex align-items-center"
                    >
                      <div className="testimonial__avater-thumb-4">
                        <Image src={item.userImg} alt="user img" />
                      </div>
                      <div className="testimonial__content-4">
                        <div className="testimonial__icon">
                          <span>
                            <Quete />
                          </span>
                        </div>
                        <div className="testimonial__rating">
                          {item.ratings.map((r) => (
                            <a key={r} href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          ))}
                        </div>
                        <p>{item.desc}</p>
                        <div className="testimonial__avater-info-4">
                          <h4 className="testimonial__avater-title-4">
                            {item.name}
                          </h4>
                          <span className="testimonial__avater-designation-4">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2">
              <div className="testimonial__slider-nav-4 d-flex flex-lg-column">
                <button type="button" className="testimonial-4-button-prev">
                  <i className="fa-regular fa-angle-left"></i>
                </button>
                <button type="button" className="testimonial-4-button-next">
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(LawyerTestimonial), {
  ssr: false,
});
