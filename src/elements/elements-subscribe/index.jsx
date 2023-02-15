import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElSubsStyleOne from "./el-subs-style-1";
import ElSubsStyleTwo from "./el-subs-style-2";
import ElSubsStyleThree from "./el-subs-style-3";


const ElementsSubscribeMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our newsletter" />
      {/* breadcrumb end */}

      {/* subscribe style one start */}
      <ElSubsStyleOne />
      {/* subscribe style one end */}

      <div className="tp-separator tp-separator-white"></div>

      {/* subscribe style two start */}
      <ElSubsStyleTwo />
      {/* subscribe style two end */}

      <div className="tp-separator tp-separator-white"></div>

      {/* subscribe style two start */}
      <ElSubsStyleThree />
      {/* subscribe style two end */}
    </React.Fragment>
  );
};

export default ElementsSubscribeMain;
