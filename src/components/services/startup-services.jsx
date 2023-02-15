import React from "react";
import Image from "next/image";
// internal
import shape from "@assets/img/services/7/services-shape-1.png";
import service_data from "@data/service-data";
import StartupSingleService from "./single-service/startup-single-service";
import HighlightShapeThree from "@svg/highlight-shape-3";

// items
const services_items = service_data.filter((item) => item.home_startup);

const StartupServices = () => {
  return (
    <>
      <section className="services__area p-relative z-index-1 pt-110 pb-90">
        <div className="services__shape">
          <Image className="services__shape-10" src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-10">
              <div className="section__title-wrapper-7 mb-60 text-center">
                <span className="section__title-pre-7">Join 0ur Community</span>
                <h3 className="section__title-7">
                  Amazing{" "}
                  <span className="section__title-7-highlight">
                    services
                    <HighlightShapeThree />
                  </span>
                  {" "}to build business growth
                </h3>
              </div>
            </div>
          </div>
          <div className="services__item-wrapper-7">
            <div className="row">
              {services_items.map((item) => (
                <StartupSingleService key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupServices;
