import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
// user images
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-14.jpg";
import user_5 from "@assets/img/users/user-15.jpg";
// svg
import Circle from "@svg/circle";
// quate
import quate_img from "@assets/img/testimonial/9/testimonial-quote-1.png";

// setting nav
const setting_nav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  autoplay: false,
  speed: 100,
  autoplaySpeed: 8000,
  cssEase: "linear",
  loop: true,
};
// setting
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: false,
  cssEase: "linear",
};

// thumb nav data
const slider_thumb_nav = [
  { user: user_1 },
  { user: user_2 },
  { user: user_3 },
  { user: user_4 },
  { user: user_5 },
];

// testimonial data
const testimonial_data = [
  {
    heading: "",
    desc: (
      <>
        “ Saravanan is a proactive, result-oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in any open source technologies. He is a great asset to any company and I wouldn't hesitate to recommend him.  ”
      </>
    ),
    name: "Prakash Kalaiselvam - CDO at CubeMatch-Claritaz",
    link: 'https://www.linkedin.com/in/mohanthilak',
    img: 'https://ik.imagekit.io/ot4vlu3gs/Thilak.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1676440729511'
  },
  {
    heading: "",
    desc: (
      <>
        “ Saravanan is one of our Senior Developer who understands the given problem strongly and digs deep into providing solution that exceeds the expectation of the client. He had grown a lot since his enrollment in Claritaz and has become a independent contributor to the organisation. Best wishes to him.”
      </>
    ),
    name: "Mohan Thilak - CEO at CubeMatch-Claritaz",
  },
  {
    heading: "",
    desc: (
      <>
        “ Had a opportunity to be associated with Saravanan on multiple projects. I am impressed with his competency on any stack on the Open source. I was confident enough to bid any project on open source stack as I have been backed up by an multi talented member in my team! ”
      </>
    ),
    name: "Srinivasan Vijayan - MES Techno Functional Consultant ",
  },
  {
    heading: "",
    desc: (
      <>
        “ I know Saravanan as an expert in Open Source and a very serious team player. Saravanan always strives for excellence and does whatever it takes to get the job done. His ability to work on multiple projects and yet be focused, is a very rare skill to master.”
      </>
    ),
    name: "Suresh Manoharan - Team Lead (IOS and Android)",
  },
  {
    heading: "",
    desc: (
      <>
        “ I worked with Saravanan more than 2yrs. I think we are worked same project also. he is very talented person and quick and deep learner. He is very interested in learning new things and share his knowledge to our team members also.  ”
      </>
    ),
    name: "Ramanathan P - Senior Software Engineer ",
  },
];

const PortfolioTestimonial = () => {
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
      <section className="testimonial__area pt-130 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-9 is-center mb-60">
                <span className="section__title-pre-9">TESTIMONIAL</span>
                <h3 className="section__title-9">People talk about us</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="testimonial__slider-9 p-relative">
                <Slider
                  asNavFor={slider1}
                  ref={(slider) => setSlider2(slider)}
                  className="testimonial__slider-active-9"
                  {...settings}
                >
                  {testimonial_data.map((item, i) => (
                    <div key={i} className="testimonial__item-9">
                      <div className="testimonial__content-9 text-center">
                        <div className="testimonial__shape-quote-9">
                          <Image src={quate_img} alt="icon" />
                        </div>
                        <h4 className="testimonial-heading">{item.heading}</h4>
                        <p>{item.desc}</p>
                        <div className="testimonial__avater-info-9">
                          <h3 className="testimonial__avater-title-9">
                            
                            <a href={item.link}>{item.name}</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

               

                <div className="testimonial__slider-arrow-9 d-none d-md-block">
                  <button
                    type="button"
                    onClick={prevHandler}
                    className="slick-prev testimonial-9-button-prev slick-arrow"
                  >
                    <i className="fa-regular fa-arrow-left"></i>
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    onClick={nextHandler}
                    className="slick-next testimonial-9-button-next slick-arrow"
                  >
                    <span>Next</span>
                    <i className="fa-regular fa-arrow-right"></i>
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

export default PortfolioTestimonial;
