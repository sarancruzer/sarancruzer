import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { CartTwo, Compare, Eye, HeartFour } from "@svg/index";
import ProductModal from "@components/common/modals/product-modal";
import { RatingFull, RatingHalf } from "./rating";

const SingleProduct = ({ product }) => {
  const { id, image, title, price, badge } = product || {};
  return (
    <React.Fragment>
      <div className="product__item p-relative transition-3 mb-50">
        <div className="product__thumb w-img p-relative fix">
          <Link href={`product-details/${id}`}>
            <Image
              src={image}
              alt="product image"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>

          {badge && (
            <div className="product__badge d-flex flex-column flex-wrap">
              <span
                className={`product__badge-item ${
                  badge === "new" ? "has-new" : ""
                }`}
              >
                {badge}
              </span>
            </div>
          )}

          <div className="product__action d-flex flex-column flex-wrap">
            <button type="button" className="product-action-btn">
              <HeartFour />
              <span className="product-action-tooltip">Add To Wishlist</span>
            </button>
            <button
              type="button"
              className="product-action-btn"
              data-bs-toggle="modal"
              data-bs-target={`#productModal-${id}`}
            >
              <Eye />
              <span className="product-action-tooltip">Quick view</span>
            </button>
            <button type="button" className="product-action-btn">
              <Compare />
              <span className="product-action-tooltip">Add To Compare</span>
            </button>
          </div>
          <div className="product__add transition-3">
            <button type="button" className="product-add-cart-btn w-100">
              <CartTwo />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product__content">
          <div className="product__rating d-flex">
            <RatingFull />
            <RatingFull />
            <RatingFull />
            <RatingFull />
            <RatingHalf />
          </div>
          <h3 className="product__title">
            <Link href={`product-details/${id}`}>{title}</Link>
          </h3>
          <div className="product__price">
            <span className="product__ammount">${price}</span>
          </div>
        </div>
      </div>

      {/* product modal start */}
      <ProductModal product={product} />
      {/* product modal end */}
    </React.Fragment>
  );
};

export default SingleProduct;
