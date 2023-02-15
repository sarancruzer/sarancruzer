import React from 'react';
import { Mail, Tel, Time } from '../../../svg';

const HeaderInfo = () => {
  return (
    <div className="header__info">
      <ul>
        <li>
          <a href="mailto:info@educal.com">
            <span>
              <Mail />{' '}
            </span>
            info@example.com
          </a>
        </li>
        <li>
          <a href="tel:964-742-44-763">
            <span>
              <Tel />{' '}
            </span>
            +964 742 44 763
          </a>
        </li>
        <li>
          <span>
            <span>
              <Time />{' '}
            </span>
            Sunday-Thures 10am-07pm
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderInfo;