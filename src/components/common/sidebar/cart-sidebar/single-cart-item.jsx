import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleCartItem = ({id,image,price,title}) => {
  return (
    <div className="cartmini__widget-item">
      <div className="cartmini__thumb">
        <Link href={`product-details/${id}`}>
          <Image src={image} alt="cart img" width={70} height={90} />
        </Link>
      </div>
      <div className="cartmini__content">
        <h5>
          <Link href={`product-details/${id}`}>{title}</Link>
        </h5>
        <div className="cartmini__price-wrapper">
          <span className="cartmini__price">${price}</span>
          <span className="cartmini__quantity">x2</span>
        </div>
      </div>
      <button className="cartmini__del">
        <i className="fal fa-times"></i>
      </button>
    </div>
  );
};

export default SingleCartItem;
