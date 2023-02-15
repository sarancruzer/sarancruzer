import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsTeamMain from "@elements/elements-team";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Team"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsTeamMain />
      <Footer />
    </Wrapper>
  );
}
