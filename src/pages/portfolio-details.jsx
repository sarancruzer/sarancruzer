import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioDetailsArea from "@components/portfolio-details/classic-details";


export default function PortfolioDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Details"} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <PortfolioDetailsArea />
      <Footer />
    </Wrapper>
  );
}
