import React from 'react';
import SEO from '@components/seo';
import { FooterTwo, HeaderTwo, Wrapper } from '@layout/index';
import HomeLawyerAbout from '@components/abouts/home-lowyer-about';
import HomeAward from '@components/awards/home-award';
import LawyerBlogs from '@components/blogs/lawyer-blogs';
import LawyerContact from '@components/contacts/lawyer-contact';
import LawyerCounter from '@components/counters/lawyer-counter';
import LawyerFacts from '@components/fun-facts/lawyer-facts';
import HomeLowyerBanner from '@components/hero-banners/home-lowyer-banner';
import LawyerHistory from '@components/histories/lawyer-history';
import HomeLowyerCase from '@components/portfolios/home-lowyer-case';
import ServicesLawyer from '@components/services/services-lawyer';
import LawyerTeams from '@components/teams/lawyer-teams';
import LawyerTestimonial from '@components/testimonials/lawyer-testimonial';
import LawyerVideoArea from '@components/video-area/lawyer-video-area';


const HomeLower = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Lawyer'} />
      <HeaderTwo/>
      <HomeLowyerBanner/>
      <HomeAward/>
      <HomeLowyerCase/>
      <HomeLawyerAbout/>
      <LawyerFacts/>
      <LawyerHistory/>
      <LawyerVideoArea/>
      <ServicesLawyer/>
      <LawyerBlogs/>
      <LawyerTestimonial/>
      <LawyerTeams/>
      <LawyerCounter/>
      <LawyerContact/>
      <FooterTwo/>
    </Wrapper>
  );
};

export default HomeLower;