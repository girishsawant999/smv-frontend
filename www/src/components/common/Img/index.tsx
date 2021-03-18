import React from 'react';
import LazyLoad from 'react-lazyload';

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
  srcSet &&
    srcSet
      .split(',')
      .forEach(
        (src: string) =>
          (_srcSet = _srcSet.concat(baseLocation).concat(src.trim()).concat(', '))
      );
  return (
    <LazyLoad offset={100} once>
      <picture>
        <source srcSet={_srcSet} />
        <img className={className} width={width} height={height} alt={alt} />
      </picture>
    </LazyLoad>
  );
}

export default Img;
