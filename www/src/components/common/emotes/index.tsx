import React from 'react';

import Img from 'components/common/img';
import styles from './emotes.module.css';

Emotes.propTypes = {};

type IEmotesProps = {
  src: string;
  srcSet: string;
};

const baseDirectory = 'emotes/';
function Emotes({ src, srcSet }: IEmotesProps) {
  let _srcSet = '';
  srcSet &&
    srcSet
      .split(',')
      .forEach((src: string) =>
        _srcSet.concat(baseDirectory).concat(src).concat(',')
      );

  return (
    <div className={styles.imagediv + ' flex items-center justify-center'}>
      <Img
        src={baseDirectory + src}
        srcSet={_srcSet}
        alt="logo"
        width="69.06px"
        height="96.92px"
      />
    </div>
  );
}

export default Emotes;
