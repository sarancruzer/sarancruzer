import React from "react";
import Image from "next/image";
// internal
import thumb_img from "@assets/img/job/job-img-1.jpg";

const JobThumbArea = () => {
  return (
    <div className="job__bg-thumb-area job__box-145">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12">
            <div className="job__bg-thumb m-img text-center">
              <Image
                src={thumb_img}
                alt="thumb img"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobThumbArea;
