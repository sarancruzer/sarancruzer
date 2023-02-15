import React from "react";
// internal
import { DotsTwo, General, Support } from "@svg/index";
import { NavItem } from "@components/faqs/common-faq";
import { TabItem } from "@components/faqs/faq-area";

const AccordionWithTab = () => {
  return (
    <section className="faq__area pt-110 pb-25">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Accordion with tab</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="faq__tab-2 tp-tab mb-50">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <NavItem
                    id="general-faq"
                    icon={<General />}
                    title="General Questions"
                  />
                </li>
                <li className="nav-item" role="presentation">
                  <NavItem
                    active={true}
                    id="community-faq"
                    icon={<DotsTwo />}
                    title="Community"
                  />
                </li>
                <li className="nav-item" role="presentation">
                  <NavItem
                    id="support-faq"
                    icon={<Support />}
                    title="Support"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="faq__item-wrapper">
          <div className="tab-content" id="faqTabContent">
            {/* general */}
            <TabItem
              id="general-faq"
              accordion_items={[
                {
                  title: (
                    <>
                      Orders <br />& Shipping
                    </>
                  ),
                  accordions: [
                    {
                      id: "general-1",
                      title: "Global search engine optimization",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-1_accordion",
                    },
                    {
                      id: "general-2",
                      title: " Complete Social Media Integration",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-1_accordion",
                    },
                    {
                      id: "general-3",
                      title: "Branding Strategy for startups",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-1_accordion",
                    },
                    {
                      id: "general-4",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-1_accordion",
                    },
                  ],
                },
                {
                  title: (
                    <>
                      Returns <br />& Exchanges
                    </>
                  ),
                  accordions: [
                    {
                      id: "general-5",
                      title: "How do I know my package has shipped?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-2_accordion",
                    },
                    {
                      id: "general-6",
                      title:
                        "Why are certain products unavailable to ship to Internationally?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-2_accordion",
                    },
                    {
                      id: "general-7",
                      title: "Why is my tracking number not updating?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-2_accordion",
                    },
                  ],
                },
                {
                  title: "Discounts",
                  accordions: [
                    {
                      id: "general-8",
                      title: "How do I know my package has shipped?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-3_accordion",
                    },
                    {
                      id: "general-9",
                      title:
                        "Why are certain products unavailable to ship to Internationally?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-3_accordion",
                    },
                    {
                      id: "general-10",
                      title: "Why is my tracking number not updating?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general-faq-3_accordion",
                    },
                  ],
                },
              ]}
            />

            {/* community */}
            <TabItem
              active={true}
              id="community-faq"
              accordion_items={[
                {
                  title: (
                    <>
                      Returns <br />& Exchanges
                    </>
                  ),
                  accordions: [
                    {
                      id: "community-11",
                      title: "Can I cancel my account at any time?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community-faq-1_accordion",
                    },
                    {
                      id: "community-12",
                      title: "What happens after the license expires?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community-faq-1_accordion",
                    },
                    {
                      id: "community-13",
                      title: "Does Harry have any documentations?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community-faq-1_accordion",
                    },
                    {
                      id: "community-14",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community-faq-1_accordion",
                    },
                  ],
                },
              ]}
            />

            {/* support */}
            <TabItem
              id="support-faq"
              accordion_items={[
                {
                  title: "Discounts",
                  accordions: [
                    {
                      id: "support-15",
                      title: "Can I cancel my account at any time?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support-faq-1_accordion",
                    },
                    {
                      id: "support-16",
                      title: "What happens after the license expires?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support-faq-1_accordion",
                    },
                    {
                      id: "support-17",
                      title: "Does Harry have any documentations?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support-faq-1_accordion",
                    },
                    {
                      id: "support-18",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support-faq-1_accordion",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionWithTab;
