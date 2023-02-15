import React from "react";
import Image from "next/image";
// internal
import img_1 from "@assets/img/portfolio/details/portfolio-big-1.jpg";
import img_2 from "@assets/img/portfolio/details/portfolio-big-2.jpg";
import img_3 from "@assets/img/portfolio/details/portfolio-big-3.jpg";

const ImageStyle = {
  width:'auto',
  height:'auto'
}

const PortfolioImages = () => {
  return (
    <section className="portfolio__area pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="portfolio__image-box-wrapper">
              <div className="portfolio__image-box-item mb-30 m-img">
                <Image src={img_1} alt="image" style={ImageStyle} />
              </div>
              <div className="portfolio__image-box-item mb-30 m-img">
                <Image src={img_2} alt="image" style={ImageStyle} />
              </div>
              <div className="portfolio__image-box-item mb-30 m-img">
                <Image src={img_3} alt="image" style={ImageStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioImages;
