import {FooterFive, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioDetailsListArea from "@components/portfolio-details/list-details";


export default function PortfolioDetailsList() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <Header top_bar={false} header_black={true} commonOffCanvas={true} />
      <PortfolioDetailsListArea/>
      <FooterFive style_2={true} />
    </Wrapper>
  )
}

