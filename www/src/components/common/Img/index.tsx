import React from 'react';

index.propTypes = {};

function index({ src, alt, className, style }) {
  return <img src={src} alt={alt} className={className} style={style} />;
}

export default index;
