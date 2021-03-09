import React, { useState } from 'react';

import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography';

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
        className="back-button flex justify-center items-center"
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
        <Typography type="subheading4">
          Enter the 4 digit code sent to you at 9867069236.
          {inValid && (
            <span className="text-red-500">
              &nbsp;Did you enter the correct mobile number?
            </span>
          )}
        </Typography>
      </div>

      <div className="otp-input-div">
        <div className="four-input-div flex justify-between">
          <input
            type="text"
            name="otp-1"
            id="otp-1"
            maxLength={1}
            autoFocus={true}
          />
          <input type="text" name="otp-2" id="otp-2" maxLength={1} />
          <input type="text" name="otp-3" id="otp-3" maxLength={1} />
          <input type="text" name="otp-4" id="otp-4" maxLength={1} />
        </div>
      </div>

      <div className="otp-helper-sign-div">
        {inValid ? (
          <p className="font-manrope-extra-bold">
            <a href="#" className="font-manrope-extra-bold underline">
              I haven’t recieved a code
            </a>
          </p>
        ) : (
          <p className="font-manrope-extra-light">Resend code in 0:20</p>
        )}
      </div>

      <div className="verify-otp-btn">
        <button className="" onClick={verifyOTP}>
          verify
        </button>
      </div>
    </>
  );
}

export default OtpInputScreenComp;
