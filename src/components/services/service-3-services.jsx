import React from "react";
// internal
import {
  ArrowRightLongTwo,
  CalenderThree,
  CommentBigTwo,
  MobileAppThree,
  SeoOptimize,
} from "@svg/index";
import Link from "next/link";

// single service
function SingleService({ delay, icon, title, subtitle }) {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="services__item-15 d-sm-flex align-items-start transition-3 mb-30">
        <div className="services__icon-15 mr-45">
          <span>{icon}</span>
        </div>
        <div className="services__content-15">
          <h3 className="services__title-15">
            <Link href="/service-details">{title}</Link>
          </h3>
          <p>{subtitle}</p>

          <div className="services__btn-15">
            <Link href="/service-details">
              Learn More
              <span>
                <ArrowRightLongTwo />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceThreeServices = ({ element_style = false }) => {
  return (
    <section className="services__area pt-110 pb-100 grey-bg-15">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">
                {element_style ? "LIST GRID" : "Our Services"}
              </span>
              <h3 className="tp-section-title-3">
                {element_style ? "List Grid Style" : "Our featured services"}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <SingleService
            icon={<MobileAppThree />}
            title="Responsive Design"
            subtitle={
              <>
                There are many variations of passages of <br /> lorem Ipsum
                available.!
              </>
            }
          />
          <SingleService
            icon={<SeoOptimize />}
            title="SEO Optimized"
            subtitle={
              <>
                There are many variations of passages of <br /> lorem Ipsum
                available.!
              </>
            }
          />
          <SingleService
            icon={<CalenderThree />}
            title="Daily Updates"
            subtitle={
              <>
                There are many variations of passages of <br /> lorem Ipsum
                available.!
              </>
            }
          />
          <SingleService
            icon={<CommentBigTwo />}
            title="Fast Support"
            subtitle={
              <>
                There are many variations of passages of <br /> lorem Ipsum
                available.!
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceThreeServices;
