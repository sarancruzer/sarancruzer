import React, { useState } from 'react';

const Languages = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <React.Fragment>
      <span onClick={()=> setToggle(!toggle)} 
      className="header__lang-selected-lang tp-lang-toggle" id="tp-header-lang-toggle">English</span>
      <ul className={`header__lang-list tp-lang-list ${toggle?'tp-lang-list-open':''}`}>
        <li>Spanish</li>
        <li>English</li>
        <li>Canada</li>
      </ul>
    </React.Fragment>
  );
};

export default Languages;