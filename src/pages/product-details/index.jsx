import {FooterEleven, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import products from "@data/products";
import ProductDetailsBreadcrumb from "@components/common/breadcrumb/product-details-breadcrumb";
import ProductDetailsArea from "@components/product-details/product-details-area";
import ProductDetailsTabArea from "@components/product-details/product-details-tab-area";
import RelatedProducts from "@components/product-details/related-products";
import ShopCta from "@components/cta/shop-cta";


export default function ShopDetails() {
  const singleProduct = products[0];
  return (
    <Wrapper>
      <SEO pageTitle={'Shop Details'} />
      <HeaderTwelve style_2={true} />
      <ProductDetailsBreadcrumb/>
      <ProductDetailsArea product={singleProduct} />
      <ProductDetailsTabArea product={singleProduct} />
      <RelatedProducts/>
      <ShopCta/>
      <FooterEleven/>
    </Wrapper>
  )
}

