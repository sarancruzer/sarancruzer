import Image from "next/image";
import React from "react";
import Link from "next/link";
// shapes
import shape_1 from '@assets/img/ticket/ticket-shape-1.png';
import shape_2 from '@assets/img/ticket/ticket-shape-2.png';
import shape_3 from '@assets/img/ticket/ticket-shape-3.png';
// icon
import ticket_icon from '@assets/img/ticket/ticket-icon.png';

const AgencyTicket = () => {
  return (
    <div
      className="ticket__wrapper mt-50 d-md-flex align-items-center justify-content-between"
      data-bg-color="blue-bg-2"
    >
      <div className="ticket__inner d-sm-flex align-items-center">
        <div className="ticket__shape">
          <Image
            className="ticket__shape-1 wow fadeInDown"
            data-wow-delay=".3s"
            data-wow-duration="1s"
            src={shape_1}
            alt="shape"
          />
          <Image
            className="ticket__shape-2 wow fadeInDown"
            data-wow-delay=".5s"
            data-wow-duration="1s"
            src={shape_2}
            alt="shape"
          />
          <Image
            className="ticket__shape-3 wow fadeInUp"
            data-wow-delay=".7s"
            data-wow-duration="1s"
            src={shape_3}
            alt="shape"
          />
        </div>
        <div className="ticket__icon mr-15">
          <Image src={ticket_icon} alt="" />
        </div>
        <div className="ticket__content">
          <h4 className="ticket__title">Contact us to</h4>
          <p>Get a professional service.</p>
        </div>
      </div>
      <div className="ticket__btn">
        <Link href="/contact" className="tp-btn-white-sm">
          Submit a Ticket
        </Link>
      </div>
    </div>
  );
};

export default AgencyTicket;
