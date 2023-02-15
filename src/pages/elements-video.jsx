import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsVideoMain from "@elements/elements-video";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Video"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsVideoMain />
      <Footer />
    </Wrapper>
  );
}
