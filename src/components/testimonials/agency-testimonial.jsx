import React, { useRef } from "react";
import Image from "next/image";
// internal
import quate from "@assets/img/testimonial/5/testimonial-quote.png";
import rating_logo from "@assets/img/testimonial/5/testimonial-rating-logo.png";
// shapes
import shape_1 from "@assets/img/testimonial/5/shape/testimonial-shape-1.png";
import shape_2 from "@assets/img/testimonial/5/shape/testimonial-shape-2.png";
import shape_3 from "@assets/img/testimonial/5/shape/testimonial-shape-3.png";
import shape_4 from "@assets/img/testimonial/5/shape/testimonial-shape-4.png";
import shape_5 from "@assets/img/testimonial/5/shape/testimonial-shape-5.png";
// users
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";
import user_5 from "@assets/img/users/user-5.jpg";
import user_6 from "@assets/img/users/user-6.jpg";
import Slider from "react-slick";

// testimonial data
const testimonial_data = [
  {
    user: user_1,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Elena Grigoras",
    title: "Co-founder at Mainblades",
  },
  {
    user: user_2,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Fatiha Laauich",
    title: "Strategic Marketing",
  },
  {
    user: user_3,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Jake Weary",
    title: "Head of Technology",
  },
  {
    user: user_4,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Hery Marky",
    title: "Head of Technology",
  },
  {
    user: user_5,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Wilis Megh",
    title: "Head of Technology",
  },
  {
    user: user_6,
    desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
    name: "Steaven Smit",
    title: "Head of Technology",
  },
];

// slider setting
const settings = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  fade: false,
  arrows: false,
  centeredSlides: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AgencyTestimonial = () => {
  const sliderRef = useRef();
  return (
    <>
      <section className="testimonial__area p-relative z-index-1 pt-120 testimonial__gradient-bg fix pb-125">
        <div className="testimonial__shape">
          <Image className="testimonial__shape-3" src={shape_1} alt="shape" />
          <Image className="testimonial__shape-4" src={shape_2} alt="shape" />
          <Image className="testimonial__shape-5" src={shape_3} alt="shape" />
          <Image className="testimonial__shape-6" src={shape_4} alt="shape" />
          <Image className="testimonial__shape-7" src={shape_5} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
              <div className="section__title-wrapper-5 mb-10">
                <span className="section__title-pre-5">success Stories</span>
                <h3 className="section__title-5">
                  Why customers love working with us
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="testimonial__slider-5 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <Slider
                  {...settings}
                  className="testimonial__slider-active-5 pt-50 pb-50"
                  ref={sliderRef}
                >
                  {testimonial_data.map((item, i) => {
                    const { user, desc, name, title } = item;
                    return (
                      <div key={i} className="testimonial__item-5">
                        <Image
                          className="testimonial__shape-2"
                          src={quate}
                          alt="user"
                        />
                        <div className="testimonial__avater-thumb-5">
                          <Image src={user} alt="quate" />
                        </div>
                        <div className="testimonial__content-5">
                          <p>{desc}</p>
                        </div>
                        <div className="testimonial__avater-info-5">
                          <h3 className="testimonial__avater-title-5">
                            {name}
                          </h3>
                          <span className="testimonial__avater-designation-5">
                            {title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="testimonial__nav-wrapper">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="testimonial__rating-5 d-flex align-items-center">
                  <div className="testimonial__rating-logo mr-15">
                    <Image src={rating_logo} alt="rating" />
                  </div>
                  <div className="testimonial__rating-content">
                    <div className="testimonial__rating testimonial__rating-5">
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                    </div>
                    <p>4.8 Rating on Google</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial__nav-5 testimonial-slider-5-arrow text-sm-end">
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    type="button"
                    className="testimonial-5-button-prev slick-prev slick-arrow"
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button
                    type="button"
                    className="testimonial-5-button-next slick-next slick-arrow"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyTestimonial;
