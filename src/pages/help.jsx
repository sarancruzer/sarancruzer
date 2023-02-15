import {FooterSix, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import HelpCenterArea from "@components/help-area/help-center-area";
import HelpCenterArticles from "@components/articles/help-center-articles";
import CommonFaq from "@components/faqs/common-faq";
import HelpCenterContacts from "@components/contacts/help-center-contacts";


export default function Help() {
  return (
    <Wrapper>
      <SEO pageTitle={'Help Center'} />
      <Header top_bar={false} header_black={true} commonOffCanvas={true} />
      <HelpCenterArea/>
      <HelpCenterArticles/>
      <CommonFaq/>
      <HelpCenterContacts/>
      <FooterSix style_2={true} />
    </Wrapper>
  )
}

