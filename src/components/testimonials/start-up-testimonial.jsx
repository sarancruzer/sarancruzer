import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import HighlightShapeThree from "@svg/highlight-shape-3";
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";

// testimonial data
const testimonial_data = [
  {
    ratings: [1, 2, 3, 4, 5],
    title: "“Seriously amazing!”",
    subtitle:
      "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
    user: user_1,
    name: "Sarah Smith",
    designation: "Lead Developer, Google",
  },
  {
    ratings: [1, 2, 3, 4, 5],
    title: "“This office almost relaxing”",
    subtitle:
      "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
    user: user_2,
    name: "Eleanor Pena",
    designation: "COO, Globex Corporation",
  },
  {
    ratings: [1, 2, 3, 4, 5],
    title: "Awesome Support",
    subtitle:
      "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
    user: user_3,
    name: "Carla Wildner",
    designation: "Design at Mailchimp",
  },
  {
    ratings: [1, 2, 3, 4, 5],
    title: "“Seriously amazing!”",
    subtitle:
      "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
    user: user_4,
    name: "Naim Ahmed",
    designation: "Developer at Theme_Pure",
  },
];

const StartUpTestimonial = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <>
      <section className="testimonial__area green-light-bg-4 pt-110 pb-95 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9">
              <div className="section__title-wrapper-7 text-center mb-60">
                <span className="section__title-pre-7">Client Feedback</span>
                <h3 className="section__title-7">
                  Trusted by global {" "}
                  <span className="section__title-7-highlight">
                    companies.
                    <HighlightShapeThree />
                  </span>
                </h3>

                <p>
                  Install any demo or template with a single click. You can mix
                  and <br /> match all the demos.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__slider-7">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  className="testimonial__active-7 swiper-container"
                  loop={loop}
                  pagination={{
                    el: ".testimonial-slider-dot-7",
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  breakpoints={{
                    1200: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {testimonial_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="testimonial__item-7 mb-80 transition-3 white-bg"
                    >
                      <div>
                        <div className="testimonial__rating testimonial__rating-7">
                          {item.ratings.map((r) => (
                            <a href="#" key={r}>
                              <i className="fa-solid fa-star"></i>
                            </a>
                          ))}
                        </div>
                        <div className="testimonial__content-7">
                          <h3 className="testimonial__heading">{item.title}</h3>
                          <p>{item.subtitle}</p>
                        </div>
                        <div className="testimonial__avater-6 d-flex align-items-center">
                          <div className="testimonial__avater-thumb-7">
                            <Image src={item.user} alt="" />
                          </div>
                          <div className="testimonial__avater-info-7">
                            <h3 className="testimonial__avater-title-7">
                              {item.name}
                            </h3>
                            <span className="testimonial__avater-designation-7">
                              {item.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="testimonial-slider-dot-7 tp-swiper-dot text-center mt--30 p-relative z-index-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpTestimonial;
