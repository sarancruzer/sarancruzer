import React from "react";
import Image from "next/image";
// internal
import img_1 from "@assets/img/portfolio/details/img-1.jpg";
import img_2 from "@assets/img/portfolio/details/img-2.jpg";
import img_3 from "@assets/img/portfolio/details/img-3.jpg";

//ImageStyle
const ImageStyle = {
  width: "100%",
  height: "100%",
};

function ImgBox({col='6',img}) {
  return (
    <div className={`col-md-${col}`}>
      <div className="image__box-item w-img mb-30">
        <Image src={img} alt="image" style={ImageStyle} />
      </div>
    </div>
  )
}

const ImageBoxArea = () => {
  return (
    <section className="image__box-area">
      <div className="container">
        <div className="row">
          <ImgBox img={img_1} />
          <ImgBox img={img_2} />
          <ImgBox col="12" img={img_3} />
        </div>
      </div>
    </section>
  );
};

export default ImageBoxArea;
