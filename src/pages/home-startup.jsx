import React from 'react';
import { FooterSix, HeaderSix, Wrapper } from '@layout/index';
import SEO from '@components/seo';
import HomeStartupBanner from '@components/hero-banners/home-startup-banner';
import StartupFeatures from '@components/features/startup-features';
import HomeStartUpAbout from '@components/abouts/home-stratup-about';
import StartUpCounter from '@components/counters/startup-counter';
import StartupServices from '@components/services/startup-services';
import StartupFeatureLists from '@components/feature-lists/startup-feature-lists';
import StartUpSupport from '@components/supports/start-up-support';
import StartUpTestimonial from '@components/testimonials/start-up-testimonial';
import StartUpPricing from '@components/pricings/start-up-pricing';
import StartUpFaqs from '@components/faqs/start-up-faqs';
import StartUpBlogs from '@components/blogs/start-up-blogs';
import StartUpCta from '@components/cta/start-up-cta';


const HomeStartUp = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Startup'} />
      <HeaderSix />
      <HomeStartupBanner />
      <StartupFeatures />
      <HomeStartUpAbout />
      <StartUpCounter/>
      <StartupServices/>
      <StartupFeatureLists/>
      <StartUpSupport/>
      <StartUpTestimonial/>
      <StartUpPricing/>
      <StartUpFaqs/>
      <StartUpBlogs/>
      <StartUpCta/>
      <FooterSix/>
    </Wrapper>
  );
};

export default HomeStartUp;