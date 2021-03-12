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
      {'<'}
    </button>
  );
}

export default BackButton;
