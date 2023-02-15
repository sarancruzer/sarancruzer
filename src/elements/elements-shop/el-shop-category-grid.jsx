import React from "react";
// internal
import { products_category } from "@components/shop/shop-category";
import SingleCategory from "@components/shop/shop-category/single-category";
import SectionWrapper from "@elements/section-wrapper";

const ElShopCategoryGrid = () => {
  return (
    <section className="product__category pt-10 pb-100">
      <div className="container">
        <SectionWrapper
          title="Minimal & Clean Design"
          subtitle="Shop Category Grid"
        />
        <div className="row">
          {products_category.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <SingleCategory item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElShopCategoryGrid;
