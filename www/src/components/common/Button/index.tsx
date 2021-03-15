import React from 'react';
import styles from './commonButton.module.css';

type IButtonProps = {
  onClick: ()=>void;
  className?: string;
  children: React.ReactChild | React.ReactChildren;
}
function Button({onClick, className = '', children }: IButtonProps) {
  return (
    <button
      className={className.concat(' ').concat(styles.button)}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
