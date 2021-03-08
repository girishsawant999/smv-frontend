import React from 'react';
import styles from './typography.module.css';

function Typography({ type, text, className = '' }) {
  className = className.concat(' ');
  if (type === 'heading')
    return (
      <h1
        className={className.concat(styles.heading)}
        dangerouslySetInnerHTML={{ __html: text }}></h1>
    );

  if (type === 'subheading')
    return (
      <p
        className={className.concat(styles.subHeading)}
        dangerouslySetInnerHTML={{ __html: text }}></p>
    );
  if (type === 'boldbody')
    return (
      <p
        className={className.concat(styles.boldbody)}
        dangerouslySetInnerHTML={{ __html: text }}></p>
    );
  if (type === 'lightbody')
    return (
      <p
        className={className.concat(styles.lightbody)}
        dangerouslySetInnerHTML={{ __html: text }}></p>
    );

  return <span className={className.concat(styles.span)}>{text}</span>;
}

export default Typography;
