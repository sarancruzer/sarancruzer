import React from "react";
import Image from "next/image";
import author from '@assets/img/users/user-14.jpg'
// internal
import { SocialShare } from "@components/social";

const PostAuthor = ({author_img=author}) => {
  return (
    <React.Fragment>
      <div className="postbox__author-thumb">
        <a href="#">
          <Image src={author_img} alt="user" />
        </a>
      </div>
      <div className="postbox__author-content">
        <h3 className="postbox__author-title">
          <a href="#">Colene Landin</a>
        </h3>
        <p>
          Digital content wrangler | UX enthusiast | Recovering educator & GIF
          hockey fan Oxford comma or death.!
        </p>

        <div className="postbox__author-social d-flex align-items-center">
          <SocialShare />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostAuthor;
