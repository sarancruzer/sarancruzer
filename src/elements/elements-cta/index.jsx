import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import FreelancerCta from "@components/cta/freelancer-cta";
import AgencyCta from "@components/cta/agency-cta";
import ServicesSubscribe from "@components/subscribe/services-subscribe";
import StartUpCta from "@components/cta/start-up-cta";
import AboutCta from "@components/cta/about-cta";
import ServiceThreeCta from "@components/cta/service-3-cta";
import CreativeCtaTwo from "@components/cta/creative-cta-2";
import ShopCta from "@components/cta/shop-cta";

const ElementsCtaMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our button styles" />
      <FreelancerCta/>
      <AgencyCta element_style={true} />
      <ServicesSubscribe element_style={true} />
      <StartUpCta element_style={true}/>
      <AboutCta element_style={true} />
      <ServiceThreeCta />
      <CreativeCtaTwo element_style={true}/>
      <ShopCta/>
    </React.Fragment>
  );
};

export default ElementsCtaMain;
