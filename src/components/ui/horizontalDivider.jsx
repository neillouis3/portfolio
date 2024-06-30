import React from 'react';

const HorizontalDivider = ({ width = '100%', color = 'gray', margin = 'my-4' }) => {
  return <hr className={`border-t-2 border-${color} ${margin} w-${width}`} />;
};

export default HorizontalDivider;
