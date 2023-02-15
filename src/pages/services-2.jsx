import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import BreadcrumbEight from "@components/common/breadcrumb/breadcrumb-8";
import ServicesTwoArea from "@components/services/services-2-area";


export default function ServicesTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Two'} />
      <Header top_bar={false} commonOffCanvas={true} />
      <BreadcrumbEight title={<>Tech Solutions <br /> for Business</>} />
      <ServicesTwoArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

