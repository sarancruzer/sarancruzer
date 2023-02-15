import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ShopCategoryArea from "@components/shop/shop-category";
import ElShopCategoryGrid from "./el-shop-category-grid";
import ShopProducts from "@components/shop/shop-products";
import ElShopListItems from "./el-shop-list-items";

const ElementsShopMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Have a look to our shop styles" />
      {/* breadcrumb end */}

      {/* Shop Category Slider start */}
      <ShopCategoryArea element_style={true} />
      {/* Shop Category Slider end */}

      {/* Shop Category grid start */}
      <ElShopCategoryGrid />
      {/* Shop Category grid end */}

      <div className="tp-separator"></div>

      {/* Shop Category grid start */}
      <ShopProducts element_style={true} />
      {/* Shop Category grid end */}

      {/* Shop Category list start */}
      <ElShopListItems />
      {/* Shop Category list end */}
    </React.Fragment>
  );
};

export default ElementsShopMain;
