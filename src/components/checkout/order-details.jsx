import React from "react";

const OrderDetails = () => {
  return (
    <React.Fragment>
      <tr className="cart-subtotal">
        <th>Cart Subtotal</th>
        <td>
          <span className="amount">$215.00</span>
        </td>
      </tr>
      <tr className="shipping">
        <th>Shipping</th>
        <td>
          <ul>
            <li>
              <input id="flat_shipping" type="radio" name="shipping" />
              <label htmlFor="flat_shipping">
                Flat Rate: <span className="amount">$7.00</span>
              </label>
            </li>
            <li>
              <input id="free_shipping" type="radio" name="shipping" />
              <label htmlFor="free_shipping">Free Shipping:</label>
            </li>
          </ul>
        </td>
      </tr>
      <tr className="order-total">
        <th>Order Total</th>
        <td>
          <strong>
            <span className="amount">$215.00</span>
          </strong>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default OrderDetails;
