import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import AboutMeArea from "@components/abouts/about-page-com/about-me";


export default function AboutMe() {
  return (
    <Wrapper>
      <SEO pageTitle={'About Me'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <AboutMeArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

