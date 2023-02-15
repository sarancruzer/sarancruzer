import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import shape_1 from "@assets/img/testimonial/5/shape/testimonial-shape-2.png";
import shape_2 from "@assets/img/testimonial/5/shape/testimonial-shape-3.png";
import shape_3 from "@assets/img/testimonial/5/shape/testimonial-shape-4.png";
import shape_4 from "@assets/img/testimonial/5/shape/testimonial-shape-5.png";
import gradient_bg from "@assets/img/testimonial/testimonial-shape.png";
import quote from "@assets/img/testimonial/5/testimonial-quote.png";
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";
import user_5 from "@assets/img/users/user-5.jpg";
import user_6 from "@assets/img/users/user-6.jpg";

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

// setting
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

const ServiceThreeTestimonial = () => {
  return (
    <section className="testimonial__area p-relative z-index-1 pt-120 fix pb-125">
      <div className="testimonial__shape">
        <Image className="testimonial__shape-4" src={shape_1} alt="shape" />
        <Image className="testimonial__shape-5" src={shape_2} alt="shape" />
        <Image className="testimonial__shape-6" src={shape_3} alt="shape" />
        <Image className="testimonial__shape-7" src={shape_4} alt="shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">success Stories</span>
              <h3 className="tp-section-title-3">
                Why customers <br /> love working with us
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div
              className="testimonial__slider-5 testimonial__style-2 p-relative wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="testimonial__gradient-bg-2 fix">
                <Image
                  className="testimonial__shape-11"
                  src={gradient_bg}
                  alt="gradient bg"
                />
              </div>

              <Slider
                {...settings}
                className="testimonial__slider-active-5 pt-50 pb-50"
              >
                {testimonial_data.map((item, i) => (
                  <div key={i} className="testimonial__item-5">
                    <Image
                      className="testimonial__shape-2"
                      src={quote}
                      alt="quote"
                    />
                    <div className="testimonial__avater-thumb-5">
                      <Image src={item.user} alt="user" />
                    </div>
                    <div className="testimonial__content-5">
                      <p>{item.desc}</p>
                    </div>
                    <div className="testimonial__avater-info-5">
                      <h3 className="testimonial__avater-title-5">
                        {item.name}
                      </h3>
                      <span className="testimonial__avater-designation-5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThreeTestimonial;
