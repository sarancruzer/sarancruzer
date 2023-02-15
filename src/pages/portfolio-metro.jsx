import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioMetroArea from "@components/portfolios/portfolio-page-com/portfolio-metro";


export default function PortfolioMetro() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Metro'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <PortfolioMetroArea />
      <Footer />
    </Wrapper>
  )
}
