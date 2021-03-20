import React from 'react';
import Typography from 'components/common/Typography/index';
import styles from './commonButton.module.css';

type IButtonProps = {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactChild | React.ReactChildren;
};

function Button({
  onClick,
  className = '',
  children,
  type = 'button'
}: IButtonProps) {
  return (
      <Typography weight="extra-bold" variant="span" size="12" className="text-white">
        <button
          className={className.concat(' ').concat(styles.button)}
          type={type}
          onClick={onClick}>
          {children}
        </button>
      </Typography>
  );
}

export default Button;
