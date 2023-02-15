import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbOne from "@components/common/breadcrumb/breadcrumb-1";
import PortfolioGridCol from "@components/portfolios/portfolio-page-com/portfolio-grid-col";
import PortfolioTwoCta from "@components/cta/portfolio-2-cta";


export default function PortfolioTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Two'} />
      <Header top_bar={false} transparent={true} commonOffCanvas={true} />
      <BreadcrumbOne/>
      <PortfolioGridCol/>
      <PortfolioTwoCta/>
      <Footer/>
    </Wrapper>
  )
}
