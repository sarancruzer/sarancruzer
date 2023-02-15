import React from "react";
import SingleFaq from "./single-faq";

// faq items
export function AccordionItems({ parent_id }) {
  // data
  const faq_items = [
    {
      id: parent_id ? `one-${parent_id}` : "One",
      title: "Can I cancel my account at any time?",
      show: true,
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
      parent: parent_id ? parent_id : "faqaccordion",
    },
    {
      id: parent_id ? `two-${parent_id}` : "Two",
      title: "What happens after the license expires?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
      parent: parent_id ? parent_id : "faqaccordion",
    },
    {
      id: parent_id ? `three-${parent_id}` : "Three",
      title: "Does Harry have any documentations?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
      parent: parent_id ? parent_id : "faqaccordion",
    },
    {
      id: parent_id ? `four-${parent_id}` : "Four",
      title: "How long do I get support & updates?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
      parent: parent_id ? parent_id : "faqaccordion",
    },
  ];
  return (
    <div className="accordion" id={`${parent_id ? parent_id : "faqaccordion"}`}>
      {faq_items.map((item) => (
        <SingleFaq key={item.id} item={item} />
      ))}
    </div>
  );
}

const HomeFaq = () => {
  return (
    <>
      <section className="faq__area pb-120">
        <div className="container">
          <div className="faq__inner p-relative">
            <div className="faq__text d-none d-lg-block">
              <h3 data-text="faq">faq</h3>
            </div>
            <div className="row justify-content-end">
              <div className="col-xxl-9 col-xl-9 col-lg-9">
                <div className="faq__wrapper tp-accordion pt-65">
                  <AccordionItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFaq;
