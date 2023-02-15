import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import SkillStyleOneEl from "./skill-style-1-el";
import SkillStyleTwoEl from "./skill-style-2-el";
import SkillStyleThreeEl from "./skill-style-3-el";

const ElementsSkillMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our newsletter" />
      {/* breadcrumb end */}

      {/* skill style one start */}
      <SkillStyleOneEl />
      {/* skill style one end */}

      <div className="tp-separator"></div>

      {/* skill style two start */}
      <SkillStyleTwoEl/>
      {/* skill style two end */}

      <div className="tp-separator"></div>

      {/* skill style three start */}
      <SkillStyleThreeEl/>
      {/* skill style three end */}
    </React.Fragment>
  );
};

export default ElementsSkillMain;
