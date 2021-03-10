import React from 'react';
import Image from 'next/image';

Img.propTypes = {};

type IImgProps = {
  src: string;
  alt: string;
  className?: string;
  width: string;
  height: string;
}

const baseLocation = "/assets/images/";
function Img({ src, alt, className, width, height }: IImgProps) {
  return <Image src={baseLocation + src} alt={alt} width={width} height={height} className={className} />;
}

export default Img;