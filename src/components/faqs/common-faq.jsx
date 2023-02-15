import React from "react";
// internal
import { DotsTwo, General, HighlightShapeTwo, Support } from "@svg/index";
import SingleFaq from "./single-faq";

// single nav
export function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
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

// tab item
function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      <div className="accordion" id={`${id}_accordion`}>
        {accordion_items.map((item) => (
          <SingleFaq key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const CommonFaq = ({ padd = "", padd_2 = "" }) => {
  return (
    <section
      className={`faq__area faq__style-3 p-relative z-index-1 ${
        padd ? `pt-${padd}` : ""
      } ${padd_2 ? `pb-${padd_2}` : "pb-115"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div
              className="faq__wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="section__title-wrapper-7 mb-60">
                <span className="section__title-pre-7">Common Questions</span>
                <h3 className="section__title-7">
                  Frequently <br /> asked{" "}
                  <span className="section__title-7-highlight">
                    questions
                    <HighlightShapeTwo />
                  </span>
                </h3>
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
                      icon={<General />}
                      title="General Questions"
                    />
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div
              className="faq__tab-content tp-accordion wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <div className="tab-content" id="nav-tabContent">
                <TabItem
                  active={true}
                  id="general"
                  accordion_items={[
                    {
                      id: "general-one",
                      title: "Global search engine optimization",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general_accordion",
                    },
                    {
                      id: "general-two",
                      title: " Complete Social Media Integration",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general_accordion",
                    },
                    {
                      id: "general-three",
                      title: "Branding Strategy for startups",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general_accordion",
                    },
                    {
                      id: "general-four",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "general_accordion",
                    },
                  ]}
                />
                <TabItem
                  id="community"
                  accordion_items={[
                    {
                      id: "community-five",
                      title: "Can I cancel my account at any time?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community_accordion",
                    },
                    {
                      id: "community-six",
                      title: "What happens after the license expires?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community_accordion",
                    },
                    {
                      id: "community-seven",
                      title: "Does Harry have any documentations?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community_accordion",
                    },
                    {
                      id: "community-eight",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "community_accordion",
                    },
                  ]}
                />
                <TabItem
                  id="support"
                  accordion_items={[
                    {
                      id: "support-nine",
                      title: "Can I cancel my account at any time?",
                      show: true,
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support_accordion",
                    },
                    {
                      id: "support-ten",
                      title: "What happens after the license expires?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support_accordion",
                    },
                    {
                      id: "support-eleven",
                      title: "Does Harry have any documentations?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support_accordion",
                    },
                    {
                      id: "support-twelve",
                      title: "How long do I get support & updates?",
                      desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      parent: "support_accordion",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonFaq;
