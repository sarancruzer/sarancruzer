import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import CommentBig from "@svg/comment-big";

const PolitySingleTeam = ({ item }) => {
  const { img, name, title, mail, phone, social_links } = item || {};
  return (
    <React.Fragment>
      <div className="team__thumb-10 p-relative m-img">
        <Link href="/team-details">
          <Image src={img} alt="team img" style={{width:'100%',height:'100%'}} />
        </Link>

        <div className="team__contact-overlay">
          <div className="team__contact-top">
            <span>
              <CommentBig/>
            </span>
            <p>Get touch with me</p>
          </div>
          <div className="team__contact-wrapper">
            <p className="team-tel">
              <a href="tel:088-3579-523-45">{phone}</a>
            </p>
            <p>
              <a href="mailto:harry@citygov.com">{mail}</a>
            </p>
          </div>
          <div className="team__social-10 d-flex justify-content-center">
            {social_links.map((l, i) => (
              <a key={i} href={l.link} target={l.target}>
                <i className={l.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="team__content-10 text-center">
        <h3 className="team__title-10">
          <Link href="/team-details">{name}</Link>
        </h3>
        <span className="team__designation-10">{title}</span>
      </div>
    </React.Fragment>
  );
};

export default PolitySingleTeam;
