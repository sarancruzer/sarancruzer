import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import skill_1 from "@assets/img/skill/9/skill-icon-1.png";
import skill_2 from "@assets/img/skill/9/skill-icon-2.png";
import skill_3 from "@assets/img/skill/9/skill-icon-3.png";
import skill_4 from "@assets/img/skill/9/skill-icon-4.png";
import CountUpContent from "@components/common/counter";
import company_icon_1 from "@assets/img/skill/company/9/company-icon-1.png";
import company_icon_2 from "@assets/img/skill/company/9/company-icon-2.png";
import company_icon_3 from "@assets/img/skill/company/9/company-icon-3.png";
import company_icon_4 from "@assets/img/skill/company/9/company-icon-4.png";
import UpArrowTwo from "@svg/up-arrow-2";

// data
const skill_data = [
    { icon: skill_1, title: "Angular", num: 90, text: "%" },
    { icon: skill_2, title: "React", num: 66, text: "%" },
    { icon: skill_3, title: "NodeJS", num: 80, text: "%" },
    { icon: skill_4, title: "Javascript", num: 86, text: "%" },
    { icon: skill_1, title: "NestJS", num: 86, text: "%" },
];

// career_data
const career_data = [
    {
        icon: company_icon_1,
        title: "Senior Software Engineer",
        designation: "Luxoft India",
        year: "July 2020 - Present",
    },
    {
        icon: company_icon_1,
        title: "Technical Lead",
        designation: "HCL Technologies",
        year: "April 2020 - Present",
    },
    {
        icon: company_icon_2,
        title: "Senior Software Engineer",
        designation: "RNTBCI",
        year: "April 2016 - March 2020",
    },
    {
        icon: company_icon_3,
        title: "Software Engineer",
        designation: "Claritaz tech labs LLP",
        year: "April 2012 - March 2016",
    },
    {
        icon: company_icon_4,
        title: "Junior Software Developer",
        designation: "Comforters IT Solutions",
        year: "April 2008 - March 2012",
    },
];

const PortfolioSkills = () => {
    return (
        <>
            <section className="skill__area pt-95 grey-bg-12 pb-125">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                            <div className="skill__wrapper-9">
                                <div className="section__title-wrapper-9 mb-55">
                                    <span className="section__title-pre-9">Experience</span>
                                    <h3 className="section__title-9">
                                        Skills & <br />
                                        Experience
                                    </h3>
                                </div>
                                <div className="skill__item-wrapper-9">
                                    <div className="row">
                                        {skill_data.map((skill, i) => (
                                            <div
                                                key={i}
                                                className="col-xxl-6 col-md-6 col-sm-6 col-6"
                                            >
                                                <div className="skill__item-9">
                                                    <div className="skill__icon-9">
                                                        <span>
                                                            <Image src={skill.icon} alt="icon" />
                                                        </span>
                                                    </div>
                                                    <div className="skill__content-9">
                                                        <h4 className="d-flex align-items-center">
                                                            {skill.title}{" "}
                                                            <span className="counter mx-1 d-flex align-items-center">
                                                                (<CountUpContent
                                                                    number={skill.num}
                                                                    text={skill.text}
                                                                />)
                                                            </span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                            <div className="career__wrapper career__style-2 pl-60">
                                <h4 className="career__title">Experience</h4>
                                {career_data.map((item, i) => (
                                    <div
                                        key={i}
                                        className="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay=".3s"
                                        data-wow-duration="1s"
                                    >
                                        <div className="career__info d-sm-flex align-items-center">
                                            <div className="career__logo mr-20">
                                                <span>
                                                    <Image src={item.icon} alt="icon" />
                                                </span>
                                            </div>
                                            <div className="career__info-content">
                                                <h3 className="career__info-title">{item.title}</h3>
                                                <span className="career__info-designation">
                                                    {item.designation}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="career__year text-sm-end">
                                            <div className="career__btn">
                                                <Link
                                                    href="portfolio-details"
                                                    className="career-link-btn"
                                                >
                                                    <span>
                                                        <UpArrowTwo />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="career__year-info">
                                                <p>{item.year}</p>
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

export default PortfolioSkills;
