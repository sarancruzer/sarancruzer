import React from "react";
import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-1.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";

// single location item
function SingleLocationItem({ title, icon, location, tel }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="contact__location-box text-center white-bg mb-30">
        <div className="contact__location-box-icon">
          <Image src={icon} alt="icon image" />
        </div>
        <div className="contact__location-box-content">
          <h3 className="contact__location-box-title">{title}</h3>

          <div className="contact__location-box-info">
            <p>
              <a href="mailto:location@website.com">{location}</a>
            </p>
            <p>
              <a href="tel:686-324-6838">{tel}</a>
            </p>
          </div>

          <div className="contact__location-box-btn">
            <a
              rel="noreferrer"
              href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
              target="_blank"
              className="tp-btn-border"
            >
              View Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const ClassicLocationArea = ({ element_style = false }) => {
  return (
    <section
      className={`contact__loacation-box-area ${
        element_style ? "pt-110" : "pt-120"
      } pb-90`}
    >
      <div className="container">
        {element_style && (
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-section-wrapper-3 mb-60 text-center">
                <span className="tp-section-subtitle-3">
                  Minimal &amp; Clean Design
                </span>
                <h3 className="tp-section-title-3">Contact Icon Box 2</h3>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <SingleLocationItem
            title="Australia Office"
            icon={location_icon_1}
            location="contact.location@website.com"
            tel="686-324-6838"
          />
          <SingleLocationItem
            title="San Francisco Office"
            icon={location_icon_2}
            location="contact.location@website.com"
            tel="686-324-6810"
          />
          <SingleLocationItem
            title="Egpyt Office"
            icon={location_icon_3}
            location="contact.location@website.com"
            tel="786-324-6810"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicLocationArea;
