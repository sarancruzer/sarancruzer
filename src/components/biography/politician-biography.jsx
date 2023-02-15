import React, { useState } from "react";
import Slider from "react-slick";
// internal
import bio_bg_1 from "@assets/img/biography/biography-1.jpg";
import bio_bg_2 from "@assets/img/biography/biography-2.jpg";
import bio_bg_3 from "@assets/img/biography/biography-3.jpg";
import bio_bg_4 from "@assets/img/biography/biography-4.jpg";
import bio_bg_5 from "@assets/img/biography/biography-5.jpg";
import bio_bg_6 from "@assets/img/biography/biography-6.jpg";
import bio_bg_7 from "@assets/img/biography/biography-7.jpg";
import bio_bg from "@assets/img/biography/biography-transparent-bg.png";
import solid_bg from "@assets/img/biography/biography-solid-bg.png";

// biography__item
const biography_items = [
  {
    bg: bio_bg_1,
    date: "01 April 2014",
    title: "Stand with our campaign for working political",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_2,
    date: "22 June 2015",
    title: "Iranian Regime Thugs Fire on – Drive-By Killers",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_3,
    date: "04 Jan 2016",
    title: "The Irony of information: Enduring Solutions",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_4,
    date: "26 Sept 2017",
    title: "Combating information by Truth and Trust",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_5,
    date: "14 Aug 2018",
    title: "'Truth Decay' in Europe Is Real, Advance Slowed",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_6,
    date: "08 May 2019",
    title: "Supporting the People of Ukraine Through Cities",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
  {
    bg: bio_bg_7,
    date: "21 July 2020",
    title: "Homelessness in L.A., Russia Morale:",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
  },
];

// biography__year
const biography_year = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"];

const setting_nav = {
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
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
};

const PoliticianBiography = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  // handle slider ref
  const handleRef = (slider) => {
    setSlider1(slider);
  };
  return (
    <>
      <section className="biography__area p-relative pb-110 fix">
        <Slider
          {...settings}
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
          className="biography__slider-content-active"
        >
          {biography_items.map((item, i) => (
            <div
              key={i}
              className="biography__item biography__height p-relative z-index-1"
            >
              <div
                className="biography__bg biography__bg-1"
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xxl-7 col-xl-8 col-lg-9">
                    <div className="biography__content p-relative z-index-1">
                      <div className="biography__meta">
                        <span>{item.date}</span>
                      </div>
                      <h3 className="biography__title">{item.title}</h3>
                      <p>{item.subtitle}</p>

                      <div className="biography__btn mb-50">
                        <a href="#" className="tp-btn-border-9 tp-link-btn-3">
                          Continue Reading
                          <span>
                            <i className="fa-regular fa-angle-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="biography__slider">
                <Slider
                  {...setting_nav}
                  asNavFor={slider2}
                  ref={(slider) => handleRef(slider)}
                  className="biography__slider-nav"
                >
                  {biography_year.map((year, i) => (
                    <div key={i} className="biography__year">
                      <p>
                        <span
                          className="tp-biography-bg include-bg"
                          style={{ backgroundImage: `url(${bio_bg.src})` }}
                        ></span>
                        <span
                          className="tp-biography-bg is-solid include-bg"
                          style={{ backgroundImage: `url(${solid_bg.src})` }}
                        ></span>
                        {year}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticianBiography;
