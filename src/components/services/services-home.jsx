import React from "react";
import Link from "next/link";
// internal
import service_data from "@data/service-data";
import { Line, ShapeLine } from "@svg/index";
import HomeSingleService from "./single-service/home-single-service";

// services_items
const services_items = service_data.filter((ser) => ser.home);

const ServicesHome = ({ style_2 = false, element_style = false }) => {
  return (
    <>
      <section
        className={`services__area ${style_2 ? "pt-100" : ""} ${
          element_style ? "pt-110" : ""
        } pb-90`}
      >
        <div className="container">
          {!style_2 || !element_style && (
            <div className="row align-items-end">
              <div className="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8">
                <div className="section__title-wrapper mb-60">
                  <h3 className="section__title">
                    Services to help{" "}
                    <span className="section__title-highlight">
                      business
                      <ShapeLine />
                    </span>
                    {" "}grow.
                  </h3>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-7 col-lg-4 col-md-4 col-sm-4">
                <div className="services__more mb-70 text-md-end">
                  <Link href="/services" className="tp-link-btn-2">
                    See All Service
                    <span>
                      <Line />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <div className="row">
              <div className="col-xxl-12">
                <div className="tp-section-wrapper-3 mb-60 text-center">
                  <span className="tp-section-subtitle-3">
                    Minimal &amp; Clean Design
                  </span>
                  <h3 className="tp-section-title-3">Bordered Icon Box</h3>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {services_items.map((item, i) => (
              <div key={i} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <HomeSingleService item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHome;
