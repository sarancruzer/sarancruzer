import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElHeadingStyleOne from "./el-heading-style-1";
import ElHeadingStyleTwo from "./el-heading-style-2";
import ElHeadingStyleThree from "./el-heading-style-3";
import ElHeadingStyleFour from "./el-heading-style-4";
import ElHeadingStyleFive from "./el-heading-style-5";
import ElHeadingStyleSix from "./el-heading-style-6";
import ElHeadingStyleSeven from "./el-heading-style-7";

const ElementsHeadingMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our Heading Style" />
      {/* breadcrumb end */}

      {/* heading area start */}

      {/* heading style one start */}
      <ElHeadingStyleOne />
      {/* heading style one end */}

      {/* heading style one start */}
      <ElHeadingStyleTwo />
      {/* heading style one end */}

      <div className="tp-separator"></div>

      {/* heading style one start */}
      <ElHeadingStyleThree />
      {/* heading style one end */}

      <div className="tp-separator"></div>

      {/* heading style one start */}
      <ElHeadingStyleFour />
      {/* heading style one end */}

      <div className="tp-separator"></div>

      {/* heading style one start */}
      <ElHeadingStyleFive />
      {/* heading style one end */}

      <div className="tp-separator"></div>

      {/* heading style one start */}
      <ElHeadingStyleSix />
      {/* heading style one end */}
      <div className="tp-separator"></div>

      {/* heading style one start */}
      <ElHeadingStyleSeven />
      {/* heading style one end */}
    </React.Fragment>
  );
};

export default ElementsHeadingMain;
