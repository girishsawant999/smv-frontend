import React from 'react';

import Img from 'components/common/img';
import styles from './emotes.module.css';

Emotes.propTypes = {};

type IEmotesProps = {
  srcSet: Array<string>;
};

const baseDirectory = 'emotes/';
function Emotes({ srcSet }: IEmotesProps) {
  let _srcSet = srcSet;
  _srcSet = _srcSet.map((src) => baseDirectory.concat(src.trim()));

  return (
    <div className={styles.imagediv + ' flex items-center justify-center'}>
      <Img srcSet={_srcSet} alt="logo" width="69.06px" height="96.92px" />
    </div>
  );
}

export default Emotes;
