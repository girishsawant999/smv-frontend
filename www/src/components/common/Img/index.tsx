import React from 'react';
import LazyLoad from 'react-lazyload';

Img.propTypes = {};

type IImgProps = {
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  srcSet: string;
  type?: string;
};

const baseLocation = '/assets/images/';
function Img({
  alt,
  className = '',
  width = 'auto',
  height = 'auto',
  srcSet,
  type = 'image/png'
}: IImgProps) {
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
        <source type={type} srcSet={_srcSet} />
        <img
          className={className}
          width={width}
          height={height}
          alt={alt}
          srcSet={_srcSet}
        />
      </picture>
    </LazyLoad>
  );
}

export default Img;
