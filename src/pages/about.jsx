import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import AboutArea from "@components/abouts/about-page-com/about";


export default function About() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <AboutArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

