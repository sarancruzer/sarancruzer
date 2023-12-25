import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import {
  Analytics,
  ArrowRightFour,
  MobileAppTwo,
  Optimized,
  PhoneTwo,
  PixelPerfect,
  Skill,
} from "@svg/index";
import details_img from "@assets/img/services/details/services-details-img-1.jpg";
import ServiceDetailsForm from "@components/forms/service-details-form";
import SingleFaq from "@components/faqs/single-faq";

// faq_items
const faq_items = [
  {
    id: "One",
    title: "Can I cancel my account at any time?",
    show: true,
    desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    parent: "general_accordion",
  },
  {
    id: "Two",
    title: "What happens after the license expires?",
    desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    parent: "general_accordion",
  },
  {
    id: "Three",
    title: "Does sarancruzer have any documentations?",
    desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    parent: "general_accordion",
  },
  {
    id: "four",
    title: "How long do I get support & updates?",
    desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    parent: "general_accordion",
  },
];

// nav item
function NavItem({ active = false, icon, title }) {
  return (
    <li>
      <Link href="/service-details" className={active ? "active" : ""}>
        <span>{icon}</span>
        {title}
        <ArrowRightFour />
      </Link>
    </li>
  );
}

const ServiceDetailsArea = () => {
  return (
    <section className="services__area pt-120 pb-125">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="services__widget-2 pr-50">
              <div className="services__widget-item-2 mb-30">
                <div className="services__widget-tab-2 tp-tab">
                  <ul>
                    <NavItem
                      active={true}
                      icon={<MobileAppTwo />}
                      title="Mobile App"
                    />
                    <NavItem icon={<Optimized />} title="Speed Optimized" />
                    <NavItem icon={<Skill />} title="No Skills Needed" />
                    <NavItem icon={<Analytics />} title="Google Analytics" />
                    <NavItem icon={<PixelPerfect />} title="Pixel Perfect" />
                  </ul>
                </div>
              </div>
              <div className="services__widget-item-2 mb-30">
                <div className="services__contact">
                  <h4 className="services__contact-title">Get a free quote</h4>
                  {/* form start */}
                  <ServiceDetailsForm />
                  {/* form end */}
                  <p className="ajax-response"></p>
                </div>
              </div>
              <div className="services__widget-item-2 mb-30">
                <div className="services__contact-info">
                  <div className="services__contact-info-item d-flex align-items-center">
                    <div className="services__contact-info-icon">
                      <span>
                        <PhoneTwo />
                      </span>
                    </div>
                    <div className="services__contact-info-content">
                      <span>Toll Free Call Center:</span>
                      <h4>
                        <a href="tel:+964-742-44-763">+964 742 44 763</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <div className="services__details-wrapper">
              <h3 className="services__details-title">
                World best web <br />
                design service provider.
              </h3>
              <p>
                We embrace holistic development and support for employees with
                the aim of being a first-choice employer within our sectors.
                Through a unique combination of engineering, construction and
                design disciplines and expertise.
              </p>

              <div className="services__details-thumb m-img">
                <Image
                  src={details_img}
                  alt="details img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="services__details-text mb-45">
                <h3 className="services__details-text-title">Mobile App</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                  Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                  Mauris malesuada nisi sit amet augue accumsan tincidunt.
                  Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros
                  facilisis libero, vitae commodo nunc quam et ligula.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="services__details-list mb-45">
                    <h3 className="services__details-list-title">Our Goal</h3>
                    <ul>
                      <li>Various analysis options.</li>
                      <li>Page Load (number of requests).</li>
                      <li>Global Data Analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services__details-text mb-45">
                    <h3 className="services__details-text-title services__details-text-title-2">
                      The Challange
                    </h3>
                    <p>
                      sarancruzer web offers a complete lineup of features from any
                      major Maecena quis interdum, orci at euis dapibus,ante
                      pharetra tellus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="services__details-faq faq__style-3 mt-60">
                <h3 className="services__details-faq-title">
                  Any questions find here.
                </h3>

                <div className="faq__tab-content tp-accordion">
                  <div className="accordion" id="general_accordion">
                    {faq_items.map((item) => (
                      <SingleFaq key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsArea;
