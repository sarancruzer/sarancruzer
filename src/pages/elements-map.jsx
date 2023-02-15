import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsMapMain from "@elements/elements-map";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Map'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsMapMain/>
      <Footer />
    </Wrapper>
  )
}

