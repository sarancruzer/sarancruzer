import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsShopMain from "@elements/elements-shop";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Shop"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsShopMain />
      <Footer />
    </Wrapper>
  );
}
