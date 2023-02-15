import React from 'react';
import ContactFormArea from './contact-form-area';
import ContactItemArea from './contact-item-area';
import ContactLocationArea from './contact-location-area';
import ContactSectionWrapper from './contact-section-wrapper';

const ContactArea = () => {
  return (
    <React.Fragment>
      <ContactSectionWrapper title="GET TO KNOW US" subtitle="Have a project in mind? Let’s talk." />
      <ContactItemArea/>
      <ContactFormArea/>
      <ContactLocationArea/>
    </React.Fragment>
  );
};

export default ContactArea;