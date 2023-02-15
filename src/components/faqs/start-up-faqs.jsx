import React from "react";
import Image from "next/image";
// internal
import {
  HighlightShapeThree,
  StartUpFaqOne,
  StartUpFaqThree,
  StartUpFaqTwo,
} from "@svg/index";
import shape from "@assets/img/faq/faq-shape-1.png";
import SingleFaq from "./single-faq";

// single nav item
function NavItem({ active, id, icon, title }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#nav-${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// tab contents
function TabContent({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div className="accordion" id={`${id}_accordion`}>
        {accordion_items.map((item, i) => (
          <SingleFaq
            key={i}
            item={{
              ...item,
              parent: `${id}_accordion`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const StartUpFaqs = ({ element_faq = false }) => {
  return (
    <>
      <section
        className={`faq__area p-relative z-index-1 pt-120 pb-${
          element_faq ? "105" : "120"
        }`}
      >
        {!element_faq && (
          <div className="faq__shape">
            <Image className="faq__shape-1" src={shape} alt="shape" />
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="faq__wrapper">
                <div className="section__title-wrapper-7 mb-60">
                  <span className="section__title-pre-7">
                    {element_faq ? "Tab Accordion" : "Common Questions"}
                  </span>
                  {!element_faq && (
                    <h3 className="section__title-7">
                      Frequently <br /> asked{" "}
                      <span className="section__title-7-highlight">
                        questions
                        <HighlightShapeThree />
                      </span>
                    </h3>
                  )}
                  {element_faq && (
                    <h3 className="section__title-7">
                      Accordion <br /> with{" "}
                      <span className="section__title-7-highlight">
                        rounded tab
                        <HighlightShapeThree />
                      </span>
                    </h3>
                  )}
                </div>

                <div className="faq__tab tp-tab pr-200">
                  <nav>
                    <div
                      className="nav nav-tabs flex-column"
                      id="nav-tab"
                      role="tablist"
                    >
                      <NavItem
                        active={true}
                        id="general"
                        icon={<StartUpFaqOne />}
                        title="General Questions"
                      />
                      <NavItem
                        id="community"
                        icon={<StartUpFaqTwo />}
                        title="Community"
                      />
                      <NavItem
                        id="support"
                        icon={<StartUpFaqThree />}
                        title="Support"
                      />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="faq__tab-content tp-accordion">
                <div className="tab-content" id="nav-tabContent">
                  <TabContent
                    active={true}
                    id="nav-general"
                    accordion_items={[
                      {
                        id: "One",
                        show: true,
                        title: "Global search engine optimization",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Two",
                        title: "Complete Social Media Integration",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Three",
                        title: "Branding Strategy for startups",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Four",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                    ]}
                  />
                  <TabContent
                    id="nav-community"
                    accordion_items={[
                      {
                        id: "Five",
                        show: true,
                        title:
                          "What kind of marketing efforts do you specialize in?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Six",
                        title: "What is video marketing and why do I need it?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Seven",
                        title:
                          " Does my business really need digital marketing?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Eight",
                        title: "Do you offer startup packages?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                    ]}
                  />
                  <TabContent
                    id="nav-support"
                    accordion_items={[
                      {
                        id: "Nine",
                        show: true,
                        title: "Who is the typical Curious client?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Ten",
                        title: "What are your typical timelines?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Eleven",
                        title: "Do you offer flexible payment terms?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                      {
                        id: "Twelve",
                        title: "Do you trade services for equity?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpFaqs;
