import React from "react";
import Image from "next/image";
// internal
import shape from "@assets/img/product/details/description/product-description-shape-1.png";
import desc_img_1 from "@assets/img/product/details/description/product-description-1.jpg";
import desc_img_2 from "@assets/img/product/details/description/product-description-2.jpg";
import desc_img_3 from "@assets/img/product/details/description/product-description-3.jpg";

const ImageStyle = {
  width:'100%',
  height:'100%',
}

const PrdDetailsDescription = ({product}) => {
  return (
    <div className="product__details-description pt-95">
      <div className="row">
        <div className="col-lg-6">
          <div className="product__details-description-content">
            <h3 className="product-desc-title">{product?.title}</h3>
            <p>
              Third-generation optical heart sensor, Electrical heart sensor,
              Certified dust resistant, Improved accelerometer up to 32
              g‑forces, Improved gyroscope, Ambient light sensor, Always-On
              Retina LTPO OLED display with Force Touch (1000 nits)
            </p>

            <div className="product-desc-feature mt-40 mb-40 d-sm-flex align-items-start">
              <div className="product-desc-feature-thumb mr-25">
                <Image src={shape} alt="shape" />
              </div>
              <div className="product-desc-feature-content">
                <p>
                  The photo collection from your Memories is displayed in a
                  unique mosaic grid, giving you a richer view of your library.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__details-description-thumb m-img">
            <Image src={desc_img_1} alt="desc img" style={ImageStyle} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-description-content">
            <h3 className="product-desc-title">Smart home, smarter watch</h3>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__details-description-content pr-30 mb-40">
            <p>
              Put your favourite photos of friends and family front and centre.
              Featuringa dynamic, multilayered effect, this new watch face uses
              Portrait modephotos from your iPhone to give the people you care
              about a starring role.Photo highlights from your Memories and
              Featured Photos now automatically
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__details-description-content pr-30 mb-40">
            <p>
              The current status of all your devices is now conveniently <br />{" "}
              displayed at the top of the Home app screen. Instantly see if your
              lights or cameras are on, whether your batteries are charged, or
              if your software needs updating.
            </p>
          </div>
        </div>
      </div>

      <div className="row align-self-end">
        <div className="col-md-6">
          <div className="product__details-description-thumb m-img">
            <Image src={desc_img_2} alt="desc img" style={ImageStyle} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product__details-description-thumb m-img">
            <Image src={desc_img_3} alt="desc img" style={ImageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsDescription;
