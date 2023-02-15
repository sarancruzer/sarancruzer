import React from "react";
// internal
import products from "@data/products";
import SingleListProduct from "@components/shop/shop-products/single-list-product";
import SectionWrapper from "@elements/section-wrapper";

// products data
const prd_list_items = products.slice(0, 5);

const ElShopListItems = () => {
  return (
    <section className="product__popular-area pt-110 pb-90">
      <div className="container">
        <SectionWrapper
          title="Minimal & Clean Design"
          subtitle="Shop Product List"
        />
        <div className="row justify-content-center">
          {prd_list_items.map((product) => (
            <div key={product.id} className="col-lg-10 col-md-6">
              <SingleListProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElShopListItems;
