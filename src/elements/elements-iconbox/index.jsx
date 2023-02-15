import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ServicesHome from "@components/services/services-home";
import ElIconBoxStyleTwo from "./el-iconbox-style-2";
import FreelancerAward from "@components/awards/freelancer-award";
import PortfolioService from "@components/services/portfolio-service";
import AgencyAward from "@components/awards/agency-award";
import ElIconBoxStyleThree from "./el-iconbox-style-3";
import ElIconBoxStyleFour from "./el-iconbox-style-4";
import ElIconBoxStyleFive from "./el-iconbox-style-5";
import StartUpCounter from "@components/counters/startup-counter";
import ElIconBoxStyleSix from "./el-iconbox-style-6";
import ProductFeature from "@components/features/product-feature";
import ElIconBoxStyleSeven from "./el-iconbox-style-7";
import ElIconBoxStyleEight from "./el-iconbox-style-8";
import ElIconBoxStyleNine from "./el-iconbox-style-9";
import ElIconBoxStyleTen from "./el-iconbox-style-10";
import ElIconBoxStyleEleven from "./el-iconbox-style-11";
import ElIconBoxStyleTwelve from "./el-iconbox-style-12";
import ServiceThreeFeature from "@components/features/service-3-feature";
import ServiceThreeServices from "@components/services/service-3-services";
import ContactItemArea from "@components/contacts/contact-area/contact-item-area";
import ClassicLocationArea from "@components/contacts/contact-classic/classic-location-area";

const ElementsIconBoxMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our Icon Box" />
      {/* breadcrumb end */}

      {/* style one start */}
      <ServicesHome element_style={true} />
      {/* style one end */}

      <div className="tp-separator"></div>

      {/* style two start */}
      <ElIconBoxStyleTwo />
      {/* style two end */}

      <div className="tp-separator"></div>

      {/* style three start */}
      <FreelancerAward element_style={true} />
      {/* style three end */}

      <div className="tp-separator"></div>

      {/* style four start */}
      <PortfolioService element_style={true} />
      {/* style four end */}

      <div className="tp-separator"></div>

      {/* style five start */}
      <AgencyAward element_style={true} />
      {/* style five end */}

      {/* style six start */}
      <ElIconBoxStyleThree />
      {/* style six end */}

      {/* style seven start */}
      <ElIconBoxStyleFour />
      {/* style seven end */}

      <div className="tp-separator"></div>

      {/* style eight start */}
      <ElIconBoxStyleFive />
      {/* style eight end */}

      {/* style nine start */}
      <StartUpCounter element_style={true} />
      {/* style nine end */}

      {/* style ten start */}
      <ElIconBoxStyleSix />
      {/* style ten end */}

      <div className="tp-separator"></div>

      {/* style eleven start */}
      <ProductFeature />
      {/* style eleven end */}

      <div className="tp-separator"></div>

      {/* style twelve start */}
      <ElIconBoxStyleSeven />
      {/* style twelve end */}

      {/* style thirteen start */}
      <ElIconBoxStyleEight />
      {/* style thirteen end */}

      {/* style fourteen start */}
      <ElIconBoxStyleNine />
      {/* style fourteen end */}

      {/* style fifteen start */}
      <ElIconBoxStyleTen />
      {/* style fifteen end */}

      {/* style sixteen start */}
      <ElIconBoxStyleEleven />
      {/* style sixteen end */}

      <div className="tp-separator"></div>

      {/* style seventeen start */}
      <ElIconBoxStyleTwelve />
      {/* style seventeen end */}

      <div className="tp-separator"></div>

      {/* style eighteen start */}
      <ServiceThreeFeature element_style={true} />
      {/* style eighteen end */}

      {/* style nineteen start */}
      <ServiceThreeServices element_style={true} />
      {/* style nineteen end */}

      {/* style twenty start */}
      <ContactItemArea element_style={true} />
      {/* style twenty end */}

      <div className="tp-separator"></div>

      {/* style twenty-one start */}
      <ClassicLocationArea element_style={true} />
      {/* style twenty-one end */}
    </React.Fragment>
  );
};

export default ElementsIconBoxMain;
