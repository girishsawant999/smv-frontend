import React, { useState } from 'react';

import Emotes from 'components/common/emotes';
import Button from 'components/common/Button';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography';
import styles from './otpscreen.module.css';
import commonStyles from '../../login.module.css';

OtpInputScreenComp.propTypes = {};

function OtpInputScreenComp({ pageState, setpageState }) {
  const [inValid, setinValid] = useState(false);

  const verifyOTP = () => {
    if (!inValid) {
      setinValid(true);
      return;
    }
    setpageState('phone-input');
  };
  return (
    <>
      <div
        className={styles.backbutton + " flex justify-center items-center"}
        onClick={() => setpageState('phone-input')}>
        {'<'}
      </div>

      <Emotes
        src={
          inValid
            ? 'emote-thinking.png'
            : 'emote-smiling.png'
        }
      />

      <div className="mx-10 mx-w-sm text-center">
        <Typography type="subHeading4" variant="h1">
          Enter the 4 digit code sent to you at 9867069236.
          {inValid && (
            <span className="text-red-500">
              &nbsp;Did you enter the correct mobile number?
            </span>
          )}
        </Typography>
      </div>

      <div className="otp-input-div">
        <div className="w-64 flex justify-between">
          <input
            className={styles.otpinput}
            type="text"
            name="otp-1"
            id="otp-1"
            maxLength={1}
            autoFocus={true}
          />
          <input className={styles.otpinput} type="text" name="otp-2" id="otp-2" maxLength={1} />
          <input className={styles.otpinput} type="text" name="otp-3" id="otp-3" maxLength={1} />
          <input className={styles.otpinput} type="text" name="otp-4" id="otp-4" maxLength={1} />
        </div>
      </div>

      <div className={commonStyles.lowerdiv}>
        {inValid ? (
          <Typography type="heading6" variant="h6">
              I haven’t recieved a code
          </Typography>
        ) : (
          <Typography type="subHeading6" variant="h6">
            Resend code in 0:20
          </Typography>
        )}
      </div>

      <div className={commonStyles.loginCommonBtn}>
        <Button
          label="Verify"
          onClick={verifyOTP}>
        </Button>
      </div>
    </>
  );
}

export default OtpInputScreenComp;
