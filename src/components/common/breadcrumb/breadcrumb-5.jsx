import Image from "next/image";
import React from "react";
// internal
import shape_1 from "@assets/img/breadcrumb/shape/breadcrumb-shape-1.png";
import shape_2 from "@assets/img/breadcrumb/shape/breadcrumb-shape-2.png";
import shape_3 from "@assets/img/breadcrumb/shape/breadcrumb-shape-3.png";
import shape_4 from "@assets/img/breadcrumb/shape/breadcrumb-shape-4.png";
import shape_5 from "@assets/img/breadcrumb/shape/breadcrumb-shape-5.png";

// single img
function SingleImg({ num, img }) {
  return <Image className={`breadcrumb__shape-${num}`} src={img} alt="shape" />;
}

const BreadcrumbFive = ({title,subtitle}) => {
  return (
    <section className="breadcrumb__area include-bg pt-110 pb-115 white-bg p-relative z-index-1">
      <div className="breadcrumb__shape">
        <SingleImg num="3" img={shape_1} />
        <SingleImg num="4" img={shape_2} />
        <SingleImg num="5" img={shape_3} />
        <SingleImg num="6" img={shape_4} />
        <SingleImg num="7" img={shape_5} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-7">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">
                {title}
              </h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbFive;
