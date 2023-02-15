import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import PortfolioFeature from "@components/features/portfolio-feature";
import PhotographyService from "@components/services/photography-services";
import StartupFeatureLists from "@components/feature-lists/startup-feature-lists";
import PoliticianVision from "@components/visions/politician-vision";
import CommonFaq from "@components/faqs/common-faq";

const ElementsTabMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our tab style" />
      {/* breadcrumb end */}

      {/* tab style one start */}
      <PortfolioFeature />
      {/* tab style one end */}

      {/* tab style two start */}
      <PhotographyService element_style={true} />
      {/* tab style two end */}

      {/* tab style three start */}
      <StartupFeatureLists element_style={true} />
      {/* tab style three end */}

      {/* tab style four start */}
      <PoliticianVision />
      {/* tab style four end */}

      {/* tab style five start */}
      <CommonFaq padd="100" padd_2="120" />
      {/* tab style five end */}
    </React.Fragment>
  );
};

export default ElementsTabMain;
