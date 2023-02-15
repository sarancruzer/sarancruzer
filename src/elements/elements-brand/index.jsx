import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElBrandStyleOne from "./el-brand-style-1";
import ElBrandStyleTwo from "./el-brand-style-2";
import PhotographerBrands from "@components/brands/photographer-brands";
import AgencyBrands from "@components/brands/agency-brands";
import CreativeBrands from "@components/brands/creative-brands";

const ElementsBrandMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our brand styles" />
      <ElBrandStyleOne />
      <ElBrandStyleTwo />
      <PhotographerBrands element_style={true} />
      <AgencyBrands element_style={true} />
      <CreativeBrands element_style={true} />
      <AgencyBrands element_style={true} square={'brand__style-square'} />
    </React.Fragment>
  );
};

export default ElementsBrandMain;
