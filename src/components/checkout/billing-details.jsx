import React, { useState } from "react";
// internal
import NiceSelect from "@ui/NiceSelect";

// checkout form list
export function CheckoutFormList({
  col,
  label,
  type = "text",
  placeholder,
  isRequired = true,
}) {
  return (
    <div className={`col-md-${col}`}>
      <div className="checkout-form-list">
        {label && (
          <label>
            {label} {isRequired && <span className="required">*</span>}
          </label>
        )}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

const BillingDetails = () => {
  const selectHandler = (e) => {};
  const [createAccount, setCreateAccount] = useState(false);
  return (
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

      <CheckoutFormList col="6" label="First Name" placeholder="First Name" />
      <CheckoutFormList col="6" label="Last Name" placeholder="Last Name" />
      <CheckoutFormList
        col="12"
        label="Company Name"
        placeholder="example LTD."
      />
      <CheckoutFormList col="12" label="Address" placeholder="Street address" />
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
      <CheckoutFormList col="6" label="Phone" placeholder="Phone number" />

      <div className="col-md-12">
        <div className="checkout-form-list create-acc">
          <input
            id="cbox"
            type="checkbox"
            onClick={() => setCreateAccount(!createAccount)}
            checked={createAccount}
            readOnly
          />
          <label htmlFor="cbox">
            Create an account?
          </label>
        </div>
        {createAccount && (
          <div id="cbox_info" className="checkout-form-list create-account">
            <p>
              Create an account by entering the information below. If you are a
              returning customer please login at the top of the page.
            </p>
            <label>
              Account password <span className="required">*</span>
            </label>
            <input type="password" placeholder="password" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingDetails;
