import React from "react";
// internal
import FullWidthParallaxEl from "./full-width-parallax-el";
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ContainerParallaxEl from "./container-parallax-el";

const ElementsParallaxMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our parallax background" />
      {/* breadcrumb end */}

      {/* full width parallax */}
      <FullWidthParallaxEl />
      {/* full width parallax */}

      {/* container parallax */}
      <ContainerParallaxEl />
      {/* container parallax */}
    </React.Fragment>
  );
};

export default ElementsParallaxMain;
