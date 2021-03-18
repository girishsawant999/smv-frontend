import Img from 'components/common/Img';
import React from 'react';
import styles from './backButton.module.css';

type IBackButtonProps = {
  onClick: () => void;
};

function BackButton({ onClick }: IBackButtonProps) {
  return (
    <button
      className={
        styles.backbutton +
        ' flex justify-center items-center focus:outline-none ' }
      onClick={onClick}>
      <Img alt="back" width="auto" height="auto" srcSet={['left-arrow.svg']} />
    </button>
  );
}

export default BackButton;
