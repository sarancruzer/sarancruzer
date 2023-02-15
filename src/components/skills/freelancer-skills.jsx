import Image from "next/image";
import React from "react";
import Link from "next/link";
//skill images
import skill_icon_1 from "@assets/img/skill/skill-icon-1.png";
import skill_icon_2 from "@assets/img/skill/skill-icon-2.png";
import skill_icon_3 from "@assets/img/skill/skill-icon-3.png";
import skill_icon_4 from "@assets/img/skill/skill-icon-4.png";
import skill_icon_5 from "@assets/img/skill/skill-icon-5.png";
import skill_icon_6 from "@assets/img/skill/skill-icon-6.png";
import skill_icon_7 from "@assets/img/skill/skill-icon-7.png";
// company icon
import company_icon_1 from "@assets/img/skill/company/company-icon-1.png";
import company_icon_2 from "@assets/img/skill/company/company-icon-2.png";
import company_icon_3 from "@assets/img/skill/company/company-icon-3.png";
import company_icon_4 from "@assets/img/skill/company/company-icon-4.png";
import UpArrow from "@svg/up-arrow";
import CountUpContent from "@components/common/counter";

// skill data
const skill_data = [
  {
    skill_items: [
      { icon: skill_icon_1, num: 98, text: "%" },
      { icon: skill_icon_2, num: 86, text: "%" },
    ],
  },
  {
    skill_items: [
      { icon: skill_icon_3, num: 92, text: "%" },
      { icon: skill_icon_4, num: 73, text: "%" },
      { icon: skill_icon_5, num: 65, text: "%" },
    ],
  },
  {
    skill_items: [
      { icon: skill_icon_6, num: 50, text: "%" },
      { icon: skill_icon_7, num: 67, text: "%" },
    ],
  },
];

// career data
const career_data = [
  {
    delay: ".3s",
    icon: company_icon_1,
    title: "Amazon inc",
    designation: "Senior Product Designer",
    year: "April 2016 - March 2020",
  },
  {
    delay: ".5s",
    icon: company_icon_2,
    title: "Google",
    designation: "UI/UX Web Designer",
    year: "January 2018 - March 2019",
  },
  {
    delay: ".7s",
    icon: company_icon_3,
    title: "Apple",
    designation: "Internship Graphic designer",
    year: "April 2012 - March 2016",
  },
  {
    delay: ".9s",
    icon: company_icon_4,
    title: "Dribble",
    designation: "Ui Designer",
    year: "April 2008 - March 2012",
  },
];

const FreelancerSkills = () => {
  return (
    <>
      <section className="skill__area grey-bg-7 pt-145 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-65">
                <span className="section__title-pre-2">
                  Skill & Experiences
                </span>
                <h3 className="section__title-2">Skill & Experiences</h3>
                <p>
                  At vero eos censes aut reiciendis voluptatibus maiores alias
                  consequatur.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="skill__item-wrapper">
                {skill_data.map((skill, i) => (
                  <div
                    key={i}
                    className="skill__item d-flex align-items-center"
                  >
                    {skill.skill_items.map((item, i) => (
                      <div
                        key={i}
                        className="skill__single text-center mb-20 mr-20"
                      >
                        <div className="skill__icon">
                          <Image src={item.icon} alt="icon" />
                        </div>
                        <div className="skill__content">
                          <h4>
                            <span className="counter">
                              <CountUpContent
                                number={item.num}
                                text={item.text}
                              />
                            </span>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="career__wrapper pl-60">
                {career_data.map((info, i) => (
                  <div
                    key={i}
                    className="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between wow fadeInUp"
                    data-wow-delay={info.delay}
                    data-wow-duration="1s"
                  >
                    <div className="career__info d-sm-flex align-items-center">
                      <div className="career__logo mr-20">
                        <span>
                          <Image src={info.icon} alt="icon" />
                        </span>
                      </div>
                      <div className="career__info-content">
                        <h3 className="career__info-title">{info.title}</h3>
                        <span className="career__info-designation">
                          {info.designation}
                        </span>
                      </div>
                    </div>
                    <div className="career__year text-sm-end">
                      <div className="career__btn">
                        <Link href="/portfolio" className="career-link-btn">
                          <UpArrow />
                        </Link>
                      </div>
                      <div className="career__year-info">
                        <p>{info.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelancerSkills;
