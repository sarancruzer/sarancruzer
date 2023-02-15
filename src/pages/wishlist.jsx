import { FooterSix, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import CartBreadcrumb from "@components/common/breadcrumb/cart-breadcrumb";
import WishlistArea from "@components/cart-wishlist/wishlist-area";

export default function Wishlist() {
  return (
    <Wrapper>
      <SEO pageTitle={"Wishlist"} />
      <HeaderTwelve style_2={true} />
      <CartBreadcrumb title='My Wishlist' subtitle='Wishlist' />
      <WishlistArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  );
}
