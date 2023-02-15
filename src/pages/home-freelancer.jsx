import React from 'react';
import SEO from '@components/seo';
import { FooterThree, HeaderThree, Wrapper } from '@layout/index';
import HomeFreelancerAbout from '@components/abouts/home-freelancer-about';
import FreelancerAward from '@components/awards/freelancer-award';
import FreelancerBlogs from '@components/blogs/freelancer-blogs';
import HomeFreelancerBrands from '@components/brands/home-freelancer-brands';
import FreelancerCta from '@components/cta/freelancer-cta';
import HomeFreelancerBanner from '@components/hero-banners/home-freelancer-banner';
import HomeFreelancerPortfolio from '@components/portfolios/home-freelancer-portfolio';
import FreelancerSkills from '@components/skills/freelancer-skills';
import FreelancerTestimonial from '@components/testimonials/freelancer-testimonial';

const HomeFreelancer = () => {
  return (
    <Wrapper>
      <SEO pageTitle='Home Freelancer' />
      <HeaderThree/>
      <HomeFreelancerBanner/>
      <HomeFreelancerBrands/>
      <HomeFreelancerAbout/>
      <HomeFreelancerPortfolio/>
      <FreelancerSkills/>
      <FreelancerAward/>
      <FreelancerTestimonial/>
      <FreelancerBlogs/>
      <FreelancerCta/>
      <FooterThree/>
    </Wrapper>
  );
};

export default HomeFreelancer;