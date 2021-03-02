import React from 'react';
import Image from 'next/image';

Img.propTypes = {};

function Img({ src, alt, className, style, width, height }) {
  return <Image src={src} alt={alt} width={width} height={height} className={className} style={style} />;
}

export default Img;
