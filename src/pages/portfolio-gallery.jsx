import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";


export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Gallery'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <PortfolioClassic tooltip_hover={true} />
      <Footer/>
    </Wrapper>
  )
}
