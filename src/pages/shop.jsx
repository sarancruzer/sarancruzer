import {FooterSix, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopArea from "@components/shop/shop-area";
import ShopCta from "@components/cta/shop-cta";


export default function Shop() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <HeaderTwelve style_2={true} />
      <ShopBreadcrumb/>
      <ShopArea/>
      <ShopCta/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

