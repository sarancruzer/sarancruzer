import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsSubscribeMain from "@elements/elements-subscribe";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Subscribe"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsSubscribeMain />
      <Footer />
    </Wrapper>
  );
}
