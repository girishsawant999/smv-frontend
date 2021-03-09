import React from 'react';

import Img from 'components/common/Img';
import styles from './emotes.module.css';

Emotes.propTypes = {};

const baseDirectory = "emotes/";
function Emotes({ src }) {
  return (
    <div className={styles.imagediv + " flex items-center justify-center"}>
      <Img src={baseDirectory + src} alt="logo" width="69.06px" height="96.92px" />
    </div>
  );
}

export default Emotes;
