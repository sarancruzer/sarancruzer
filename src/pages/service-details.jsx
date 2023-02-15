import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import BreadcrumbNine from "@components/common/breadcrumb/breadcrumb-9";
import ServiceDetailsArea from "@components/service-details/service-details-area";


export default function ServicesDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <BreadcrumbNine title='Mobile App' />
      <ServiceDetailsArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

