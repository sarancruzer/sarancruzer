import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsBrandMain from "@elements/elements-brand";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Brand"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsBrandMain />
      <Footer />
    </Wrapper>
  );
}
