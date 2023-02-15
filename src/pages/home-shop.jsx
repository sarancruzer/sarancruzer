import React from 'react';
import { FooterEleven, HeaderTwelve, Wrapper } from '@layout/index';
import SEO from '@components/seo';
import ShopHeroBanner from '@components/hero-banners/shop-hero-banner';
import ShopCategory from '@components/shop/shop-category';
import ShopProducts from '@components/shop/shop-products';
import ShopBanner from '@components/shop/shop-banner';
import ProductFeature from '@components/features/product-feature';
import ShopCta from '@components/cta/shop-cta';


const HomeShop = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Shop'} />
      <HeaderTwelve/>
      <ShopHeroBanner/>
      <ShopCategory/>
      <ShopProducts/>
      <ShopBanner/>
      <ProductFeature/>
      <ShopCta/>
      <FooterEleven/>
    </Wrapper>
  );
};

export default HomeShop;