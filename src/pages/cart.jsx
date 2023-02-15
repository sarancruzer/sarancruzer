import { FooterSix, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import CartBreadcrumb from "@components/common/breadcrumb/cart-breadcrumb";
import CartArea from "@components/cart-wishlist/cart-area";

export default function Cart() {
  return (
    <Wrapper>
      <SEO pageTitle={"Cart"} />
      <HeaderTwelve style_2={true} />
      <CartBreadcrumb title='My Cart' subtitle='Cart' />
      <CartArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
