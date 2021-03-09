import React from 'react';
import styles from './commonButton.module.css';

function Button({ label, onClick, className = '' }) {
  return (
    <button
      className={className.concat(' ').concat(styles.button)}
      onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
