import React from "react";
import PrdDetailsAdditional from "./prd-details-additional";
import PrdDetailsDescription from "./prd-details-description";
import PrdDetailsReview from "./prd-details-review";
import PrdDetailsTabNav from "./prd-details-tab-nav";

const ProductDetailsTabArea = ({product}) => {
  return (
    <section className="product__details-tab-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product__details-tab-nav">
              {/* nav tab */}
              <PrdDetailsTabNav />
              {/* nav tab */}
            </div>
            <div className="product__details-tab-content">
              <div className="tab-content" id="nav-tabContent-info">
                <div
                  className="tab-pane fade show active"
                  id="nav-desc"
                  role="tabpanel"
                  aria-labelledby="nav-desc-tab"
                >
                  <PrdDetailsDescription product={product} />
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-additional"
                  role="tabpanel"
                  aria-labelledby="nav-additional-tab"
                >
                  <PrdDetailsAdditional />
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-review"
                  role="tabpanel"
                  aria-labelledby="nav-review-tab"
                >
                  <PrdDetailsReview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTabArea;
