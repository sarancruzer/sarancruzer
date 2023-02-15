import React from 'react';
// internal
import BreadcrumbTwo from '@components/common/breadcrumb/breadcrumb-2';
import PortfolioListArea from './portfolio-list-area';
import PortfolioNavigation from '../classic-details/portfolio-navigation';
import PortfolioCommentArea from '../classic-details/portfolio-comment-area';

const PortfolioDetailsListArea = () => {
  return (
    <React.Fragment>
      <BreadcrumbTwo/>
      <PortfolioListArea/>
      <PortfolioNavigation/>
      <PortfolioCommentArea/>
    </React.Fragment>
  );
};

export default PortfolioDetailsListArea;