import React from 'react';

import Img from 'components/common/Img';
import styles from './emotes.module.css';

Emotes.propTypes = {};

type IEmotesProps = {
  srcSet: string;
};

const baseDirectory = 'emotes/';
function Emotes({ srcSet }: IEmotesProps) {
  let _srcSet = '';
  srcSet &&
    srcSet
      .split(',')
      .forEach(
        (src: string) =>
          (_srcSet = _srcSet.concat(baseDirectory).concat(src.trim()).concat(', '))
      );

  return (
    <div className={styles.imagediv + ' flex items-center justify-center'}>
      <Img srcSet={_srcSet} alt="logo" width="69.06px" height="96.92px" />
    </div>
  );
}

export default Emotes;
