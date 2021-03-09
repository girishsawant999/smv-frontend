import React from 'react';
import styles from './typography.module.css';

function Typography({ type, text, className = '', ...props }) {
  className = className.concat(' ');
  if (type === 'heading2')
    return (
      <h1 className={className.concat(styles.heading2)} >
        {props.children}
      </h1>
    );

  if (type === 'heading6')
    return (
      <p className={className.concat(styles.heading6)}>
        {props.children}
      </p>
    );

  if (type === 'subheading4')
    return (
      <p className={className.concat(styles.subHeading4)} >
        {props.children}
      </p>
    );

  if (type === 'subheading6')
    return (
      <p className={className.concat(styles.subHeading6)} >
        {props.children}
      </p>
    );

  if (type === 'content6')
    return (
      <p
        className={className.concat(styles.content6)}>
        {props.children}
      </p>
    );

  return (
    <span className={className.concat(styles.span)}>
      {props.children}
    </span>
  );
}

export default Typography;
