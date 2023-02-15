import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import text_bg from "@assets/img/testimonial/testimonial-text-bg.jpg";
import { ArrowRightThree, Quete } from "@svg/index";
import user_1 from "@assets/img/users/user-9.jpg";
import user_2 from "@assets/img/users/user-8.jpg";
import user_3 from "@assets/img/users/user-7.jpg";


// testimonial items
const testimonial_items = [
  {
    user: user_1,
    ratings: [1, 2, 3, 4, 5],
    desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
    name: "Joss Sticks",
    title: "CEO at Fast Ventures",
  },
  {
    user: user_2,
    ratings: [1, 2, 3, 4, 5],
    desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
    name: "Naim Ahmed",
    title: "Developer at ThemePure",
  },
  {
    user: user_3,
    ratings: [1, 2, 3, 4, 5],
    desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
    name: "Steven Smith",
    title: "MD at Stark Ltd.",
  },
];

const AboutMeTestimonial = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), [])

  // slider settings
  const settings = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: loop,
    pagination: {
      el: ".testimonial-slider-dot-14",
      clickable: true,
    },
  };
  return (
    <section className="testimonial__area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div
              className="testimonial__wrapper-14 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="testimonial__info">
                <div className="section__title-wrapper-9 mb-10">
                  <span className="section__title-pre section__title-pre-1-3">
                    Happy clients
                  </span>
                </div>
                <h3
                  className="testimonial__info-title has-background"
                  style={{ backgroundImage: `url(${text_bg.src})` }}
                >
                  220+
                </h3>
                <p>Customers that have Achieved Their Goals.</p>
                <div className="testimonial__info-btn">
                  <Link href="/portfolio-2" className="tp-btn tp-link-btn-3">
                    Explore Now
                    <span>
                      <ArrowRightThree />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div
              className="testimonial__slider-14 testimonial__style-black p-relative wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <div className="testimonial__slider-active-14 swiper-container">
              <Swiper
                {...settings}
                modules={[Pagination]}
              >
                {testimonial_items.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    className="testimonial__item-4 d-sm-flex align-items-center"
                  >
                    <div className="testimonial__avater-thumb-4">
                      <Image src={item.user} alt="user" />
                    </div>
                    <div className="testimonial__content-4">
                      <div className="testimonial__icon">
                        <span>
                          <Quete />
                        </span>
                      </div>
                      <div className="testimonial__rating">
                        {item.ratings.map((r) => (
                          <a href="#" key={r}>
                            <i className="fa-solid fa-star"></i>
                          </a>
                        ))}
                      </div>
                      <p>
                        {item.desc}
                      </p>

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
              <div className="testimonial-slider-dot-14 tp-swiper-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeTestimonial;
