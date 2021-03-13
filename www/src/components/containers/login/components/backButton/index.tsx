import Img from 'components/common/img';
import React from 'react';
import styles from '../../login.module.css';

type IBackButtonProps = {
  onClick: () => void;
};

function BackButton({ onClick }: IBackButtonProps) {
  return (
    <button
      className={styles.backbutton + ' flex justify-center items-center'}
      onClick={onClick}>
      <Img src="left-arrow.svg" alt="back" width="auto" height="auto" srcSet="" />
    </button>
  );
}

export default BackButton;
