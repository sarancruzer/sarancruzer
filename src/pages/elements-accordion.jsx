import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsAccordionMain from "@elements/elements-accordion";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Accordion'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsAccordionMain/>
      <Footer />
    </Wrapper>
  )
}

