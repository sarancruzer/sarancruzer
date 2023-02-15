import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";

export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio"} />
      <Header header_solid={true} top_bar={false} commonOffCanvas={true} />
      <PortfolioClassic />
      <Footer />
    </Wrapper>
  );
}
