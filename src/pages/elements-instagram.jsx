import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsInstagramMain from "@elements/elements-instagram";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Instagram'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsInstagramMain/>
      <Footer />
    </Wrapper>
  )
}

