import React from "react";
// internal
import ShopSidebar from "@components/common/sidebar/shop-sidebar";
import { ShopShortSelect, ShopShortTab, ShowingResult } from "./shop-top";
import products from "@data/products";
import SingleProduct from "../shop-products/single-product";
import SingleListProduct from "../shop-products/single-list-product";
import Pagination from "@ui/Pagination";

// products data
const prd_grid_items = products.slice(0, 9);
const prd_list_items = products.slice(0, 5);

const ShopArea = ({ right_side = false }) => {
  return (
    <section className="shop__area pb-60">
      <div className="container">
        <div className="shop__top mb-50">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <ShowingResult />
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="shop__sort d-flex flex-wrap justify-content-md-end align-items-center">
                <ShopShortTab />
                <ShopShortSelect />
              </div>
            </div>
          </div>
        </div>
        <div className="shop__main">
          <div className="row">
            {!right_side && (
              <div className="col-lg-3">
                {/* sidebar start */}
                <ShopSidebar />
                {/* sidebar end */}
              </div>
            )}
            <div
              className={`col-lg-9 ${
                right_side ? "" : "order-first order-lg-last"
              }`}
            >
              <div className="shop__tab-content mb-40">
                <div className="tab-content" id="shop_tab_content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-grid"
                    role="tabpanel"
                    aria-labelledby="nav-grid-tab"
                  >
                    {/* shop grid*/}
                    <div className="row">
                      {prd_grid_items.map((product) => (
                        <div
                          key={product.id}
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                        >
                          <SingleProduct product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-list"
                    role="tabpanel"
                    aria-labelledby="nav-list-tab"
                  >
                    {/* shop list */}
                    <div className="product__list-wrapper mb-30">
                      <div className="row">
                        {prd_list_items.map((product) => (
                          <div key={product.id} className="col-lg-12 col-md-6">
                            <SingleListProduct product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* pagination*/}
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="tp-pagination tp-pagination-style-2">
                      <Pagination url="shop" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {right_side && (
              <div className="col-lg-3">
                {/* sidebar start */}
                <ShopSidebar right_side={right_side} />
                {/* sidebar end */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
