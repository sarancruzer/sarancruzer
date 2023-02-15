import React from "react";
import BillingDetails from "./billing-details";
import DifferentAddress from "./different-address";
import OrderArea from "./order-area";

const CheckoutArea = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="checkout-area pb-85">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                {/* billing details start*/}
                <BillingDetails/>
                {/* billing details end*/}

                {/* different address start */}
                <DifferentAddress/>
                {/* different address end */}
              </div>
            </div>
            <div className="col-lg-6">
              {/* order area start */}
              <OrderArea />
              {/* order area end */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutArea;
