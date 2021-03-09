import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography';
import React from 'react';

PhoneInputScreenComponent.propTypes = {};

function PhoneInputScreenComponent({ pageState, setpageState }) {
  const requestOTP = () => {
    setpageState('otp-screen');
  };
  return (
    <>
      <div className="popup-div flex flex-col items-center">
        <Emotes src={'emote-smiling.png'} />

        <div className="mx-5 max-w-sm text-center">
          <Typography
            type="heading"
            text="Awesome, Let’s get you in the <br />
            system first!"
          />
          <Typography
            type="subheading"
            text="Enter your mobile number"
            className="mt-2.5 mb-5"
          />
        </div>

        <div className="max-w-sm mx-5">
          <PhoneInput />
        </div>

        <div className="social-sign-div">
          <a href="#">
            <Typography type="boldbody" text="or signup using a social account" />
          </a>
        </div>

        <div className="disclaimer">
          <Typography
            type="lightbody"
            text="By continuing you may receive an SMS for verification. Message and data
            rates may apply."
          />
        </div>

        <div className="request-otp-btn">
          <Button
            label="Request OTP"
            onClick={requestOTP}
            className={'text-red-900'}
          />
        </div>
      </div>
    </>
  );
}

export default PhoneInputScreenComponent;
