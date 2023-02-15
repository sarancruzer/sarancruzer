import React from "react";
import Image from "next/image";
import Link from "next/link";

const CreativeSingleTeam = ({ team }) => {
  const { id, img, name, title, delay } = team || {};
  return (
    <div
      className="team__item-6 mb-80 transition-3 wow fadeInLeft"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="team__thumb-6 w-img fix">
        <Link href="/team-details">
          <Image
            src={img}
            alt="image"
            style={{ width: "100%", height: "100%" }}
            priority
          />
        </Link>
      </div>
      <div className="team__content-6 transition-3">
        <div className="team__content-6-bg"></div>
        <h3 className="team__title-6">
          <Link href="/team-details">{name}</Link>
        </h3>
        <span className="team__designation-6">{title}</span>
      </div>
    </div>
  );
};

export default CreativeSingleTeam;
