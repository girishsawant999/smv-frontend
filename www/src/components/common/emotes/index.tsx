import Img from 'components/common/img';
import React from 'react';

Emotes.propTypes = {};

function Emotes({ src }) {
  return (
    <div className="image-div flex items-center justify-center">
      <Img src={src} alt="logo" width="69.06px" height="96.92px" />
    </div>
  );
}

export default Emotes;
