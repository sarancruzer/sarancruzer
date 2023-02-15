import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import HomeBrandSlider from "../brands/home-brand-slider";
import ShapeLine from "@svg/shape-line";
// shape quate
import shape_quate from "@assets/img/testimonial/testimonial-quote-icon.png";
// users img
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";

const testimonial_data = [
  {
    id: 1,
    user: user_1,
    title: "Cody Fisher",
    designation: "Starbucks",
    desc: "Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
  },
  {
    id: 2,
    user: user_2,
    title: "Naim Ahmed",
    designation: "ThemePure",
    desc: "Quia dolore eos voluptas  rem  aut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.",
  },
  {
    id: 3,
    user: user_3,
    title: "Steven Paul",
    designation: "Mcdoal",
    desc: "Qui exercitationem nisi aut dolor os voluptas consequuntur est assumenda quae aut omnis unde. Iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
  },
  {
    id: 4,
    user: user_4,
    title: "Quali Mac",
    designation: "Suddly",
    desc: "vero iure rem quia dolore voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at  aut voluptas commodi est aliquid repellat.",
  },
];

const HomeTestimonial = ({ element_style = false }) => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[]);
  return (
    <>
      <section
        className={`testimonial__area ${
          element_style ? "pt-120 pb-120" : "pt-120 pb-60"
        } wow fadeInUp`}
        data-wow-delay=".3s"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="testimonial__inner p-relative pt-70 purple-bg">
            <div className="testimonial__shape">
              <Image
                className="testimonial__shape-quote"
                src={shape_quate}
                alt="shape"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-9 col-lg-10 col-11">
                <div className="testimonial__wrapper">
                  <div className="section__title-wrapper text-center">
                    <span className="section__title-pre section__title-pre-1-2">
                      Some of Our {"Customer's"} Words
                    </span>
                    <h3 className="section__title section__title-1-2">
                      <span className="section__title-highlight">
                        Customers <ShapeLine />{" "}
                      </span>
                      love the ease and simplicity
                    </h3>
                  </div>

                  <div className="testimonial__slider pb-50">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      className="testimonial__slider-active pt-45 pb-40 swiper-container"
                      loop={loop}
                      modules={[Pagination]}
                      pagination={{
                        el: ".testimonial-slider-dot",
                        clickable: true,
                      }}
                      breakpoints={{
                        1200: {
                          slidesPerView: 1,
                        },
                        992: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 1,
                        },
                        576: {
                          slidesPerView: 1,
                        },
                        0: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      {testimonial_data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="testimonial__item">
                            <div className="row align-items-center">
                              <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="testimonial__avater d-flex align-items-center">
                                  <div className="testimonial__avater-thumb mr-15">
                                    <Image src={item.user} alt="user" />
                                  </div>
                                  <div className="testimonial__avater-info">
                                    <h3 className="testimonial__avater-title">
                                      {item.title}
                                    </h3>
                                    <span className="testimonial__avater-designation">
                                      {item.designation}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="testimonial__content">
                                  <p>{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="testimonial-slider-dot tp-swiper-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!element_style && (
          <div className="container">
            <div className="brand__inner purple-bg">
              <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-9 col-xl-10 col-11">
                  <div className="brand__area">
                    <div className="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start">
                      <h3 className="brand__title">Global Exparts: </h3>
                      <HomeBrandSlider />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomeTestimonial;
