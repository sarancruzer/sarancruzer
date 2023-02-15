import React, { useState } from 'react';
import SEO from '@components/seo';
import { HeaderTen, Wrapper } from '@layout/index';
import VerticalSlider from '@components/verticle-slider';


const HomeVertical = () => {
  const [active,setActive] = useState(false);
  return (
    <Wrapper>
      <SEO pageTitle={'Home Vertical'} />
      <HeaderTen active={active} />
      <VerticalSlider setActive={setActive} active={active}/>
    </Wrapper>
  );
};

export default HomeVertical;