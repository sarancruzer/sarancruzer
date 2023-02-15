import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// internal
import shape_1 from "@assets/img/portfolio/6/shape/portfolio-shape-1.png";
import shape_2 from "@assets/img/portfolio/6/shape/portfolio-shape-2.png";
import shape_3 from "@assets/img/portfolio/6/shape/portfolio-shape-3.png";
import shape_4 from "@assets/img/portfolio/6/shape/portfolio-shape-4.png";
import shape_5 from "@assets/img/portfolio/6/shape/portfolio-shape-5.png";
import bg from "@assets/img/portfolio/6/portfolio-bg.jpg";
import HighlightShapeFour from "@svg/highlight-shape-4";
// portfolio images
import port_1 from "@assets/img/portfolio/6/portfolio-1.jpg";
import port_2 from "@assets/img/portfolio/6/portfolio-2.jpg";
import port_3 from "@assets/img/portfolio/6/portfolio-3.jpg";
import port_4 from "@assets/img/portfolio/6/portfolio-4.jpg";
import port_5 from "@assets/img/portfolio/6/portfolio-5.jpg";
import port_6 from "@assets/img/portfolio/6/portfolio-6.jpg";
import port_7 from "@assets/img/portfolio/6/portfolio-7.jpg";
import port_8 from "@assets/img/portfolio/6/portfolio-8.jpg";
import ImageLightBox from "@components/common/modals/image-lightbox";

// data
const portfolio_items = [
  { id: 1, img: port_1 },
  { id: 2, img: port_2 },
  { id: 3, img: port_3 },
  { id: 4, img: port_4 },
  { id: 5, img: port_5 },
  { id: 6, img: port_6 },
  { id: 7, img: port_7 },
  { id: 8, img: port_8 },
];

const CreativePortfolio = ({ element_style = false }) => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  const [isActive, setActive] = useState(false);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };
  //  images
  const images = portfolio_items.map((item) => item.img.src);
  return (
    <>
      <section className="portfolio__area p-relative z-index-1 pt-110 pb-140 blue-bg-5">
        <div
          className="portfolio__bg-6 p-relative include-bg"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="portfolio__shape">
          <Image className="portfolio__shape-8" src={shape_1} alt="shape" />
          <Image className="portfolio__shape-9" src={shape_2} alt="shape" />
          <Image className="portfolio__shape-10" src={shape_3} alt="shape" />
          <Image className="portfolio__shape-11" src={shape_4} alt="shape" />
          <Image className="portfolio__shape-12" src={shape_5} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-7 col-lg-6">
              <div className="section__title-wrapper-6 section__title-wrapper-6-white  mb-60">
                {!element_style && (
                  <h3 className="section__title-6">
                    We work Together to Make a Difference{" "}
                    <span className="section__title-6-highlight">
                      Universe.
                      <HighlightShapeFour />
                    </span>
                  </h3>
                )}
                {element_style && (
                  <h3 className="section__title-6">
                    Gallery with focused{" "}
                    <span className="section__title-6-highlight">
                      effect.
                      <HighlightShapeFour />
                    </span>
                  </h3>
                )}
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 col-lg-6">
              <div className="section__title-wrapper-6 section__title-wrapper-6-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec
                  nec elementum ipsum. donec usodales porttitor convallis
                  elementum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row gx-0">
            <div className="col-xxl-12">
              <div className="portfolio__slider-6">
                <Swiper
                  className="portfolio__slider-active-6 swiper-container"
                  slidesPerView={5}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  loop={loop}
                  speed={3000}
                  autoplay={{
                    delay: 3000,
                  }}
                  breakpoints={{
                    1600: {
                      slidesPerView: 5,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                  }}
                >
                  {portfolio_items.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className={`portfolio__item-6 ${
                        isActive ? "" : "active"
                      } transition-3`}
                    >
                      <div
                        className="portfolio__thumb-6 fix"
                        onMouseOver={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                      >
                        <a
                          className="popup-image"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleImagePopup(i)}
                        >
                          <Image src={item.img} alt="image" style={{width:'100%',height:'100%'}} />
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default CreativePortfolio;
