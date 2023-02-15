import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsButtonMain from "@elements/elements-button";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Buttons'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsButtonMain/>
      <Footer />
    </Wrapper>
  )
}

