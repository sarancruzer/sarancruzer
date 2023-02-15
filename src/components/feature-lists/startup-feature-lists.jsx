import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import {
  HighlightShapeThree,
  StartupFeatureListFour,
  StartupFeatureListOne,
  StartupFeatureListThree,
  StartupFeatureListTwo,
} from "@svg/index";
import feature_img_1 from "@assets/img/features/7/features-img-1.png";
import feature_img_2 from "@assets/img/features/7/features-img-2.png";
import feature_img_3 from "@assets/img/features/7/features-img-3.png";
import shape_1 from "@assets/img/features/7/features-shape-1.png";
import shape_2 from "@assets/img/features/7/features-shape-2.png";

// nav item
function NavItem({ active, id, icon, title, subtitle }) {
  return (
    <li className="nav-item" role="presentation">
      <div
        className={`features__list-item white-bg transition-3 nav-link ${
          active ? "active" : ""
        }`}
        id={`${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        role="tab"
        aria-controls={`${id}`}
        aria-selected={active ? "true" : "false"}
        tabIndex="-1"
      >
        <div className="features__list-item-wrapper d-sm-flex align-items-center justify-content-between white-bg transition-3">
          <div className="features__list-item-inner  d-sm-flex align-items-center">
            <div className="features__list-icon mr-20">
              <span>{icon}</span>
            </div>
            <div className="features__list-content">
              <h3 className="features__list-title">{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="features__list-btn">
            <Link href="/service-details" className="tp-link-btn-4">
              <span>
                <i className="fa-regular fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

// tab content
function TabContent({ active, id }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div className="features__list-thumb-wrapper">
        <Image
          className="features__list-thumb-1"
          src={feature_img_1}
          alt="image"
        />
        <Image
          className="features__list-thumb-2"
          src={feature_img_2}
          alt="image"
        />
        <Image
          className="features__list-thumb-3"
          src={feature_img_3}
          alt="image"
        />

        <Image className="features__shape-7" src={shape_1} alt="shape" />
      </div>
    </div>
  );
}

// StartupFeatureLists
const StartupFeatureLists = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`features__list-area ${
          element_style ? "pt-120 pb-120" : ""
        }`}
      >
        <div className="container">
          <div className="features__list-inner green-light-bg-4 pt-110 pb-135 pl-100 pr-100 p-relative z-index-1">
            <Image className="features__shape-8" src={shape_2} alt="shape" />
            <div className="row">
              <div className="col-xxl-12">
                <div className="section__title-wrapper-7 mb-85">
                  <span className="section__title-pre-7">Product Features</span>
                  <h3 className="section__title-7">
                    Growing is hard.
                    <span className="section__title-7-highlight">
                      Let us help!
                      <HighlightShapeThree />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-6">
                <div className="features__list-wrapper tp-tab">
                  <ul className="nav nav-tabs" id="featuresTab" role="tablist">
                    <NavItem
                      active={true}
                      id="customer"
                      icon={<StartupFeatureListOne />}
                      title="Customer Discovery"
                      subtitle="Test if users can find what look..!"
                    />
                    <NavItem
                      id="ideation"
                      icon={<StartupFeatureListTwo />}
                      title="Ideation"
                      subtitle="Test if users can find what look..!"
                    />
                    <NavItem
                      id="multiple"
                      icon={<StartupFeatureListThree />}
                      title="Software Development"
                      subtitle="Test if users can find what look..!"
                    />
                    <NavItem
                      id="software"
                      icon={<StartupFeatureListFour />}
                      title="Customer Discovery"
                      subtitle="Test if users can find what look..!"
                    />
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6">
                <div className="tab-content" id="myTabContent">
                  <TabContent active={true} id="customer" />
                  <TabContent id="ideation" />
                  <TabContent id="multiple" />
                  <TabContent id="software" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupFeatureLists;
