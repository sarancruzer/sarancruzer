import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import SocialStyles from "./social-styles";


const ElementsSocialMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our Socials" />
      {/* breadcrumb end */}

      {/* SocialStyles start */}
      <SocialStyles/>
      {/* SocialStyles end */}
    </React.Fragment>
  );
};

export default ElementsSocialMain;
