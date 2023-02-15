import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeamArch = ({ team }) => {
  const { img, name, title, delay, social_links } = team || {};
  return (
    <div
      className="team__item-8 text-center black-bg-14 mb-30 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="team__thumb-8 mb-45">
        <Link href="/team-details">
          <Image src={img} alt="team image" />
        </Link>
      </div>
      <div className="team__content-8">
        <h3 className="team__title-8">
          <Link href="/team-details">{name}</Link>
        </h3>
        <span className="team__designation-8">{title}</span>

        <div className="team__social-8 d-flex flex-wrap align-items-center justify-content-center">
          {social_links.map((l, i) => (
            <a key={i} href={l.link} target={l.target}>
              <i className={l.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTeamArch;
