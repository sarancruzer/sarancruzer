import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioSliderArea from "@components/portfolios/portfolio-page-com/portfolio-slider";

export default function PortfolioSlider() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Slider"} />
      <Header
        top_bar={false}
        header_solid={true}
        commonOffCanvas={true}
        header_solid_2="header__white-solid-2 header__transparent"
      />
      <PortfolioSliderArea />
    </Wrapper>
  );
}
