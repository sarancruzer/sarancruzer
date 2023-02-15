import { useRouter } from "next/router";
// internal
import { FooterEleven, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import products from "@data/products";
import ProductDetailsBreadcrumb from "@components/common/breadcrumb/product-details-breadcrumb";
import ProductDetailsArea from "@components/product-details/product-details-area";
import ProductDetailsTabArea from "@components/product-details/product-details-tab-area";
import RelatedProducts from "@components/product-details/related-products";
import ShopCta from "@components/cta/shop-cta";

export default function DynamicShopDetails() {
  const router = useRouter();
  const {productId} = router.query;
  const singleProduct = products.find(item => Number(item.id) === Number(productId))
  return (
    <Wrapper>
      <SEO pageTitle={"Shop Details"} />
      <HeaderTwelve style_2={true} />
      <ProductDetailsBreadcrumb />
      <ProductDetailsArea product={singleProduct} />
      <ProductDetailsTabArea product={singleProduct} />
      <RelatedProducts />
      <ShopCta />
      <FooterEleven />
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
