import {Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsBlogPostMain from "@elements/elements-blog-post";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Blog Post'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <ElementsBlogPostMain/>
      <Footer />
    </Wrapper>
  )
}

