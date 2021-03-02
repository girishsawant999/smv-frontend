import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import React from 'react';

PhoneInputScreenComponent.propTypes = {};

function PhoneInputScreenComponent({ pageState, setpageState }) {
    const requestOTP = () => {
        setpageState('otp-screen')
        
    }
  return (
    <>
      <div className="popup-div flex flex-col items-center">
        <Emotes src={'/assets/login/emote-phone-input@2x.png'} />

        <div className="title-div text-center">
          <h1 className="font-manrope-extra-bold">
            Awesome, Let’s get you in the system first!
          </h1>
          <p className="font-manrope-extra-light">Enter your mobile number</p>
        </div>

        <div className="phone-input-div">
          <PhoneInput />
        </div>

        <div className="social-sign-div">
          <a href="#">or signup using a social account</a>
        </div>

        <div className="disclaimer">
          <p className="">
            By continuing you may receive an SMS for verification. Message and data
            rates may apply.
          </p>
        </div>

        <div className="request-otp-btn">
          <button className="" onClick={requestOTP}>Request OTP</button>
        </div>
      </div>
    </>
  );
}

export default PhoneInputScreenComponent;
