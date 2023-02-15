import React from "react";
// internal
import SingleFaq from "@components/faqs/single-faq";
import OrderDetails from "./order-details";
import OrderSingleCartItem from "./order-single-cart-item";

// accordion data
const checkout_accordion = [
  {
    id: "One",
    title: "Direct Bank Transfer",
    show: true,
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    parent: "checkoutAccordion",
  },
  {
    id: "Two",
    title: "Cheque Payment",
    desc: "Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    parent: "checkoutAccordion",
  },
  {
    id: "Three",
    title: "PayPal",
    desc: "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
    parent: "checkoutAccordion",
  },
];

const OrderArea = () => {
  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            <OrderSingleCartItem
              title="Vestibulum suscipit"
              quantity={1}
              price="165.00"
            />
            <OrderSingleCartItem
              title="Vestibulum dictum magna"
              quantity={1}
              price="50.00"
            />
          </tbody>
          <tfoot>
            <OrderDetails />
          </tfoot>
        </table>
      </div>

      <div className="payment-method faq__wrapper tp-accordion">
        <div className="accordion" id="checkoutAccordion">
          {checkout_accordion.map((item) => (
            <SingleFaq key={item.id} item={item} />
          ))}
        </div>
        <div className="order-button-payment mt-20">
          <button type="submit" className="tp-btn">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderArea;
