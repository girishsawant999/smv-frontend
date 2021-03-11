import React from 'react';
import styles from './commonButton.module.css';

type IButtonProps = {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children: React.ReactChild | React.ReactChildren;
};

function Button({ onClick, className = '', children, type }: IButtonProps) {
  return (
    <button
      className={className.concat(' ').concat(styles.button)}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
