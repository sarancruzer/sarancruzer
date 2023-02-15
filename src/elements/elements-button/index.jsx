import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import Buttons from "./buttons";

const ElementsButtonMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our button styles" />
      <Buttons/>
    </React.Fragment>
  );
};

export default ElementsButtonMain;
