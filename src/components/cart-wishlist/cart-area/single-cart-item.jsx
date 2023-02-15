import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Minus, Plus } from "@svg/index";

const SingleCartItem = ({ id, image, title, price }) => {
  const [value, setValue] = useState(1);

  // handleIncrement
  const handleIncrement = () => {
    setValue(value => value + 1);
  };

  // handleDecrement
  const handleDecrement = () => {
    if (value > 1) {
      setValue((value) => value - 1);
    }
  };

  // handleChange
  const handleChange = (e) => {};
  return (
    <tr>
      <td className="product-thumbnail">
        <Link href={`product-details/${id}`}>
          <Image src={image} alt="cart img" width={125} />
        </Link>
      </td>
      <td className="product-name">
        <Link href={`product-details/${id}`}>{title}</Link>
      </td>
      <td className="product-price">
        <span className="amount">${price}</span>
      </td>
      <td className="product-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span className="tp-cart-minus" onClick={handleDecrement}>
            <Minus />
          </span>
          <input
            className="tp-cart-input"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <span className="tp-cart-plus" onClick={handleIncrement}>
            <Plus />
          </span>
        </div>
      </td>
      <td className="product-subtotal">
        <span className="amount">$130.00</span>
      </td>
      <td className="product-remove">
        <button type="submit">
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default SingleCartItem;
