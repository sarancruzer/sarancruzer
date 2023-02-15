import Image from "next/image";
import React from "react";
import Link from "next/link";
// internal
import service_data from "@data/service-data";
import shape_1 from "@assets/img/services/5/shape/services-shape-1.png";
import shape_2 from "@assets/img/services/5/shape/services-shape-2.png";
import shape_3 from "@assets/img/services/5/shape/services-shape-3.png";
import shape_4 from "@assets/img/services/5/shape/services-shape-4.png";
import shape_5 from "@assets/img/services/5/shape/services-shape-5.png";
import shape_6 from "@assets/img/services/5/shape/services-shape-6.png";
import AgencyTicket from "../ticket/agency-ticket";

// service items
const service_items = service_data.filter((item) => item.home_agency);

const ServicesAgency = () => {
  return (
    <>
      <section className="services__area grey-bg-8 pt-110 pb-130 p-relative z-index-1">
        <div className="services__shape">
          <Image className="services__shape-4" src={shape_1} alt="shape" />
          <Image className="services__shape-5" src={shape_2} alt="shape" />
          <Image className="services__shape-6" src={shape_3} alt="shape" />
          <Image className="services__shape-7" src={shape_4} alt="shape" />
          <Image className="services__shape-8" src={shape_5} alt="shape" />
          <Image className="services__shape-9" src={shape_6} alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div
                className="services__section-title-5 wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper-5 mb-70 text-center">
                  <span className="section__title-pre-5">What We Create</span>
                  <h3 className="section__title-5">
                    We provide wide range of digital services
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {service_items.map((item) => {
              const { id, title, subtitle, img, delay } = item;
              return (
                <div key={id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="services__item-5 mb-30 white-bg wow fadeInUp"
                    data-wow-delay={delay}
                    data-wow-duration="1s"
                  >
                    <div className="services__item-5-inner text-center transition-3  white-bg">
                      <div className="services__content-5">
                        <h3 className="services__title-5">
                          <Link href="/service-details">{title}</Link>
                        </h3>
                        <p>{subtitle}</p>
                        <div className="services__btn-5">
                          <Link href="/service-details"
                            className="tp-link-btn-circle justify-content-center"
                          >
                            See More
                            <span>
                              <i className="fa-regular fa-arrow-right"></i>
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="services__thumb-5">
                        <Image
                          src={img}
                          alt="image"
                          style={{ width: "auto"}}
                          height={220}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8 col-lg-10 ">
              <AgencyTicket />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAgency;
