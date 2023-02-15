import React from 'react';
import NiceSelect from '@ui/NiceSelect';

const SliderForm = () => {
  const selectHandler = e => {

  }
  return (
    <form action="#">
      <div className="slider__form-wrapper flex-wrap">
        <div className="slider__form-input">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="slider__form-input">
          <input type="text" placeholder="Your Email" />
        </div>
        <div className="slider__form-input has-select">
        <NiceSelect
          options={[
            { value: "Select Event", text: "Select Event" },
            { value: "Wedding", text: "Wedding" },
            { value: "Photography", text: "Photography" },
            { value: "Consulting", text: "Consulting" },
          ]}
          defaultCurrent={0}
          onChange={selectHandler}
          name="Select Event"
        />
        </div>
        <div className="slider__form-input">
          <button type="button" className="slider-form-btn tp-link-btn-3">Join the event <i className="fa-regular fa-arrow-right"></i></button>
        </div>
      </div>
    </form>
  );
};

export default SliderForm;