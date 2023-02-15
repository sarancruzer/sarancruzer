import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import AgencyPricing from "@components/pricings/agency-pricing";
import PhotographyPrice from "@components/pricings/photography-price";
import StartUpPricing from "@components/pricings/start-up-pricing";

const ElementsPricingMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our pricing table" />
      {/* breadcrumb end */}

      {/* pricing style one start */}
      <AgencyPricing />
      {/* pricing style one start */}

      {/* pricing style two start */}
      <PhotographyPrice element_style={true} />
      {/* pricing style two start */}

      {/* pricing style three start */}
      <StartUpPricing hide_shape={true} el_spacing={"pb-120"} />
      {/* pricing style three start */}

      <div className="tp-separator"></div>

      {/* pricing style four start */}
      <StartUpPricing hide_shape={true} style_2={true} />
      {/* pricing style four start */}
    </React.Fragment>
  );
};

export default ElementsPricingMain;
