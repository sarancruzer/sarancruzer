import React, { useState } from "react";
import Image from "next/image";
// internal
import shape from "@assets/img/services/3/services-shape-1.png";
import logo_thumb from "@assets/img/services/3/services-logo.png";
import logo_icon from "@assets/img/services/3/services-logo-icon.png";
// services image
import service_img_1 from "@assets/img/services/3/services-1.jpg";
import service_img_2 from "@assets/img/services/3/services-2.jpg";
import service_img_3 from "@assets/img/services/3/services-3.jpg";
import service_img_4 from "@assets/img/services/3/services-4.jpg";
import service_img_5 from "@assets/img/services/3/services-5.jpg";
import service_img_6 from "@assets/img/services/3/services-6.jpg";
import service_img_7 from "@assets/img/services/3/services-7.jpg";
import service_img_8 from "@assets/img/services/3/services-8.jpg";

// services lists
const services_lists = [
  { id: 1, title: "Event Shoot" },
  { id: 2, title: "Product Shoot" },
  { id: 3, title: "Wedding Shoot" },
  { id: 4, title: "Corporate Shoot" },
  { id: 5, title: "Pet Shoot" },
  { id: 6, title: "Advertisement shoot" },
  { id: 7, title: "Model Shoot" },
  { id: 8, title: "View all Type" },
];

// service images
const imageStyle = {
  width: "100%",
  height: "100%",
};

// single image
function SingleImage({ img, id }) {
  return (
    <Image
      className={`services__list-thumb services-img-${id}`}
      src={img}
      style={imageStyle}
      alt="image"
    />
  );
}
// PhotographyService area
const PhotographyService = ({ element_style = false }) => {
  const [serviceActive, setServiceActive] = useState("services-img-3");
  // handleServiceActive
  const handleServiceActive = (id) => {
    setServiceActive(`services-img-${id}`);
  };
  return (
    <>
      <div
        className={`services__area p-relative z-index-1 black-bg-5 ${
          element_style ? "pt-110 pb-150" : "pt-50 pb-120"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="section__title-wrapper-3 mb-65">
                <span className="section__title-pre-3">04 . Services</span>
                <h3 className="section__title-3 has-gradient">
                  Create the Magical<span> Memories!.</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div
                className="services__wrapper-3 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="services__list pl-100">
                  {services_lists.map((list) => (
                    <div
                      key={list.id}
                      onClick={() => handleServiceActive(list.id)}
                      className={`services__list-item services-item-link ${
                        serviceActive === `services-img-${list.id}`
                          ? "active"
                          : ""
                      }`}
                      rel={serviceActive}
                    >
                      <h3 className="services__list-title">
                        <span className="services-tab-link-btn">
                          <i className="fa-regular fa-angle-right"></i>
                        </span>
                        <button type="button">{list.title}</button>
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="services__tab-wrapper">
                <div className="services__tab-content pl-65 pr-35">
                  <Image
                    className="services__shape-3"
                    src={shape}
                    alt="shape"
                  />
                  <div id="services-item-thumb" className={serviceActive}>
                    <SingleImage img={service_img_1} id="1" />
                    <SingleImage img={service_img_2} id="2" />
                    <SingleImage img={service_img_3} id="3" />
                    <SingleImage img={service_img_4} id="4" />
                    <SingleImage img={service_img_5} id="5" />
                    <SingleImage img={service_img_6} id="6" />
                    <SingleImage img={service_img_7} id="7" />
                    <SingleImage img={service_img_8} id="8" />
                  </div>
                  <div className="services__tab-logo">
                    <Image
                      className="services__tab-logo-thumb"
                      src={logo_thumb}
                      alt="logo thumb"
                    />
                    <Image
                      className="services__tab-logo-icon"
                      src={logo_icon}
                      alt="logo icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyService;
