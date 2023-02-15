import React from 'react';
// internal
import SliderItems from './slider-items';
import PortfolioCommentArea from '../classic-details/portfolio-comment-area';
import PortfolioNavigation from '../classic-details/portfolio-navigation';
import SliderPortfolioArea from './slider-portfolio-area';

const SliderDetails = () => {
  return (
    <React.Fragment>
      <SliderPortfolioArea/>
      <SliderItems/>
      <PortfolioNavigation/>
      <PortfolioCommentArea/>
    </React.Fragment>
  );
};

export default SliderDetails;