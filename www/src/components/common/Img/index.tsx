import Image from 'next/image';
import React from 'react';

Img.propTypes = {};

type IImgProps = {
  src: string;
  alt: string;
  className?: string;
  width: string;
  height: string;
  srcSet: string;
};

const baseLocation = '/assets/images/';
function Img({ src, alt, className, width, height, srcSet }: IImgProps) {
  let _srcSet = '';
  srcSet &&
    srcSet
      .split(',')
      .forEach((src: string) =>
        _srcSet.concat(baseLocation).concat(src).concat(',')
      );
  return (
    <Image
      src={baseLocation + src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      srcSet={_srcSet}
    />
  );
}

export default Img;
