import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { PortfolioMasonryArea } from "@components/portfolios/portfolio-page-com/portfolio-masonry";


export default function PortfolioMasonry() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Masonry'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <PortfolioMasonryArea/>
      <Footer/>
    </Wrapper>
  )
}
