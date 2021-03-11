import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import styles from './emailInputScreen.module.css';

OtpInputScreenComp.propTypes = {};

type IOtpInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function OtpInputScreenComp({ pageState, setpageState }: IOtpInputScreenProps) {
  const emailSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = e.target.email.value;
    setpageState('password-screen');
  };
  return (
    <>
      <div
        className={styles.backbutton + ' flex justify-center items-center'}
        onClick={() => setpageState('phone-input')}>
        {'<'}
      </div>
      <form
        onSubmit={emailSubmit}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes src={'emote-smiling.png'} />

        <div className="mx-10 max-w-sm text-center">
          <Typography type="subHeading4" variant="h1">
            What’s your email address?
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <input
              className={styles.emailInput}
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              autoFocus={true}
            />
          </div>
        </div>

        <div className={commonStyles.loginCommonBtn}>
          <Button type="submit" onClick={() => null}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default OtpInputScreenComp;
