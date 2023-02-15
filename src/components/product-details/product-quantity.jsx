import React from "react";
import { Minus, Plus } from "@svg/index";

const ProductQuantity = () => {
  return (
    <div className="product__details-quantity">
      <div className="tp-product-quantity mt-10 mb-10">
        <span className="tp-cart-minus">
          <Minus />
        </span>
        <input className="tp-cart-input" type="text" defaultValue="1" />
        <span className="tp-cart-plus">
          <Plus />
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;
