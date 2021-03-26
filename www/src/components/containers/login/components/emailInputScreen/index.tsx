import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './emailInputScreen.module.css';
import { IEmailInputScreenProps } from '../../types';

OtpInputScreenComp.propTypes = {};

function OtpInputScreenComp({ pageState, setpageState }: IEmailInputScreenProps) {
  const [email, setemail] = useState<string>('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setemail(value);
  };

  const emailSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setpageState('password-screen');
  };
  return (
    <>
      <BackButton onClick={() => setpageState('phone-input')} className="absolute" />

      <form
        onSubmit={emailSubmit}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes
          srcSet={[
            'emote-smiling/emote-smiling.png',
            'emote-smiling/emote-smiling@2x.png 2x',
            'emote-smiling/emote-smiling@3x.png 3x'
          ]}
        />

        <div className="mx-10 max-w-sm text-center">
          <Typography weight="semi-bold" variant="h1" size="16">
            What’s your email address?
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <label htmlFor="email" className="hidden">
              Enter email address
            </label>
            <input
              className={styles.emailInput}
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              autoFocus={true}
              onChange={onEmailChange}
              value={email}
            />
          </div>
        </div>

        <div className={commonStyles.lowerdiv}>
          <div className={commonStyles.loginCommonBtn}>
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OtpInputScreenComp;
