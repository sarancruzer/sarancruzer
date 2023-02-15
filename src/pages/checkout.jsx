import { FooterSix, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import CartBreadcrumb from "@components/common/breadcrumb/cart-breadcrumb";
import CouponArea from "@components/checkout/coupon-area";
import CheckoutArea from "@components/checkout/checkout-area";


export default function Checkout() {
  return (
    <Wrapper>
      <SEO pageTitle={"Checkout"} />
      <HeaderTwelve style_2={true} />
      <CartBreadcrumb title='Checkout' subtitle='Checkout' />
      <CouponArea/>
      <CheckoutArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
