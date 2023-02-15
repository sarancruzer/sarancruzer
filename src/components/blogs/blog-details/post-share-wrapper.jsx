import React from "react";
import { SocialShare } from "@components/social";

const PostShareWrapper = ({ blog_details_2 = false }) => {
  return (
    <div
      className={`postbox__share-wrapper ${
        blog_details_2 ? "mt-45 mb-25" : "mb-60"
      }`}
    >
      <div className="row align-items-center">
        <div className={`col-xl-7 ${blog_details_2 ? "col-lg-7" : ""}`}>
          {/* <div
            className={`tagcloud ${
              blog_details_2 ? "tagcloud-style-2" : "tagcloud-sm"
            }`}
          >
            <span>Tags:</span>
            <a href="#">Blog</a>
            <a href="#">Creative</a>
            <a href="#">Portfoilo</a>
            <a href="#">Harry</a>
          </div> */}
        </div>
        <div className={`col-xl-5 ${blog_details_2 ? "col-lg-5" : ""}`}>
          <div
            className={`postbox__share ${
              blog_details_2 ? "postbox__share-2 text-lg-end" : "text-xl-end"
            }`}
          >
            <span>Share On:</span>
            <SocialShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShareWrapper;
