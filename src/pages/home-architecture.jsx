import React from 'react';
import SEO from '@components/seo';
import { FooterNine, HeaderNine, Wrapper } from '@layout/index';
import ArchitectureBanner from '@components/hero-banners/architecture-banner';
import ArchitectureAbout from '@components/abouts/architecture-about';
import ArchitectureCounter from '@components/counters/architecture-counter';
import ArchitecturePortfolio from '@components/portfolios/architecture-portfolio';
import ArchitectureServices from '@components/services/architecture-services';
import ArchitectureAwards from '@components/awards/architecture-awards';
import ArchitectureVideoArea from '@components/video-area/architecture-video-area';
import ArchitectureTestimonial from '@components/testimonials/architecture-testimonial';
import ArchitectureTeams from '@components/teams/architecture-teams';
import ArchBlogs from '@components/blogs/arch-blogs';



const HomeArchitecture = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Architecture'} />
      <HeaderNine/>
      <ArchitectureBanner/>
      <ArchitectureAbout/>
      <ArchitectureCounter/>
      <ArchitecturePortfolio/>
      <ArchitectureServices/>
      <ArchitectureAwards/>
      <ArchitectureVideoArea/>
      <ArchitectureTestimonial/>
      <ArchitectureTeams/>
      <ArchBlogs/>
      <FooterNine/>
    </Wrapper>
  );
};

export default HomeArchitecture;