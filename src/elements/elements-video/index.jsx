import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElVideoStyleOne from "./el-video-style-1";
import LawyerVideoArea from "@components/video-area/lawyer-video-area";
import ArchitectureVideoArea from "@components/video-area/architecture-video-area";


const ElementsVideoMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our video styles" />
      {/* breadcrumb end */} 

      {/* video style one start */}
      <ElVideoStyleOne/>
      {/* video style one end */}

      {/* video style two start */}
      <LawyerVideoArea element_style={true} />
      {/* video style two end */}

      {/* video style three start */}
      <ArchitectureVideoArea element_style={true} />
      {/* video style three end */}
    </React.Fragment>
  );
};

export default ElementsVideoMain;
