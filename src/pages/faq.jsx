import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import FaqBreadcrumb from "@components/common/breadcrumb/faq-breadcrumb";
import FaqArea from "@components/faqs/faq-area";


export default function Faq() {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
      <FaqBreadcrumb/>
      <FaqArea/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

