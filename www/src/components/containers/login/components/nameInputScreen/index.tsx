import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import styles from './passwordInputScreen.module.css';

PasswordInputScreen.propTypes = {};

type IOtpInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function PasswordInputScreen({ pageState, setpageState }: IOtpInputScreenProps) {
  const passwordSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let password = e.target.password.value;
    setpageState('phone-input');
  };
  return (
    <>
      <div
        className={styles.backbutton + ' flex justify-center items-center'}
        onClick={() => setpageState('phone-input')}>
        {'<'}
      </div>
      <form
        onSubmit={passwordSubmit}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes src={'emote-shh/emote-shh.png'} />

        <div className="mx-10 max-w-sm text-center">
          <Typography type="subHeading4" variant="h1">
            Choose your account password
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <input
              className={styles.passwordInput}
              type="password"
              name="password"
              id="password"
              placeholder="Make it secure & unique"
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

export default PasswordInputScreen;
