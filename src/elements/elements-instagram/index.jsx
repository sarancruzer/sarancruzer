import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import SliderInstagramEl from "./slider-instagram-el";
import GridInstagramEl from "./grid-instagram-el";

const ElementsInstagramMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our Icon Box" />
      {/* breadcrumb end */}

      {/* slider instagram start */}
      <SliderInstagramEl/>
      {/* slider instagram end */}

      {/* Grid instagram start */}
      <GridInstagramEl/>
      {/* Grid instagram end */}
    </React.Fragment>
  );
};

export default ElementsInstagramMain;
