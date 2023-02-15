import React from 'react';
// internal
import BreadcrumbThree from '@components/common/breadcrumb/breadcrumb-3';
import PortfolioVideoArea from './portfolio-video';
import ImageBoxArea from './image-box-area';
import HeadingStyle from './heading-style';
import FeaturesArea from './features-area';
import SliderItems from '../slider-details/slider-items';
import PortfolioNavigation from '../classic-details/portfolio-navigation';
import PortfolioCommentArea from '../classic-details/portfolio-comment-area';

const PortfolioVideoDetailsArea = () => {
  return (
    <React.Fragment>
      <BreadcrumbThree/>
      <PortfolioVideoArea/>
      <ImageBoxArea/>
      <HeadingStyle/>
      <FeaturesArea/>
      <SliderItems padd='130' />
      <PortfolioNavigation/>
      <PortfolioCommentArea/>
    </React.Fragment>
  );
};

export default PortfolioVideoDetailsArea;