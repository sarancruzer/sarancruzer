import Image from "next/image";
import React, { useState } from "react";
// internal
import { Plus, Minus, HeartFour, Compare, CartTwo, Times } from "@svg/index";
import SocialLinks from "@components/social";
import { RatingFull, RatingHalf } from "@components/shop/shop-products/rating";
import ProductDetailsPrice from "@components/product-details/product-details-price";
import ProductQuantity from "@components/product-details/product-quantity";
import ProductDetailsCategories from "@components/product-details/product-details-categories";
import ProductDetailsTags from "@components/product-details/product-details-tags";

const ProductModal = ({ product, list_modal = false }) => {
  const {
    id,
    image,
    relatedImages,
    title,
    reviews,
    shortDesc,
    tag,
    SKU,
    price,
    discount,
  } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  return (
    <div
      className="product__modal modal fade"
      id={list_modal ? `productModal-list-${id}` : `productModal-${id}`}
      aria-labelledby={
        list_modal ? `productModal-list-${id}` : `productModal-${id}`
      }
      aria-hidden="true"
      tabIndex={"-1"}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="product__modal-wrapper">
            <div className="product__modal-close">
              <button
                className="product__modal-close-btn"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Times />
              </button>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="product__modal-thumb-wrapper">
                  <div className="product__details-thumb-tab mr-40">
                    <div className="product__details-thumb-content w-img">
                      <div className="tab-content" id="nav-tabContent">
                        <div className="active-img">
                          <Image
                            src={activeImg}
                            alt="image"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product__details-thumb-nav tp-tab">
                      <nav>
                        <div className="nav nav-tabs justify-content-sm-between">
                          {relatedImages.map((img, i) => (
                            <button
                              key={i}
                              className={`nav-link ${
                                img.img === activeImg ? "active" : ""
                              }`}
                              onClick={() => setActiveImg(img.img)}
                            >
                              <Image
                                src={img.img}
                                alt="image"
                                width={90}
                                height={90}
                              />
                            </button>
                          ))}
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details-wrapper">
                  <h3 className="product__details-title">{title}</h3>
                  <div className="product__details-rating d-flex align-items-center">
                    <div className="product__rating product__rating-2 d-flex">
                      <RatingFull />
                      <RatingFull />
                      <RatingFull />
                      <RatingFull />
                      <RatingHalf />
                    </div>
                    <div className="product__details-rating-count">
                      <span>({reviews} customer review)</span>
                    </div>
                  </div>
                  <p>{shortDesc}</p>
                  {/* Product Details Price */}
                  <ProductDetailsPrice price={price} discount={discount} />
                  {/* Product Details Price */}

                  {/* quantity */}
                  <ProductQuantity />
                  {/* quantity */}
                  <div className="product__details-action d-flex flex-wrap align-items-center">
                    <button
                      type="button"
                      className="product-add-cart-btn product-add-cart-btn-3"
                    >
                      <CartTwo />
                      Add to Cart
                    </button>
                    <button type="button" className="product-action-btn">
                      <HeartFour />
                      <span className="product-action-tooltip">
                        Add To Wishlist
                      </span>
                    </button>
                    <button type="button" className="product-action-btn">
                      <Compare />
                      <span className="product-action-tooltip">
                        Add To Compare
                      </span>
                    </button>
                  </div>
                  <div className="product__details-sku product__details-more">
                    <p>SKU:</p>
                    <span>{SKU}</span>
                  </div>
                  {/* ProductDetailsCategories */}
                  <ProductDetailsCategories />
                  {/* ProductDetailsCategories */}

                  {/* Tags */}
                  <ProductDetailsTags tag={tag} />
                  {/* Tags */}
                  <div className="product__details-share">
                    <span>Share:</span>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
