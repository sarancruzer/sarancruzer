import AgencyCounter from '@components/counters/agency-counter';
import React from 'react';
import PortfolioArea from './portfolio-area';
import PortfolioCommentArea from './portfolio-comment-area';
import PortfolioImages from './portfolio-images';
import PortfolioNavigation from './portfolio-navigation';
import SkillArea from './skill-area';
import SliderPortItems from './slider-port-items';

const PortfolioDetailsArea = () => {
  return (
    <React.Fragment>
      <PortfolioArea/>
      <SliderPortItems/>
      <SkillArea/>
      <AgencyCounter spacing="90" />
      <PortfolioImages/>
      <PortfolioNavigation/>
      <PortfolioCommentArea/>
    </React.Fragment>
  );
};

export default PortfolioDetailsArea;