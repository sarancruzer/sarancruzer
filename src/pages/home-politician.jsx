import React from 'react';
import { FooterTen, HeaderEleven, Wrapper } from '@layout/index';
import SEO from '@components/seo';
import PoliticianBanner from '@components/hero-banners/politician-banner';
import PoliticianCta from '@components/cta/politician-cta';
import PoliticianFeature from '@components/features/politician-feature';
import PoliticianVision from '@components/visions/politician-vision';
import PoliticianCounter from '@components/counters/politician-counter';
import PoliticianEvents from '@components/events/politician-events';
import PoliticianBiography from '@components/biography/politician-biography';
import PoliticianTeams from '@components/teams/politician-teams';
import PoliticianDonate from '@components/donate/politician-donate';
import PoliticianBlogs from '@components/blogs/politician-blogs';
import PoliticianTestimonial from '@components/testimonials/politician-testimonial';
import PoliticianSubscribe from '@components/subscribe/politician-subscribe';


const HomePolitician = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Politician'} />
      <HeaderEleven/>
      <PoliticianBanner/>
      <PoliticianCta/>
      <PoliticianFeature/>
      <PoliticianVision/>
      <PoliticianCounter/>
      <PoliticianEvents/>
      <PoliticianBiography/>
      <PoliticianTeams/>
      <PoliticianDonate/>
      <PoliticianBlogs/>
      <PoliticianTestimonial/>
      <PoliticianSubscribe/>
      <FooterTen/>
    </Wrapper>
  );
};

export default HomePolitician;