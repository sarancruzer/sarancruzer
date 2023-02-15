import {FooterFour, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import BreadcrumbSeven from "@components/common/breadcrumb/breadcrumb-7";
import ServicesHome from "@components/services/services-home";
import ServicesAbout from "@components/abouts/services-about";
import ServicesVision from "@components/visions/services-vision";
import ServicesPortfolio from "@components/portfolios/services-portfolio";
import ServicesSupportArea from "@components/supports/services-support-area";
import ServicesSubscribe from "@components/subscribe/services-subscribe";


export default function Services() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <BreadcrumbSeven/>
      <ServicesHome style_2={true} />
      <ServicesAbout/>
      <ServicesVision/>
      <ServicesPortfolio/>
      <ServicesSupportArea/>
      <ServicesSubscribe/>
      <FooterFour style_2={true} />
    </Wrapper>
  )
}

