import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import { Android, Ios } from "@svg/index";
import qrcode from "@assets/img/icon/qrcode.png";
import ImageLightBox from "@components/common/modals/image-lightbox";

// images
const images = [qrcode.src];

const FooterWidget = ({ item }) => {
  const { col, title, lists, app_content, widget_num } = item || {};
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);
  // image open state
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`footer__widget ${widget_num} mb-50 footer-col-${col}`}>
        <h3 className="footer__widget-title">{title}</h3>
        {!app_content && (
          <div className="footer__widget-content">
            <ul>
              {lists.map((l, i) => (
                <li key={i}>
                  <Link href={l.link}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {app_content && (
          <div className="footer__widget-content">
            <div className="footer__app mb-30">
              <div className="footer__app-item">
                <a href="#" className="tp-btn-app">
                  <Android />
                  Android
                </a>
              </div>
              <div className="footer__app-item">
                <a href="#" className="tp-btn-app">
                  <Ios />
                  Mac iOS
                </a>
              </div>
            </div>
            <div
              className="footer__qrcode d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
            >
              <div className="footer__qrcode-thumb mr-10">
                <a className="popup-image">
                  <Image src={qrcode} alt="qrcode" />
                </a>
              </div>
              <div className="footer__qrcode-content">
                <p>
                  <a className="popup-image">Scan to Download The Themes</a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default FooterWidget;
