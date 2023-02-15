import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsIconBoxMain from "@elements/elements-iconbox";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element IconBox'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsIconBoxMain/>
      <Footer />
    </Wrapper>
  )
}

