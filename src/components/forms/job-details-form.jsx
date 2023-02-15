import React from "react";
// internal
import {
  Company,
  Email,
  LocationTwo,
  UserThree,
  MobilePhone,
} from "@svg/index";
import NiceSelect from "@ui/NiceSelect";

// single input group
function SingleInputGroup({ type, placeholder, icon }) {
  return (
    <div className="col-md-6">
      <div className="job__input">
        <input type={type} placeholder={placeholder} />
        <span>{icon}</span>
      </div>
    </div>
  );
}

const JobDetailsForm = () => {
  const selectHandler = (e) => {};
  return (
    <form>
      <div className="job__form-main mb-20">
        <div className="row">
          <SingleInputGroup
            type="text"
            placeholder="Enter your username"
            icon={<UserThree />}
          />
          <SingleInputGroup
            type="email"
            placeholder="Enter your email"
            icon={<Email />}
          />
          <SingleInputGroup
            type="text"
            placeholder="Phone number"
            icon={<MobilePhone />}
          />
          <SingleInputGroup
            type="text"
            placeholder="Address"
            icon={<LocationTwo />}
          />
          <SingleInputGroup
            type="text"
            placeholder="Current company"
            icon={<Company />}
          />

          <div className="col-md-6">
            <div className="job__input">
              <NiceSelect
                options={[
                  { value: "Male", text: "Male" },
                  { value: "Female", text: "Female" },
                  { value: "Other", text: "Other" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="job__form-details">
        <div className="row">
          <h3 className="job__form-details-title">Others Details</h3>
          <div className="col-lg-4 col-md-6">
            <div className="job__input no-icon">
              <input type="tel" placeholder="Expected salary" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="job__input no-icon">
              <input type="text" placeholder="LinkedIn profile link" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="job__input no-icon">
              <input type="text" placeholder="Facebook profile link" />
            </div>
          </div>
        </div>
        <p>
          How did you find out about Harry ? Do you know any of our external
          initiatives (like workshops, <br /> meetups, etc)? If you do, please
          write its name.*
        </p>

        <div className="job__input input-sm no-icon">
          <input type="text" placeholder="Example Meetup.com" />
        </div>

        <div className="job__form-level">
          <h3 className="job__form-level-title">
            What level do you apply for?*
          </h3>
          <div className="job__form-level-input">
            <input id="junior" type="radio" name="level" />
            <label htmlFor="junior">Junior</label>
          </div>
          <div className="job__form-level-input">
            <input id="mediior" type="radio" defaultChecked name="level" />
            <label htmlFor="mediior">Medior</label>
          </div>
          <div className="job__form-level-input">
            <input id="senior" type="radio" name="level" />
            <label htmlFor="senior">Senior</label>
          </div>
        </div>
        <div className="job__form-btn d-sm-flex align-items-start">
          <div className="job__form-btn-inner">
            <button type="submit" className="tp-btn">
              Submit Application
            </button>
          </div>
          <div className="job__form-btn-inner">
            <input type="file" id="cv" />
            <label htmlFor="cv" className="tp-btn is-purple">
              Upload Resume
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default JobDetailsForm;
