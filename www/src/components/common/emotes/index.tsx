import Img from 'components/common/Img';
import React from 'react';

Emotes.propTypes = {};

const baseDirectory = "emotes/";
function Emotes({ src }) {
  return (
    <div className="image-div flex items-center justify-center">
      <Img src={baseDirectory + src} alt="logo" width="69.06px" height="96.92px" />
    </div>
  );
}

export default Emotes;
