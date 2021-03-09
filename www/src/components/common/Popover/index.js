import React from 'react';

import styles from './popover.module.css';

const Popover = ({type, ...props}) => {

  if(type === 'large')
    return (
      <div className={styles.popupdiv + " flex flex-col items-center relative"}>
        {props.children}
      </div>
    );

  return (
    <div>
      {props.children}
    </div>
  );
};
export default Popover;
