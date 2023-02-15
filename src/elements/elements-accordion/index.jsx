import React from 'react';
// internal
import ElementBreadcrumb from '@components/common/breadcrumb/element-breadcrumb';
import UnderlineFaq from './underline-faq';
import StartUpFaqs from '@components/faqs/start-up-faqs';
import AboutFaqs from '@components/abouts/about-page-com/about/about-faqs';
import CommonFaq from '@components/faqs/common-faq';
import BorderAccordion from './border-accordion';
import AccordionWithTab from './accordion-with-tab';

const ElementsAccordionMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our accordion" />
      <UnderlineFaq/>
      <div className="tp-separator"></div>
      <StartUpFaqs element_faq={true} />
      <AboutFaqs element_faq={true}/>
      <CommonFaq padd="105" element_faq={true} />
      <div className="tp-separator"></div>
      <BorderAccordion />
      <div className="tp-separator"></div>
      <AccordionWithTab element_faq={true}/>
    </React.Fragment>
  );
};

export default ElementsAccordionMain;