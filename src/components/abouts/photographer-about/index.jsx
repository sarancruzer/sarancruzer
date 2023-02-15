import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import about_thumb from "@assets/img/about/3/about-1.jpg";
import PhotographerAboutSelf from "./p-about-self";
import PhotographerAboutEducation from "./p-about-education";
import PhotographerAboutSkill from "./p-about-skill";

const PhotographerAbout = () => {
  const activeRef = useRef(null);
  const marker = useRef(null);
  // handleActive
  const handleActive = (e) => {
    if (e.target.classList.contains("active")) {
      marker.current.style.left = e.target.offsetLeft + "px";
      marker.current.style.width = e.target.offsetWidth + "px";
    }
  };
  useEffect(() => {
    if (activeRef.current?.classList.contains("active")) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, []);
  // nav link
  function NavLink({ active, id, title, linkRef }) {
    return (
      <button
        ref={linkRef}
        className={`nav-link ${active ? "active" : ""}`}
        id={`${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={active ? "true" : "false"}
        tabIndex="-1"
        onClick={(e) => handleActive(e)}
      >
        {title}
      </button>
    );
  }

  return (
    <>
      <section id="tpabout" className="about__area black-bg-5 pt-170 pb-195">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about__thumb-3 w-img wow">
                <Image
                  className="about-3-main-thumb wow"
                  src={about_thumb}
                  alt="about thumb"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about__wrapper-3 pt-20 pl-100">
                <div className="section__title-wrapper-3 mb-45">
                  <span className="section__title-pre-3">
                    01 . Read About Me
                  </span>
                  <h3 className="section__title-3 has-gradient">
                    We are Best <br /> Portrait <span>Photography</span>
                  </h3>
                </div>

                <div className="about__tab">
                  <div className="about__tab-nav mb-40">
                    <nav>
                      <div
                        className="about__tab-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap"
                        id="nav-tab"
                        role="tablist"
                      >
                        <NavLink
                          active={true}
                          linkRef={activeRef}
                          id="nav-self"
                          title="Myself."
                        />
                        <NavLink id="nav-education" title="Education." />
                        <NavLink id="nav-skill" title="Main Skills." />
                        <span
                          ref={marker}
                          id="marker"
                          className="tp-tab-line d-none d-sm-inline-block"
                        ></span>
                      </div>
                    </nav>
                  </div>
                  <div className="about__tab-content">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-self"
                        role="tabpanel"
                        aria-labelledby="nav-self-tab"
                      >
                        <PhotographerAboutSelf />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-education"
                        role="tabpanel"
                        aria-labelledby="nav-education-tab"
                      >
                        <PhotographerAboutEducation />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-skill"
                        role="tabpanel"
                        aria-labelledby="nav-skill-tab"
                      >
                        <PhotographerAboutSkill />
                      </div>
                    </div>
                    <div className="about__btn-3 d-sm-flex">
                      <div className="about__btn-3-inner mb-20">
                        <a
                          rel="noreferrer"
                          href="https://weblearnbd.net/wp/bioxlab/wp-content/uploads/2022/09/demo-cv.pdf"
                          target="_blank"
                          className="tp-btn-2"
                        >
                          Download CV.
                        </a>
                      </div>
                      <div className="about__btn-3-inner mb-20">
                        <Link href="/contact-2" className="tp-btn-border-3 ">
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographerAbout;
