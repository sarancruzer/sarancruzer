import NiceSelect from "@ui/NiceSelect";
import React, { useState } from "react";
import { CheckoutFormList } from "./billing-details";

const DifferentAddress = () => {
  const selectHandler = (e) => {};
  const [shipBox, setShipBox] = useState(false);
  return (
    <div className="different-address">
      <div className="ship-different-title">
        <h3>
          <label htmlFor="ship-box">
            Ship to a different address?
          </label>
          <input onClick={() => setShipBox(!shipBox)} id="ship-box" type="checkbox"
          checked={shipBox} readOnly />
        </h3>
      </div>
      {shipBox && (
        <div id="ship-box-info">
          <div className="row">
            <div className="col-md-12">
              <div className="country-select">
                <label>
                  Country <span className="required">*</span>
                </label>
                <NiceSelect
                  options={[
                    { value: "Bangladesh", text: "Bangladesh" },
                    { value: "Algeria", text: "Algeria" },
                    { value: "Afghanistan", text: "Afghanistan" },
                    { value: "Ghana", text: "Ghana" },
                    { value: "Albania", text: "Albania" },
                    { value: "Bahrain", text: "Bahrain" },
                    { value: "Colombia", text: "Colombia" },
                    { value: "Dominican Republic", text: "Dominican Republic" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="Bangladesh"
                />
              </div>
            </div>
            <CheckoutFormList
              col="6"
              label="First Name"
              placeholder="First Name"
            />
            <CheckoutFormList
              col="6"
              label="Last Name"
              placeholder="Last Name"
            />
            <CheckoutFormList
              col="12"
              label="Company Name"
              placeholder="example LTD."
            />
            <CheckoutFormList
              col="12"
              label="Address"
              placeholder="Street address"
            />
            <CheckoutFormList
              col="12"
              placeholder="Apartment, suite, unit etc. (optional)"
              isRequired={false}
            />
            <CheckoutFormList
              col="12"
              label="Town / City"
              placeholder="Town / City"
            />
            <CheckoutFormList
              col="6"
              label="State / County"
              placeholder="State / County"
            />
            <CheckoutFormList
              col="6"
              label="Postcode / Zip"
              placeholder="Postcode / Zip"
            />
            <CheckoutFormList
              col="6"
              type="email"
              label="Email Address"
              placeholder="Your Email"
            />
            <CheckoutFormList
              col="6"
              label="Phone"
              placeholder="Phone number"
            />
          </div>
        </div>
      )}
      <div className="order-notes">
        <div className="checkout-form-list">
          <label>Order Notes</label>
          <textarea
            id="checkout-mess"
            cols="30"
            rows="10"
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default DifferentAddress;
