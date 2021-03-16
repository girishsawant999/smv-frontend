import React from 'react';

Img.propTypes = {};

type IImgProps = {
  alt: string;
  className?: string;
  width: string;
  height: string;
  srcSet: string;
};

const baseLocation = '/assets/images/';
function Img({ alt, className, width, height, srcSet }: IImgProps) {
  let _srcSet = '';
  if (!srcSet.includes('http')) {
    srcSet &&
      srcSet
        .split(',')
        .forEach(
          (src: string) =>
            (_srcSet = _srcSet.concat(baseLocation).concat(src.trim()).concat(', '))
        );
  } else {
    _srcSet = srcSet;
  }
  return (
    <picture>
      <source srcSet={_srcSet} />
      <img className={className} width={width} height={height} alt={alt} />
    </picture>
  );
}

export default Img;
