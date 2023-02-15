import {FooterFive, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioVideoDetailsArea from "@components/portfolio-details/video-details";


export default function PortfolioDetailsVideo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <Header top_bar={false} header_black={true} commonOffCanvas={true} />
      <PortfolioVideoDetailsArea/>
      <FooterFive style_2={true} />
    </Wrapper>
  )
}

