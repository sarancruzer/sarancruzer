import Link from 'next/link';
import React from 'react';

const FooterBottom = ({inner,copyright,link}) => {
  return (
    <div className={`footer__bottom-${inner}`}>
      <div className="row">
        <div className="col-sm-6">
          <div className={`footer__${copyright}`}>
            <p>
              <Link href="/">© {new Date().getFullYear()} sarancruzer</Link> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className={`footer__${link} text-sm-end`}>
            <Link href="/policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;