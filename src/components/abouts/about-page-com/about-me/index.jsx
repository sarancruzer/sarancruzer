import React from 'react';
// internal
import AboutMeTestimonial from '@components/testimonials/about-me-testimonial';
import PortfolioService from '@components/services/portfolio-service';
import PortfolioSkills from '@components/skills/portfolio-skills';
import AgencyBrands from '@components/brands/agency-brands';
import AboutCta from '@components/cta/about-cta';
import AboutMeBreadcrumb from './about-me-breadcrumb';
import AboutMeInfo from './about-me-info';
import AboutMePortfolio from './about-me-portfolio';

const AboutMeArea = () => {
  return (
    <React.Fragment>
      <AboutMeBreadcrumb/>
      <AboutMeInfo/>
      <PortfolioService style_2={true} />
      <PortfolioSkills/>
      <AboutMePortfolio/>
      <AgencyBrands spacing={true} style_2={true} />
      <AboutMeTestimonial/>
      <AboutCta/>
    </React.Fragment>
  );
};

export default AboutMeArea;