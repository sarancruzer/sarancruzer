import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = ({item}) => {
  return (
    <div className="product__category-item mb-20 text-center">
      <div className="product__category-thumb w-img">
        <Link href="/shop">
          <Image
            src={item.img}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
      </div>
      <div className="product__category-content">
        <h3 className="product__category-title">
          <Link href="/shop">{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleCategory;
