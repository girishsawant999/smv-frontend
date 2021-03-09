import React from 'react';
import Image from 'next/image';

Img.propTypes = {};

const baseLocation = "/assets/images/";
function Img({ src, alt, className, style, width, height }) {
  return <Image src={baseLocation + src} alt={alt} width={width} height={height} className={className} style={style} />;

}

export default Img;
