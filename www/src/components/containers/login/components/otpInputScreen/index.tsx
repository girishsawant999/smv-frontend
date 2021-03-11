import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import styles from './otpscreen.module.css';

OtpInputScreenComp.propTypes = {};

type IOtpInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function OtpInputScreenComp({ pageState, setpageState }: IOtpInputScreenProps) {
  const [inValid, setinValid] = useState(false);

  const verifyOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let otp = '';
    otp
      .concat(e.target.otp1.value)
      .concat(e.target.otp2.value)
      .concat(e.target.otp3.value)
      .concat(e.target.otp4.value);

    if (!inValid) {
      setinValid(true);
      return;
    }
    setpageState('email-screen');
  };
  return (
    <>
      <div
        className={styles.backbutton + ' flex justify-center items-center'}
        onClick={() => setpageState('phone-input')}>
        {'<'}
      </div>
      <form
        onSubmit={verifyOTP}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes src={inValid ? 'emote-thinking.png' : 'emote-smiling.png'} />

        <div className="mx-10 max-w-sm text-center">
          <Typography type="subHeading4" variant="h1">
            Enter the 4 digit code sent to you at 9867069236.
            {inValid ? (
              <span className="text-red-500">
                &nbsp;Did you enter the correct mobile number?
              </span>
            ) : (
              <></>
            )}
          </Typography>
        </div>

        <div className="otp-input-div mt-5">
          <div className="w-64 flex justify-between">
            <input
              className={styles.otpinput}
              type="text"
              name="otp1"
              id="otp-1"
              maxLength={1}
              autoFocus={true}
            />
            <input
              className={styles.otpinput}
              type="text"
              name="otp2"
              id="otp-2"
              maxLength={1}
            />
            <input
              className={styles.otpinput}
              type="text"
              name="otp3"
              id="otp-3"
              maxLength={1}
            />
            <input
              className={styles.otpinput}
              type="text"
              name="otp4"
              id="otp-4"
              maxLength={1}
            />
          </div>
        </div>

        <div className={commonStyles.lowerdiv}>
          {inValid ? (
            <Typography type="heading6" variant="h6" className="underline">
              I haven’t recieved a code
            </Typography>
          ) : (
            <Typography type="subHeading6" variant="h6">
              Resend code in 0:20
            </Typography>
          )}
        </div>

        <div className={commonStyles.loginCommonBtn}>
          <Button type="submit" onClick={() => null}>
            Verify
          </Button>
        </div>
      </form>
    </>
  );
}

export default OtpInputScreenComp;
