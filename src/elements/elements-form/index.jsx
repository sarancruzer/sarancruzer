import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import LawyerContact from "@components/contacts/lawyer-contact";
import PortfolioContact from "@components/contacts/portfolio-contact";
import { HomeVerticalContactArea } from "@components/verticle-slider/slider-item-5";
import ContactFormArea from "@components/contacts/contact-area/contact-form-area";
import PortfolioCommentArea from "@components/portfolio-details/classic-details/portfolio-comment-area";
import ClassicFormArea from "@components/contacts/contact-classic/classic-form-area";
import HelpCenterContacts from "@components/contacts/help-center-contacts";

const ElementsFormMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our form styles" />
      {/* style one start */}
      <LawyerContact element_style={true} />
      {/* style one end */}
      <div className="tp-separator"></div>
      {/* style two start */}
      <PortfolioContact element_style={true} />
      {/* style two end */}

      {/* style three start */}
      <div className="contact__area grey-bg-18 pt-60 pb-120">
        <div className="container">
          <HomeVerticalContactArea element_style={true} />
        </div>
      </div>
      {/* style three end */}

      {/* style four start */}
      <ContactFormArea element_style={true} />
      {/* style four end */}

      {/* style five start */}
      <PortfolioCommentArea />
      {/* style five end */}

      {/* style six start */}
      <ClassicFormArea element_style={true} />
      {/* style six end */}

      {/* style seven start */}
      <HelpCenterContacts />
      {/* style seven end */}
    </React.Fragment>
  );
};

export default ElementsFormMain;
