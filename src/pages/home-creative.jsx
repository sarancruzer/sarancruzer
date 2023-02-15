import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderSeven, Wrapper } from '@layout/index';
import CreativeBanner from '@components/hero-banners/creative-banner';
import CreativeFeature from '@components/features/creative-feature';
import CreativeAbout from '@components/abouts/creative-about';
import CreativeCta from '@components/cta/creative-cta';
import CreativePortfolio from '@components/portfolios/creative-portfolio';
import CreativeTeam from '@components/teams/creative-team';
import CreativeBlogs from '@components/blogs/creative-blogs';
import CreativeTestimonial from '@components/testimonials/creative-testimonial';
import CreativeBrands from '@components/brands/creative-brands';
import CreativeCtaTwo from '@components/cta/creative-cta-2';


const HomeCreative = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Creative'} />
      <HeaderSeven/>
      <CreativeBanner/>
      <CreativeFeature/>
      <CreativeAbout/>
      <CreativeCta/>
      <CreativePortfolio/>
      <CreativeTeam/>
      <CreativeBlogs/>
      <CreativeTestimonial/>
      <CreativeBrands/>
      <CreativeCtaTwo/>
      <FooterSeven/>
    </Wrapper>
  );
};

export default HomeCreative;