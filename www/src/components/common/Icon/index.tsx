import React from 'react';
import Image from 'next/image';

type IIconProps = {
  src: string;
  alt: string;
  className?: string;
}

const baseLocation = "/assets/images/";
function Icon({ src, alt, className }: IIconProps) {
  return <img src={baseLocation + src} alt={alt} className={className} />;
}

export default Icon;