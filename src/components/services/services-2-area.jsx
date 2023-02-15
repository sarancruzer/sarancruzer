import React from "react";
import Link from "next/link";
// internal
import overlay_bg_1 from "@assets/img/services/overlay/services-overlay-1.jpg";
import overlay_bg_2 from "@assets/img/services/overlay/services-overlay-2.jpg";
import overlay_bg_3 from "@assets/img/services/overlay/services-overlay-3.jpg";
import overlay_bg_4 from "@assets/img/services/overlay/services-overlay-4.jpg";
import { ArrowRightFour, ArrowRightTwo } from "@svg/index";

// nav item
function NavItem({ title, active = false, id }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${active ? "active" : ""}`}
        id={`${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={active ? "true" : "false"}
        tabIndex={'-1'}
      >
        {title}
        <ArrowRightFour/>
      </button>
    </li>
  );
}

// service item
function ServiceItem({ overlay, title, desc }) {
  return (
    <div className="services__item-14 mb-30">
      <div
        className="services__thumb-14 transition-3 include-bg"
        style={{ backgroundImage: `url(${overlay.src})` }}
      ></div>
      <div className="services__content-14">
        <h3 className="services__title-14">
          <Link href="/service-details">{title}</Link>
        </h3>
        <p>{desc}</p>
        <div className="services__btn-14">
          <Link href="/service-details" className="tp-link-btn">
            Learn More
            <span>
              <ArrowRightTwo />
              <ArrowRightTwo />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// tab item
function TabItem({ active, id, services_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div className="services__item-wrapper-14 pl-100">
        {services_items.map((item, i) => (
          <ServiceItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

const ServicesTwoArea = () => {
  return (
    <section className="services__area pt-95 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="services__widget">
              <div className="services__widget-item">
                <h3 className="services__widget-title">Our Services</h3>
                <div className="services__widget-content">
                  <div className="services__widget-tab tp-tab">
                    <ul
                      className="nav nav-tabs flex-column"
                      id="servicesTab"
                      role="tablist"
                    >
                      <NavItem
                        active={true}
                        title="Responsive Design"
                        id="responsive"
                      />
                      <NavItem title="Speed Optimized" id="speed" />
                      <NavItem title="Innovative Framework" id="framework" />
                      <NavItem title="Pixel Perfect" id="pixel" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="services__tab-right">
              <div className="tab-content" id="myTabContent">
                <TabItem
                  active={true}
                  id="responsive"
                  services_items={[
                    {
                      overlay: overlay_bg_1,
                      title: "Responsive Design",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_2,
                      title: "Speed Optimized",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_3,
                      title: "Innovative Framework",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_4,
                      title: "Pixel Perfect",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                  ]}
                />
                {/* speed */}
                <TabItem
                  id="speed"
                  services_items={[
                    {
                      overlay: overlay_bg_2,
                      title: "Speed Optimized",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_3,
                      title: "Innovative Framework",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_4,
                      title: "Pixel Perfect",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_1,
                      title: "Responsive Design",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                  ]}
                />

                {/* framework */}
                <TabItem
                  id="framework"
                  services_items={[
                    {
                      overlay: overlay_bg_3,
                      title: "Innovative Framework",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_4,
                      title: "Pixel Perfect",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_2,
                      title: "Speed Optimized",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_1,
                      title: "Responsive Design",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                  ]}
                />

                {/* pixel */}
                <TabItem
                  id="pixel"
                  services_items={[
                    {
                      overlay: overlay_bg_4,
                      title: "Pixel Perfect",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_3,
                      title: "Innovative Framework",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_2,
                      title: "Speed Optimized",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                    {
                      overlay: overlay_bg_1,
                      title: "Responsive Design",
                      desc: (
                        <>
                          We are a creative company that focuses on establishing
                          long <br /> term relationships with customers.
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwoArea;
