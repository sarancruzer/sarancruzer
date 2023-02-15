import React from "react";
import dynamic from "next/dynamic";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElGalleryOne from "./el-gallery-one";
import HomePortfolio from "@components/portfolios/home-portfolio";
import ElGalleryTwo from "./el-gallery-two";
import ElGalleryThree from "./el-gallery-three";
import CreativePortfolio from "@components/portfolios/creative-portfolio";
import ElGalleryFour from "./el-gallery-four";
import ElGalleryFive from "./el-gallery-five";
import ElGallerySix from "./el-gallery-six";
import ElGallerySeven from "./el-gallery-seven";

const ElementsGalleryMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our Gallery Style" />
      {/* breadcrumb end */}

      {/* gallery one start */}
      <ElGalleryOne/>
      {/* gallery one end */}

      {/* gallery Two start */}
      <HomePortfolio/>
      {/* gallery Two end */}

      {/* gallery three start */}
      <ElGalleryTwo/>
      {/* gallery three end */}

      {/* gallery four start */}
      <ElGalleryThree/>
      {/* gallery four end */}

      {/* gallery five start */}
      <CreativePortfolio element_style={true} />
      {/* gallery five end */}

      {/* gallery six start */}
      <ElGalleryFour />
      {/* gallery six end */}

      {/* gallery seven start */}
      <ElGalleryFive />
      {/* gallery seven end */}

      {/* gallery eight start */} 
      <ElGallerySix tooltip_hover={true} />
      {/* gallery eight end */}

      {/* gallery nine start */}
      <ElGallerySeven />
      {/* gallery nine end */}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(ElementsGalleryMain), { ssr: false });
