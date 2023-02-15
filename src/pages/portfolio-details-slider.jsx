import {FooterFive, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderDetails from "@components/portfolio-details/slider-details";


export default function PortfolioDetailsSlider() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details Slider'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true}/>
      <SliderDetails/>
      <FooterFive style_2={true} />
    </Wrapper>
  )
}

