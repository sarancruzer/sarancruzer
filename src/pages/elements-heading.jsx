import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsHeadingMain from "@elements/elements-heading";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Heading'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsHeadingMain/>
      <Footer />
    </Wrapper>
  )
}

