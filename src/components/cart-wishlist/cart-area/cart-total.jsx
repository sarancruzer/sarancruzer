import Link from "next/link";
import React from "react";

const CartTotal = () => {
  return (
    <div className="cart-page-total">
      <h2>Cart totals</h2>
      <ul className="mb-20">
        <li>
          Subtotal <span>$250.00</span>
        </li>
        <li>
          Total <span>$250.00</span>
        </li>
      </ul>
      <Link className="tp-btn" href="checkout">
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartTotal;
