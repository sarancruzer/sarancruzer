import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsProcessMain from "@elements/elements-process";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Process"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsProcessMain />
      <Footer />
    </Wrapper>
  );
}
