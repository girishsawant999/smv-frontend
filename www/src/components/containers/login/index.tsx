import React, { useState } from 'react';
import Img from 'components/common/Img';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

Login.propTypes = {};

function Login(props) {
  const [pageState, setpageState] = useState('phone-input');
  return (
    <div className="login-div">
      <div className="popup-div flex flex-col items-center">
        <div className="image-div flex items-center justify-center">
          <Img
            src={'/assets/login/emote-phone-input@2x.png'}
            alt="logo"
            width="69.06px"
            height="96.92px"
          />
        </div>
        <div className="title-div text-center">
          <h1 className="font-manrope-extra-bold">
            Awesome, Let’s get you in the system first!
          </h1>
          <p className="font-manrope-extra-light">Enter your mobile number</p>
        </div>

        <div className="phone-input-div">
          <PhoneInput country={'in'} onChange={(phone) => console.log(phone)} />
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
          <button className="">Request OTP</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
