import React from 'react';

const HorizontalDivider = ({ width = '144', color = 'white', margin = 'my-4' }) => {
  return <hr className={`border-t-2 border-${color} ${margin} w-${width}`} />;
};

export default HorizontalDivider;
