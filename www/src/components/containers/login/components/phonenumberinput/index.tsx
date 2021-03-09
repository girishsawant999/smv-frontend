import React from 'react';

import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography';
import Popover from 'components/common/Popover';

PhoneInputScreenComponent.propTypes = {};

function PhoneInputScreenComponent({ pageState, setpageState }) {
  const requestOTP = () => {
    setpageState('otp-screen');
  };
  return (
    <>
      <Emotes src={'emote-smiling.png'} />

      <div className="mx-10 max-w-sm text-center">
        <Typography type="heading2" >
          Awesome, Let's get you in the system first!"
        </Typography>
        <Typography type="subheading4" className="mt-2.5 mb-5" >
          Enter your mobile number
        </Typography>
      </div>

      <div className="max-w-sm mx-5">
        <PhoneInput />
      </div>

      <div className="social-sign-div">
        <a href="#" className="underline">
          <Typography type="heading6">
            or signup using a social account
          </Typography>
        </a>
      </div>

      <div className="disclaimer">
        <Typography type="content6" >
          By continuing you may receive an SMS for verification. Message and data rates may apply.
        </Typography>
      </div>

      <div className="request-otp-btn">
        <Button
          label="Request OTP"
          onClick={requestOTP}
          className={'text-red-900'}
        />
      </div>
    </>
  );
}

export default PhoneInputScreenComponent;
