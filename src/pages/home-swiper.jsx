import React from 'react';
import SEO from '@components/seo';
import { HeaderThirteen, Wrapper } from '@layout/index';
import SwiperSliderArea from '@components/swiper-slider';


const HomeSwiper = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Swiper'} />
      <HeaderThirteen/>
      <SwiperSliderArea/>
    </Wrapper>
  );
};

export default HomeSwiper;