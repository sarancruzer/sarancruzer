import React from "react";
import Image from "next/image";
import Link from "next/link";

const LawyerSingleTeam = ({item}) => {
  return (
    <div className="team__item-4 p-relative z-index-1 fix mb-40">
      <div className="team__thumb-4 w-img fix">
        <Image
          src={item.img}
          alt="team img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="team__content-4 fix">
        <h3 className="team__title-4">
          <Link href="/team-details">{item.name}</Link>
        </h3>
        <span className="team__designation-4">{item.title}</span>
        <p>{item.sm_desc}</p>
        <div className="team__social-4">
          {item.social_links.map((l, i) => (
            <a key={i} href={l.link} target={l.target}>
              <i className={l.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerSingleTeam;
