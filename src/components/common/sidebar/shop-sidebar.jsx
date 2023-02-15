import React from "react";
// internal
import ShopCategory from "../shop-filtering/shop-category";
import ShopColor from "../shop-filtering/shop-color";
import ShopModel from "../shop-filtering/shop-model";
import ShopPrice from "../shop-filtering/shop-price";

const ShopSidebar = ({right_side}) => {
  return (
    <div className={`shop__sidebar on-${right_side?'right':'left'}`}>
      <div className="shop__widget tp-accordion">
        <div className="accordion" id="shop_category">
          <ShopCategory />
        </div>
      </div>
      <div className="shop__widget tp-accordion">
        <ShopModel />
      </div>
      <div className="shop__widget tp-accordion">
        <div className="accordion" id="shop_color">
          <ShopColor />
        </div>
      </div>
      <div className="shop__widget tp-accordion">
        <div className="accordion" id="shop_price">
          <ShopPrice />
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
