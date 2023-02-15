import React, { useState } from "react";
import Image from "next/image";
// internal
import { HeartFour, Compare, CartTwo } from "@svg/index";
import { SocialShare } from "@components/social";
import ProductDetailsPrice from "./product-details-price";
import { RatingFull, RatingHalf } from "@components/shop/shop-products/rating";
import ProductQuantity from "./product-quantity";
import ProductDetailsCategories from "./product-details-categories";
import ProductDetailsTags from "./product-details-tags";

const ProductDetailsArea = ({ product }) => {
  const { image, relatedImages, title, quantity, reviews, price, discount,tag,SKU,shortDesc } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  return (
    <section className="product__details-area pb-115">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="product__details-thumb-tab mr-70">
              <div className="product__details-thumb-content w-img">
                <div>
                  <Image
                    src={activeImg}
                    alt="details img"
                    style={{ width: "100%", maxHeight: "575px",objectFit:'cover' }}
                  />
                </div>
              </div>
              <div className="product__details-thumb-nav tp-tab">
                <nav>
                  <div className="d-flex justify-content-sm-between flex-wrap">
                    {relatedImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(img.img)}
                        className={
                          activeImg === img.img ? "nav-link active" : ""
                        }
                      >
                        <Image
                          src={img.img}
                          alt="image"
                          width={110}
                          height={110}
                        />
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="product__details-wrapper">
              <div className="product__details-stock">
                <span>{quantity} In Stock</span>
              </div>
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

              <p>
                {shortDesc}
              </p>

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
                  <span className="product-action-tooltip">Add To Compare</span>
                </button>
              </div>
              <div className="product__details-sku product__details-more">
                <p>SKU:</p>
                <span>{SKU}</span>
              </div>
              {/* ProductDetailsCategories */}
              <ProductDetailsCategories/>
              {/* ProductDetailsCategories */}

              {/* Tags */}
              <ProductDetailsTags tag={tag} />
              {/* Tags */}

              <div className="product__details-share">
                <span>Share:</span>
                <SocialShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsArea;
