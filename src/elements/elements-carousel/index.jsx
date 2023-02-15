import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import AboutGallery from "@components/abouts/about-page-com/about/about-gallery";
import SliderPortItems from "@components/portfolio-details/classic-details/slider-port-items";
import PortfolioSliderGalleryEl from "./portfolio-slider-gallery-el";
import CarouselWithControls from "./carousel-with-controls";

const ElementsCarouselMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our carousel" />
      <AboutGallery element_style={true} />
      <SliderPortItems element_style={true} />
      <PortfolioSliderGalleryEl/>
      <CarouselWithControls/>
    </React.Fragment>
  );
};

export default ElementsCarouselMain;
