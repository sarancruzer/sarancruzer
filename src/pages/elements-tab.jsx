import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsTabMain from "@elements/elements-tab";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Tab"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsTabMain />
      <Footer />
    </Wrapper>
  );
}
