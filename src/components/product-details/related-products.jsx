import React from "react";
// internal
import products from "@data/products";
import SingleProduct from "@components/shop/shop-products/single-product";

// related product items
const related_products = products.slice(0, 4);

const RelatedProducts = () => {
  return (
    <React.Fragment>
      <section className="product__related-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper-13 mb-35">
                <h3 className="section__title-13">Related Products</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product__related-slider">
                <div className="row">
                  {related_products.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-6">
                      <SingleProduct product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RelatedProducts;
