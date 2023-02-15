import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
// user images
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";
import user_5 from "@assets/img/users/user-5.jpg";
import user_6 from "@assets/img/users/user-6.jpg";
// svg
import Circle from "@svg/circle";
// bg
import bg from "@assets/img/testimonial/2/testimonial-shape-1.png";

// thumb nav data
const slider_thumb_nav = [
  { user: user_1 },
  { user: user_2 },
  { user: user_3 },
  { user: user_4 },
  { user: user_5 },
  { user: user_6 },
];

const testimonial_data = [
  {
    desc: "“ There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
    name: "Fleece Harrygold",
    designation: "Project Manager",
  },
  {
    desc: "“ Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text There are many variations passages Lorem  ”",
    name: "Naim Ahmed",
    designation: "Developer",
  },
  {
    desc: "“ Suffered alteration in some form by injected humour randomised There are many variations passages Lorem Ipsum available but the majority look embarrassing hidden in middle text ”",
    name: "Stiven Smith",
    designation: "Themepure Member",
  },
  {
    desc: "“  Humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected hidden in middle text ”",
    name: "Gomz Itsa",
    designation: "Designer",
  },
  {
    desc: "“ Injected humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by  hidden in middle text ”",
    name: "Unika Kala",
    designation: "UI/UX Designer",
  },
  {
    desc: "“ Lorem Ipsum available but the majority suffered there are many variations passages alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
    name: "Helen Klintong",
    designation: "SEO Expert",
  },
];

const setting_nav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 8000,
  cssEase: "linear",
  loop: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: false,
  cssEase: "linear",
};

// FreelancerTestimonial area
const FreelancerTestimonial = ({ element_style = false }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  // handle slider ref
  const handleRef = (slider) => {
    setSlider1(slider);
  };
  const prevHandler = () => {
    slider1?.slickPrev();
  };
  const nextHandler = () => {
    slider1?.slickNext();
  };
  return (
    <>
      <section
        className={`testimonial__area p-relative z-index-1 ${
          element_style ? "pt-120 pb-140" : ""
        }`}
      >
        {!element_style && <div className="testimonial__bg"></div>}
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-60">
                <span className="section__title-pre-2">TESTIMONIALS</span>
                <h3 className="section__title-2">What My Clients Say</h3>
              </div>
            </div>
          </div>
          <div
            className="testimonial__inner-2 z-index-1 p-relative wow fadeInUp"
            data-wow-delay=".5s"
            data-wow-duration="1s"
            data-bg-color="theme-2"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-11">
                <div className="testimonial__slider-2">
                  <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8 col-sm-8 col-8">
                      <Slider
                        asNavFor={slider2}
                        ref={(slider) => handleRef(slider)}
                        className="testimonial__slider-nav"
                        {...setting_nav}
                      >
                        {slider_thumb_nav.map((nav, i) => (
                          <div
                            key={i}
                            className="testimonial__slider-thumb-nav"
                          >
                            <div className="tp-border-loader">
                              <Circle />
                            </div>
                            <Image src={nav.user} alt="user" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <Slider
                    asNavFor={slider1}
                    ref={(slider) => setSlider2(slider)}
                    className="testimonial__slider-active-2"
                    {...settings}
                  >
                    {testimonial_data.map((item, i) => (
                      <div key={i} className="testimonial__item-2">
                        <div className="testimonial__content-2">
                          <p>{item.desc}</p>
                          <div className="testimonial__avater-info-2">
                            <h3 className="testimonial__avater-title-2">
                              {item.name}
                            </h3>
                            <span className="testimonial__avater-designation-2">
                              {item.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="testimonial__slider-arrow-2">
              <button
                onClick={prevHandler}
                type="button"
                className="slick-prev testimonial-2-button-prev slick-arrow"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={nextHandler}
                type="button"
                className="slick-next testimonial-2-button-next slick-arrow"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelancerTestimonial;
