import React from 'react';
import SEO from '@components/seo';
import { FooterFour, HeaderFour, Wrapper } from '@layout/index';
import HomeAgencyBanner from '@components/hero-banners/home-agency-banner';
import ServicesAgency from '@components/services/services-agency';
import HomeAgencyAbout from '@components/abouts/home-agency-about';
import AgencyCounter from '@components/counters/agency-counter';
import HomeAgencyPortfolio from '@components/portfolios/home-agency-portfolio';
import AgencyAward from '@components/awards/agency-award';
import AgencyPricing from '@components/pricings/agency-pricing';
import AgencyTestimonial from '@components/testimonials/agency-testimonial';
import AgencyBrands from '@components/brands/agency-brands';
import AgencyBlogs from '@components/blogs/agency-blogs';
import AgencyCta from '@components/cta/agency-cta';

const HomeAgency = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Agency'} />
      <HeaderFour/>
      <HomeAgencyBanner/>
      <ServicesAgency/>
      <HomeAgencyAbout/>
      <AgencyCounter/>
      <HomeAgencyPortfolio/>
      <AgencyAward/>
      <AgencyPricing/>
      <AgencyTestimonial/>
      <AgencyBrands/>
      <AgencyBlogs/>
      <AgencyCta/>
      <FooterFour/>
    </Wrapper>
  );
};

export default HomeAgency;