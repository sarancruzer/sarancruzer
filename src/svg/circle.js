import React from 'react';

const Circle = ({stroke='1'}) => {
  return (
    <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="58" cy="58" r="56.5" strokeWidth={stroke}></circle>
      <circle cx="58" cy="58" r="56.5" strokeWidth="3" strokeLinecap="round"
        style={{ strokeDashoffset: '-356px', strokeDasharray: '0px, 366px' }}>
      </circle>
    </svg>
  );
};

export default Circle;