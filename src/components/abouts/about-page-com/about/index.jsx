import React from 'react';
// internal
import PortfolioAwards from '@components/awards/portfolio-awards';
import AgencyBrands from '@components/brands/agency-brands';
import PortfolioService from '@components/services/portfolio-service';
import HomeTeams from '@components/teams/home-teams';
import AboutFaqs from './about-faqs';
import AboutGallery from './about-gallery';
import AboutTopBar from './about-top-bar';
import TextArea from './text-area';
import AboutCta from '@components/cta/about-cta';

const AboutArea = () => {
  return (
    <React.Fragment>
      <AboutTopBar/>
      <TextArea/>
      <PortfolioService style_2={true} />
      <AboutGallery/>
      <PortfolioAwards style_2={true} />
      <AboutFaqs/>
      <HomeTeams style_2={true} />
      <AgencyBrands spacing={true} style_2={true} />
      <AboutCta/>
    </React.Fragment>
  );
};

export default AboutArea;