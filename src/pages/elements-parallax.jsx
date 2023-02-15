import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsParallaxMain from "@elements/elements-parallax";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Parallax"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsParallaxMain />
      <Footer />
    </Wrapper>
  );
}
