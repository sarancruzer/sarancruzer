import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import shape_1 from "@assets/img/testimonial/10/testimonial-shape-1.png";
import shape_2 from "@assets/img/testimonial/10/testimonial-shape-2.png";
import shape_3 from "@assets/img/testimonial/10/testimonial-shape-3.png";

// data
const testimonial_data = [
  {
    desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
    link_text: "https://t.co/7v3HQbZqwZ",
    link: "#",
    name: "Jason Smith,",
    title: "President",
    date: "July 17, 2022",
  },
  {
    desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
    link_text: "https://t.co/7v3HQbZqwZ",
    link: "#",
    name: "Jason Smith,",
    title: "President",
    date: "July 18, 2022",
  },
  {
    desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
    link_text: "https://t.co/7v3HQbZqwZ",
    link: "#",
    name: "Jason Smith,",
    title: "President",
    date: "July 19, 2022",
  },
  {
    desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
    link_text: "https://t.co/7v3HQbZqwZ",
    link: "#",
    name: "Jason Smith,",
    title: "President",
    date: "July 20, 2022",
  },
];

const PoliticianTestimonial = ({element_style=false}) => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <>
      <section className={`testimonial__area ${element_style?'pt-120':''} pb-120`}>
        <div className="container">
          <div
            className="testimonial__inner-10 p-relative include-bg wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration="1s"
            style={{ backgroundImage: `url(${shape_1.src})` }}
          >
            <div className="testimonial__shape">
              <Image
                className="testimonial__shape-9"
                src={shape_2}
                alt="shape"
              />
              <Image
                className="testimonial__shape-10"
                src={shape_3}
                alt="shape"
              />
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="testimonial__slider-10">
                  <Swiper
                    className="testimonial__slider-active-10 swiper-container"
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Pagination]}
                    loop={loop}
                    pagination={{
                      el: ".testimonial-slider-dot-10",
                      clickable: true,
                    }}
                  >
                    {testimonial_data.map((item, i) => {
                      const { date, desc, link, link_text, name, title } = item || {};
                      return (
                        <SwiperSlide key={i} className="testimonial__item-10">
                          <div className="testimonial__content-10 text-center">
                            <div className="testimonial__icon-10">
                              <span>
                                <i className="fa-brands fa-twitter"></i>
                              </span>
                            </div>
                            <p>
                              {desc} <a href={link}>{link_text}</a>
                            </p>

                            <div className="testimonial__avater-10">
                              <div className="testimonial__avater-thumb-10"></div>
                              <div className="testimonial__avater-info-10 d-sm-flex align-items-center justify-content-center">
                                <h3 className="testimonial__avater-title-10">
                                  {name}
                                </h3>
                                <span className="testimonial__avater-designation-10">
                                  {title}
                                </span>

                                <div className="testimonial__avater-date">
                                  <span>{date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  <div className="testimonial-slider-dot-10 tp-swiper-dot tp-swiper-dot-2 text-center mt-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianTestimonial;
