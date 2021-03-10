import React from 'react';
import styles from './typography.module.css';

const Typography = ({ type, className = '', variant, children }) => {

  const Component = variant;
  className = className.concat(' ');

  return (
      <Component className={className.concat(styles[type])} >
        {children}
      </Component>
  );
}

export default Typography;
