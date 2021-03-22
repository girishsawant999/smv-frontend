import Img from 'components/common/img';
import React from 'react';
import styles from './backButton.module.css';

type IBackButtonProps = {
  onClick: () => void;
  className: string;
};

function BackButton({ onClick, className = '' }: IBackButtonProps) {
  return (
    <button
      className={
        styles.backbutton +
        ' flex justify-center items-center focus:outline-none ' +
        className
      }
      onClick={onClick}>
      <Img alt="back" width="auto" height="auto" srcSet={['left-arrow.svg']} />
    </button>
  );
}

export default BackButton;
