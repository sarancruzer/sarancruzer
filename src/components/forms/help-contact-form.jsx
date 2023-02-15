import React from "react";
import NiceSelect from "@ui/NiceSelect";

const HelpContactForm = () => {
  const selectHandler = (e) => {};
  return (
    <form id="contact-form" onSubmit={e => e.preventDefault()}>
      <div className="contact__input-3 contact__input-2">
        <input name="name" type="text" placeholder="Full Name *" />
      </div>
      <div className="contact__input-3 contact__input-2">
        <input name="email" type="email" placeholder="Your Email *" />
      </div>
      <div className="contact__input-3 contact__input-2">
        <NiceSelect
          options={[
            { value: "Choose Your Topic", text: "Choose Your Topic" },
            { value: "Topic one", text: "Topic one" },
            { value: "Topic Two", text: "Topic Two" },
            { value: "Topic Three", text: "Topic Three" },
            { value: "Topic Four", text: "Topic Four" },
          ]}
          defaultCurrent={0}
          onChange={selectHandler}
          name="Choose Your Topic"
        />
      </div>
      <div className="contact__input-3  contact__input-2">
        <textarea name="message" placeholder="Enter Message here..."></textarea>
      </div>
      <div className="contact__btn-3 mt-10">
        <button type="submit" className="tp-btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default HelpContactForm;
