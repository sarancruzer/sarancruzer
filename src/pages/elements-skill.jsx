import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsSkillMain from "@elements/elements-skill";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Skill"} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsSkillMain />
      <Footer />
    </Wrapper>
  );
}
