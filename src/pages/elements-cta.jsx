import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsCtaMain from "@elements/elements-cta";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Cta'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsCtaMain/>
      <Footer />
    </Wrapper>
  )
}

