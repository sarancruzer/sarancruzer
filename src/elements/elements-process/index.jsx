import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElProcessArea from "./el-process-area";


const ElementsProcessMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our process" />
      {/* breadcrumb end */}

      {/* process area start */}
      <ElProcessArea/>
      {/* process area end */}
    </React.Fragment>
  );
};

export default ElementsProcessMain;
