import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { CartTwo, Compare, Eye, HeartFour } from "@svg/index";
import ProductModal from "@components/common/modals/product-modal";
import { RatingFull, RatingHalf } from "./rating";

const SingleListProduct = ({ product }) => {
  const { id, image, title, price, badge,shortDesc } = product || {};
  return (
    <React.Fragment>
      <div className="product__list-item mb-30">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="product__thumb product__list-thumb p-relative fix m-img">
              <Link href={`product-details/${id}`}>
                <Image
                  src={image}
                  alt="image"
                  // style={{ width: "330px", maxHeight: "325px",objectFit:'cover' }}
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
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="product__list-content">
              <div className="product__rating product__rating-2 d-flex">
                <RatingFull/>
                <RatingFull/>
                <RatingFull/>
                <RatingFull/>
                <RatingHalf/>
              </div>

              <h3 className="product__list-title">
                <Link href={`product-details/${id}`}>{title}</Link>
              </h3>
              <div className="product__list-price">
                <span className="product__list-ammount">${price}</span>
              </div>
              <p>
                {shortDesc}
              </p>

              <div className="product__list-action d-flex flex-wrap align-items-center">
                <button
                  type="button"
                  className="product-add-cart-btn product-add-cart-btn-2"
                >
                  <CartTwo />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="product-action-btn product-action-btn-2"
                >
                  <HeartFour />
                  <span className="product-action-tooltip">
                    Add To Wishlist
                  </span>
                </button>
                <button
                  type="button"
                  className="product-action-btn"
                  data-bs-toggle="modal"
                  data-bs-target={`#productModal-list-${id}`}
                >
                  <Eye />
                  <span className="product-action-tooltip">Quick view</span>
                </button>
                <button
                  type="button"
                  className="product-action-btn product-action-btn-2"
                >
                  <Compare />
                  <span className="product-action-tooltip">Add To Compare</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product modal start */}
      <ProductModal product={product} list_modal={true} />
      {/* product modal end */}
    </React.Fragment>
  );
};

export default SingleListProduct;
