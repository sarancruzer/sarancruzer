import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import shape from "@assets/img/testimonial/8/testimonial-bg-1.png";
import quote from "@assets/img/testimonial/8/testimonial-quote-1.png";
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-5.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-4.jpg";

// data testimonial data
const testimonial_items = [
  {
    desc: "“Thank you guys for your excellent efforts and commitment in assisting us in our project! I would like to express my thanks for the work you have done!”",
    name: "Cody Fisher",
    designation: "Fonder of Incredible",
  },
  {
    desc: "“There are many variations passages Lorem Ipsum available the   majority suffered alteration in some form by injected humour look embarrassing in middle”",
    name: "Cody Fisher",
    designation: "Fonder of Incredible",
  },
  {
    desc: "“Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore est aliquid repellat.”",
    name: "Cody Fisher",
    designation: "Fonder of Incredible",
  },
  {
    desc: "“Quia dolore eosaut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.”",
    name: "Cody Fisher",
    designation: "Fonder of Incredible",
  },
];

// thumbs
const testimonial_thumbs = [
  { thumb: user_1 },
  { thumb: user_2 },
  { thumb: user_3 },
  { thumb: user_4 },
];

// slick setting nav
const settings_nav = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
// setting
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
};


const ArchitectureTestimonial = () => {
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
      <section className="testimonial__area black-bg-12 pt-145 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="testimonial__wrapper-8 z-index-1 p-relative pl-200 pr-200">
                <div className="testimonial__shape">
                  <Image
                    className="testimonial__shape-8"
                    src={shape}
                    alt="shape"
                  />
                </div>
                <div
                  className="testimonial__slider p-relative wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <Slider
                    asNavFor={slider1}
                    ref={(slider) => setSlider2(slider)}
                    className="testimonial__slider-active-8 swiper-container mySwiper2"
                    {...settings}
                  >
                    {testimonial_items.map((item, i) => (
                      <div key={i} className="testimonial__item-8">
                        <div className="testimonial__content-8 text-center">
                          <div className="testimonial__shape-quote-8">
                            <Image src={quote} alt="quote" />
                          </div>
                          <p>{item.desc}</p>

                          <div className="testimonial__avater-info-8">
                            <h3 className="testimonial__avater-title-8">
                              {item.name}
                            </h3>
                            <span className="testimonial__avater-designation-8">
                              {item.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>

                  <Slider
                    asNavFor={slider2}
                    ref={(slider) => handleRef(slider)}
                    className="testimonial__slider-8-thumb swiper-container mySwiper"
                    {...settings_nav}
                  >
                    {testimonial_thumbs.map((thumb, i) => (
                      <div
                        key={i}
                        className="testimonial__avater-8 text-center"
                      >
                        <div className="testimonial__avater-thumb-8">
                          <Image src={thumb.thumb} alt="user" />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  <div className="testimonial-slider-dot-8 tp-swiper-dot tp-swiper-dot-2 text-center d-md-none"></div>
                </div>

                <div className="testimonial__slider-arrow-8 d-none d-md-block">
                  <button
                    onClick={prevHandler}
                    className="testimonial-8-button-prev"
                  >
                    <i className="fa-regular fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextHandler}
                    className="testimonial-8-button-next"
                  >
                    <i className="fa-regular fa-chevron-right"></i>
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

export default ArchitectureTestimonial;
